import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { github } from "../../assets";
import { useState, useEffect } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

const projectsData = [
  {
    title: "1X3 Router RTL Design & Verification",
    date: "SEP 2025",
    bullets: [
      "Designed RTL architecture for a 1×3 packet router in SystemVerilog with FSM-based control logic and address decoding.",
      "Implemented three 16-deep FIFO buffers for output ports with packet validity detection and busy signal management.",
      "Developed modular blocks including synchronizer, FIFO controller, and register interface for scalable packet routing.",
      "Implemented parity checking and timeout logic to ensure reliable packet transmission.",
      "Built a layered SystemVerilog testbench with generator, driver, monitor, and scoreboard using mailbox-based communication.",
      "Verified router functionality across 9 directed test scenarios including valid packet routing, FIFO overflow, and reset conditions.",
    ],
    visual: "router",
    stack: ["SystemVerilog", "UVM", "FSM", "Xilinx Vivado"],
    github: "https://github.com/itsmeAnshuman/1X3-router-packet-router-",
  },
  {
    title: "AMBA APB Protocol-Based RAM Controller",
    date: "JUN 2025",
    bullets: [
      "Designed a 32×32-bit APB slave RAM controller compliant with AMBA APB protocol using Verilog/SystemVerilog.",
      "Implemented FSM-based control logic supporting IDLE, SETUP, and ENABLE phases for APB transactions.",
      "Developed read/write logic with address decoding and PSLVERR error response handling.",
      "Integrated memory array with synchronous read/write operations and protocol-controlled data transfer.",
      "Built a layered SystemVerilog verification environment including generator, driver, monitor, and scoreboard.",
      "Verified 10+ APB transactions covering read, write, reset behavior, and protocol timing scenarios.",
    ],
    visual: "apb",
    stack: ["Verilog HDL", "SystemVerilog", "APB Protocol", "Xilinx Vivado"],
    github: "https://github.com/itsmeAnshuman/AMBA-APB-Protocol",
  },
  {
    title: "Universal Asynchronous Receiver Transmitter",
    date: "MAR 2025",
    bullets: [
      "Designed RTL architecture for a full-duplex UART transmitter and receiver supporting configurable baud rate.",
      "Implemented start bit, data frame, optional parity bit, and stop bit handling for serial communication.",
      "Developed baud rate generator and shift register logic for serial data transmission and reception.",
      "Designed FSM-based TX and RX modules for frame control and synchronization.",
      "Built a layered SystemVerilog testbench with driver, monitor, and scoreboard for functional verification.",
      "Verified UART operation across multiple test scenarios including valid transmission, parity checking, and reset conditions.",
    ],
    visual: "uart",
    stack: ["Verilog HDL", "SystemVerilog", "UART"],
    github: "https://github.com/itsmeAnshuman/UART-Protocol-Verification-using-Systemverilog",
  },
  {
    title: "8-bit Asynchronous FIFO Buffer",
    date: "DEC 2024",
    bullets: [
      "Designed an 8-bit asynchronous FIFO for reliable data transfer between independent write and read clock domains.",
      "Implemented separate read and write pointers with Gray-code synchronization to safely handle clock domain crossing (CDC).",
      "Developed dual-port memory architecture with independent WR_CLK and RD_CLK control.",
      "Implemented FIFO status logic including FULL, EMPTY, overflow and underflow detection.",
      "Built pointer synchronization logic using two-stage synchronizers to mitigate metastability issues.",
      "Verified functionality using a layered SystemVerilog testbench covering overflow, underflow, reset behavior and random traffic scenarios.",
    ],
    visual: "fifo",
    stack: ["Verilog HDL", "SystemVerilog", "CDC", "Xilinx Vivado"],
    github: "https://github.com/itsmeAnshuman/Asynchronous-FIFO-using-System-Verification",
  },
];

