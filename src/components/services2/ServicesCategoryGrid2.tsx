"use client";

import { useRef } from "react";
import {
  Globe, Smartphone, Palette, ShoppingCart, Code2, Megaphone, Wrench,
  Bot, Brain, TrendingUp, Eye, Cpu, Cloud, Server, GitBranch, Shield,
  Database, Monitor, Plug, Lock, Package, BarChart2, Zap, Settings,
  FlaskConical, HardDrive, Mail, MapPin, Check, ArrowUpRight,
  Sparkles, Layers,
} from "lucide-react";
import Link from "next/link";
import { AnimatedList } from "@/components/ui/animated-list";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { motion, type Variants } from "motion/react";
import servicesData from "@/services.json";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const IconMap: Record<string, React.FC<any>> = {
  Globe, Smartphone, Palette, ShoppingCart, Code2, Megaphone, Wrench,
  Bot, Brain, TrendingUp, Eye, Cpu, Cloud, Server, GitBranch, Shield,
  Database, Monitor, Plug, Lock, Package, BarChart2, Zap, Settings,
  FlaskConical, HardDrive, Mail, MapPin, Sparkles, Layers
};

// ─── Mini graphic components ──────────────────────────────────────────────────

// Beam-powered cluster: center icon hub linked to peripheral icons via AnimatedBeam
function IconClusterGraphic({ icons, accent }: { icons: React.ReactNode[]; accent: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const topLeftRef = useRef<HTMLDivElement>(null);
  const bottomRightRef = useRef<HTMLDivElement>(null);
  const topRightRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="w-full h-40 flex items-center justify-center mb-6 relative">
      {/* Center hub icon */}
      <div
        ref={centerRef}
        className={`relative z-10 w-16 h-16 bg-white  rounded-2xl border border-black/10  shadow-[0_0_30px_rgba(0,0,0,0.05)]  flex items-center justify-center ${accent}`}
      >
        {icons[0]}
      </div>

      {/* Peripheral icons */}
      {icons[1] && (
        <div
          ref={topLeftRef}
          className="absolute top-[15%] left-[18%] w-10 h-10 bg-zinc-50 rounded-xl border border-black/10  flex items-center justify-center shadow-lg text-zinc-600  z-10"
        >
          {icons[1]}
        </div>
      )}
      {icons[2] && (
        <div
          ref={bottomRightRef}
          className="absolute bottom-[15%] right-[18%] w-10 h-10 bg-zinc-50 rounded-xl border border-black/10  flex items-center justify-center shadow-lg text-zinc-600  z-10"
        >
          {icons[2]}
        </div>
      )}
      {icons[3] && (
        <div
          ref={topRightRef}
          className="absolute top-[12%] right-[22%] w-8 h-8 bg-zinc-50 rounded-xl border border-black/10  flex items-center justify-center shadow-lg text-zinc-700  z-10"
        >
          {icons[3]}
        </div>
      )}

      {/* AnimatedBeam: peripheral icons → center hub (continuous, visible lines) */}
      {icons[1] && (
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={topLeftRef}
          toRef={centerRef}
          curvature={20}
          duration={2.5}
          delay={0}
          repeatDelay={0}
          pathWidth={2}
          pathColor="#71717a"
          pathOpacity={0.4}
          gradientStartColor="#60a5fa"
          gradientStopColor="#a78bfa"
        />
      )}
      {icons[2] && (
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={bottomRightRef}
          toRef={centerRef}
          curvature={-20}
          duration={2.5}
          delay={0.8}
          repeatDelay={0}
          pathWidth={2}
          pathColor="#71717a"
          pathOpacity={0.4}
          gradientStartColor="#a78bfa"
          gradientStopColor="#60a5fa"
        />
      )}
      {icons[3] && (
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={topRightRef}
          toRef={centerRef}
          curvature={30}
          duration={2.5}
          delay={0.4}
          repeatDelay={0}
          pathWidth={2}
          pathColor="#71717a"
          pathOpacity={0.4}
          gradientStartColor="#34d399"
          gradientStopColor="#60a5fa"
        />
      )}
    </div>
  );
}

