"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star } from "lucide-react"

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const achievements = [
    {
      title: "CMR Hackathon 2025 Finalist",
      description:
        "Reached the finals of CMR Hackathon 2025, competing against top developers and showcasing innovative solutions.",
      icon: Trophy,
      type: "Competition",
      year: "2025",
      color: "text-yellow-600",
    },
    {
      title: "Generative AI Internship",
      description:
        "Successfully completed internship at YBI Foundation, working on cutting-edge AI projects and research.",
      icon: Award,
      type: "Professional",
      year: "2024",
      color: "text-primary",
    },
    {
      title: "Academic Excellence",
      description: "Maintaining strong academic performance in Computer Science & Engineering program.",
      icon: Star,
      type: "Academic",
      year: "Ongoing",
      color: "text-accent",
    },
  ]

  return (
    <section id="achievements" ref={ref} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="text-primary">Achievements</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center ${achievement.color}`}
                    >
                      <achievement.icon size={24} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{achievement.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {achievement.year}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{achievement.description}</p>

                      <Badge variant="secondary" className="text-xs">
                        {achievement.type}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
