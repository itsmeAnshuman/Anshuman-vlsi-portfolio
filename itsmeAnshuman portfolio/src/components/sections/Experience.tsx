import React, { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";
import { fadeIn } from "../../utils/motion";

// Cycle through your portfolio's accent color palette
const ACCENT_COLORS = ["#00f5ff", "#915EFF", "#00ff88", "#ffd93d", "#ff6b6b"];

const ExperienceCard: React.FC<TExperience & { index: number; isLast: boolean }> = ({
  index,
  isLast,
  title,
  companyName,
  date,
  icon,
  iconBg,
  points,
}) => {
  const [hovered, setHovered] = useState(false);
  const color = ACCENT_COLORS[index % ACCENT_COLORS.length];

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.7)}
      style={{ display: "flex", gap: 0, alignItems: "stretch" }}
    >
      {/* ── Timeline spine ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "56px",
          flexShrink: 0,
        }}
      >
        {/* Icon bubble */}
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: hovered
              ? `radial-gradient(circle, ${color}25, ${iconBg})`
              : iconBg,
            border: `2px solid ${hovered ? color : `${color}44`}`,
            boxShadow: hovered
              ? `0 0 20px ${color}55, 0 0 40px ${color}22`
              : `0 0 8px ${color}22`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "24px",
            flexShrink: 0,
            zIndex: 1,
            transition: "all 0.35s ease",
          }}
        >
          <img
            src={icon}
            alt={companyName}
            style={{ width: "60%", height: "60%", objectFit: "contain" }}
          />
        </div>

        {/* Connector line */}
        {!isLast && (
          <div
            style={{
              flex: 1,
              width: "2px",
              background: `linear-gradient(to bottom, ${color}55, ${
                ACCENT_COLORS[(index + 1) % ACCENT_COLORS.length]
              }33)`,
              marginTop: "6px",
              minHeight: "40px",
            }}
          />
        )}
      </div>

      {/* ── Card ── */}
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          flex: 1,
          marginLeft: "20px",
          marginBottom: !isLast ? "28px" : 0,
          position: "relative",
          background: hovered
            ? `linear-gradient(135deg, ${color}0d 0%, rgba(10,18,32,0.98) 60%)`
            : "rgba(10,18,32,0.95)",
          border: `1px solid ${hovered ? `${color}55` : `${color}18`}`,
          borderRadius: "14px",
          overflow: "hidden",
          transition: "all 0.35s ease",
          transform: hovered ? "translateX(6px)" : "translateX(0)",
          boxShadow: hovered
            ? `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${color}12`
            : "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            height: "2px",
            background: `linear-gradient(to right, ${color}, ${color}33, transparent)`,
            opacity: hovered ? 1 : 0.45,
            transition: "opacity 0.35s",
          }}
        />

        {/* Subtle grid bg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,245,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.012) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            pointerEvents: "none",
          }}
        />

        {/* Corner glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "80px",
            height: "80px",
            background: `radial-gradient(circle at top right, ${color}12, transparent 70%)`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.35s ease",
            pointerEvents: "none",
          }}
        />

        <div style={{ padding: "22px 28px 26px", position: "relative" }}>
          {/* Date tag */}
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              letterSpacing: "2px",
              color: hovered ? color : `${color}77`,
              display: "inline-block",
              marginBottom: "10px",
              transition: "color 0.3s",
            }}
          >
            {date}
          </span>

          {/* Title + company row */}
          <div style={{ marginBottom: "16px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 800,
                color: hovered ? "#fff" : "rgba(215,225,245,0.95)",
                marginBottom: "4px",
                lineHeight: 1.25,
                fontFamily: "sans-serif",
                transition: "color 0.3s",
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontSize: "13px",
                fontFamily: "'JetBrains Mono', monospace",
                color: hovered ? color : `${color}99`,
                fontWeight: 600,
                transition: "color 0.3s",
              }}
            >
              {companyName}
            </p>
          </div>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background: `linear-gradient(to right, ${color}35, transparent)`,
              marginBottom: "16px",
              opacity: hovered ? 0.8 : 0.3,
              transition: "opacity 0.35s",
            }}
          />

          {/* Bullet points */}
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {points.map((point, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  fontSize: "13.5px",
                  lineHeight: 1.7,
                  color: hovered
                    ? "rgba(215,222,240,0.9)"
                    : "rgba(170,180,215,0.75)",
                  fontFamily: "sans-serif",
                  transition: "color 0.3s",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    marginTop: "6px",
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: hovered ? color : `${color}66`,
                    boxShadow: hovered ? `0 0 6px ${color}` : "none",
                    transition: "all 0.3s",
                  }}
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />
      <div style={{ marginTop: "40px", maxWidth: "820px", width: "100%" }}>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            index={index}
            isLast={index === experiences.length - 1}
            {...exp}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
