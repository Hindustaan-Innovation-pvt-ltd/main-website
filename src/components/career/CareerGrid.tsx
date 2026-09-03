"use client";

import { useState, useEffect } from "react";
import {
  ShoppingCart, Megaphone, Wrench, Bot, Brain, TrendingUp, Eye, Cpu, Cloud, Server, GitBranch, Shield,
  Database, Monitor, Plug, Lock, Package, BarChart2, Zap, Settings,
  FlaskConical, HardDrive, Mail, MapPin, Check, ArrowUpRight,
  Briefcase, Loader2, LayoutGrid,
  Waypoints
} from "lucide-react";
import { AnimatedList } from "../ui/animated-list";
import { motion, type Variants } from "motion/react";
import Link from "next/link";
import careersData from "@/careers.json";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const cardHoverVariants: Variants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 20px 50px rgba(255, 255, 255, 0.1), 0 0 30px rgba(255, 255, 255, 0.05)"
  },
};

const IconMap: Record<string, React.FC<any>> = {
  Globe: Cpu, Smartphone: Shield, Palette: LayoutGrid, ShoppingCart, Code2: Settings, Megaphone, Wrench,
  Bot, Brain, TrendingUp, Eye, Cpu, Cloud, Server, GitBranch, Shield,
  Database, Monitor, Plug, Lock, Package, BarChart2, Zap, Settings,
  FlaskConical, HardDrive, Mail, MapPin, Sparkles: Zap, Layers: LayoutGrid, Briefcase
};

// ─── Mini graphic components ─────────────────────────────────────────────────

function IconClusterGraphic({ icons, accent }: { icons: React.ReactNode[]; accent: string }) {
  return (
    <div className="w-full h-40 flex items-center justify-center mb-6 relative">
      <div className={`relative z-10 w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-xs flex items-center justify-center ${accent}`}>
        {icons[0]}
      </div>
      {icons[1] && (
        <div className="absolute top-[15%] left-[18%] w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-xl border border-zinc-200/60 dark:border-white/10 flex items-center justify-center shadow-xs text-zinc-500 dark:text-zinc-400">
          {icons[1]}
        </div>
      )}
      {icons[2] && (
        <div className="absolute bottom-[15%] right-[18%] w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-xl border border-zinc-200/60 dark:border-white/10 flex items-center justify-center shadow-xs text-zinc-500 dark:text-zinc-400">
          {icons[2]}
        </div>
      )}
      {icons[3] && (
        <div className="absolute top-[12%] right-[22%] w-8 h-8 bg-zinc-100 dark:bg-zinc-800 rounded-xl border border-zinc-200/60 dark:border-white/10 flex items-center justify-center shadow-xs text-zinc-500 dark:text-zinc-400">
          {icons[3]}
        </div>
      )}
    </div>
  );
}

function TagListGraphic({ tags }: { tags: string[] }) {
  const loopedTags = [...tags, ...tags, ...tags];
  return (
    <div className="w-full h-40 flex flex-col mb-6 relative overflow-hidden mask-[linear-gradient(to_bottom,white_40%,transparent_100%)]">
      <AnimatedList delay={1200} className="w-full gap-2">
        {loopedTags.map((t, i) => (
          <div
            key={`${t}-${i}`}
            className={`w-full flex items-center justify-between bg-zinc-100/80 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-white/10 rounded-md px-3 py-4 shadow-xs ${i % tags.length === 1 ? "w-full" : "w-[90%]"}`}
          >
            <div className="flex items-center gap-2">
              <Check className="w-3 h-3 text-zinc-500 dark:text-zinc-400" />
              <span className="text-[11px] text-zinc-600 dark:text-zinc-300 font-medium">{t}</span>
            </div>
            <ArrowUpRight className="w-3 h-3 text-zinc-500 dark:text-zinc-400" />
          </div>
        ))}
      </AnimatedList>
    </div>
  );
}

function NodesGraphic({ accent }: { accent: string }) {
  return (
    <div className="w-full h-40 flex items-center justify-center mb-6 relative">
      <svg className="absolute inset-0 w-full h-full text-zinc-300 dark:text-zinc-700 stroke-current z-0">
        <line x1="30%" y1="30%" x2="70%" y2="70%" strokeWidth="1" />
        <line x1="70%" y1="25%" x2="50%" y2="50%" strokeWidth="1" />
        <line x1="25%" y1="65%" x2="50%" y2="50%" strokeWidth="1" />
      </svg>
      <div className={`relative z-10 w-14 h-14 bg-white dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center shadow-xs ${accent}`}>
        <Zap className="w-6 h-6" />
      </div>
      <div className="absolute top-[18%] left-[22%] w-9 h-9 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200/60 dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-zinc-400"><Cpu className="w-4 h-4" /></div>
      <div className="absolute top-[15%] right-[22%] w-9 h-9 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200/60 dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-zinc-400"><Shield className="w-4 h-4" /></div>
      <div className="absolute bottom-[18%] left-[20%] w-9 h-9 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200/60 dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-zinc-400"><Database className="w-4 h-4" /></div>
      <div className="absolute bottom-[18%] right-[20%] w-9 h-9 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200/60 dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-zinc-400"><Waypoints className="w-4 h-4" /></div>
    </div>
  );
}

