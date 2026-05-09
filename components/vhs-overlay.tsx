"use client"

import { useEffect, useState } from "react"

export function VHSOverlay() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatted = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
      setTime(formatted)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.15),
              rgba(0, 0, 0, 0.15) 1px,
              transparent 1px,
              transparent 2px
            )`,
          }}
        />
      </div>

      {/* VHS Timestamp */}
      <div className="fixed top-4 right-4 z-40 vhs-timestamp text-sm md:text-base">
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          <span>REC</span>
        </div>
        <div className="mt-1">{time}</div>
      </div>

      {/* VHS Play indicator */}
      <div className="fixed bottom-4 left-4 z-40 vhs-timestamp text-xs md:text-sm flex items-center gap-2">
        <svg
          className="w-4 h-4 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
        <span>PLAY</span>
      </div>
    </>
  )
}
