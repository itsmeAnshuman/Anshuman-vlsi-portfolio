import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { fadeIn } from "../../utils/motion";
import { useState } from "react";

const educationData = [
  {
    institution: "IIIT Ranchi",
    degree: "B.Tech — Electronics & Communication Engineering",
    specialization: "Embedded Systems & IoT",
    score: "9.04",
    scoreLabel: "CGPA",
    period: "2022 — Present",
    status: "ongoing",
    color: "#00f5ff",
    icon: "🎓",
    details: ["Specialization in VLSI Design & Verification", "Focus on RTL design, SystemVerilog & UVM"],
  },
  {
    institution: "Kendriya Vidyalaya Basti",
    degree: "Class XII — Science",
    specialization: "Physics, Chemistry, Mathematics",
    score: "95%",
    scoreLabel: "SCORE",
    period: "2021",
    status: "completed",
    color: "#915EFF",
    icon: "📘",
    details: ["Central Board of Secondary Education", "PCM with Computer Science"],
  },
  {
    institution: "Kendriya Vidyalaya No. 2 FCI Gorakhpur",
    degree: "Class X — Secondary Education",
    specialization: "All Subjects",
    score: "91%",
    scoreLabel: "SCORE",
    period: "2019",
    status: "completed",
    color: "#00ff88",
    icon: "📗",
    details: ["Central Board of Secondary Education", "Strong foundation in Mathematics & Science"],
  },
];

const EducationCard = ({ data, index }: { data: typeof educationData[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const { institution, degree, specialization, score, scoreLabel, period, status, color, icon, details } = data;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.7)}
      style={{ display: "flex", gap: "0", alignItems: "stretch" }}
    >
      {/* Timeline column */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "48px", flexShrink: 0 }}>
        {/* Node circle */}
        <div style={{
          width: "18px", height: "18px",
          borderRadius: "50%",
          background: hovered ? color : "transparent",
          border: `2px solid ${color}`,
          boxShadow: hovered ? `0 0 14px ${color}, 0 0 28px ${color}55` : `0 0 6px ${color}55`,
          transition: "all 0.35s ease",
          flexShrink: 0,
          marginTop: "28px",
          zIndex: 1,
        }} />
        {/* Line down */}
        {index < educationData.length - 1 && (
          <div style={{
            flex: 1,
            width: "2px",
            background: `linear-gradient(to bottom, ${color}55, ${educationData[index + 1].color}33)`,
            marginTop: "4px",
            minHeight: "40px",
          }} />
        )}
      </div>

      {/* Card */}
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          flex: 1,
          marginLeft: "16px",
          marginBottom: index < educationData.length - 1 ? "24px" : "0",
          background: hovered
            ? `linear-gradient(135deg, ${color}0d 0%, rgba(10,18,32,0.98) 60%)`
            : "rgba(10,18,32,0.95)",
          border: `1px solid ${hovered ? `${color}55` : `${color}18`}`,
          borderRadius: "12px",
          overflow: "hidden",
          transition: "all 0.35s ease",
          transform: hovered ? "translateX(6px)" : "translateX(0)",
          boxShadow: hovered
            ? `0 16px 48px rgba(0,0,0,0.5), 0 0 28px ${color}12`
            : "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        {/* Top accent bar */}
        <div style={{
          height: "2px",
          background: `linear-gradient(to right, ${color}, ${color}33, transparent)`,
          opacity: hovered ? 1 : 0.5,
          transition: "opacity 0.35s",
        }} />

        {/* Grid bg */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(0,245,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.015) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }} />

        <div className="edu-card-content" style={{ padding: "24px 28px", position: "relative" }}>
          {/* Top row — institution + score badge */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px", gap: "12px", flexWrap: "wrap" }}>
            <div style={{ flex: 1 }}>
              {/* Period tag */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: hovered ? color : `${color}77`,
                  letterSpacing: "2px",
                  transition: "color 0.3s",
                }}>{period}</span>
                {status === "ongoing" && (
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: "5px",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    color: "#00ff88",
                    background: "rgba(0,255,136,0.08)",
                    border: "1px solid rgba(0,255,136,0.25)",
                    padding: "2px 8px",
                    borderRadius: "3px",
                    letterSpacing: "1px",
                  }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#00ff88", boxShadow: "0 0 6px #00ff88", animation: "pulse 1.5s ease-in-out infinite", display: "inline-block" }} />
                    ACTIVE
                  </span>
                )}
              </div>

              {/* Institution */}
              <h3 style={{
                fontSize: "17px",
                fontWeight: 800,
                color: hovered ? "#fff" : "rgba(215,225,245,0.95)",
                marginBottom: "4px",
                transition: "color 0.3s",
                fontFamily: "sans-serif",
              }}>
                <span style={{ marginRight: "8px" }}>{icon}</span>
                {institution}
              </h3>

              {/* Degree */}
              <p style={{
                fontSize: "13px",
                color: hovered ? color : `${color}99`,
                fontWeight: 600,
                marginBottom: "2px",
                transition: "color 0.3s",
                fontFamily: "'JetBrains Mono', monospace",
              }}>{degree}</p>

              {/* Specialization */}
              <p style={{
                fontSize: "11px",
                color: "rgba(160,170,210,0.5)",
                fontFamily: "'JetBrains Mono', monospace",
              }}>{specialization}</p>
            </div>

            {/* Score badge */}
            <div className="edu-score-badge" style={{
              flexShrink: 0,
              marginLeft: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "12px",
              background: hovered ? `${color}15` : `${color}08`,
              border: `1.5px solid ${hovered ? `${color}66` : `${color}22`}`,
              boxShadow: hovered ? `0 0 20px ${color}35` : "none",
              transition: "all 0.35s ease",
            }}>
              <span className="edu-score-value" style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "18px",
                fontWeight: 800,
                color: hovered ? color : `${color}cc`,
                lineHeight: 1.1,
                transition: "color 0.3s",
              }}>{score}</span>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "8px",
                color: hovered ? `${color}99` : "rgba(180,185,220,0.35)",
                letterSpacing: "1.5px",
                marginTop: "2px",
                transition: "color 0.3s",
              }}>{scoreLabel}</span>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            height: "1px",
            background: `linear-gradient(to right, ${color}35, transparent)`,
            margin: "14px 0",
            opacity: hovered ? 0.8 : 0.3,
            transition: "opacity 0.35s",
          }} />

          {/* Detail pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
            {details.map((d, i) => (
              <span key={i} style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: hovered ? `${color}cc` : "rgba(160,170,210,0.5)",
                background: hovered ? `${color}0f` : "rgba(255,255,255,0.02)",
                border: `1px solid ${hovered ? `${color}30` : "rgba(255,255,255,0.05)"}`,
                padding: "3px 10px",
                borderRadius: "3px",
                transition: "all 0.3s ease",
              }}>◆ {d}</span>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
      `}</style>
    </motion.div>
  );
};

const Education = () => (
  <>
    <Header useMotion={true} p="Education" h2="Education." />
    <div style={{ marginTop: "40px", maxWidth: "800px", width: "100%" }}>
      <style>{`
        @media (max-width: 480px) {
          .edu-card-content { padding: 16px 14px !important; }
          .edu-score-badge { width: 56px !important; height: 56px !important; }
          .edu-score-value { font-size: 14px !important; }
        }
      `}</style>
      {educationData.map((data, index) => (
        <EducationCard key={index} data={data} index={index} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Education, "education");
