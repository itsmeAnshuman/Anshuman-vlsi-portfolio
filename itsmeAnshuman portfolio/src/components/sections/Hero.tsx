import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>

      {/* ── 3D Canvas — pointer events OFF so it never blocks clicks ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
        <ComputersCanvas />
      </div>

      {/* ── Text + buttons — pointer events ON, sits above canvas ── */}
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
        style={{ zIndex: 2, pointerEvents: "none" }}
      >
        {/* Purple dot + line */}
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        {/* Text content — re-enable pointer events here */}
        <div style={{ pointerEvents: "auto" }}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>

          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            B.Tech (ECE) — VLSI &amp; Digital Design focused
            <br />
            I build RTL designs, verify protocols and craft digital hardware systems
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="/Anshuman_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-[#915EFF] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-white/20 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/5"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center"
        style={{ zIndex: 3 }}
      >
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
