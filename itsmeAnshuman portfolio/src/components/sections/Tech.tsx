import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../constants/styles";
import { textVariant, fadeIn } from "../../utils/motion";
import { useState } from "react";

const skillCategories = [
  {
    title: "HDL Languages",
    subtitle: "Hardware Description",
    color: "#00f5ff",
    icon: "〈/〉",
    tags: ["Verilog HDL", "SystemVerilog", "UVM", "Embedded C", "C"],
  },
  {
    title: "EDA Tools",
    subtitle: "Design Automation",
    color: "#915EFF",
    icon: "⚙",
    tags: ["Vivado 2023.1", "ModelSim", "QuestaSim", "EDA Playground", "Arduino IDE", "VSCode"],
  },
  {
    title: "Protocols",
    subtitle: "Bus & Serial Standards",
    color: "#00ff88",
    icon: "⇌",
    tags: ["AXI4 Lite", "AHB", "APB", "UART", "SPI", "I2C"],
  },
  {
    title: "Boards & Hardware",
    subtitle: "Physical Platforms",
    color: "#ffd93d",
    icon: "◈",
    tags: ["Arduino", "NodeMCU ESP32", "Intel 8085", "ARM 32"],
  },
  {
    title: "Theoretical Knowledge",
    subtitle: "Core Foundations",
    color: "#ff6b6b",
    icon: "∑",
    tags: ["Digital Logic Design", "FSMs", "STA", "CDCs", "MOSFETs", "COA"],
  },
];

const SkillTag = ({ tag, color }: { tag: string; color: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-block",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "11px",
        padding: "4px 12px",
        borderRadius: "4px",
        background: hovered ? `${color}20` : `${color}0a`,
        border: `1px solid ${hovered ? color : `${color}30`}`,
        color: hovered ? "#fff" : `${color}cc`,
        boxShadow: hovered ? `0 0 10px ${color}60, 0 0 22px ${color}25` : "none",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.22s ease",
        cursor: "default",
        userSelect: "none",
      }}
    >
      {tag}
    </span>
  );
};

const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const { title, subtitle, color, icon, tags } = category;

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
        transition: "all 0.35s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${color}15`
          : "0 4px 20px rgba(0,0,0,0.3)",
        overflow: "hidden",
      }}
    >
      {/* Animated top border */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "2px",
        background: `linear-gradient(to right, transparent, ${color}, transparent)`,
        opacity: hovered ? 1 : 0.4,
        transition: "opacity 0.35s ease",
      }} />

      {/* Corner accent */}
      <div style={{
        position: "absolute",
        top: 0, right: 0,
        width: "60px", height: "60px",
        background: `radial-gradient(circle at top right, ${color}15, transparent 70%)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.35s ease",
        pointerEvents: "none",
      }} />

      {/* Scan line effect on hover */}
      {hovered && (
        <div style={{
          position: "absolute",
          left: 0, right: 0,
          height: "40px",
          background: `linear-gradient(to bottom, transparent, ${color}06, transparent)`,
          animation: "cardScan 2s linear infinite",
          pointerEvents: "none",
        }} />
      )}

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "18px" }}>
        <div>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: hovered ? color : `${color}88`,
            marginBottom: "4px",
            transition: "color 0.3s",
          }}>
            {subtitle}
          </p>
          <h3 style={{
            fontSize: "15px",
            fontWeight: 700,
            color: hovered ? "#fff" : "rgba(200,210,230,0.9)",
            fontFamily: "sans-serif",
            transition: "color 0.3s",
          }}>
            {title}
          </h3>
        </div>

        {/* Icon */}
        <div style={{
          width: "42px",
          height: "42px",
          borderRadius: "10px",
          background: hovered ? `${color}18` : `${color}0a`,
          border: `1px solid ${hovered ? `${color}55` : `${color}22`}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          color: hovered ? color : `${color}77`,
          boxShadow: hovered ? `0 0 16px ${color}40` : "none",
          transition: "all 0.3s ease",
          flexShrink: 0,
        }}>
          {icon}
        </div>
      </div>

      {/* Divider */}
      <div style={{
        height: "1px",
        background: `linear-gradient(to right, ${color}30, transparent)`,
        marginBottom: "16px",
        transition: "opacity 0.3s",
        opacity: hovered ? 0.8 : 0.3,
      }} />

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
        {tags.map((tag, i) => (
          <SkillTag key={i} tag={tag} color={color} />
        ))}
      </div>

      {/* Tag count */}
      <div style={{
        position: "absolute",
        bottom: "12px",
        right: "16px",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "9px",
        color: hovered ? `${color}88` : "rgba(180,200,220,0.2)",
        transition: "color 0.3s",
        letterSpacing: "1px",
      }}>
        {tags.length} MODULES
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <style>{`
        @keyframes cardScan {
          0%   { top: -40px; }
          100% { top: 110%; }
        }
      `}</style>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>

      {/* Summary bar */}
      <motion.div
        variants={fadeIn("", "", 0.1, 0.6)}
        style={{
          marginTop: "20px",
          marginBottom: "28px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "14px 20px",
          background: "rgba(10,18,32,0.8)",
          border: "1px solid rgba(0,245,255,0.08)",
          borderRadius: "10px",
        }}
      >
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

      {/* Cards grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
      }}
        className="tech-grid"
      >
        {skillCategories.map((cat, i) => (
          <SkillCard key={i} category={cat} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) { .tech-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .tech-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
