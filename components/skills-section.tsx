"use client"

const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind",
    "JavaScript",
    // "Angular",
    "React.js",
    "Next.js",
    "RESTful APIs Integration",
  ],
  backend: [
    "C#",
    "OOP",
    "ASP.NET Core",
    "MVC",
    "Web APIs",
    "Microsoft SQL Server",
    "LINQ",
  ],
  core: [
    "Problem-Solving",
    "Data Structures",
    "Algorithms",
    "SOLID Principles",
    "Agile",
  ],
  languages: ["Arabic (Native)", "English (Fluent)"],
}

export function SkillsSection() {
  return (
    <section className="py-20 px-4 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff2d95] to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#ff2d95] neon-text mb-4"
            style={{ fontFamily: "var(--font-press-start)" }}
          >
            SKILLS
          </h2>
          <p
            className="text-[#00f0ff] text-xl"
            style={{ fontFamily: "var(--font-vt323)" }}
          >
            {"< TECHNICAL EXPERTISE />"}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend */}
          <SkillCard
            title="FRONTEND"
            skills={skills.frontend}
            color="#ff2d95"
          />

          {/* Backend */}
          <SkillCard title="BACKEND" skills={skills.backend} color="#00f0ff" />

          {/* Core Concepts */}
          <SkillCard
            title="CORE CONCEPTS"
            skills={skills.core}
            color="#ffff00"
          />

          {/* Languages */}
          <SkillCard
            title="LANGUAGES"
            skills={skills.languages}
            color="#00ff88"
          />
        </div>
      </div>
    </section>
  )
}

function SkillCard({
  title,
  skills,
  color,
}: {
  title: string
  skills: string[]
  color: string
}) {
  return (
    <div
      className="p-6 border-2 bg-background/50 backdrop-blur-sm vhs-glitch"
      style={{
        borderColor: color,
        boxShadow: `0 0 20px ${color}40, inset 0 0 20px ${color}10`,
      }}
    >
      <h3
        className="text-lg md:text-xl mb-6 tracking-widest"
        style={{
          fontFamily: "var(--font-press-start)",
          color: color,
          textShadow: `0 0 10px ${color}`,
        }}
      >
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-sm md:text-base border transition-all hover:scale-105"
            style={{
              fontFamily: "var(--font-vt323)",
              borderColor: `${color}80`,
              color: color,
              backgroundColor: `${color}10`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
