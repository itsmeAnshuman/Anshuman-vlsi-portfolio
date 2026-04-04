import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../constants/styles";
import { textVariant, fadeIn } from "../../utils/motion";
import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

const PROF_COLORS: Record<string, string> = {
  basic:        "#888888",
  intermediate: "#1D9E75",
  "above-int":  "#378ADD",
  advanced:     "#BA7517",
};

type Proficiency = "basic" | "intermediate" | "above-int" | "advanced";

interface PopupInfo {
  rating: number;
  years?: string;
  info: string;
  project?: string;
}

interface TagEntry {
  label: string;
  prof?: Proficiency;
  popup?: PopupInfo;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  color: string;
  icon: string;
  tags: TagEntry[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "HDL Languages",
    subtitle: "Hardware Description",
    color: "#00f5ff",
    icon: "〈/〉",
    tags: [
      { label: "Verilog HDL",   prof: "above-int",   popup: { rating: 8, years: "2+ yrs",   info: "RTL design, testbenches & synthesis",           project: "FPGA Projects" } },
      { label: "SystemVerilog", prof: "above-int",   popup: { rating: 7, years: "1.5 yrs",  info: "Interfaces, assertions & functional coverage",  project: "Verification"  } },
      { label: "UVM",           prof: "basic",        popup: { rating: 4, years: "6 months", info: "Basics of UVM testbench architecture",          project: "Learning"      } },
      { label: "Embedded C",    prof: "intermediate", popup: { rating: 6, years: "1 yr",     info: "Peripheral drivers & bare-metal programming",   project: "MCU Projects"  } },
      { label: "C",             prof: "intermediate", popup: { rating: 6, years: "1.5 yrs",  info: "Data structures, algorithms & system code",     project: "Academic"      } },
    ],
  },
  {
    title: "EDA Tools",
    subtitle: "Design Automation",
    color: "#915EFF",
    icon: "⚙",
    tags: [
      { label: "Vivado 2023.1",    popup: { rating: 8, years: "2 yrs",    info: "Synthesis, implementation & bitstream gen",    project: "FPGA Flow"   } },
      { label: "ModelSim",         popup: { rating: 7, years: "1.5 yrs",  info: "RTL simulation & waveform analysis"                                  } },
      { label: "QuestaSim",        popup: { rating: 6, years: "1 yr",     info: "Advanced simulation with coverage metrics"                           } },
      { label: "Cadence Virtuoso", popup: { rating: 5, years: "6 months", info: "Schematic & layout for analog design"                                } },
      { label: "EDA Playground",   popup: { rating: 7, years: "1 yr",     info: "Quick online HDL simulation & testing"                              } },
      { label: "Arduino IDE",      popup: { rating: 8, years: "2 yrs",    info: "Prototyping & embedded sketches",              project: "IoT Projects" } },
      { label: "VSCode",           popup: { rating: 9, years: "3 yrs",    info: "Daily driver for all development work"                               } },
    ],
  },
  {
    title: "Protocols",
    subtitle: "Bus & Serial Standards",
    color: "#00ff88",
    icon: "⇌",
    tags: [
      { label: "AXI4 Lite", popup: { rating: 7, years: "1 yr",    info: "Register-mapped slave interfaces on FPGA", project: "SoC Design"      } },
      { label: "AHB",       popup: { rating: 6, years: "8 months", info: "ARM high-performance bus architecture"                                } },
      { label: "APB",       popup: { rating: 6, years: "8 months", info: "Low-power peripheral bus interfacing"                                 } },
      { label: "UART",      popup: { rating: 8, years: "2 yrs",    info: "Serial comms on MCUs & FPGAs",            project: "Debug Interface" } },
      { label: "SPI",       popup: { rating: 7, years: "1.5 yrs",  info: "High-speed sensor & display interfacing"                             } },
      { label: "I2C",       popup: { rating: 7, years: "1.5 yrs",  info: "Multi-device communication on shared bus"                            } },
    ],
  },
  {
    title: "Boards & Hardware",
    subtitle: "Physical Platforms",
    color: "#ffd93d",
    icon: "◈",
    tags: [
      { label: "Arduino",        popup: { rating: 8, years: "3 yrs",    info: "Go-to board for quick hardware prototypes", project: "IoT & Robotics"  } },
      { label: "NodeMCU ESP32",  popup: { rating: 7, years: "1.5 yrs",  info: "Wi-Fi + BLE projects & IoT endpoints"                                 } },
      { label: "Intel 8085",     popup: { rating: 6, years: "6 months", info: "Assembly programming & microprocessor arch"                            } },
      { label: "ARM 32",         popup: { rating: 6, years: "1 yr",     info: "Cortex-M bare-metal & RTOS basics"                                    } },
      { label: "Raspberry Pi 4", popup: { rating: 7, years: "1 yr",     info: "Linux-based projects & GPIO interfacing",   project: "Vision Projects" } },
    ],
  },
  {
    title: "Core Knowledge",
    subtitle: "Digital Design Concepts",
    color: "#ff6b6b",
    icon: "∑",
    tags: [
      { label: "Digital Logic Design", popup: { rating: 9, years: "3 yrs",   info: "Foundation of all hardware design work", project: "Core Strength" } },
      { label: "FSMs",                 popup: { rating: 8, years: "2 yrs",   info: "Moore/Mealy machines in RTL design"                               } },
      { label: "STA",                  popup: { rating: 6, years: "1 yr",    info: "Setup/hold, timing paths & constraints"                           } },
      { label: "CDCs",                 popup: { rating: 6, years: "1 yr",    info: "Clock domain crossing techniques & sync"                          } },
      { label: "MOSFETs",              popup: { rating: 7, years: "1.5 yrs", info: "Device physics & analog circuit design"                           } },
      { label: "COA",                  popup: { rating: 7, years: "1.5 yrs", info: "Computer organization & architecture"                             } },
    ],
  },
  {
    title: "Dev Tools",
    subtitle: "Version Control & Scripting",
    color: "#a8b2c1",
    icon: "{ }",
    tags: [
      { label: "Git / GitHub", popup: { rating: 8, years: "2 yrs", info: "Version control, PRs & collaboration",  project: "All Projects"    } },
      { label: "Linux / Bash", popup: { rating: 7, years: "2 yrs", info: "Shell scripting & daily Linux workflow"                             } },
      { label: "Python",       popup: { rating: 7, years: "2 yrs", info: "Scripting, automation & data analysis",  project: "Tools & Scripts" } },
    ],
  },
];

