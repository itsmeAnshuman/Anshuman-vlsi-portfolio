type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contactInfo: {
    phone: string;
    github: string;
    linkedin: string;
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
    educationText: string;
  };
  certifications: { name: string; url?: string }[];
  achievements: string[];
};

export const config: TConfig = {
  html: {
    title: "Anshuman Verma Portfolio",
    fullName: "Anshuman Verma",
    email: "anshumanverma555@gmail.com",
  },
  contactInfo: {
    phone: "+91 8318215388",
    github: "https://github.com/itsmeAnshuman",
    linkedin: "https://www.linkedin.com/in/anshuman-verma-8b5829257/",
  },
  hero: {
    name: "Anshuman Verma",
    p: [
      "B.Tech (ECE) — VLSI & Digital Design focused",
      "I build RTL designs, verify protocols and craft digital hardware systems",
    ],
  },
  certifications: [
    {
      name: "Verification Series Part 3: UVM Essentials — Udemy (Jun 2025)",
      url: "https://www.udemy.com/certificate/UC-4f357993-5af9-47f5-961b-de6bbdf346fd/",
    },
    {
      name: "SystemVerilog for Verification Part 2: Protocol Verification — Udemy",
      url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-c2210392-f778-48e6-8e97-b15e64dbdc1c.pdf",
    },
    {
      name: "SystemVerilog for Verification Part 1: Fundamentals — Udemy (Aug 2024)",
      url: "https://www.udemy.com/certificate/UC-2002d464-2145-41d2-a4c4-ea21b8c1dee2",
    },
  ],
  achievements: [
    "Coordinator, Core Electronics Wing — House of Geeks, IIIT Ranchi (Dec 2023 – Sep 2024)",
    "Conducted 5+ sessions for 100+ students on VLSI design and verification",
    "Organized multiple events focusing on VLSI design using Vivado",
    "Member of IIIT Ranchi Cricket Team",
    "Participated in House of Hackers — College Hackathon",
  ],
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    educationText: `IIIT Ranchi — B.Tech in Electronics & Communication Engineering (ES & IoT) — CGPA: 9.04 (2022 – Present)\nKendriya Vidyalaya Basti — Class XII: 95% (2021)\nKendriya Vidyalaya No. 2 FCI Gorakhpur — Class X: 91% (2019)`,
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `B.Tech student in Electronics & Communication Engineering (ES & IoT) at IIIT Ranchi, maintaining a CGPA of 9.04. My primary interest lies in VLSI design and design verification, where I work on building and validating digital hardware at the RTL level. I have hands-on experience with Verilog HDL, SystemVerilog, UVM, and tools like Vivado, ModelSim, and QuestaSim.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcase my skills in RTL design and verification through real-world hardware design examples. Each project demonstrates my ability to work with HDLs, protocols, and simulation tools to build and validate digital systems.`,
    },
  },
};
