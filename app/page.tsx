import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Database,
  Shield,
  Server,
  Cloud,
  Terminal,
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Twitter,
  Download,
  MapPin,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export default function JohnDoePortfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">Lawson Omoregbee </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="/resume.pdf" download="Lawson_Omoregbee_Resume.pdf">
              <Button variant="outline" className="hidden md:inline-flex">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </a>
            <a href="mailto:omoregbeeolawson@gmail.com?subject=Hiring%20Inquiry%20-%20Backend%20Developer&body=Hi%20Lawson,%0D%0A%0D%0AI'm%20interested%20in%20discussing%20a%20potential%20project/opportunity%20with%20you.%0D%0A%0D%0ABest%20regards">
              <Button className="bg-blue-600 hover:bg-blue-700">Hire Me</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-green-100 text-green-800">
                  Available for Work
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Backend Developer
                  <span className="text-blue-600"> & API Architect</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-[600px]">
                  Passionate backend developer specializing in scalable systems, RESTful APIs, and secure
                  authentication. I build robust server-side solutions that power modern applications.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 bg-blue-600 hover:bg-blue-700">
                  View My Work
                </Button>
                <a href="/resume.pdf" download="Lawson_Omoregbee_Resume.pdf">
                  <Button variant="outline" size="lg" className="text-lg px-8 border-slate-300 hover:bg-slate-50">
                    Download Resume
                  </Button>
                </a>
              </div>
              <div className="flex items-center space-x-8 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span>Remote / Nigeria</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span>Available Now</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-slate-900 rounded-lg p-6 shadow-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="font-mono text-sm text-green-400">
                  <div className="mb-2">
                    <span className="text-blue-400">func</span> <span className="text-yellow-400">main</span>() {"{"}
                  </div>
                  <div className="ml-4 mb-2">
                    <span className="text-slate-400">// Building scalable backends</span>
                  </div>
                  <div className="ml-4 mb-2">
                    <span className="text-purple-400">server</span> := gin.Default()
                  </div>
                  <div className="ml-4 mb-2">
                    <span className="text-purple-400">server</span>.GET(
                    <span className="text-green-300">"/api/v1/users"</span>, handlers.GetUsers)
                  </div>
                  <div className="ml-4 mb-2">
                    <span className="text-purple-400">server</span>.Run(<span className="text-green-300">":8080"</span>)
                  </div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto bg-blue-100 text-blue-800">
              Technical Skills
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Backend Development Expertise</h2>
            <p className="text-xl text-slate-600 max-w-[800px] mx-auto">
              Specialized in building scalable, secure, and high-performance backend systems
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-center">Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="outline" className="mr-2 mb-2">
                    RESTful API Design
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    Database Optimization
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    Authentication Systems
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-center">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="outline" className="mr-2 mb-2">
                    Go (Golang)
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    Python
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    Bash
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-center">Technologies & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="outline" className="mr-2 mb-2">
                    Gin Framework
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    GORM
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    Docker
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    Git
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    MySQL
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    Redis
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                  <Cloud className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-center">Cloud & Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="outline" className="mr-2 mb-2">
                    Google Cloud Platform
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    Linux (Ubuntu)
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-center">Security</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="outline" className="mr-2 mb-2">
                    SQL Injection Prevention
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    PII Data Protection
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    JWT Implementation
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                  <Terminal className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-center">Development Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="outline" className="mr-2 mb-2">
                    Express.js
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    PostgreSQL
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    Node.js
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto bg-green-100 text-green-800">
              Professional Projects
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Featured Work</h2>
            <p className="text-xl text-slate-600 max-w-[800px] mx-auto">
              Real-world projects showcasing scalable backend solutions and system architecture
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">E-commerce Platform Backend</CardTitle>
                  <Link href="https://github.com/Lawsonredeye/go-ecommerce" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 text-slate-400 hover:text-blue-600 transition-colors" />
                  </Link>
                </div>
                <CardDescription>Golang, Gin, GORM, MySQL</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 mb-4">
                  <li>• Architected scalable backend supporting 1000+ concurrent users</li>
                  <li>• Engineered secure JWT authentication system</li>
                  <li>• Optimized database queries (40% response time improvement)</li>
                  <li>• Implemented product management and order processing</li>
                </ul>
                <div className="flex space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Go
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Gin
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    MySQL
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">URL Shortener Service</CardTitle>
                  <Link href="https://github.com/Lawsonredeye" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 text-slate-400 hover:text-blue-600 transition-colors" />
                  </Link>
                </div>
                <CardDescription>Golang, GORM, MySQL</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 mb-4">
                  <li>• Developed high-performance URL shortening service</li>
                  <li>• Custom encoding algorithm implementation</li>
                  <li>• Implemented caching layer for frequent URLs</li>
                  <li>• Designed RESTful API with comprehensive docs</li>
                </ul>
                <div className="flex space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Go
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    GORM
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Redis
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">GitHub Analytics Tool</CardTitle>
                  <Link
                    href="https://github.com/Lawsonredeye/github-user-activity"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 text-slate-400 hover:text-blue-600 transition-colors" />
                  </Link>
                </div>
                <CardDescription>Python CLI Application</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 mb-4">
                  <li>• Built CLI for real-time GitHub activity monitoring</li>
                  <li>• Integrated GitHub API with rate limiting</li>
                  <li>• Implemented comprehensive error handling</li>
                  <li>• Created data visualization for activity trends</li>
                </ul>
                <div className="flex space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    GitHub API
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    CLI
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Go-arch</CardTitle>
                  <Link
                    href="https://github.com/Lawsonredeye/go-architecture"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 text-slate-400 hover:text-blue-600 transition-colors" />
                  </Link>
                </div>
                <CardDescription>Go Architecture Generator</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 mb-4">
                  <li>• Architecture generator for project development</li>
                  <li>• Supports Go, JavaScript, Python & Java</li>
                  <li>• Automated project structure creation</li>
                  <li>• Best practices implementation</li>
                </ul>
                <div className="flex space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Go
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    CLI
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Architecture
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Spotify Playlist Generator</CardTitle>
                  <Link href="https://github.com/Lawsonredeye/AudioAlly" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 text-slate-400 hover:text-blue-600 transition-colors" />
                  </Link>
                </div>
                <CardDescription>Python, Spotify API (Audioally)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 mb-4">
                  <li>• Engineered recommendation algorithm</li>
                  <li>• Based on user listening patterns analysis</li>
                  <li>• Implemented OAuth2.0 authentication</li>
                  <li>• Created intuitive playlist customization UI</li>
                </ul>
                <div className="flex space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    OAuth2.0
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Spotify API
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Food Delivery Backend</CardTitle>
                  <Link href="https://github.com/Lawsonredeye" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 text-slate-400 hover:text-blue-600 transition-colors" />
                  </Link>
                </div>
                <CardDescription>Go, Gin, GORM, MySQL</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 mb-4">
                  <li>• Built scalable food delivery platform backend</li>
                  <li>• Implemented order management system</li>
                  <li>• Real-time order tracking functionality</li>
                  <li>• Payment processing integration</li>
                </ul>
                <div className="flex space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Go
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Gin
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    MySQL
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Web Inventory System</CardTitle>
                  <Link href="https://github.com/Lawsonredeye" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 text-slate-400 hover:text-blue-600 transition-colors" />
                  </Link>
                </div>
                <CardDescription>Go, MySQL, GORM</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 mb-4">
                  <li>• Developed comprehensive inventory management</li>
                  <li>• Real-time stock tracking and alerts</li>
                  <li>• Multi-location inventory support</li>
                  <li>• Advanced reporting and analytics</li>
                </ul>
                <div className="flex space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Go
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    MySQL
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    GORM
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="https://github.com/Lawsonredeye" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-slate-300 hover:bg-slate-50">
                <Github className="mr-2 h-4 w-4" />
                View All Projects on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-8 max-w-3xl mx-auto text-slate-500 text-slate-600">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-blue-100">
              I'm always interested in discussing new opportunities, challenging projects, and innovative backend
              solutions. Let's connect and explore how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:omoregbeeolawson@gmail.com?subject=Hiring%20Inquiry%20-%20Backend%20Developer&body=Hi%20Lawson,%0D%0A%0D%0AI'm%20interested%20in%20discussing%20a%20potential%20project/opportunity%20with%20you.%0D%0A%0D%0ABest%20regards">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 bg-white text-blue-600 hover:bg-slate-100"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
              </a>
              <a href="/resume.pdf" download="Lawson_Omoregbee_Resume.pdf">
                <Button size="lg" className="text-lg px-8 bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
            </div>
            <div className="flex items-center justify-center space-x-6 pt-8">
              <Link
                href="https://x.com/LawsonRedeye"
                className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="hidden sm:inline">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/in/lawson-omoregbee"
                className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="hidden sm:inline">LinkedIn</span>
              </Link>
              <Link
                href="mailto:omoregbeeolawson@gmail.com"
                className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="hidden sm:inline">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">{"Lawson Omoregbee"}</span>
            </div>

            <div className="flex items-center space-x-6">
              <Link href="#about" className="text-slate-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-slate-400 hover:text-white transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-slate-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-slate-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Lawson Omoregbee. All rights reserved. Built with Next.js and Tailwind
              CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
