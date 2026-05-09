"use client"

import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "YUMMY",
    subtitle: "Recipe Website",
    description:
      "A mobile-friendly recipe web application featuring dish listings and interactive UI components. Implemented JavaScript and jQuery for dynamic content rendering and detailed recipe views.",
    tech: ["JavaScript", "jQuery", "Bootstrap", "CSS"],
    color: "#ff2d95",
  },
  {
    title: "WEATHER APP",
    subtitle: "Real-Time Weather Website",
    description:
      "A responsive weather app using JavaScript, improving API call latency by 25ms and decreased the average page load time by 0.8 seconds through optimized data handling.",
    tech: ["JavaScript", "API Integration", "Responsive Design"],
    color: "#00f0ff",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#00f0ff] neon-text-cyan mb-4"
            style={{ fontFamily: "var(--font-press-start)" }}
          >
            PROJECTS
          </h2>
          <p
            className="text-[#ff2d95] text-xl"
            style={{ fontFamily: "var(--font-vt323)" }}
          >
            {"< FEATURED WORKS />"}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
}: {
  project: {
    title: string
    subtitle: string
    description: string
    tech: string[]
    color: string
  }
}) {
  return (
    <div
      className="group relative p-6 border-2 bg-background/50 backdrop-blur-sm transition-all duration-300 vhs-glitch"
      style={{
        borderColor: project.color,
        boxShadow: `0 0 20px ${project.color}20`,
      }}
    >
      {/* VHS Corner decoration */}
      <div
        className="absolute top-2 right-2 w-16 h-16 opacity-20"
        style={{
          background: `linear-gradient(135deg, ${project.color} 0%, transparent 50%)`,
        }}
      />

      {/* Project Title */}
      <div className="mb-4">
        <h3
          className="text-2xl md:text-3xl mb-2"
          style={{
            fontFamily: "var(--font-press-start)",
            color: project.color,
            textShadow: `0 0 10px ${project.color}`,
          }}
        >
          {project.title}
        </h3>
        <p
          className="text-muted-foreground text-lg tracking-wider"
          style={{ fontFamily: "var(--font-vt323)" }}
        >
          {project.subtitle}
        </p>
      </div>

      {/* Description */}
      <p
        className="text-foreground/80 text-lg leading-relaxed mb-6"
        style={{ fontFamily: "var(--font-vt323)" }}
      >
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-sm border"
            style={{
              fontFamily: "var(--font-vt323)",
              borderColor: `${project.color}60`,
              color: project.color,
              backgroundColor: `${project.color}10`,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* View Project Link */}
      <button
        className="flex items-center gap-2 px-4 py-2 border-2 transition-all group-hover:scale-105"
        style={{
          fontFamily: "var(--font-vt323)",
          borderColor: project.color,
          color: project.color,
        }}
      >
        <span className="text-lg">VIEW PROJECT</span>
        <ExternalLink className="w-4 h-4" />
      </button>
    </div>
  )
}