function TagListGraphic({ tags }: { tags: string[] }) {
  // Icon pool — cycles through for variety
  const tagIcons = [Check, Zap, Shield, TrendingUp, Globe, Sparkles, Bot, Code2, Cloud, Cpu];
  // Triple the tags so AnimatedList loops continuously
  const loopedTags = [...tags, ...tags, ...tags];
  return (
    <div className="w-full h-40 flex flex-col mb-6 relative overflow-hidden mask-[linear-gradient(to_bottom,transparent_0%,white_20%,white_75%,transparent_100%)]">
      <AnimatedList delay={1000} className="w-full gap-2">
        {loopedTags.map((t, i) => {
          const Icon = tagIcons[i % tagIcons.length];
          return (
            <div
              key={`${t}-${i}`}
              className="flex items-center justify-between w-full bg-zinc-50/80 border border-black/10  rounded-xl px-3 py-4 shadow"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-zinc-200  flex items-center justify-center shrink-0">
                  <Icon className="w-3 h-3 text-zinc-600 " />
                </div>
                <span className="text-[11px] text-zinc-700  font-medium">{t}</span>
              </div>
              <ArrowUpRight className="w-3 h-3 text-zinc-500  shrink-0" />
            </div>
          );
        })}
      </AnimatedList>
    </div>
  );
}

