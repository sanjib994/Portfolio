"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const Experience = () => {
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

  const experiences = [
    {
      title: "Generative AI Intern",
      company: "YBI Foundation",
      duration: "Recent",
      location: "Remote",
      description:
        "Worked on cutting-edge generative AI projects, exploring the latest developments in artificial intelligence and machine learning technologies.",
      skills: ["Generative AI", "Machine Learning", "Python", "Research"],
      type: "Internship",
    },
    {
      title: "Computer Science Student",
      company: "MCKV Institute of Engineering",
      duration: "2022 - Present",
      location: "West Bengal, India",
      description:
        "Pursuing B.Tech in Computer Science & Engineering with focus on AI/ML. Maintaining strong academic performance while actively participating in hackathons and technical events.",
      skills: ["Data Structures", "Algorithms", "AI/ML", "Software Development"],
      type: "Education",
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="text-primary">Experience</span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-semibold mb-2">{exp.title}</CardTitle>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant={exp.type === "Internship" ? "default" : "secondary"}>{exp.type}</Badge>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
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

export default Experience