/* ── Animated SVG visuals ── */
const ProjectVisual = ({ type }: { type: string }) => {
  const isMobile = useIsMobile();
  const base: React.CSSProperties = {
    width: "100%",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  };

  if (isMobile) {
    const colors: Record<string, string> = { router: "#00f5ff", apb: "#915EFF", uart: "#00ff88", fifo: "#f5a623" };
    const labels: Record<string, string> = { router: "1×3 ROUTER", apb: "APB RAM", uart: "UART", fifo: "ASYNC FIFO" };
    const color = colors[type] || "#00f5ff";
    return (
      <div style={{ ...base, background: "linear-gradient(135deg, #060e1c 0%, #0a1628 100%)" }}>
        <div style={{ border: `1px solid ${color}`, borderRadius: "8px", padding: "12px 24px", color, fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", letterSpacing: "2px", opacity: 0.85 }}>
          {labels[type] || type.toUpperCase()}
        </div>
      </div>
    );
  }

  if (type === "router") return (
    <div style={base}>
      <svg width="200" height="180" viewBox="0 0 200 180">
        <defs>
          <radialGradient id="rg1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#915EFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1a0533" stopOpacity="0.3" />
          </radialGradient>
          <filter id="glow1">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <circle cx="100" cy="90" r="22" fill="url(#rg1)" filter="url(#glow1)" opacity="0.95">
          <animate attributeName="r" values="20;24;20" dur="2s" repeatCount="indefinite" />
        </circle>
        {[[-60, -50], [70, -50], [0, 65]].map(([dx, dy], i) => (
          <g key={i}>
            <line x1="100" y1="90" x2={100 + dx} y2={90 + dy}
              stroke="#00f5ff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5">
              <animate attributeName="stroke-dashoffset" values="0;-14" dur={`${1.2 + i * 0.3}s`} repeatCount="indefinite" />
            </line>
            <circle cx={100 + dx} cy={90 + dy} r="12" fill="#0a1628" stroke="#915EFF" strokeWidth="1.5" filter="url(#glow1)">
              <animate attributeName="stroke" values="#915EFF;#00f5ff;#915EFF" dur={`${1.5 + i * 0.4}s`} repeatCount="indefinite" />
            </circle>
            <text x={100 + dx} y={90 + dy + 4} textAnchor="middle" fontSize="8" fill="#00ff88" fontFamily="monospace">{`OUT${i}`}</text>
            <circle r="3" fill="#00f5ff" opacity="0.9">
              <animateMotion dur={`${1.4 + i * 0.35}s`} repeatCount="indefinite"
                path={`M100,90 L${100 + dx},${90 + dy}`} />
            </circle>
          </g>
        ))}
        <text x="100" y="94" textAnchor="middle" fontSize="9" fill="#fff" fontFamily="monospace" fontWeight="bold">FSM</text>
        {[[-60, -50], [70, -50], [0, 65]].map(([dx, dy], i) => (
          <text key={i} x={100 + dx} y={90 + dy + 22} textAnchor="middle" fontSize="7" fill="rgba(0,245,255,0.6)" fontFamily="monospace">FIFO{i}</text>
        ))}
      </svg>
    </div>
  );

  if (type === "apb") return (
    <div style={base}>
      <svg width="210" height="180" viewBox="0 0 210 180">
        <defs>
          <filter id="glow2">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#00f5ff" />
          </marker>
        </defs>
        {[
          { label: "IDLE", x: 30, y: 30, color: "#00ff88" },
          { label: "SETUP", x: 140, y: 30, color: "#00f5ff" },
          { label: "ENABLE", x: 140, y: 120, color: "#915EFF" },
        ].map(({ label, x, y, color }, i) => (
          <g key={i}>
            <rect x={x - 28} y={y - 16} width="56" height="32" rx="6"
              fill="rgba(10,22,40,0.8)" stroke={color} strokeWidth="1.5" filter="url(#glow2)">
              <animate attributeName="stroke-opacity" values="1;0.4;1" dur={`${1.5 + i * 0.5}s`} repeatCount="indefinite" />
            </rect>
            <text x={x} y={y + 5} textAnchor="middle" fontSize="9" fill={color} fontFamily="monospace" fontWeight="bold">{label}</text>
          </g>
        ))}
        <path d="M58,30 L112,30" stroke="#00f5ff" strokeWidth="1.5" markerEnd="url(#arr)" fill="none" strokeDasharray="4 2">
          <animate attributeName="stroke-dashoffset" values="0;-12" dur="1s" repeatCount="indefinite" />
        </path>
        <path d="M140,46 L140,104" stroke="#915EFF" strokeWidth="1.5" fill="none" strokeDasharray="4 2">
          <animate attributeName="stroke-dashoffset" values="0;-12" dur="1.3s" repeatCount="indefinite" />
        </path>
        <path d="M112,120 L58,46" stroke="rgba(0,245,255,0.4)" strokeWidth="1" fill="none" strokeDasharray="3 3">
          <animate attributeName="stroke-dashoffset" values="0;-12" dur="2s" repeatCount="indefinite" />
        </path>
        <text x="85" y="22" textAnchor="middle" fontSize="7" fill="rgba(0,245,255,0.7)" fontFamily="monospace">PSEL</text>
        <text x="155" y="78" textAnchor="start" fontSize="7" fill="rgba(145,94,255,0.8)" fontFamily="monospace">PENABLE</text>
        <rect x="30" y="110" width="60" height="40" rx="4" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.3)" strokeWidth="1" />
        <text x="60" y="126" textAnchor="middle" fontSize="8" fill="#00ff88" fontFamily="monospace">APB RAM</text>
        <text x="60" y="140" textAnchor="middle" fontSize="7" fill="rgba(0,255,136,0.6)" fontFamily="monospace">32×32-bit</text>
      </svg>
    </div>
  );

  if (type === "uart") return (
    <div style={base}>
      <svg width="210" height="180" viewBox="0 0 210 180">
        <defs>
          <filter id="glow3">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <rect x="10" y="70" width="60" height="40" rx="6" fill="rgba(0,245,255,0.08)" stroke="#00f5ff" strokeWidth="1.5" filter="url(#glow3)" />
        <text x="40" y="87" textAnchor="middle" fontSize="10" fill="#00f5ff" fontFamily="monospace" fontWeight="bold">TX</text>
        <text x="40" y="101" textAnchor="middle" fontSize="7" fill="rgba(0,245,255,0.6)" fontFamily="monospace">Transmit</text>
        <rect x="140" y="70" width="60" height="40" rx="6" fill="rgba(145,94,255,0.08)" stroke="#915EFF" strokeWidth="1.5" filter="url(#glow3)" />
        <text x="170" y="87" textAnchor="middle" fontSize="10" fill="#915EFF" fontFamily="monospace" fontWeight="bold">RX</text>
        <text x="170" y="101" textAnchor="middle" fontSize="7" fill="rgba(145,94,255,0.6)" fontFamily="monospace">Receive</text>
        {[0,1,2,3,4,5,6,7].map((i) => {
          const bits = [0,1,0,1,1,0,1,0];
          const x = 75 + i * 8;
          const y = bits[i] ? 78 : 102;
          const nextBit = bits[(i + 1) % 8];
          const ny = nextBit ? 78 : 102;
          return (
            <g key={i}>
              <line x1={x} y1={y} x2={x+8} y2={y} stroke="#00ff88" strokeWidth="1.5">
                <animate attributeName="opacity" values="1;0.4;1" dur={`${0.8+i*0.1}s`} repeatCount="indefinite" />
              </line>
              {y !== ny && <line x1={x+8} y1={y} x2={x+8} y2={ny} stroke="#00ff88" strokeWidth="1.5" opacity="0.5" />}
            </g>
          );
        })}
        <text x="105" y="125" textAnchor="middle" fontSize="8" fill="rgba(0,255,136,0.7)" fontFamily="monospace">115200 baud</text>
        <text x="40" y="130" textAnchor="middle" fontSize="7" fill="rgba(0,245,255,0.5)" fontFamily="monospace">START/STOP</text>
        <text x="170" y="130" textAnchor="middle" fontSize="7" fill="rgba(145,94,255,0.5)" fontFamily="monospace">PARITY</text>
        {[0,1,2,3,4,5].map(i => (
          <g key={i}>
            <line x1={75+i*10} y1="145" x2={75+i*10+5} y2="145" stroke="rgba(0,245,255,0.35)" strokeWidth="1" />
            <line x1={75+i*10+5} y1="135" x2={75+i*10+5} y2="155" stroke="rgba(0,245,255,0.35)" strokeWidth="1" />
            <line x1={75+i*10+5} y1="155" x2={75+i*10+10} y2="155" stroke="rgba(0,245,255,0.35)" strokeWidth="1" />
          </g>
        ))}
        <text x="10" y="160" fontSize="7" fill="rgba(0,245,255,0.4)" fontFamily="monospace">clk</text>
      </svg>
    </div>
  );

  if (type === "fifo") return (
    <div style={base}>
      <svg width="210" height="180" viewBox="0 0 210 180">
        <defs>
          <filter id="glow4">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {[0,1,2,3,4,5].map(i => (
          <rect key={i} x="75" y={20+i*22} width="60" height="18" rx="3"
            fill={i < 4 ? "rgba(0,245,255,0.12)" : "rgba(10,22,40,0.5)"}
            stroke={i < 4 ? "rgba(0,245,255,0.4)" : "rgba(145,94,255,0.2)"}
            strokeWidth="1" filter="url(#glow4)">
            {i < 4 && <animate attributeName="fill-opacity" values="0.12;0.22;0.12" dur={`${1+i*0.3}s`} repeatCount="indefinite" />}
          </rect>
        ))}
        {[0,1,2,3].map(i => (
          <text key={i} x="105" y={33+i*22} textAnchor="middle" fontSize="8" fill="#00f5ff" fontFamily="monospace">{`D[${3-i}]`}</text>
        ))}
        {[4,5].map(i => (
          <text key={i} x="105" y={33+i*22} textAnchor="middle" fontSize="8" fill="rgba(145,94,255,0.3)" fontFamily="monospace">empty</text>
        ))}
        <text x="62" y="29" textAnchor="end" fontSize="8" fill="#00ff88" fontFamily="monospace">WR►</text>
        <text x="148" y="95" textAnchor="start" fontSize="8" fill="#915EFF" fontFamily="monospace">◄RD</text>
        <text x="20" y="90" fontSize="7" fill="rgba(0,245,255,0.5)" fontFamily="monospace" transform="rotate(-90,20,90)">WR_CLK</text>
        <text x="190" y="90" fontSize="7" fill="rgba(145,94,255,0.5)" fontFamily="monospace" transform="rotate(90,190,90)">RD_CLK</text>
        <text x="105" y="165" textAnchor="middle" fontSize="8" fill="rgba(0,255,136,0.6)" fontFamily="monospace">Gray Code Sync</text>
      </svg>
    </div>
  );

  return null;
};

const getTagStyle = (tag: string) => {
  if (["SystemVerilog", "UVM"].includes(tag))
    return { bg: "rgba(145,94,255,0.07)", border: "rgba(145,94,255,0.25)", color: "#b48aff", glowColor: "rgba(145,94,255,0.6)" };
  if (["APB Protocol", "UART", "CDC", "FSM"].includes(tag))
    return { bg: "rgba(0,245,255,0.07)", border: "rgba(0,245,255,0.25)", color: "#00f5ff", glowColor: "rgba(0,245,255,0.6)" };
  return { bg: "rgba(0,255,136,0.07)", border: "rgba(0,255,136,0.25)", color: "#00ff88", glowColor: "rgba(0,255,136,0.6)" };
};

/* ── GitHub button with default glow + click ripple ── */
const GithubButton = ({ link }: { link: string }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      onClick={e => { e.stopPropagation(); setClicked(true); setTimeout(() => setClicked(false), 600); }}
      style={{
        position: "absolute",
        top: "12px",
        right: "12px",
        width: "38px",
        height: "38px",
        borderRadius: "50%",
        background: "rgba(0,0,0,0.65)",
        border: "1.5px solid rgba(0,245,255,0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(8px)",
        zIndex: 10,
        textDecoration: "none",
        boxShadow: "0 0 0 2px rgba(0,245,255,0.6), 0 0 12px rgba(0,245,255,0.5), 0 0 26px rgba(0,245,255,0.25)",
        transition: "all 0.25s ease",
        transform: clicked ? "scale(0.82)" : "scale(1)",
        overflow: "hidden",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(0,245,255,0.15)";
        el.style.borderColor = "#00f5ff";
        el.style.boxShadow = "0 0 0 2.5px #00f5ff, 0 0 20px rgba(0,245,255,0.9), 0 0 45px rgba(0,245,255,0.45)";
        el.style.transform = "scale(1.13)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(0,0,0,0.65)";
        el.style.borderColor = "rgba(0,245,255,0.55)";
        el.style.boxShadow = "0 0 0 2px rgba(0,245,255,0.6), 0 0 12px rgba(0,245,255,0.5), 0 0 26px rgba(0,245,255,0.25)";
        el.style.transform = "scale(1)";
      }}
    >
      {clicked && (
        <span style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "rgba(0,245,255,0.3)",
          animation: "ghRipple 0.55s ease-out forwards",
          pointerEvents: "none",
        }} />
      )}
      <img
        src={github}
        alt="github"
        style={{ width: "18px", height: "18px", objectFit: "contain", filter: "invert(1) brightness(2) drop-shadow(0 0 4px rgba(0,245,255,0.8))", position: "relative", zIndex: 1 }}
      />
      <style>{`@keyframes ghRipple { 0% { transform: scale(1); opacity: 0.65; } 100% { transform: scale(2.4); opacity: 0; } }`}</style>
    </a>
  );
};

