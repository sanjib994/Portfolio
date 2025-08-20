"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Brain, Coffee } from "lucide-react"

const About = () => {
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

  return (
    <section id="about" ref={ref} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate Computer Science student at MCKV Institute of Engineering, currently in my 3rd year. My
                journey in technology is driven by a deep fascination with Artificial Intelligence and Machine Learning.
              </p>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I believe in the power of technology to solve real-world problems and am constantly exploring new ways
                to apply AI/ML in practical scenarios. From predicting agricultural diseases to healthcare applications,
                I'm committed to creating meaningful impact through code.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me experimenting in the kitchen - cooking is my way of unwinding and
                expressing creativity outside the digital world.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Code className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Problem Solver</h3>
                    <p className="text-muted-foreground">Passionate about creating innovative solutions</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Brain className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">AI/ML Enthusiast</h3>
                    <p className="text-muted-foreground">Exploring the frontiers of artificial intelligence</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Coffee className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Creative Mind</h3>
                    <p className="text-muted-foreground">Balancing code with culinary creativity</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
