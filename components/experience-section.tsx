"use client"

import { Briefcase, GraduationCap, Award } from "lucide-react"

const experience = [
  {
    type: "work",
    title: "Reserve Officer",
    organization: "Egyptian Military Academy",
    period: "Nov 2023 - Oct 2025",
    description: [
      "Led teams and managed resources with strong decision-making and problem-solving skills in high-pressure environments.",
      "Improved workflow efficiency by 25%, contributed to the development and support of learning management system.",
      "Maintained the academy's virtual reality system.",
    ],
  },
]

const education = [
  {
    type: "education",
    title: "Bachelor's Degree in Computer and Control Engineering",
    organization: "Kafr Elsheikh University",
    period: "Aug 2018 - Jul 2023",
    description: ["Graduation Project: Excellent"],
  },
]

const training = [
  {
    type: "training",
    title: "MERN Stack Web Development Trainee",
    organization: "Digilians – Digital Pioneers Initiative",
    period: "Jan 2026 - May 2026",
    description: [
      "Building real-world applications using MongoDB, Express.js, React.js and Node.js.",
      "Practical experience in web development, working with HTML, CSS, and JavaScript.",
    ],
  },
  {
    type: "training",
    title: "Full-Stack Web Development Diploma",
    organization: "Route",
    period: "Nov 2022 - Nov 2023",
    description: [
      "Completed advanced training in full stack web development with a focus on Angular (frontend) and .NET / ASP.NET (backend).",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section className="py-20 px-4 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffff00] to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#ffff00] mb-4"
            style={{
              fontFamily: "var(--font-press-start)",
              textShadow: "0 0 10px #ffff00, 0 0 20px #ffff00",
            }}
          >
            EXPERIENCE
          </h2>
          <p
            className="text-[#00f0ff] text-xl"
            style={{ fontFamily: "var(--font-vt323)" }}
          >
            {"< CAREER TIMELINE />"}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff2d95] via-[#00f0ff] to-[#ffff00]" />

          {/* Work Experience */}
          <TimelineSection
            title="WORK"
            icon={<Briefcase className="w-5 h-5" />}
            items={experience}
            color="#ff2d95"
          />

          {/* Education */}
          <TimelineSection
            title="EDUCATION"
            icon={<GraduationCap className="w-5 h-5" />}
            items={education}
            color="#00f0ff"
          />

          {/* Training */}
          <TimelineSection
            title="TRAINING"
            icon={<Award className="w-5 h-5" />}
            items={training}
            color="#ffff00"
          />
        </div>
      </div>
    </section>
  )
}

function TimelineSection({
  title,
  icon,
  items,
  color,
}: {
  title: string
  icon: React.ReactNode
  items: {
    type: string
    title: string
    organization: string
    period: string
    description: string[]
  }[]
  color: string
}) {
  return (
    <div className="mb-12">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8 pl-12 md:pl-0 md:justify-center">
        <div
          className="p-3 border-2"
          style={{
            borderColor: color,
            color: color,
            boxShadow: `0 0 10px ${color}`,
          }}
        >
          {icon}
        </div>
        <h3
          className="text-xl md:text-2xl"
          style={{
            fontFamily: "var(--font-press-start)",
            color: color,
            textShadow: `0 0 10px ${color}`,
          }}
        >
          {title}
        </h3>
      </div>

      {/* Items */}
      {items.map((item, index) => (
        <div
          key={index}
          className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8 mb-8"
        >
          {/* Timeline dot */}
          <div
            className="absolute left-2 md:left-1/2 top-2 w-4 h-4 -translate-x-1/2 border-2 bg-background z-10"
            style={{
              borderColor: color,
              boxShadow: `0 0 10px ${color}`,
            }}
          />

          {/* Content */}
          <div className="md:text-right md:pr-8">
            <span
              className="text-sm tracking-wider"
              style={{
                fontFamily: "var(--font-vt323)",
                color: color,
              }}
            >
              {item.period}
            </span>
          </div>

          <div
            className="p-4 border-2 bg-background/50 backdrop-blur-sm mt-2 md:mt-0 vhs-glitch"
            style={{
              borderColor: `${color}60`,
              boxShadow: `0 0 15px ${color}20`,
            }}
          >
            <h4
              className="text-lg md:text-xl mb-1"
              style={{
                fontFamily: "var(--font-vt323)",
                color: color,
              }}
            >
              {item.title}
            </h4>
            <p
              className="text-muted-foreground mb-3"
              style={{ fontFamily: "var(--font-vt323)" }}
            >
              {item.organization}
            </p>
            <ul className="space-y-2">
              {item.description.map((desc, i) => (
                <li
                  key={i}
                  className="text-foreground/80 text-sm md:text-base flex items-start gap-2"
                  style={{ fontFamily: "var(--font-vt323)" }}
                >
                  <span style={{ color: color }}>▸</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