const ProjectCard = ({ index, title, date, bullets, visual, stack, github: ghLink }: any) => {
  const isMobile = useIsMobile();
  const cardContent = (
    <Tilt glareEnable={!isMobile} tiltEnable={!isMobile} tiltMaxAngleX={8} tiltMaxAngleY={8} glareColor="#00f5ff" glareMaxOpacity={0.06} style={{ height: "100%", display: "block", transformStyle: isMobile ? "flat" : "preserve-3d" }}>
      <div
        style={{
          background: "linear-gradient(145deg, #0d1b2e 0%, #0a1220 60%, #0d1428 100%)",
          border: "1px solid rgba(0,245,255,0.12)",
          borderRadius: "16px",
          overflow: "hidden",
          position: "relative",
          transition: "all 0.4s ease",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(0,245,255,0.4)";
          el.style.boxShadow = "0 24px 60px rgba(0,0,0,0.6), 0 0 40px rgba(0,245,255,0.08)";
          el.style.transform = "translateY(-6px)";
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(0,245,255,0.12)";
          el.style.boxShadow = "none";
          el.style.transform = "translateY(0)";
        }}
      >
        {/* Visual area */}
        <div style={{
          position: "relative",
          background: "linear-gradient(135deg, #060e1c 0%, #0a1628 50%, #07111f 100%)",
          borderBottom: "1px solid rgba(0,245,255,0.08)",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }} />
          <ProjectVisual type={visual} />
          <GithubButton link={ghLink} />
        </div>

        {/* Content area */}
        <div style={{ padding: "22px 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Date */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "8px" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#00ff88", letterSpacing: "2px" }}>{date}</span>
          </div>

          {/* Title */}
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "14px", lineHeight: 1.4, fontFamily: "sans-serif" }}>
            {title}
          </h3>

          {/* Bullets */}
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px 0", flex: 1 }}>
            {bullets.map((b: string, i: number) => (
              <li key={i} style={{ display: "flex", gap: "8px", marginBottom: "7px", position: "relative", paddingLeft: "14px" }}>
                <span style={{ position: "absolute", left: 0, top: "6px", color: "#00f5ff", fontSize: "7px" }}>◆</span>
                <span style={{ fontSize: "13px", color: "rgba(180,200,220,0.8)", lineHeight: 1.65 }}>{b}</span>
              </li>
            ))}
          </ul>

          {/* Stack tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
            {stack.map((s: string, i: number) => {
              const ts = getTagStyle(s);
              return (
                <span key={i}
                  style={{
                    background: ts.bg,
                    border: `1px solid ${ts.border}`,
                    color: ts.color,
                    padding: "4px 11px",
                    fontSize: "11px",
                    fontFamily: "'JetBrains Mono', monospace",
                    borderRadius: "4px",
                    transition: "all 0.25s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = `0 0 10px ${ts.glowColor}, 0 0 24px ${ts.glowColor}`;
                    el.style.borderColor = ts.color;
                    el.style.background = ts.bg.replace("0.07", "0.2");
                    el.style.color = "#fff";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = "none";
                    el.style.borderColor = ts.border;
                    el.style.background = ts.bg;
                    el.style.color = ts.color;
                    el.style.transform = "translateY(0)";
                  }}
                >#{s}</span>
              );
            })}
          </div>
        </div>
      </div>
    </Tilt>
  );
  if (isMobile) return <div style={{ height: "100%" }}>{cardContent}</div>;
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)} style={{ height: "100%" }}>
      {cardContent}
    </motion.div>
  );
};

const Works = () => (
  <>
    <Header useMotion={true} {...config.sections.works} />
    <div className="flex w-full">
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]">
        {config.sections.works.content}
      </motion.p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(320px, 100%), 1fr))", gap: "28px", marginTop: "48px", width: "100%", alignItems: "start" }}>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} index={index} {...project} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Works, "work");