// ─── Group / Card data ────────────────────────────────────────────────────────

interface JobCard {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode | string;
  accent: string;
  graphic: "cluster" | "tags" | "nodes";
  graphicIcons?: (React.ReactNode | string)[];
  graphicTags?: string[];
}

interface Department {
  id: string;
  pill: string;
  heading: string;
  headingItalic: string;
  subheading: string;
  jobs: JobCard[];
}

const DEPARTMENTS: Department[] = careersData.departments.map((dept: any) => ({
  id: dept.id,
  pill: dept.pill,
  heading: dept.heading,
  headingItalic: dept.headingItalic,
  subheading: dept.subheading,
  jobs: dept.jobs.map((job: any) => {
    const IconComponent = IconMap[job.icon] || Briefcase;
    return {
      ...job,
      icon: <IconComponent className="w-7 h-7" />,
      graphicIcons: job.graphicIcons?.map((iconName: string, i: number) => {
        const GraphicIcon = IconMap[iconName] || Briefcase;
        const sizeClass = i === 0 ? "w-7 h-7" : "w-4 h-4";
        return <GraphicIcon key={`${job.id}-${i}`} className={sizeClass} />;
      }),
    };
  }),
}));

// ─── Single card ──────────────────────────────────────────────────────────────

function resolveIcon(icon: React.ReactNode | string, className: string): React.ReactNode {
  if (typeof icon === "string") {
    const IconComp = IconMap[icon] || Briefcase;
    return <IconComp className={className} />;
  }
  return icon;
}

function JobCardComponent({ card }: { card: JobCard }) {
  const resolvedIcon = resolveIcon(card.icon, "w-7 h-7");
  const resolvedGraphicIcons = card.graphicIcons?.map((ic, i) =>
    resolveIcon(ic, i === 0 ? "w-7 h-7" : "w-4 h-4")
  );

  const renderGraphic = () => {
    if (card.graphic === "tags" && card.graphicTags)
      return <TagListGraphic tags={card.graphicTags} />;
    if (card.graphic === "nodes")
      return <NodesGraphic accent={card.accent} />;
    return (
      <IconClusterGraphic
        icons={resolvedGraphicIcons ?? [resolvedIcon]}
        accent={card.accent}
      />
    );
  };

  function Truncate(text: string, maxLength: number) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  }

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      custom={cardHoverVariants}
      className="flex flex-col p-8 bg-white dark:bg-zinc-900/90 rounded-2xl border border-zinc-200/80 dark:border-white/10 overflow-hidden relative group shadow-xs hover:shadow-xl transition-all"
    >
      {/* Animated border glow on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/5 to-transparent pointer-events-none"
      />

      {/* Inner glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.5 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-px rounded-2xl bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none blur-sm"
      />

      <div className="flex flex-col justify-evenly relative z-10">
        {renderGraphic()}

        <div className="flex items-center gap-3 mb-3">
          <div className={`shrink-0 ${card.accent}`}>{resolvedIcon}</div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{card.title}</h3>
        </div>

        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-5">{Truncate(card.description, 80)}</p>

        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-6">
          {card.items.map((item) => (
            <div key={item} className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400">
              <Check className={`w-3 h-3 shrink-0 ${card.accent}`} />
              {item}
            </div>
          ))}  
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link href={`/career/${card.id}`} className="inline-flex items-center justify-center w-full gap-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors">
            View Details <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Group section ────────────────────────────────────────────────────────────

function DepartmentSection({ dept }: { dept: Department }) {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center px-4 pt-8 pb-4 lg:py-20 w-full max-w-[1800px] mx-auto">
      
      {/* Header Area matching home page */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 w-full">
        <div className="max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-full mb-6 shadow-xs w-fit"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-800 dark:text-zinc-200">
              {dept.pill}
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-[1.1] tracking-tight"
          >
            {dept.heading} <span className="text-[#1ba453]">{dept.headingItalic}</span>
          </motion.h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-md lg:pb-2"
        >
          <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
            {dept.subheading}
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full"
      >
        {dept.jobs.map((job) => (
          <JobCardComponent key={job.id} card={job} />
        ))}
      </motion.div>

      <div className="mt-8 lg:mt-20 w-full h-px bg-linear-to-r from-transparent via-zinc-200 dark:via-white/10 to-transparent" />
    </section>
  );
}

export function CareerGrid() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/careers");
        const data = await response.json();

        if (data.success) {
          setDepartments(data.data || []);
        } else {
          setError(data.error || "Failed to fetch careers");
        }
      } catch (err) {
        console.error("Error fetching careers:", err);
        setError("Failed to load career positions");
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  if (loading) {
    return (
      <div className="w-full py-24 flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-8 h-8 text-zinc-500 animate-spin" />
        <p className="text-zinc-500">Loading career opportunities...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-24 flex flex-col items-center justify-center gap-4 text-center">
        <div className="text-red-500 font-semibold">Error Loading Positions</div>
        <p className="text-zinc-500 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div id="openings" className="w-full">
      {departments.map((dept) => (
        <DepartmentSection key={dept.id} dept={dept} />
      ))}
    </div>
  );
}
