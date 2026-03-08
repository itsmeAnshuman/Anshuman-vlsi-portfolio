import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { testimonials } from "../../constants";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";
import { config } from "../../constants/config";
import { SectionWrapper } from "../../hoc";
import { useState } from "react";

const COLORS = ["#915EFF", "#00f5ff", "#00ff88"];

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index, testimonial, name, designation, company, image,
}) => {
  const [hovered, setHovered] = useState(false);
  const color = COLORS[index % COLORS.length];

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.35, 0.75)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(14,20,40,0.98)" : "rgba(10,14,30,0.95)",
        border: `1px solid ${hovered ? `${color}44` : "rgba(255,255,255,0.06)"}`,
        borderRadius: "16px",
        overflow: "hidden",
        transition: "all 0.35s ease",
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${color}10` : "0 4px 24px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
    >
      {/* Header band — profile prominent */}
      <div style={{
        background: hovered
          ? `linear-gradient(135deg, ${color}18, rgba(10,14,30,0.8))`
          : "rgba(255,255,255,0.02)",
        borderBottom: `1px solid ${hovered ? `${color}25` : "rgba(255,255,255,0.05)"}`,
        padding: "28px 28px 24px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        transition: "all 0.35s ease",
      }}>
        {/* Large avatar */}
        <div style={{
          width: "72px", height: "72px",
          borderRadius: "50%",
          flexShrink: 0,
          padding: "3px",
          background: hovered
            ? `linear-gradient(135deg, ${color}, ${color}55)`
            : `linear-gradient(135deg, ${color}44, ${color}22)`,
          boxShadow: hovered ? `0 0 24px ${color}55` : "none",
          transition: "all 0.35s ease",
        }}>
          <img src={image} alt={name} style={{
            width: "100%", height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid rgba(10,14,30,0.8)",
          }} />
        </div>

        <div style={{ flex: 1 }}>
          {/* Name — large and prominent */}
          <h3 style={{
            fontSize: "18px",
            fontWeight: 800,
            color: hovered ? "#fff" : "rgba(220,225,245,0.95)",
            marginBottom: "4px",
            lineHeight: 1.2,
            transition: "color 0.3s",
          }}>{name}</h3>
          <p style={{
            fontSize: "12px",
            color: hovered ? color : `${color}88`,
            fontWeight: 600,
            marginBottom: "2px",
            transition: "color 0.3s",
          }}>{designation}</p>
          <p style={{ fontSize: "11px", color: "rgba(160,165,200,0.5)" }}>{company}</p>
        </div>

        {/* Verified badge */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
        }}>
          <div style={{
            width: "36px", height: "36px",
            borderRadius: "50%",
            background: hovered ? `${color}20` : "rgba(255,255,255,0.04)",
            border: `1.5px solid ${hovered ? color : `${color}33`}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "16px",
            boxShadow: hovered ? `0 0 12px ${color}50` : "none",
            transition: "all 0.35s ease",
          }}>✓</div>
          <span style={{ fontSize: "8px", fontFamily: "'JetBrains Mono', monospace", color: hovered ? `${color}99` : "rgba(180,180,220,0.3)", letterSpacing: "1px" }}>VERIFIED</span>
        </div>
      </div>

      {/* Quote body */}
      <div style={{ padding: "24px 28px 28px", position: "relative" }}>
        {/* Big quote mark */}
        <span style={{
          position: "absolute",
          top: "10px", left: "20px",
          fontSize: "60px",
          fontFamily: "Georgia, serif",
          color: hovered ? `${color}30` : `${color}15`,
          lineHeight: 1,
          transition: "color 0.35s",
          userSelect: "none",
          pointerEvents: "none",
        }}>"</span>

        <p style={{
          fontSize: "14px",
          lineHeight: 1.8,
          color: hovered ? "rgba(215,222,240,0.9)" : "rgba(175,185,215,0.75)",
          paddingTop: "28px",
          paddingLeft: "8px",
          fontStyle: "italic",
          transition: "color 0.35s ease",
        }}>{testimonial}</p>

        {/* Bottom accent */}
        <div style={{
          marginTop: "20px",
          height: "2px",
          background: `linear-gradient(to right, ${color}50, transparent)`,
          borderRadius: "2px",
          opacity: hovered ? 1 : 0.3,
          transition: "opacity 0.35s",
        }} />
      </div>
    </motion.div>
  );
};

const Feedbacks = () => (
  <>
    <Header useMotion={true} {...config.sections.feedbacks} />
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(min(340px, 100%), 1fr))",
      gap: "24px",
      marginTop: "44px",
    }}>
      {testimonials.map((t, i) => (
        <FeedbackCard key={t.name} index={i} {...t} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Feedbacks, "feedbacks");
