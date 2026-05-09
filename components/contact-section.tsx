"use client"

import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 px-4 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent" />

      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#00ff88] mb-4"
            style={{
              fontFamily: "var(--font-press-start)",
              textShadow: "0 0 10px #00ff88, 0 0 20px #00ff88",
            }}
          >
            CONTACT
          </h2>
          <p
            className="text-[#ff2d95] text-xl"
            style={{ fontFamily: "var(--font-vt323)" }}
          >
            {"< GET IN TOUCH />"}
          </p>
        </div>

        {/* Contact Card */}
        <div
          className="p-8 border-2 bg-background/50 backdrop-blur-sm"
          style={{
            borderColor: "#00ff88",
            boxShadow: "0 0 30px #00ff8820",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3
                className="text-xl text-[#00ff88] mb-6"
                style={{
                  fontFamily: "var(--font-press-start)",
                  textShadow: "0 0 10px #00ff88",
                }}
              >
                INFO
              </h3>

              <a
                href="mailto:sameehtawfiq92@gmail.com"
                className="flex items-center gap-4 p-4 border border-[#00ff88]/50 hover:bg-[#00ff88]/10 transition-all group vhs-glitch"
              >
                <Mail className="w-6 h-6 text-[#00ff88]" />
                <span
                  className="text-foreground group-hover:text-[#00ff88] transition-colors"
                  style={{ fontFamily: "var(--font-vt323)" }}
                >
                  sameehtawfiq92@gmail.com
                </span>
              </a>

              <a
                href="tel:+201015729823"
                className="flex items-center gap-4 p-4 border border-[#00ff88]/50 hover:bg-[#00ff88]/10 transition-all group vhs-glitch"
              >
                <Phone className="w-6 h-6 text-[#00ff88]" />
                <span
                  className="text-foreground group-hover:text-[#00ff88] transition-colors"
                  style={{ fontFamily: "var(--font-vt323)" }}
                >
                  +201015729823
                </span>
              </a>

              <div className="flex items-center gap-4 p-4 border border-[#00ff88]/50">
                <MapPin className="w-6 h-6 text-[#00ff88]" />
                <span
                  className="text-foreground"
                  style={{ fontFamily: "var(--font-vt323)" }}
                >
                  Cairo, Egypt
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3
                className="text-xl text-[#ff2d95] mb-6"
                style={{
                  fontFamily: "var(--font-press-start)",
                  textShadow: "0 0 10px #ff2d95",
                }}
              >
                CONNECT
              </h3>

              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/sameeh-tawfiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border-2 border-[#ff2d95] hover:bg-[#ff2d95] hover:text-background transition-all group vhs-glitch"
                >
                  <Linkedin className="w-6 h-6" />
                  <span
                    className="text-lg"
                    style={{ fontFamily: "var(--font-vt323)" }}
                  >
                    LinkedIn
                  </span>
                  <Send className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://wa.me/201015729823"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border-2 border-[#ff2d95] hover:bg-[#ff2d95] hover:text-background transition-all group vhs-glitch"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span
                    className="text-lg"
                    style={{ fontFamily: "var(--font-vt323)" }}
                  >
                    Whatsapp
                  </span>
                  <Send className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://github.com/Sameeh-Tawfiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border-2 border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-background transition-all group vhs-glitch"
                >
                  <Github className="w-6 h-6" />
                  <span
                    className="text-lg"
                    style={{ fontFamily: "var(--font-vt323)" }}
                  >
                    GitHub
                  </span>
                  <Send className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="mailto:sameehtawfiq92@gmail.com"
                  className="flex items-center gap-4 p-4 border-2 border-[#ffff00] text-[#ffff00] hover:bg-[#ffff00] hover:text-background transition-all group vhs-glitch"
                >
                  <Mail className="w-6 h-6" />
                  <span
                    className="text-lg"
                    style={{ fontFamily: "var(--font-vt323)" }}
                  >
                    Send Email
                  </span>
                  <Send className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
