"use client"

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff2d95] to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Logo/Name */}
        <div className="mb-6">
          <h2
            className="text-2xl md:text-3xl text-[#ff2d95] neon-text"
            style={{ fontFamily: "var(--font-press-start)" }}
          >
            SAMEEH
          </h2>
          <p
            className="text-[#00f0ff] text-lg mt-2"
            style={{ fontFamily: "var(--font-vt323)" }}
          >
            Software Engineer | Front-End Developer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://www.linkedin.com/in/sameeh-tawfiq"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-[#ff2d95]/50 text-[#ff2d95] hover:bg-[#ff2d95]/20 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          {/* whatsapp */}
          <a
            href="https://wa.me/201015729823"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-[#ff2d95]/50 text-[#ff2d95] hover:bg-[#ff2d95]/20 transition-all"
            aria-label="LinkedIn"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/Sameeh-Tawfiq"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-[#00f0ff]/50 text-[#00f0ff] hover:bg-[#00f0ff]/20 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:sameehtawfiq92@gmail.com"
            className="p-3 border border-[#ffff00]/50 text-[#ffff00] hover:bg-[#ffff00]/20 transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div
          className="text-muted-foreground text-sm"
          style={{ fontFamily: "var(--font-vt323)" }}
        >
          <p className="mb-2">
            © Copyright {currentYear} by Sameeh Mohamed Tawfik
          </p>
          <p className="text-[#ff2d95]/60">
            VHS c.{currentYear} • MADE WITH {"<"}/{">"} IN CAIRO
          </p>
        </div>

        {/* Retro decoration */}
        <div className="mt-8 flex justify-center gap-2">
          <div className="w-3 h-3 bg-[#ff2d95]" />
          <div className="w-3 h-3 bg-[#00f0ff]" />
          <div className="w-3 h-3 bg-[#ffff00]" />
          <div className="w-3 h-3 bg-[#00ff88]" />
        </div>
      </div>
    </footer>
  )
}
