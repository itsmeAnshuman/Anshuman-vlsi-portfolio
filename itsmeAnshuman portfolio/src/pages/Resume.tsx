import { config } from "../constants/config";
import { projects } from "../constants";

const Resume = () => {
  const cfg = config as any;
  
  return (
    <div className="min-h-screen bg-primary py-12 px-6">
      <div className="mx-auto max-w-4xl rounded-lg bg-black-100 p-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">{config.html.fullName}</h1>
            <p className="mt-1 text-sm text-secondary">{config.html.title}</p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-white-100">
              <a href={`mailto:${config.html.email}`} className="text-secondary">{config.html.email}</a>
              <a href={cfg.contactInfo.github} target="_blank" rel="noreferrer" className="text-secondary">GitHub</a>
              <a href={cfg.contactInfo.linkedin} target="_blank" rel="noreferrer" className="text-secondary">LinkedIn</a>
              <span className="text-secondary">{cfg.contactInfo.phone}</span>
            </div>
          </div>

          <div className="hidden sm:block">
            <a href="/Aashi_Electronics.pdf" target="_blank" rel="noreferrer" className="rounded-md bg-[#915EFF] px-4 py-2 text-sm font-semibold text-white">
              Download PDF
            </a>
          </div>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white">Education</h2>
          <div className="mt-3 text-white-100 whitespace-pre-line">
            {cfg.sections.educationText}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-white">Projects</h2>
          <div className="mt-3 grid gap-4">
            {projects.map((p, idx) => (
              <div key={idx} className="rounded-md bg-tertiary p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                  <a href={p.sourceCodeLink} target="_blank" rel="noreferrer" className="text-secondary text-sm">
                    View Code
                  </a>
                </div>
                <p className="mt-2 text-white-100 text-sm">{p.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t, i) => (
                    <span key={i} className={`text-xs ${t.color} rounded-full px-2 py-1`}>{t.name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-white">Skills & Tools</h2>
          <div className="mt-3 text-white-100">
            {config.sections.about.content}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-white">Certifications & Achievements</h2>
          <div className="mt-3 grid gap-2">
            {cfg.certifications.map((c: string, i: number) => (
              <div key={i} className="text-white-100 text-sm">• {c}</div>
            ))}
            {cfg.achievements.map((a: string, i: number) => (
              <div key={`ach-${i}`} className="text-white-100 text-sm">• {a}</div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;