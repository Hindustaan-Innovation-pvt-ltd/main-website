"use client";

import React from "react";
import { Button } from "../ui/button";
import { X, Phone, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- IndexedDB Wrapper Logic ---
const DB_NAME = 'PopupLeadsDB';
const STORE_NAME = 'leads';
const META_STORE = 'metadata';

const initDB = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);
        request.onupgradeneeded = (e) => {
            const db = (e.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
            }
            if (!db.objectStoreNames.contains(META_STORE)) {
                db.createObjectStore(META_STORE, { keyPath: 'key' });
            }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
};

const addLeadToDB = async (mobile: string) => {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        tx.objectStore(STORE_NAME).add({ mobile, timestamp: Date.now() });
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => reject(tx.error);
    });
};

const getAllLeadsFromDB = async (): Promise<string[]> => {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const request = tx.objectStore(STORE_NAME).getAll();
        request.onsuccess = () => resolve(request.result.map(r => r.mobile));
        request.onerror = () => reject(request.error);
    });
};

const clearLeadsFromDB = async () => {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        tx.objectStore(STORE_NAME).clear();
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => reject(tx.error);
    });
};

const getLastSentTime = async (): Promise<number> => {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(META_STORE, 'readonly');
        const request = tx.objectStore(META_STORE).get('lastSentTime');
        request.onsuccess = () => {
            if (request.result) resolve(request.result.value);
            else resolve(0);
        };
        request.onerror = () => reject(request.error);
    });
};

const setLastSentTime = async (time: number) => {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(META_STORE, 'readwrite');
        tx.objectStore(META_STORE).put({ key: 'lastSentTime', value: time });
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => reject(tx.error);
    });
};

const checkAndSendEmails = async () => {
    try {
        const leads = await getAllLeadsFromDB();
        if (leads.length === 0) return;

        let lastSent = await getLastSentTime();
        if (lastSent === 0) {
            lastSent = Date.now();
            await setLastSentTime(lastSent);
        }

        const now = Date.now();
        const twentyFourHours = 24 * 60 * 60 * 1000;
        
        if (leads.length >= 100 || (now - lastSent) >= twentyFourHours) {
            const res = await fetch("/api/popup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ leads })
            });
            if (res.ok) {
                await clearLeadsFromDB();
                await setLastSentTime(Date.now());
                console.log("Leads batch sent and DB cleared.");
            }
        }
    } catch (err) {
        console.error("Error checking and sending emails:", err);
    }
};

export default function Popups() {
    const [showPopup, setShowPopup] = React.useState(false);
    const [mobile, setMobile] = React.useState("");
    const [error, setError] = React.useState("");

    React.useEffect(() => {
        const timer = window.setTimeout(() => {
            setShowPopup(true);
        }, 10000);

        // Check initially and set an interval to check every hour while page is open
        checkAndSendEmails();
        const checkerInterval = window.setInterval(() => {
            checkAndSendEmails();
        }, 60 * 60 * 1000);

        return () => {
            window.clearTimeout(timer);
            window.clearInterval(checkerInterval);
        };
    }, []);

    React.useEffect(() => {
        const originalOverflow = document.body.style.overflow;

        if (showPopup) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [showPopup]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const cleaned = mobile.replace(/\D/g, "");
        if (cleaned.length < 10) {
            setError("Please enter a valid 10-digit number.");
            return;
        }

        setError("");
        
        try {
            await addLeadToDB(cleaned);
            await checkAndSendEmails();
        } catch (err) {
            console.error("Failed to save lead", err);
        }

        setShowPopup(false);
    };

    return (
        <AnimatePresence>
            {showPopup && (
                <div className="fixed inset-0 w-full h-full grid place-content-center z-[9999999]">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowPopup(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Popup Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-[calc(100vw-2rem)] max-w-lg"
                    >
                        {/* Premium Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-200 rounded-[2rem] sm:rounded-[2.5rem] blur-lg opacity-50" />
                        
                        <div className="relative bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-zinc-200 shadow-2xl overflow-hidden">
                            
                            {/* Decorative background gradients */}
                            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-zinc-50 to-transparent pointer-events-none" />
                            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1ba453]/5 blur-[100px] rounded-full pointer-events-none" />
                            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1ba453]/5 blur-[100px] rounded-full pointer-events-none" />

                            <Button
                                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-zinc-400 hover:text-black hover:bg-zinc-100 rounded-full w-8 h-8 sm:w-10 sm:h-10 p-0 transition-all z-20"
                                variant="ghost"
                                onClick={() => setShowPopup(false)}
                                aria-label="Close popup"
                            >
                                <X className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                            </Button>

                            <div className="p-6 sm:p-10 md:p-12">
                                <form className="relative z-10" onSubmit={handleSubmit}>
                                    <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                                        <motion.div 
                                            initial={{ y: 10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.1 }}
                                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-800 uppercase tracking-widest shadow-sm"
                                        >
                                            <Sparkles className="w-3.5 h-3.5 text-[#1ba453]" />
                                            Limited Consultation
                                        </motion.div>
                                        
                                        <div className="space-y-2 sm:space-y-3">
                                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black leading-[1.15] md:leading-[1.1]">
                                                Build your project <br />
                                                with our engineers.
                                            </h2>
                                            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed max-w-[320px] mx-auto">
                                                Share your contact number and our team will reach out shortly.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-2 relative">
                                            <div className="relative group">
                                                <div className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#1ba453] transition-colors duration-300">
                                                    <Phone className="w-5 h-5 sm:w-[20px] sm:h-[20px]" />
                                                </div>
                                                <input
                                                    id="mobile"
                                                    name="mobile"
                                                    type="tel"
                                                    inputMode="numeric"
                                                    autoComplete="tel"
                                                    placeholder="Your mobile number"
                                                    value={mobile}
                                                    onChange={(e) => setMobile(e.target.value)}
                                                    className="w-full h-12 sm:h-14 md:h-16 pl-12 sm:pl-14 pr-6 rounded-2xl border border-zinc-200 bg-zinc-50 text-black placeholder:text-zinc-400 outline-none transition-all duration-300 focus:border-[#1ba453]/30 focus:bg-white focus:ring-4 focus:ring-[#1ba453]/10 text-base sm:text-lg shadow-sm"
                                                    required
                                                />
                                            </div>
                                            {error && (
                                                <motion.p 
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-sm text-red-500 pl-2 flex items-center gap-1.5 font-medium absolute -bottom-7"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                                    {error}
                                                </motion.p>
                                            )}
                                        </div>

                                        <div className="pt-4 space-y-5">
                                            <Button 
                                                type="submit" 
                                                className="w-full h-14 md:h-16 rounded-2xl bg-[#1ba453] text-white hover:bg-[#158743] active:scale-[0.98] transition-all duration-300 font-medium text-lg shadow-lg shadow-green-500/20 group flex items-center justify-center gap-3"
                                            >
                                                Get a Free Call
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                                            </Button>
                                            
                                            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-zinc-500 font-medium text-center leading-snug">
                                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                                Secure & Confidential. Join 500+ successful enterprises.
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
