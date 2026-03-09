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
    title: "AXI4-Lite Memory Module",
    date: "JAN 2026",
    bullets: [
      "Designed a parameterized AXI4-Lite slave memory module in SystemVerilog supporting 32-bit data transactions and memory-mapped addressing.",
      "Implemented AXI4-Lite protocol handshake mechanisms (AWVALID/AWREADY, WVALID/WREADY, ARVALID/ARREADY) ensuring compliant read and write transactions.",
      "Developed separate FSMs for read and write channels to manage address capture, data transfer, and response generation.",
      "Implemented multi-block memory architecture (4 × 64 × 32-bit) with address decoding for block selection.",
      "Enabled byte-level write operations using WSTRB signals, supporting partial data updates within memory words.",
      "Verified functionality using a Verilog-based testbench, validating read/write transactions and protocol responses through waveform analysis.",
    ],
    visual: "axi4",
    stack: ["SystemVerilog", "Verilog HDL", "AXI4-Lite", "Xilinx Vivado"],
    github: "https://github.com/itsmeAnshuman/AXI4-LITE-Memory-using-verilog",
  },
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
  {
    title: "Pipelined MIPS32 Processor",
    date: "AUG 2024",
    bullets: [
      "Designed a 5-stage pipelined MIPS32 processor in Verilog implementing Instruction Fetch (IF), Decode (ID), Execute (EX), Memory (MEM), and Write-Back (WB) stages.",
      "Implemented two-phase clocking architecture (clk1, clk2) to coordinate pipeline execution and maintain stage timing separation.",
      "Developed pipeline registers (IF/ID, ID/EX, EX/MEM, MEM/WB) to enable instruction flow and data propagation across pipeline stages.",
      "Implemented support for R-type, immediate, load/store, and branch instructions including ADD, SUB, AND, OR, SLT, MUL, LW, SW, BEQZ, and BNEQZ.",
      "Designed branch evaluation and control logic to manage conditional branching and maintain correct program flow.",
      "Integrated 32×32 register file and 1024-word memory, and verified processor functionality using assembly instruction sequences and waveform simulation.",
    ],
    visual: "mips",
    stack: ["Verilog HDL", "MIPS32", "Pipelining", "Xilinx Vivado"],
    github: "https://github.com/itsmeAnshuman/MIPS-32-bit-processor-implementaion",
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
    const colors: Record<string, string> = { router: "#00f5ff", axi4: "#ff6b9d", apb: "#915EFF", uart: "#00ff88", fifo: "#f5a623", mips: "#ffd93d" };
    const labels: Record<string, string> = { router: "1×3 ROUTER", axi4: "AXI4-LITE", apb: "APB RAM", uart: "UART", fifo: "ASYNC FIFO", mips: "MIPS32" };
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
      <svg width="260" height="180" viewBox="0 0 260 180" style={{ margin: "0 auto", display: "block" }}>
        <defs>
          <filter id="glow1">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <marker id="arrR" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#00f5ff" />
          </marker>
          <marker id="arrRG" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#00ff88" />
          </marker>
        </defs>

        {/* INPUT / Modem block */}
        <rect x="4" y="68" width="46" height="44" rx="6"
          fill="rgba(255,107,157,0.08)" stroke="#ff6b9d" strokeWidth="1.5" filter="url(#glow1)">
          <animate attributeName="stroke-opacity" values="1;0.4;1" dur="1.8s" repeatCount="indefinite" />
        </rect>
        <text x="27" y="86" textAnchor="middle" fontSize="8" fill="#ff6b9d" fontFamily="monospace" fontWeight="bold">INPUT</text>
        <text x="27" y="98" textAnchor="middle" fontSize="7" fill="rgba(255,107,157,0.6)" fontFamily="monospace">packet</text>
        <text x="27" y="108" textAnchor="middle" fontSize="7" fill="rgba(255,107,157,0.45)" fontFamily="monospace">stream</text>
        {/* Incoming data dot */}
        <circle r="3" fill="#ff6b9d" opacity="0.9" filter="url(#glow1)">
          <animateMotion dur="1.2s" repeatCount="indefinite" path="M4,90 L4,90" />
        </circle>

        {/* Arrow: Input → Reg */}
        <line x1="50" y1="90" x2="70" y2="90"
          stroke="#ff6b9d" strokeWidth="1.4" strokeDasharray="4 2" markerEnd="url(#arrR)">
          <animate attributeName="stroke-dashoffset" values="0;-12" dur="0.7s" repeatCount="indefinite" />
        </line>
        <circle r="2.5" fill="#ff6b9d" opacity="0.85" filter="url(#glow1)">
          <animateMotion dur="0.9s" repeatCount="indefinite" path="M50,90 L70,90" />
        </circle>

        {/* REGISTER block */}
        <rect x="70" y="62" width="48" height="56" rx="6"
          fill="rgba(255,217,61,0.07)" stroke="#ffd93d" strokeWidth="1.5" filter="url(#glow1)">
          <animate attributeName="stroke-opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
        </rect>
        <text x="94" y="82" textAnchor="middle" fontSize="8" fill="#ffd93d" fontFamily="monospace" fontWeight="bold">REG</text>
        <text x="94" y="94" textAnchor="middle" fontSize="7" fill="rgba(255,217,61,0.65)" fontFamily="monospace">header</text>
        <text x="94" y="105" textAnchor="middle" fontSize="7" fill="rgba(255,217,61,0.5)" fontFamily="monospace">parity</text>
        <text x="94" y="113" textAnchor="middle" fontSize="6.5" fill="rgba(255,217,61,0.35)" fontFamily="monospace">timeout</text>

        {/* Arrow: Reg → FSM */}
        <line x1="118" y1="90" x2="138" y2="90"
          stroke="#ffd93d" strokeWidth="1.4" strokeDasharray="4 2" markerEnd="url(#arrR)">
          <animate attributeName="stroke-dashoffset" values="0;-12" dur="0.8s" repeatCount="indefinite" />
        </line>
        <circle r="2.5" fill="#ffd93d" opacity="0.85" filter="url(#glow1)">
          <animateMotion dur="1s" repeatCount="indefinite" path="M118,90 L138,90" />
        </circle>

        {/* FSM block — center */}
        <rect x="138" y="58" width="52" height="64" rx="7"
          fill="rgba(145,94,255,0.12)" stroke="#915EFF" strokeWidth="2" filter="url(#glow1)">
          <animate attributeName="stroke-opacity" values="1;0.45;1" dur="1.6s" repeatCount="indefinite" />
        </rect>
        <text x="164" y="80" textAnchor="middle" fontSize="9" fill="#fff" fontFamily="monospace" fontWeight="bold">FSM</text>
        <text x="164" y="93" textAnchor="middle" fontSize="7" fill="rgba(145,94,255,0.8)" fontFamily="monospace">addr</text>
        <text x="164" y="104" textAnchor="middle" fontSize="7" fill="rgba(145,94,255,0.65)" fontFamily="monospace">decode</text>
        <text x="164" y="114" textAnchor="middle" fontSize="6.5" fill="rgba(145,94,255,0.45)" fontFamily="monospace">ctrl</text>

        {/* 3 FIFO outputs — top-right, mid-right, bottom-right */}
        {[
          { label: "OUT0", sub: "FIFO0", y: 28,  color: "#00f5ff" },
          { label: "OUT1", sub: "FIFO1", y: 82,  color: "#00f5ff" },
          { label: "OUT2", sub: "FIFO2", y: 136, color: "#00f5ff" },
        ].map(({ label, sub, y, color }, i) => (
          <g key={i}>
            {/* Line from FSM right edge to FIFO */}
            <line
              x1="190" y1="90"
              x2="220" y2={y + 16}
              stroke={color} strokeWidth="1.3" strokeDasharray="4 2" markerEnd="url(#arrRG)" opacity="0.7">
              <animate attributeName="stroke-dashoffset" values="0;-12" dur={`${1 + i * 0.3}s`} repeatCount="indefinite" />
            </line>
            {/* Moving packet dot */}
            <circle r="3" fill={color} opacity="0.9" filter="url(#glow1)">
              <animateMotion dur={`${1.2 + i * 0.35}s`} begin={`${i * 0.4}s`} repeatCount="indefinite"
                path={`M190,90 L220,${y + 16}`} />
            </circle>
            {/* FIFO box */}
            <rect x="220" y={y} width="36" height="32" rx="5"
              fill={`${color}0d`} stroke={color} strokeWidth="1.3" filter="url(#glow1)">
              <animate attributeName="stroke-opacity" values="1;0.35;1" dur={`${1.5 + i * 0.4}s`} repeatCount="indefinite" />
            </rect>
            <text x="238" y={y + 14} textAnchor="middle" fontSize="8" fill={color} fontFamily="monospace" fontWeight="bold">{label}</text>
            <text x="238" y={y + 25} textAnchor="middle" fontSize="6.5" fill={`${color}88`} fontFamily="monospace">{sub}</text>
          </g>
        ))}
      </svg>
    </div>
  );

  if (type === "axi4") return (
    <div style={base}>
      <svg width="260" height="180" viewBox="0 0 260 180" style={{ margin: "0 auto", display: "block" }}>
        <defs>
          <filter id="glowAxi">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <marker id="arrAxi" markerWidth="7" markerHeight="7" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#ff6b9d" />
          </marker>
          <marker id="arrAxiB" markerWidth="7" markerHeight="7" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#915EFF" />
          </marker>
          <marker id="arrAxiC" markerWidth="7" markerHeight="7" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#00f5ff" />
          </marker>
        </defs>

        {/* Master block — larger, vertically centered */}
        <rect x="10" y="28" width="72" height="110" rx="9"
          fill="rgba(255,107,157,0.1)" stroke="#ff6b9d" strokeWidth="2" filter="url(#glowAxi)">
          <animate attributeName="stroke-opacity" values="1;0.45;1" dur="2s" repeatCount="indefinite" />
        </rect>
        <text x="46" y="72" textAnchor="middle" fontSize="11" fill="#ff6b9d" fontFamily="monospace" fontWeight="bold">AXI4</text>
        <text x="46" y="88" textAnchor="middle" fontSize="11" fill="#ff6b9d" fontFamily="monospace" fontWeight="bold">MASTER</text>
        <text x="46" y="106" textAnchor="middle" fontSize="8" fill="rgba(255,107,157,0.6)" fontFamily="monospace">M_AXI</text>
        <text x="46" y="120" textAnchor="middle" fontSize="7.5" fill="rgba(255,107,157,0.4)" fontFamily="monospace">initiator</text>

        {/* Slave block — larger, vertically centered */}
        <rect x="178" y="18" width="72" height="130" rx="9"
          fill="rgba(0,255,136,0.08)" stroke="#00ff88" strokeWidth="2" filter="url(#glowAxi)">
          <animate attributeName="stroke-opacity" values="1;0.4;1" dur="2.4s" repeatCount="indefinite" />
        </rect>
        <text x="214" y="58" textAnchor="middle" fontSize="11" fill="#00ff88" fontFamily="monospace" fontWeight="bold">SLAVE</text>
        <text x="214" y="74" textAnchor="middle" fontSize="8" fill="rgba(0,255,136,0.75)" fontFamily="monospace">4×64×32-bit</text>
        <text x="214" y="89" textAnchor="middle" fontSize="8" fill="rgba(0,255,136,0.6)" fontFamily="monospace">MEM ARRAY</text>
        <text x="214" y="106" textAnchor="middle" fontSize="7.5" fill="rgba(0,255,136,0.45)" fontFamily="monospace">addr decode</text>
        <text x="214" y="120" textAnchor="middle" fontSize="7.5" fill="rgba(0,255,136,0.4)" fontFamily="monospace">WSTRB</text>
        <text x="214" y="134" textAnchor="middle" fontSize="7.5" fill="rgba(0,255,136,0.35)" fontFamily="monospace">RD/WR FSM</text>

        {/* AW — Write Address */}
        <line x1="82" y1="52" x2="178" y2="52"
          stroke="#ff6b9d" strokeWidth="1.6" strokeDasharray="5 3" markerEnd="url(#arrAxi)">
          <animate attributeName="stroke-dashoffset" values="0;-16" dur="1s" repeatCount="indefinite" />
        </line>
        <text x="130" y="47" textAnchor="middle" fontSize="7.5" fill="rgba(255,107,157,0.9)" fontFamily="monospace">AW (addr)</text>
        <circle r="3.5" fill="#ff6b9d" opacity="0.9" filter="url(#glowAxi)">
          <animateMotion dur="1.3s" repeatCount="indefinite" path="M82,52 L178,52" />
        </circle>

        {/* W — Write Data */}
        <line x1="82" y1="72" x2="178" y2="72"
          stroke="#ff6b9d" strokeWidth="1.6" strokeDasharray="5 3" markerEnd="url(#arrAxi)">
          <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.2s" repeatCount="indefinite" />
        </line>
        <text x="130" y="67" textAnchor="middle" fontSize="7.5" fill="rgba(255,107,157,0.9)" fontFamily="monospace">W (data)</text>
        <circle r="3.5" fill="#ff6b9d" opacity="0.85" filter="url(#glowAxi)">
          <animateMotion dur="1.6s" repeatCount="indefinite" path="M82,72 L178,72" />
        </circle>

        {/* B — Write Response (back) */}
        <line x1="178" y1="92" x2="82" y2="92"
          stroke="#915EFF" strokeWidth="1.6" strokeDasharray="5 3" markerEnd="url(#arrAxiB)">
          <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.1s" repeatCount="indefinite" />
        </line>
        <text x="130" y="87" textAnchor="middle" fontSize="7.5" fill="rgba(145,94,255,0.95)" fontFamily="monospace">B (resp)</text>
        <circle r="3.5" fill="#915EFF" opacity="0.85" filter="url(#glowAxi)">
          <animateMotion dur="1.5s" repeatCount="indefinite" path="M178,92 L82,92" />
        </circle>

        {/* AR — Read Address */}
        <line x1="82" y1="112" x2="178" y2="112"
          stroke="#00f5ff" strokeWidth="1.6" strokeDasharray="5 3" markerEnd="url(#arrAxiC)">
          <animate attributeName="stroke-dashoffset" values="0;-16" dur="0.9s" repeatCount="indefinite" />
        </line>
        <text x="130" y="107" textAnchor="middle" fontSize="7.5" fill="rgba(0,245,255,0.9)" fontFamily="monospace">AR (addr)</text>
        <circle r="3.5" fill="#00f5ff" opacity="0.85" filter="url(#glowAxi)">
          <animateMotion dur="1.3s" repeatCount="indefinite" path="M82,112 L178,112" />
        </circle>

        {/* R — Read Data (back) */}
        <line x1="178" y1="132" x2="82" y2="132"
          stroke="#00f5ff" strokeWidth="1.6" strokeDasharray="5 3" markerEnd="url(#arrAxiC)">
          <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.05s" repeatCount="indefinite" />
        </line>
        <text x="130" y="127" textAnchor="middle" fontSize="7.5" fill="rgba(0,245,255,0.9)" fontFamily="monospace">R (data)</text>
        <circle r="3.5" fill="#00f5ff" opacity="0.85" filter="url(#glowAxi)">
          <animateMotion dur="1.4s" repeatCount="indefinite" path="M178,132 L82,132" />
        </circle>

        {/* Bottom label */}
        <text x="130" y="168" textAnchor="middle" fontSize="7" fill="rgba(255,107,157,0.45)" fontFamily="monospace">AWVALID · WVALID · ARVALID · handshake</text>
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
      <svg width="220" height="180" viewBox="0 0 220 180">
        <defs>
          <filter id="glow3">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <marker id="arrUart" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#00ff88" />
          </marker>
        </defs>

        {/* TX block */}
        <rect x="8" y="20" width="58" height="70" rx="7"
          fill="rgba(0,245,255,0.08)" stroke="#00f5ff" strokeWidth="1.5" filter="url(#glow3)">
          <animate attributeName="stroke-opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
        </rect>
        <text x="37" y="42" textAnchor="middle" fontSize="10" fill="#00f5ff" fontFamily="monospace" fontWeight="bold">TX</text>
        <text x="37" y="56" textAnchor="middle" fontSize="7" fill="rgba(0,245,255,0.7)" fontFamily="monospace">Shift Reg</text>
        <text x="37" y="68" textAnchor="middle" fontSize="7" fill="rgba(0,245,255,0.55)" fontFamily="monospace">Baud Gen</text>
        <text x="37" y="80" textAnchor="middle" fontSize="7" fill="rgba(0,245,255,0.4)" fontFamily="monospace">FSM</text>

        {/* RX block */}
        <rect x="154" y="20" width="58" height="70" rx="7"
          fill="rgba(145,94,255,0.08)" stroke="#915EFF" strokeWidth="1.5" filter="url(#glow3)">
          <animate attributeName="stroke-opacity" values="1;0.4;1" dur="2.3s" repeatCount="indefinite" />
        </rect>
        <text x="183" y="42" textAnchor="middle" fontSize="10" fill="#915EFF" fontFamily="monospace" fontWeight="bold">RX</text>
        <text x="183" y="56" textAnchor="middle" fontSize="7" fill="rgba(145,94,255,0.7)" fontFamily="monospace">Shift Reg</text>
        <text x="183" y="68" textAnchor="middle" fontSize="7" fill="rgba(145,94,255,0.55)" fontFamily="monospace">Baud Gen</text>
        <text x="183" y="80" textAnchor="middle" fontSize="7" fill="rgba(145,94,255,0.4)" fontFamily="monospace">FSM</text>

        {/* Serial data line TX→RX */}
        <line x1="66" y1="55" x2="154" y2="55"
          stroke="#00ff88" strokeWidth="1.4" strokeDasharray="5 3" markerEnd="url(#arrUart)">
          <animate attributeName="stroke-dashoffset" values="0;-16" dur="0.9s" repeatCount="indefinite" />
        </line>
        <text x="110" y="50" textAnchor="middle" fontSize="7" fill="rgba(0,255,136,0.8)" fontFamily="monospace">TxD → RxD</text>

        {/* Moving bits */}
        {[0, 0.3, 0.6].map((delay, i) => (
          <circle key={i} r="3" fill="#00ff88" opacity="0.85" filter="url(#glow3)">
            <animateMotion dur="1.5s" begin={`${delay}s`} repeatCount="indefinite" path="M66,55 L154,55" />
          </circle>
        ))}

        {/* UART frame diagram */}
        {/* Frame label */}
        <text x="110" y="108" textAnchor="middle" fontSize="7" fill="rgba(255,217,61,0.7)" fontFamily="monospace">UART FRAME</text>
        {/* Frame boxes: START | D0..D7 | PAR | STOP */}
        {[
          { label: "S", color: "#ff6b9d", w: 14 },
          { label: "D0", color: "#00f5ff", w: 14 },
          { label: "D1", color: "#00f5ff", w: 14 },
          { label: "D2", color: "#00f5ff", w: 14 },
          { label: "D3", color: "#00f5ff", w: 14 },
          { label: "P",  color: "#915EFF", w: 14 },
          { label: "ST", color: "#00ff88", w: 14 },
        ].reduce<{ els: JSX.Element[], x: number }>((acc, { label, color, w }, i) => {
          const x = acc.x;
          acc.els.push(
            <g key={i}>
              <rect x={x} y="113" width={w} height="16" rx="2"
                fill={`${color}15`} stroke={color} strokeWidth="1" opacity="0.85">
                <animate attributeName="fill-opacity" values="0.15;0.3;0.15" dur={`${1+i*0.2}s`} repeatCount="indefinite" />
              </rect>
              <text x={x + w/2} y="124" textAnchor="middle" fontSize="6" fill={color} fontFamily="monospace">{label}</text>
            </g>
          );
          acc.x += w + 1;
          return acc;
        }, { els: [], x: 12 }).els}

        {/* Baud rate label */}
        <text x="110" y="148" textAnchor="middle" fontSize="7.5" fill="rgba(0,255,136,0.6)" fontFamily="monospace">115200 baud  |  8N1</text>

        {/* Parity & stop labels */}
        <text x="110" y="162" textAnchor="middle" fontSize="6.5" fill="rgba(145,94,255,0.5)" fontFamily="monospace">START · DATA[7:0] · PARITY · STOP</text>
      </svg>
    </div>
  );

  if (type === "fifo") return (
    <div style={base}>
      <svg width="220" height="180" viewBox="0 0 220 180">
        <defs>
          <filter id="glow4">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <marker id="arrFifoR" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#00f5ff" />
          </marker>
          <marker id="arrFifoG" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#915EFF" />
          </marker>
        </defs>

        {/* WR Domain block */}
        <rect x="5" y="15" width="58" height="80" rx="7"
          fill="rgba(0,245,255,0.07)" stroke="#00f5ff" strokeWidth="1.5" filter="url(#glow4)">
          <animate attributeName="stroke-opacity" values="1;0.4;1" dur="1.8s" repeatCount="indefinite" />
        </rect>
        <text x="34" y="34" textAnchor="middle" fontSize="8" fill="#00f5ff" fontFamily="monospace" fontWeight="bold">WRITE</text>
        <text x="34" y="46" textAnchor="middle" fontSize="7" fill="rgba(0,245,255,0.7)" fontFamily="monospace">WR_CLK</text>
        <text x="34" y="58" textAnchor="middle" fontSize="7" fill="rgba(0,245,255,0.55)" fontFamily="monospace">WR_PTR</text>
        <text x="34" y="70" textAnchor="middle" fontSize="7" fill="rgba(0,245,255,0.4)" fontFamily="monospace">WR_EN</text>
        <text x="34" y="84" textAnchor="middle" fontSize="7" fill="#00ff88" fontFamily="monospace">FULL</text>

        {/* RD Domain block */}
        <rect x="157" y="15" width="58" height="80" rx="7"
          fill="rgba(145,94,255,0.07)" stroke="#915EFF" strokeWidth="1.5" filter="url(#glow4)">
          <animate attributeName="stroke-opacity" values="1;0.4;1" dur="2.2s" repeatCount="indefinite" />
        </rect>
        <text x="186" y="34" textAnchor="middle" fontSize="8" fill="#915EFF" fontFamily="monospace" fontWeight="bold">READ</text>
        <text x="186" y="46" textAnchor="middle" fontSize="7" fill="rgba(145,94,255,0.7)" fontFamily="monospace">RD_CLK</text>
        <text x="186" y="58" textAnchor="middle" fontSize="7" fill="rgba(145,94,255,0.55)" fontFamily="monospace">RD_PTR</text>
        <text x="186" y="70" textAnchor="middle" fontSize="7" fill="rgba(145,94,255,0.4)" fontFamily="monospace">RD_EN</text>
        <text x="186" y="84" textAnchor="middle" fontSize="7" fill="#ff6b9d" fontFamily="monospace">EMPTY</text>

        {/* Dual-port memory in center */}
        <rect x="78" y="22" width="64" height="66" rx="6"
          fill="rgba(0,255,136,0.06)" stroke="#00ff88" strokeWidth="1.5" filter="url(#glow4)">
          <animate attributeName="stroke-opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </rect>
        <text x="110" y="42" textAnchor="middle" fontSize="8" fill="#00ff88" fontFamily="monospace" fontWeight="bold">DUAL</text>
        <text x="110" y="54" textAnchor="middle" fontSize="8" fill="#00ff88" fontFamily="monospace" fontWeight="bold">PORT</text>
        <text x="110" y="66" textAnchor="middle" fontSize="7" fill="rgba(0,255,136,0.7)" fontFamily="monospace">MEM</text>
        <text x="110" y="78" textAnchor="middle" fontSize="7" fill="rgba(0,255,136,0.5)" fontFamily="monospace">8×Depth</text>

        {/* WR → MEM arrow with moving dot */}
        <line x1="63" y1="45" x2="78" y2="45"
          stroke="#00f5ff" strokeWidth="1.4" strokeDasharray="4 2" markerEnd="url(#arrFifoR)">
          <animate attributeName="stroke-dashoffset" values="0;-12" dur="0.8s" repeatCount="indefinite" />
        </line>
        <circle r="3" fill="#00f5ff" opacity="0.9" filter="url(#glow4)">
          <animateMotion dur="1s" repeatCount="indefinite" path="M63,45 L78,45" />
        </circle>

        {/* MEM → RD arrow with moving dot */}
        <line x1="142" y1="55" x2="157" y2="55"
          stroke="#915EFF" strokeWidth="1.4" strokeDasharray="4 2" markerEnd="url(#arrFifoG)">
          <animate attributeName="stroke-dashoffset" values="0;-12" dur="1s" repeatCount="indefinite" />
        </line>
        <circle r="3" fill="#915EFF" opacity="0.9" filter="url(#glow4)">
          <animateMotion dur="1.3s" repeatCount="indefinite" path="M142,55 L157,55" />
        </circle>

        {/* Gray code sync bridge below */}
        <rect x="68" y="108" width="84" height="24" rx="5"
          fill="rgba(255,217,61,0.07)" stroke="#ffd93d" strokeWidth="1.2" filter="url(#glow4)">
          <animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" />
        </rect>
        <text x="110" y="121" textAnchor="middle" fontSize="7.5" fill="#ffd93d" fontFamily="monospace" fontWeight="bold">Gray Code Sync</text>
        <text x="110" y="131" textAnchor="middle" fontSize="6" fill="rgba(255,217,61,0.55)" fontFamily="monospace">2-stage metastability guard</text>

        {/* Sync lines from domains to bridge */}
        <line x1="34" y1="95" x2="34" y2="120" stroke="rgba(0,245,255,0.35)" strokeWidth="1" strokeDasharray="3 2">
          <animate attributeName="stroke-dashoffset" values="0;-10" dur="1.2s" repeatCount="indefinite" />
        </line>
        <line x1="34" y1="120" x2="68" y2="120" stroke="rgba(0,245,255,0.35)" strokeWidth="1" />
        <line x1="186" y1="95" x2="186" y2="120" stroke="rgba(145,94,255,0.35)" strokeWidth="1" strokeDasharray="3 2">
          <animate attributeName="stroke-dashoffset" values="0;-10" dur="1.5s" repeatCount="indefinite" />
        </line>
        <line x1="186" y1="120" x2="152" y2="120" stroke="rgba(145,94,255,0.35)" strokeWidth="1" />

        {/* CDC label */}
        <text x="110" y="165" textAnchor="middle" fontSize="7" fill="rgba(255,107,157,0.55)" fontFamily="monospace">Clock Domain Crossing (CDC)</text>
      </svg>
    </div>
  );

  if (type === "mips") return (
    <div style={base}>
      <svg width="220" height="180" viewBox="0 0 220 180">
        <defs>
          <filter id="glowMips">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* 5 pipeline stage boxes */}
        {[
          { label: "IF", sub: "Fetch",    x: 10,  color: "#ffd93d" },
          { label: "ID", sub: "Decode",   x: 50,  color: "#00f5ff" },
          { label: "EX", sub: "Execute",  x: 90,  color: "#915EFF" },
          { label: "MEM",sub: "Memory",   x: 130, color: "#ff6b9d" },
          { label: "WB", sub: "W-Back",   x: 170, color: "#00ff88" },
        ].map(({ label, sub, x, color }, i) => (
          <g key={i}>
            <rect x={x} y="30" width="36" height="50" rx="5"
              fill={`${color}0d`} stroke={color} strokeWidth="1.5" filter="url(#glowMips)">
              <animate attributeName="stroke-opacity" values="1;0.4;1" dur={`${1.4 + i * 0.3}s`} repeatCount="indefinite" />
            </rect>
            <text x={x + 18} y="51" textAnchor="middle" fontSize="9" fill={color} fontFamily="monospace" fontWeight="bold">{label}</text>
            <text x={x + 18} y="64" textAnchor="middle" fontSize="6.5" fill={`${color}88`} fontFamily="monospace">{sub}</text>

            {/* Arrow between stages */}
            {i < 4 && (
              <line x1={x + 36} y1="55" x2={x + 50} y2="55"
                stroke={color} strokeWidth="1.2" strokeDasharray="3 2">
                <animate attributeName="stroke-dashoffset" values="0;-10" dur="0.8s" repeatCount="indefinite" />
              </line>
            )}
          </g>
        ))}

        {/* Travelling instruction dots across pipeline */}
        {[
          { color: "#ffd93d", dur: "2s",   delay: "0s" },
          { color: "#00f5ff", dur: "2s",   delay: "0.4s" },
          { color: "#915EFF", dur: "2s",   delay: "0.8s" },
        ].map(({ color, dur, delay }, i) => (
          <circle key={i} r="3.5" fill={color} opacity="0.85" filter="url(#glowMips)">
            <animateMotion dur={dur} begin={delay} repeatCount="indefinite"
              path="M28,55 L68,55 L108,55 L148,55 L188,55" calcMode="linear" />
          </circle>
        ))}

        {/* Pipeline registers labels */}
        {["IF/ID", "ID/EX", "EX/MEM", "MEM/WB"].map((reg, i) => (
          <text key={i} x={68 + i * 40} y="95" textAnchor="middle"
            fontSize="6" fill="rgba(255,217,61,0.45)" fontFamily="monospace">{reg}</text>
        ))}

        {/* Two-phase clock */}
        <text x="110" y="115" textAnchor="middle" fontSize="7.5" fill="rgba(0,245,255,0.7)" fontFamily="monospace">clk1 / clk2  (2-phase)</text>

        {/* Clock waveform clk1 */}
        {[0,1,2,3,4,5,6,7].map(i => {
          const x = 30 + i * 20;
          const hi = i % 2 === 0;
          return (
            <g key={i}>
              <line x1={x} y1={hi ? 128 : 140} x2={x + 20} y2={hi ? 128 : 140}
                stroke="#ffd93d" strokeWidth="1.2" opacity="0.55">
                <animate attributeName="opacity" values="0.55;0.25;0.55" dur={`${0.6 + i * 0.05}s`} repeatCount="indefinite" />
              </line>
              <line x1={x + 20} y1={hi ? 128 : 140} x2={x + 20} y2={hi ? 140 : 128}
                stroke="#ffd93d" strokeWidth="1.2" opacity="0.35" />
            </g>
          );
        })}
        <text x="10" y="133" fontSize="6.5" fill="rgba(255,217,61,0.5)" fontFamily="monospace">clk</text>

        {/* Instruction set hint */}
        <text x="110" y="165" textAnchor="middle" fontSize="6.5" fill="rgba(145,94,255,0.55)" fontFamily="monospace">ADD SUB AND OR SLT LW SW BEQZ</text>
      </svg>
    </div>
  );

  return null;
};

const getTagStyle = (tag: string) => {
  if (["SystemVerilog", "UVM"].includes(tag))
    return { bg: "rgba(145,94,255,0.07)", border: "rgba(145,94,255,0.25)", color: "#b48aff", glowColor: "rgba(145,94,255,0.6)" };
  if (["AXI4-Lite"].includes(tag))
    return { bg: "rgba(255,107,157,0.07)", border: "rgba(255,107,157,0.25)", color: "#ff6b9d", glowColor: "rgba(255,107,157,0.6)" };
  if (["MIPS32", "Pipelining"].includes(tag))
    return { bg: "rgba(255,217,61,0.07)", border: "rgba(255,217,61,0.25)", color: "#ffd93d", glowColor: "rgba(255,217,61,0.6)" };
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