// Beam-powered nodes: center Sparkles hub linked to 3 satellite nodes via AnimatedBeam
function NodesGraphic({ accent }: { accent: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const topLeftRef = useRef<HTMLDivElement>(null);
  const topRightRef = useRef<HTMLDivElement>(null);
  const bottomLeftRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="w-full h-40 flex items-center justify-center mb-6 relative">
      {/* Center hub */}
      <div
        ref={centerRef}
        className={`relative z-10 w-14 h-14 bg-zinc-100 dark:bg-white rounded-full border border-black/10  flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.05)]  ${accent}`}
      >
        <Sparkles className="w-6 h-6" />
      </div>

      {/* Satellite nodes */}
      <div
        ref={topLeftRef}
        className="absolute top-[18%] left-[22%] w-9 h-9 bg-zinc-100 rounded-full border border-black/10  flex items-center justify-center text-zinc-700  z-10"
      >
        <Cpu className="w-4 h-4" />
      </div>
      <div
        ref={topRightRef}
        className="absolute top-[15%] right-[22%] w-9 h-9 bg-zinc-100 rounded-full border border-black/10  flex items-center justify-center text-zinc-700  z-10"
      >
        <Globe className="w-4 h-4" />
      </div>
      <div
        ref={bottomLeftRef}
        className="absolute bottom-[18%] left-[20%] w-9 h-9 bg-zinc-100 rounded-full border border-black/10  flex items-center justify-center text-zinc-700  z-10"
      >
        <Database className="w-4 h-4" />
      </div>

      {/* AnimatedBeam: satellite nodes → center hub (continuous, visible lines) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={topLeftRef}
        toRef={centerRef}
        curvature={15}
        duration={2.5}
        delay={0}
        repeatDelay={0}
        pathWidth={2}
        pathColor="#71717a"
        pathOpacity={0.4}
        gradientStartColor="#60a5fa"
        gradientStopColor="#a78bfa"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={topRightRef}
        toRef={centerRef}
        curvature={-15}
        duration={2.5}
        delay={0.8}
        repeatDelay={0}
        pathWidth={2}
        pathColor="#71717a"
        pathOpacity={0.4}
        gradientStartColor="#a78bfa"
        gradientStopColor="#34d399"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bottomLeftRef}
        toRef={centerRef}
        curvature={25}
        duration={2.5}
        delay={0.4}
        repeatDelay={0}
        pathWidth={2}
        pathColor="#71717a"
        pathOpacity={0.4}
        gradientStartColor="#34d399"
        gradientStopColor="#60a5fa"
      />
    </div>
  );
}

// ─── Group / Card data ────────────────────────────────────────────────────────

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
  accent: string;
  graphic: "cluster" | "tags" | "nodes";
  graphicIcons?: React.ReactNode[];
  graphicTags?: string[];
  colSpan?: number;
}

interface Group {
  id: string;
  pill: string;
  heading: string;
  headingItalic: string;
  subheading: string;
  cards: ServiceCard[];
}

// Map JSON string icons to Lucide components
const GROUPS: Group[] = servicesData.categories.map((group: any) => ({
  id: group.id,
  pill: group.pill,
  heading: group.heading,
  headingItalic: group.headingItalic,
  subheading: group.subheading,
  cards: group.cards.map((card: any) => {
    const IconComponent = IconMap[card.icon] || Globe;
    return {
      ...card,
      icon: <IconComponent className="w-7 h-7" />,
      graphicIcons: card.graphicIcons?.map((iconName: string, i: number) => {
        const GraphicIcon = IconMap[iconName] || Globe;
        const sizeClass = i === 0 ? "w-7 h-7" : "w-4 h-4";
        return <GraphicIcon key={`${card.id}-${i}`} className={sizeClass} />;
      }),
    };
  }),
}));

// ─── Single card ──────────────────────────────────────────────────────────────

const COL_SPAN: Record<number, string> = {
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  6: "md:col-span-6",
};

function Card({ card }: { card: ServiceCard }) {
  const renderGraphic = () => {
    if (card.graphic === "tags" && card.graphicTags)
      return <TagListGraphic tags={card.graphicTags} />;
    if (card.graphic === "nodes")
      return <NodesGraphic accent={card.accent} />;
    return (
      <IconClusterGraphic
        icons={card.graphicIcons ?? [card.icon]}
        accent={card.accent}
      />
    );
  };

  const spanClass = COL_SPAN[card.colSpan ?? 2] ?? "md:col-span-2";

  return (
    <motion.div
      variants={itemVariants}
      className={`${spanClass} flex flex-col`}
    >
      <Link
        href={`/services/${card.id}`}
        className="flex flex-col flex-1 p-8 bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden relative group transition-all duration-300 hover:border-zinc-300 hover:-translate-y-1 hover:shadow-md"
      >
        {/* subtle glow on hover */}
        <div className="absolute inset-0 bg-linear-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

        {renderGraphic()}

        {/* Icon + Title */}
        <div className="flex items-center gap-3 mb-3">
          <div className={`shrink-0 ${card.accent}`}>{card.icon}</div>
          <h3 className="text-xl font-semibold text-zinc-900 group-hover:text-black transition-colors">{card.title}</h3>
        </div>

        <p className="text-zinc-500 text-sm leading-relaxed mb-5">{card.description}</p>

        {/* Sub-items */}
        <div className="mt-auto grid grid-cols-2 gap-x-4 gap-y-1.5 mb-5">
          {card.items.map((item) => (
            <div key={item} className="flex items-center gap-1.5 text-xs text-zinc-500">
              <Check className={`w-3 h-3 shrink-0 ${card.accent}`} />
              {item}
            </div>
          ))}
        </div>

        {/* View Details */}
        <div className={`inline-flex items-center gap-1.5 text-xs font-semibold ${card.accent} opacity-0 group-hover:opacity-100 transition-all duration-200`}>
          View Details <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </Link>
    </motion.div>
  );
}


// ─── Group section ────────────────────────────────────────────────────────────

function GroupSection({ group }: { group: Group }) {
  return (
    <section className="relative z-10 py-16 w-full">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={itemVariants}
            className="max-w-3xl"
          >
            {/* Pill */}
            <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-black mb-6 gap-2">
              <Layers className="w-3.5 h-3.5 text-zinc-600" />
              {group.pill}
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight">
              {group.heading}{" "}
              <span className="text-[#1ba453]">{group.headingItalic}</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={itemVariants}
            className="max-w-sm flex flex-col items-start lg:items-end gap-6"
          >
            <p className="text-sm md:text-base text-zinc-500 font-medium leading-relaxed lg:text-right">
              {group.subheading}
            </p>
          </motion.div>
        </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-6 gap-6 w-full"
      >
        {group.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </motion.div>

      {/* section divider */}
      <div className="mt-20 w-full h-px bg-linear-to-r from-transparent via-black/10 to-transparent" />
      </div>
    </section>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function ServicesCategoryGrid2() {
  return (
    <div id="categories" className="w-full">
      {GROUPS.map((group) => (
        <GroupSection key={group.id} group={group} />
      ))}
    </div>
  );
}
