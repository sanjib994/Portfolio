"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-float">
              <span className="text-4xl font-bold text-primary-foreground">SG</span>
            </div>
          </div>

          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-6">
            Hi, I'm <span className="text-primary">Sanjib Ghara</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            3rd-year B.Tech Computer Science & Engineering Student
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about <span className="text-primary font-semibold">AI/ML</span> and building innovative
            solutions. Currently studying at MCKV Institute of Engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowDown size={16} />
              </a>
            </Button>

            <div className="flex gap-4">
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/sanjib994" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/sanjib-ghara-759357322/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:sghara200@gmail.com">
                  <Mail size={20} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
