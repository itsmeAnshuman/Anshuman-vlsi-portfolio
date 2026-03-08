import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  javascript,
  git,
  threejs,
  iiitRanchi, // ← import the logo
} from "../assets";

/* ================= NAVBAR ================= */
export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Projects" },
  { id: "contact", title: "Contact" },
];

/* ================= SERVICES ================= */
const services: TService[] = [
  { title: "VLSI & RTL Design", icon: backend },
  { title: "Design Verification", icon: mobile },
  { title: "Protocol Engineering", icon: web },
  { title: "Embedded Systems", icon: creator },
];

/* ================= TECHNOLOGIES ================= */
const technologies: TTechnology[] = [
  { name: "Verilog HDL", icon: html },
  { name: "SystemVerilog", icon: javascript },
  { name: "UVM", icon: css },
  { name: "Vivado 2023.1", icon: threejs },
  { name: "ModelSim / QuestaSim", icon: git },
  { name: "Embedded C", icon: web },
];

/* ================= EXPERIENCE ================= */
const experiences: TExperience[] = [
  {
    title: "Coordinator, Core Electronics Wing",
    companyName: "House of Geeks — Technical Society of IIIT Ranchi",
    icon: backend,
    iconBg: "#1d1836",
    date: "Dec 2023 – Sep 2024",
    points: [
      "Conducted over 5 sessions for 100+ students to increase awareness in the field of Electronics.",
      "Organized multiple events focusing solely on VLSI design and verification.",
      "Delivered 5–6 hands-on sessions on digital design and simulation using Vivado, covering RTL design flow in VLSI.",
    ],
  },
];

/* ================= TESTIMONIALS ================= */
const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Anshuman demonstrates exceptional understanding of digital hardware design and consistently delivers well-verified RTL implementations.",
    name: "Dr. Shashikant Sharma",
    designation: "Assistant Professor",
    company: "ECE Department, IIIT Ranchi",
    image: iiitRanchi,
  },
  {
    testimonial:
      "Anshuman worked on the implementation of a high-speed non-volatile memristor model using Cadence Virtuoso. His work demonstrated strong understanding of device modeling, circuit simulation, and emerging memory technologies.",
    name: "Dr. Chandra Prakash Singh",
    designation: "Project Supervisor",
    company: "ECE Department, IIIT Ranchi",
    image: iiitRanchi,
  },
];

/* ================= PROJECTS ================= */
const projects: TProject[] = [
  {
    name: "1X3 Router RTL Design & Verification",
    description:
      "Designed RTL architecture in SystemVerilog with FSM control, address decoding, and three 16-deep FIFO buffers. Built 6-layer testbench covering 9 test cases.",
    tags: [
      { name: "SystemVerilog", color: "green-text-gradient" },
      { name: "UVM", color: "blue-text-gradient" },
      { name: "FSM", color: "pink-text-gradient" },
    ],
    image: backend,
    sourceCodeLink: "https://github.com/anshuman-verma",
  },
  {
    name: "AMBA APB Protocol-Based RAM Controller",
    description:
      "Developed 4-state FSM-based APB Slave RAM with 32-word memory. Verified 10+ transaction scenarios using 6-layer SystemVerilog testbench.",
    tags: [
      { name: "Verilog", color: "green-text-gradient" },
      { name: "AMBA APB", color: "blue-text-gradient" },
      { name: "RTL", color: "pink-text-gradient" },
    ],
    image: threejs,
    sourceCodeLink: "https://github.com/anshuman-verma",
  },
  {
    name: "Universal Asynchronous Receiver Transmitter",
    description:
      "Designed RTL for full-duplex serial communication with configurable baud rate, parity modes, and 6-layer SystemVerilog testbench.",
    tags: [
      { name: "Verilog", color: "green-text-gradient" },
      { name: "UART", color: "blue-text-gradient" },
      { name: "Serial Comm", color: "pink-text-gradient" },
    ],
    image: web,
    sourceCodeLink: "https://github.com/anshuman-verma",
  },
  {
    name: "8-bit Asynchronous FIFO Buffer",
    description:
      "Built async FIFO with Gray code synchronization for cross-clock-domain transfer. Verified overflow, underflow and corner-cases with 6-layer testbench.",
    tags: [
      { name: "Verilog", color: "green-text-gradient" },
      { name: "FIFO", color: "blue-text-gradient" },
      { name: "CDC", color: "pink-text-gradient" },
    ],
    image: creator,
    sourceCodeLink: "https://github.com/anshuman-verma",
  },
];

export { services, technologies, experiences, testimonials, projects };
