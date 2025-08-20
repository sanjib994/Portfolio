"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
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

  const projects = [
    {
      title: "AGRIORACLE",
      description:
        "ML-driven agricultural disease prediction system that helps farmers identify crop diseases early and take preventive measures.",
      image: "/agricultural-disease-prediction-dashboard.png",
      technologies: ["Python", "Machine Learning", "TensorFlow", "Computer Vision"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Diabetes Prediction System",
      description:
        "Machine learning model that predicts diabetes risk based on patient health parameters with high accuracy.",
      image: "/healthcare-prediction-dashboard.png",
      technologies: ["Python", "Scikit-learn", "Pandas", "Data Analysis"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive personal portfolio website built with modern web technologies showcasing projects and skills.",
      image: "/modern-portfolio-website.png",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  project.featured ? "ring-2 ring-primary/20" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {project.featured && (
                    <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">Featured</Badge>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
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

export default Projects