const profLegend: { prof: Proficiency; label: string }[] = [
  { prof: "basic",        label: "Basic" },
  { prof: "intermediate", label: "Intermediate" },
  { prof: "above-int",    label: "Above Int." },
  { prof: "advanced",     label: "Advanced" },
];

const getRatingColor = (rating: number): string => {
  if (rating <= 3) return "#ff4d4d";
  if (rating <= 6) return "#ffd93d";
  if (rating <= 8) return "#378ADD";
  return "#00ff88";
};

const RatingBar = ({ rating }: { rating: number }) => {
  const ratingColor = getRatingColor(rating);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      <div style={{ display: "flex", gap: "3px" }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} style={{
            width: "14px", height: "4px", borderRadius: "2px",
            background: i < rating ? ratingColor : "rgba(255,255,255,0.08)",
            boxShadow: i < rating ? `0 0 4px ${ratingColor}88` : "none",
          }} />
        ))}
      </div>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: ratingColor, fontWeight: 700 }}>
        {rating}/10
      </span>
    </div>
  );
};

const SkillTag = ({ tag, color }: { tag: TagEntry; color: string }) => {
  const [hovered, setHovered] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const tagRef = useRef<HTMLSpanElement>(null);
  const dotColor = tag.prof ? PROF_COLORS[tag.prof] : null;
  const POPUP_W = 220;
  const POPUP_H = 155;

  const calcAndShow = () => {
    if (tagRef.current) {
      const rect = tagRef.current.getBoundingClientRect();
      let left = rect.left + rect.width / 2 - POPUP_W / 2;
      left = Math.max(8, Math.min(left, window.innerWidth - POPUP_W - 8));
      let top = rect.bottom + 6;
      if (top + POPUP_H > window.innerHeight - 8) top = rect.top - POPUP_H - 6;
      setCoords({ top, left });
    }
    setHovered(true);
  };

  const handleMouseEnter = () => calcAndShow();

  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    if (hovered) {
      setHovered(false);
    } else {
      calcAndShow();
    }
  };

  useEffect(() => {
    if (!hovered) return;
    const dismiss = () => setHovered(false);
    document.addEventListener("touchstart", dismiss);
    return () => document.removeEventListener("touchstart", dismiss);
  }, [hovered]);

  return (
    <>
      <span
        ref={tagRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={handleTouchStart}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          padding: "4px 12px",
          borderRadius: "4px",
          background: hovered ? `${color}20` : `${color}0a`,
          border: `1px solid ${hovered ? color : `${color}30`}`,
          color: hovered ? "#fff" : `${color}cc`,
          boxShadow: hovered ? `0 0 10px ${color}60, 0 0 22px ${color}25` : "none",
          // NO transform at all — eliminates any position shift
          transition: "background 0.22s ease, border 0.22s ease, color 0.22s ease, box-shadow 0.22s ease",
          cursor: "default",
          userSelect: "none",
          touchAction: "manipulation",
        }}
      >
        {dotColor && (
          <span style={{
            width: "6px", height: "6px", borderRadius: "50%",
            background: dotColor, flexShrink: 0,
            boxShadow: hovered ? `0 0 4px ${dotColor}` : "none",
            transition: "box-shadow 0.22s ease",
          }} />
        )}
        {tag.label}
      </span>

      {hovered && tag.popup && ReactDOM.createPortal(
        <div style={{
          position: "fixed",
          top: coords.top,
          left: coords.left,
          width: `${POPUP_W}px`,
          background: "rgba(8, 14, 26, 0.25)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: `1px solid ${color}70`,
          borderRadius: "10px",
          padding: "12px 14px",
          boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 24px ${color}30, inset 0 1px 0 ${color}20`,
          zIndex: 99999,
          pointerEvents: "none",
          animation: "popupFadeIn 0.15s ease",
        }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 700, color, marginBottom: "8px", letterSpacing: "0.5px" }}>
            {tag.label}
          </div>
          <RatingBar rating={tag.popup.rating} />
          <div style={{ height: "1px", background: `linear-gradient(to right, ${color}30, transparent)`, margin: "8px 0" }} />
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "rgba(180,200,220,0.75)", lineHeight: "1.5", marginBottom: tag.popup.years || tag.popup.project ? "7px" : "0" }}>
            {tag.popup.info}
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "4px" }}>
            {tag.popup.years && (
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: `${color}99` }}>
                ⏱ {tag.popup.years}
              </span>
            )}
            {tag.popup.project && (
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", padding: "2px 7px", borderRadius: "3px", background: `${color}15`, border: `1px solid ${color}35`, color: `${color}cc` }}>
                {tag.popup.project}
              </span>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const { title, subtitle, color, icon, tags } = category;
  const hasProficiency = tags.some((t) => t.prof);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered
          ? `linear-gradient(135deg, ${color}0d 0%, rgba(10,18,32,0.98) 60%)`
          : "rgba(10,18,32,0.95)",
        border: `1px solid ${hovered ? `${color}55` : `${color}18`}`,
        borderRadius: "14px",
        padding: "24px",
        // NO transform — card stays perfectly still
        transition: "background 0.35s ease, border 0.35s ease, box-shadow 0.35s ease",
        zIndex: hovered ? 10 : 1,
        boxShadow: hovered
          ? `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${color}15`
          : "0 4px 20px rgba(0,0,0,0.3)",
        overflow: "visible",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(to right, transparent, ${color}, transparent)`, opacity: hovered ? 1 : 0.4, transition: "opacity 0.35s ease", borderRadius: "14px 14px 0 0" }} />
      <div style={{ position: "absolute", top: 0, right: 0, width: "60px", height: "60px", background: `radial-gradient(circle at top right, ${color}15, transparent 70%)`, opacity: hovered ? 1 : 0, transition: "opacity 0.35s ease", pointerEvents: "none" }} />

      {hovered && (
        <div style={{ position: "absolute", left: 0, right: 0, height: "40px", background: `linear-gradient(to bottom, transparent, ${color}06, transparent)`, animation: "cardScan 2s linear infinite", pointerEvents: "none" }} />
      )}

      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "18px" }}>
        <div>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: hovered ? color : `${color}88`, marginBottom: "4px", transition: "color 0.3s" }}>
            {subtitle}
          </p>
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: hovered ? "#fff" : "rgba(200,210,230,0.9)", fontFamily: "sans-serif", transition: "color 0.3s" }}>
            {title}
          </h3>
        </div>
        <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: hovered ? `${color}18` : `${color}0a`, border: `1px solid ${hovered ? `${color}55` : `${color}22`}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", color: hovered ? color : `${color}77`, boxShadow: hovered ? `0 0 16px ${color}40` : "none", transition: "all 0.3s ease", flexShrink: 0 }}>
          {icon}
        </div>
      </div>

      <div style={{ height: "1px", background: `linear-gradient(to right, ${color}30, transparent)`, marginBottom: "16px", opacity: hovered ? 0.8 : 0.3, transition: "opacity 0.3s" }} />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
        {tags.map((tag, i) => <SkillTag key={i} tag={tag} color={color} />)}
      </div>

      {hasProficiency && (
        <div style={{ marginTop: "14px", paddingTop: "10px", borderTop: `1px solid ${color}18`, display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {profLegend.map(({ prof, label }) => (
            <span key={prof} style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: "rgba(180,200,220,0.4)", letterSpacing: "0.5px" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: PROF_COLORS[prof], flexShrink: 0 }} />
              {label}
            </span>
          ))}
        </div>
      )}

      <div style={{ position: "absolute", bottom: "12px", right: "16px", fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: hovered ? `${color}88` : "rgba(180,200,220,0.2)", transition: "color 0.3s", letterSpacing: "1px" }}>
        {tags.length} MODULES
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <style>{`
        @keyframes cardScan { 0% { top: -40px; } 100% { top: 110%; } }
        @keyframes popupFadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 0.6)} style={{ marginTop: "20px", marginBottom: "28px", display: "flex", flexWrap: "wrap", gap: "20px", padding: "14px 20px", background: "rgba(10,18,32,0.8)", border: "1px solid rgba(0,245,255,0.08)", borderRadius: "10px" }}>
        {skillCategories.map((cat, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: cat.color, boxShadow: `0 0 6px ${cat.color}` }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "rgba(180,200,220,0.5)", letterSpacing: "1px" }}>
              {cat.tags.length} {cat.title.split(" ")[0].toUpperCase()}
            </span>
          </div>
        ))}
        <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "rgba(180,200,220,0.3)" }}>
          {skillCategories.reduce((a, c) => a + c.tags.length, 0)} TOTAL SKILLS
        </span>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="tech-grid">
        {skillCategories.map((cat, i) => <SkillCard key={i} category={cat} index={i} />)}
      </div>

      <style>{`
        @media (max-width: 900px) { .tech-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .tech-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
