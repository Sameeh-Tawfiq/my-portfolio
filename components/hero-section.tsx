"use client"

import { Github, Linkedin, Mail, Phone, MapPin , MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
      {/* Decorative grid lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#ff2d95]/20 to-transparent" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* VHS Date Badge */}
        <div className="inline-block mb-8 px-4 py-2 border border-[#ff2d95] bg-[#ff2d95]/10 backdrop-blur-sm">
          <span className="font-mono text-[#ff2d95] text-sm tracking-wider">
            c. 2026
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          <span className="block text-foreground chrome-text">SAMEEH</span>
          <span className="block neon-text text-[#ff2d95] mt-2" style={{ fontFamily: 'var(--font-press-start)' }}>
            TAWFIK
          </span>
        </h1>

        {/* Subtitle */}
        <div className="my-8">
          <h2 
            className="text-xl md:text-2xl lg:text-3xl text-[#00f0ff] neon-text-cyan tracking-widest"
            style={{ fontFamily: 'var(--font-vt323)' }}
          >
            SOFTWARE ENGINEER | FRONT-END WEB DEVELOPER
          </h2>
        </div>

        {/* Summary */}
        <p 
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: 'var(--font-vt323)' }}
        >
          I'm a Junior Front-end Web Developer building scalable, responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Experienced in developing end-to-end solutions across the full software development lifecycle, from requirement analysis and system design to deployment and maintenance.
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          <a
            href="mailto:sameehtawfiq92@gmail.com"
            className="flex items-center gap-2 px-4 py-2 border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all vhs-glitch"
            style={{ fontFamily: 'var(--font-vt323)' }}
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm md:text-base">sameehtawfiq92@gmail.com</span>
          </a>
          <a
            href="tel:+201015729823"
            className="flex items-center gap-2 px-4 py-2 border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all vhs-glitch"
            style={{ fontFamily: 'var(--font-vt323)' }}
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm md:text-base">+201015729823</span>
          </a>
          <div
            className="flex items-center gap-2 px-4 py-2 border border-[#00f0ff] text-[#00f0ff]"
            style={{ fontFamily: 'var(--font-vt323)' }}
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm md:text-base">Cairo, Egypt</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/sameeh-tawfiq"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-2 border-[#ff2d95] text-[#ff2d95] hover:bg-[#ff2d95] hover:text-background transition-all vhs-glitch group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://wa.me/201015729823"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-2 border-[#ff2d95] text-[#ff2d95] hover:bg-[#ff2d95] hover:text-background transition-all vhs-glitch group"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://github.com/Sameeh-Tawfiq"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-2 border-[#ff2d95] text-[#ff2d95] hover:bg-[#ff2d95] hover:text-background transition-all vhs-glitch group"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="mailto:sameehtawfiq92@gmail.com"
            className="p-4 border-2 border-[#ff2d95] text-[#ff2d95] hover:bg-[#ff2d95] hover:text-background transition-all vhs-glitch group"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#00f0ff] rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-[#00f0ff] rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
