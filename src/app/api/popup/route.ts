import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { leads } = body;

        if (!leads || !Array.isArray(leads) || leads.length === 0) {
            return NextResponse.json({ error: "Leads array is required" }, { status: 400 });
        }

        const uniqueLeads = Array.from(new Set(leads));

        const emailHost = process.env.EMAIL_HOST;
        const emailUser = process.env.EMAIL_USER;
        const emailPass = process.env.EMAIL_PASS;
        const emailSender = process.env.EMAIL_FROM || emailUser;
        const emailReceiver = process.env.EMAIL_TO || "connect@hindustaan.in";

        // Graceful handling when SMTP credentials are not configured in local environment
        if (!emailHost || !emailUser || !emailPass) {
            console.warn(
                "[Popup API] EMAIL_HOST/USER/PASS not set in environment. Mocking success in development. Leads:",
                uniqueLeads
            );
            return NextResponse.json(
                { success: true, message: "Leads received successfully (development mode)" },
                { status: 200 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: emailHost,
            port: Number(process.env.EMAIL_PORT) || 465,
            secure: Number(process.env.EMAIL_PORT) === 465,
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });

        await transporter.sendMail({
            from: `"Hindustan Innovations" <${emailSender}>`,
            to: emailReceiver,
            subject: `Lead Mobile numbers from Popup (${uniqueLeads.length} leads)`,
            text: `Here are the collected lead mobile numbers:\n\n${uniqueLeads.join('\n')}`
        });

        return NextResponse.json({ success: true, message: "Emails sent successfully" }, { status: 200 });

    } catch (error) {
        console.error("Popup API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}