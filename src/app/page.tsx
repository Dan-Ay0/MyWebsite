'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CheckCircle2, Play, ArrowRight, Star, Users, Zap, Shield, TrendingUp, Clock, MessageSquare, FileText, Layout, Settings, BarChart3, Target, Rocket, Award, ChevronRight, Video, BookOpen, Globe, HeadphonesIcon, Briefcase, GraduationCap, Sparkles, Code, Calendar, PenTool, Megaphone, ShoppingCart, FolderTree, Activity } from 'lucide-react'

export default function AIDirectorOSSalesPage() {
  const [isSticky, setIsSticky] = useState(false)
  const [spotsRemaining, setSpotsRemaining] = useState(47)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200)
    }

    // Simulate dynamic spots changing
    const interval = setInterval(() => {
      setSpotsRemaining(prev => {
        const change = Math.random() > 0.7 ? -1 : 0
        return Math.max(0, prev + change)
      })
    }, 15000) // Update every 15 seconds

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(interval)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header CTA */}
      {isSticky && (
        <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-500" />
              <span className="font-bold text-gray-900">AI Director OS Bundle</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                🔥 Founding Member: $99 (only {spotsRemaining} spots left!)
              </span>
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => window.open('https://danielwill.gumroad.com/l/AIDirectorOSBundle', '_blank')}
              >
                Get Instant Access
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="pt-16 pb-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Urgency Banner */}
          <div className="bg-orange-500 text-white text-center py-2 px-4 rounded-lg mb-8 inline-block">
            🔥 Founding Member Price: $99 (first 100 buyers only) → then $197
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Install the AI Director OS — <br />
            <span className="text-blue-600">25+ One-Click AI Agents</span> That Build Real Work
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            This isn't a "prompt pack." It's a 2026-ready Agentic Operating System + Role Systems Library + Mastery Playbook.
          </p>

          {/* Hero Bullets */}
          <div className="space-y-3 mb-10">
            {[
              "25+ role-based one-click agents (no copy/paste)",
              "Agents interview you → produce finished deliverables (calendars, emails, PRDs, SOPs)",
              "Includes a Playbook that teaches the fundamentals in plain English",
              "Includes a 169 Role Vault that works across individuals + teams + businesses",
              "Built-in onboarding + ROI tracking + updates"
            ].map((bullet, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-700">{bullet}</span>
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 mb-4 w-full sm:w-auto"
            onClick={() => window.open('https://danielwill.gumroad.com/l/AIDirectorOSBundle', '_blank')}
          >
            Get the AI Director OS Bundle
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          {/* Secondary CTA */}
          <Button 
            variant="outline" 
            size="lg" 
            className="text-blue-600 border-blue-600 hover:bg-blue-50 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            onClick={() => scrollToSection('demo')}
          >
            <Play className="mr-2 w-5 h-5" />
            Watch the Agent Demo
          </Button>

          {/* Works for line */}
          <div className="mt-8 text-gray-600">
            <span className="font-semibold">Works for:</span> Founders • Creators • Marketers • Sales • Product • Ops • Students • Career-switchers • Small business • Teams
          </div>
        </div>
      </section>

      {/* SECTION 2: THE 2026 SHIFT */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            The world moved from prompts to agents.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {/* Old Way */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center gap-2 text-lg sm:text-xl">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                  The Old Way: Prompts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-red-500 text-sm">✗</span>
                  <span className="text-gray-700 text-sm sm:text-base">Type and pray for good results</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 text-sm">✗</span>
                  <span className="text-gray-700 text-sm sm:text-base">Copy/paste every single time</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 text-sm">✗</span>
                  <span className="text-gray-700 text-sm sm:text-base">Inconsistent outputs</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 text-sm">✗</span>
                  <span className="text-gray-700 text-sm sm:text-base">No structured workflows</span>
                </div>
              </CardContent>
            </Card>

            {/* New Way */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center gap-2 text-lg sm:text-xl">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                  The New Way: Agents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-green-500 text-sm">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">Click once, agent interviews you</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 text-sm">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">Role-based AI coworkers</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 text-sm">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">Structured, professional outputs</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 text-sm">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">Built-in workflows and systems</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-600">
              Most people still "type and pray." <br className="hidden sm:block" />
              <span className="font-bold text-blue-600">Your system = role-based AI coworkers + structured outputs</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE 3-LAYER SYSTEM */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Learn it → Choose it → Run it
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Most products give you prompts. This gives you a complete system.
          </p>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Card 1: Playbook */}
            <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">AI Director Playbook (PDF)</CardTitle>
                <CardDescription className="text-lg">Learn the method (plain English)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What it gives:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Fundamentals + clarity</li>
                    <li>• Mastery path</li>
                    <li>• Plain English explanations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Helps you produce:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Clear AI directions</li>
                    <li>• Professional outputs</li>
                    <li>• Consistent quality</li>
                  </ul>
                </div>
                <Badge variant="secondary" className="w-fit">
                  Best for beginners and busy professionals
                </Badge>
              </CardContent>
            </Card>

            {/* Card 2: Role Vault */}
            <Card className="border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">AI Director Role Vault (169 Systems) (PDF)</CardTitle>
                <CardDescription className="text-lg">Choose the right system for any situation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Professional role systems:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Not random prompts</li>
                    <li>• Built-in guidance</li>
                    <li>• Clear output expectations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Works for:</h4>
                  <p className="text-gray-600">Individuals + teams + business workflows</p>
                </div>
                <Badge variant="secondary" className="w-fit">
                  169 professional roles included
                </Badge>
              </CardContent>
            </Card>

            {/* Card 3: OS */}
            <Card className="border-2 border-orange-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">AI Director OS (Notion)</CardTitle>
                <CardDescription className="text-lg">Run it instantly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">One-click execution:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Links open ChatGPT agents</li>
                    <li>• Agents interview you</li>
                    <li>• Generate finished outputs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Onboarding + workflows</li>
                    <li>• ROI tracking + updates</li>
                  </ul>
                </div>
                <Badge variant="secondary" className="w-fit">
                  No copy/paste required
                </Badge>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-blue-600">
              This is why it dominates: Skill + Library + Execution Engine.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT'S INSIDE THE OS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Inside the AI Director OS (Notion Command Center)
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "25+ Role-Based One-Click Agents",
                description: "Service, Marketing, Sales, Product, Operations & more. Interview-style agents that understand your needs before creating.",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: <Layout className="w-8 h-8" />,
                title: "Dashboard Home",
                description: "Central command center with quick access to all agents, resources, and your workflow progress.",
                color: "bg-green-100 text-green-600"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "7-Day Transformation Program",
                description: "Step-by-step guidance to integrate AI agents into your workflow and see immediate results.",
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: <FolderTree className="w-8 h-8" />,
                title: "Workflows Library",
                description: "Pre-built workflows for complex projects. Chain multiple agents together for comprehensive deliverables.",
                color: "bg-orange-100 text-orange-600"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Progress Tracker (ROI)",
                description: "Track your efficiency gains and translate them into tangible business impact and time savings.",
                color: "bg-red-100 text-red-600"
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Changelog + Roadmap",
                description: "See what's new and what's coming. Updates every 2 months based on founding member feedback.",
                color: "bg-indigo-100 text-indigo-600"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Callout Box */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl p-8 text-center shadow-xl">
            <Zap className="w-12 h-12 mx-auto mb-4" />
            <p className="text-2xl font-bold mb-2">
              Click → ChatGPT opens → Agent starts interviewing you.
            </p>
            <p className="text-lg opacity-90">
              No copy/paste. Ever. Just one-click access to professional AI agents.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHO CAN USE THIS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Who this is for (beginner → advanced, individual → organization)
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Complete Beginners",
                description: "\"I don't know anything about AI or where to start\"",
                color: "bg-pink-100 text-pink-600"
              },
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Students/Career Builders",
                description: "Learn faster, write better, plan clearer",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Non-technical Professionals",
                description: "Emails, docs, summaries, plans",
                color: "bg-green-100 text-green-600"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Skilled Professionals",
                description: "Sharpen thinking, speed up output",
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Founders/Solopreneurs",
                description: "Marketing + sales + ops in one system",
                color: "bg-orange-100 text-orange-600"
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: "Small Business Owners",
                description: "Repeatable workflows, consistency",
                color: "bg-red-100 text-red-600"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Teams/Organizations",
                description: "Standardize outputs and processes",
                color: "bg-indigo-100 text-indigo-600"
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Developers/Technicians",
                description: "Documentation, specs, technical writing",
                color: "bg-gray-100 text-gray-600"
              },
              {
                icon: <PenTool className="w-8 h-8" />,
                title: "Creators/Content Writers",
                description: "Brand guidelines, voice, content calendars",
                color: "bg-yellow-100 text-yellow-600"
              }
            ].map((audience, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${audience.color} rounded-xl flex items-center justify-center mb-4`}>
                    {audience.icon}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{audience.title}</h3>
                  <p className="text-gray-600">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl p-8 text-center">
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <p className="text-xl text-gray-800 font-semibold mb-2">
              <strong>If you think you'll be lost — you won't.</strong>
            </p>
            <p className="text-lg text-gray-700">
              Every component includes clear, beginner-friendly usage guidance. Even if you have zero AI experience, the bundle will guide you step-by-step.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: BUNDLE STACK */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Everything included (and why it's worth far more than the price)
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Playbook */}
            <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">AI Director Playbook</CardTitle>
                <CardDescription className="text-lg">Learn the method (plain English)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What's inside:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• AI fundamentals explained simply</li>
                    <li>• Step-by-step mastery path</li>
                    <li>• Real-world examples</li>
                    <li>• Common mistakes to avoid</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Helps you produce:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Clear AI directions</li>
                    <li>• Professional outputs</li>
                    <li>• Consistent quality</li>
                  </ul>
                </div>
                <div className="text-center pt-2">
                  <span className="text-2xl font-bold text-blue-600">$39 value</span>
                </div>
              </CardContent>
            </Card>

            {/* Role Vault */}
            <Card className="border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">AI Director Role Vault</CardTitle>
                <CardDescription className="text-lg">Choose the right system for any situation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Professional role systems:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Not random prompts</li>
                    <li>• Built-in guidance</li>
                    <li>• Clear output expectations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Works for:</h4>
                  <p className="text-gray-600">Individuals + teams + business workflows</p>
                </div>
                <div className="text-center pt-2">
                  <span className="text-2xl font-bold text-purple-600">$79 value</span>
                </div>
              </CardContent>
            </Card>

            {/* OS */}
            <Card className="border-2 border-orange-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">AI Director OS</CardTitle>
                <CardDescription className="text-lg">Run it instantly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">One-click execution:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Links open ChatGPT agents</li>
                    <li>• Agents interview you</li>
                    <li>• Generate finished outputs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Onboarding + workflows</li>
                    <li>• ROI tracking + updates</li>
                  </ul>
                </div>
                <div className="text-center pt-2">
                  <span className="text-2xl font-bold text-orange-600">$197 value</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-blue-50 rounded-lg p-8">
            <p className="text-xl text-gray-700 mb-4">
              Even if you only use ONE part, you win. Together, it becomes a full operating system.
            </p>
            <p className="text-3xl font-bold text-blue-600">
              Total Value: $315 | Founding Member: $99
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: LIVE DEMO */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Watch the Agent Experience (Click → Questions → Finished Output)
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {/* Video 1 */}
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/VHHB1I4dhmw?si=hyPIMbJqA8U1lD9Q"
                  title="AI Director Playbook Preview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 text-blue-600">Quick Preview</h3>
                <p className="text-gray-800 font-semibold mb-4">Introduction to AI Director Playbook - See how easy it is to get started</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-blue-800 font-medium mb-3">📖 Written in simple, easy-to-read English that anyone can understand</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Simple, digestible framework</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Get started in under 5 minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Perfect for beginners and pros</span>
                    </div>
                  </div>
                </div>
                </CardContent>
            </Card>

            {/* Video 2 */}
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/OQDFTcMp5hk?si=KAS5P8B-dRqhIF9h"
                  title="Real Agent Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 text-orange-600">Full Demo</h3>
                <p className="text-gray-800 font-semibold mb-4">Watch AI agents in action - From click to finished output</p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Live agent interaction demo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Real-time question-answer process</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Professional output examples</span>
                    </div>
                  </div>
                </div>
                </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-8">
            <p className="text-gray-700">
              We show the experience and quality of outputs — full system remains protected after purchase.
            </p>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4"
              onClick={() => window.open('https://danielwill.gumroad.com/l/AIDirectorOSBundle', '_blank')}
            >
              Get Instant Access
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 8: FOUNDING MEMBERS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Award className="w-16 h-16 text-orange-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Founding Members get priority support (first 100 only)
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                First come, first serve. When they're gone, they're gone.
              </p>
              <p className="text-xl text-blue-600 font-semibold mb-8">
                Priority guidance: "If you get stuck, we'll guide you step-by-step"
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Your experience is what we value most
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  What you get:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Priority support window</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Direct help when stuck</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Exclusive perks:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Early workflow drops</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Roadmap input access</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.open('https://danielwill.gumroad.com/l/AIDirectorOSBundle', '_blank')}
              >
                Become a Founding Member
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: PRICING */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founding Member */}
            <Card className="border-2 border-orange-400 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 text-sm font-semibold">
                BEST VALUE
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">Founding Member</CardTitle>
                <div className="text-4xl font-bold text-orange-600">$99</div>
                <p className="text-gray-600">First 100 buyers only</p>
                <Badge className="bg-orange-100 text-orange-800">
                  {spotsRemaining} spots remaining
                </Badge>
                
                {/* Discount visualization */}
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 line-through">Total Value:</span>
                    <span className="text-gray-500 line-through">$315</span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-green-600">You save:</span>
                    <span className="text-green-600">$216 (69% OFF)</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-gray-700 mb-2">What You Get:</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg animate-fade-in">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-700">AI Director Playbook ($39 value)</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg animate-fade-in" style={{animationDelay: '0.1s'}}>
                      <Users className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-gray-700">169 Role Systems Vault ($79 value)</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
                      <Zap className="w-4 h-4 text-orange-600" />
                      <span className="text-sm text-gray-700">AI Director OS ($197 value)</span>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <ul className="space-y-3">
                    {[
                      "Priority support",
                      "Early workflow access",
                      "Roadmap input",
                      "All future updates"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 animate-slide-in" style={{animationDelay: `${0.3 + index * 0.1}s`}}>
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col items-center">
                  <Button 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    size="lg"
                    onClick={() => window.open('https://danielwill.gumroad.com/l/AIDirectorOSBundle', '_blank')}
                  >
                    Get Founding Member Access
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Standard */}
            <Card className="border-2 border-gray-300 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-semibold">
                STILL A GREAT DEAL
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">Standard Price</CardTitle>
                <div className="text-4xl font-bold text-gray-900">$197</div>
                <p className="text-gray-600">After first 100 spots are gone</p>
                
                {/* Discount visualization */}
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 line-through">Total Value:</span>
                    <span className="text-gray-500 line-through">$315</span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-green-600">You save:</span>
                    <span className="text-green-600">$118 (37% OFF)</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-gray-700 mb-2">What You Get:</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg animate-fade-in">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-700">AI Director Playbook ($39 value)</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg animate-fade-in" style={{animationDelay: '0.1s'}}>
                      <Users className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-gray-700">169 Role Systems Vault ($79 value)</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
                      <Zap className="w-4 h-4 text-orange-600" />
                      <span className="text-sm text-gray-700">AI Director OS ($197 value)</span>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <ul className="space-y-3">
                    {[
                      "Standard support",
                      "Regular updates",
                      "Full access to all features"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 animate-slide-in" style={{animationDelay: `${0.3 + index * 0.1}s`}}>
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col items-center">
                  <Button 
                    variant="outline" 
                    className="w-full text-lg py-3 transform hover:scale-105 transition-all duration-200"
                    size="lg"
                    disabled
                  >
                    Available After First 100
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              When the first 100 are gone, price switches automatically.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Both prices include significant discounts from the total value of $315
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10: PRO TEASER */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Coming Soon: AI Director Pro (Automation Edition)
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Rocket className="w-20 h-20 text-blue-600 mx-auto mb-6" />
              <p className="text-xl text-gray-700 mb-8">
                Advanced execution patterns for scaling workflows and teams
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What's included</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Advanced execution patterns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Automation blueprints</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Airtable command center</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Team collaboration workflows</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Designed for</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Scaling workflows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Team operations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Complex projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Enterprise integration</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-lg text-blue-800 font-semibold">
                <strong>Founding Members will receive a private upgrade offer when Pro launches.</strong>
              </p>
              <p className="text-blue-700 mt-2">
                This exclusive discount is only for early supporters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Do I need prompt experience?",
                answer: "Not at all! The AI Director Playbook is designed for complete beginners. We teach you everything from scratch in plain English."
              },
              {
                question: "Do I need Notion experience?",
                answer: "No. The OS comes with a complete onboarding guide. If you can use a web browser, you can use this system."
              },
              {
                question: "Is there copy/paste?",
                answer: "No! This is the whole point. Click once, ChatGPT opens, and the agent starts interviewing you. No copy/paste ever."
              },
              {
                question: "What do I receive after purchase?",
                answer: "You get instant access to: 1) AI Director Playbook (PDF), 2) AI Director Role Vault (PDF with 169 systems), 3) AI Director OS (Notion template with 25+ agents)."
              },
              {
                question: "How do updates work?",
                answer: "You receive free updates every 2 months. The Notion OS includes a changelog and roadmap so you always know what's coming."
              },
              {
                question: "What roles is this for?",
                answer: "Everyone! From total beginners to advanced professionals. Founders, creators, marketers, sales teams, product managers, operators, students, and teams."
              },
              {
                question: "How is this different from other prompt vaults?",
                answer: "This isn't a prompt vault. It's a complete operating system with: 1) Learning playbook, 2) Professional role systems, 3) One-click agents that interview you and create finished work."
              },
              {
                question: "What if I feel lost?",
                answer: "You won't! Every component includes beginner-friendly guidance. Plus, Founding Members get priority support - we'll guide you step-by-step if you get stuck."
              },
              {
                question: "Can teams use this?",
                answer: "Absolutely! The Role Vault and OS are designed for both individuals and teams. Standardize your AI outputs across the entire organization."
              },
              {
                question: "What happens after I purchase?",
                answer: "Immediately after purchase, you'll receive a welcome email with direct access to all components. As a Founding Member, you'll get priority support email access for any questions."
              },
              {
                question: "How do I communicate with the team as a Founding Member?",
                answer: "Founding Members receive exclusive email access to our support team. We'll actively seek your feedback to improve the product and you'll get direct responses to your questions."
              },
              {
                question: "Will my feedback really matter?",
                answer: "Absolutely! Founding Member feedback is crucial for our development. Your input directly shapes our roadmap, new features, and improvements. We read and respond to every message."
              },
              {
                question: "Can I request another language after purchase via email?",
                answer: "You can email us with language requests. While we can't guarantee availability for all languages, we'll do our best to accommodate based on demand."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 12: FINAL CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-12">
            Agents are the future. Install yours today.
          </h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-8 mb-8 border border-white/20">
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 text-white">
              <div className="flex items-center justify-center gap-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                <span className="text-base sm:text-lg">25+ one-click agents</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                <span className="text-base sm:text-lg">Playbook + 169 systems vault</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                <span className="text-base sm:text-lg">Onboarding + ROI tracker + updates</span>
              </div>
            </div>

            <div 
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg sm:text-xl font-bold py-4 sm:py-6 px-4 sm:px-8 rounded-2xl mb-4 sm:mb-6 inline-block shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => window.open('https://danielwill.gumroad.com/l/AIDirectorOSBundle', '_blank')}
              >
              Get the AI Director OS Bundle
            </div>

            <div className="text-white text-xl sm:text-2xl font-bold mb-4">
              Founding Member Price: $99 (first {spotsRemaining}) → then $197
            </div>

            <div className="bg-yellow-400 text-gray-900 text-base sm:text-lg font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl inline-block animate-pulse">
              🔥 Limited Time: Only {spotsRemaining} founding member spots remaining
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto"
            onClick={() => window.open('https://danielwill.gumroad.com/l/AIDirectorOSBundle', '_blank')}
          >
            Get the Bundle
            <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-white mb-4 text-lg">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#system" className="hover:text-white transition-colors text-gray-300 hover:text-white">Features</a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors text-gray-300 hover:text-white">Pricing</a>
                </li>
                <li>
                  <a href="#demo" className="hover:text-white transition-colors text-gray-300 hover:text-white">Demo</a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors text-gray-300 hover:text-white">FAQ</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4 text-lg">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#faq" className="hover:text-white transition-colors text-gray-300 hover:text-white">FAQ</a>
                </li>
                <li>
                  <a href="mailto:hello@aidirectoros.com" className="hover:text-white transition-colors text-gray-300 hover:text-white">Contact</a>
                </li>
                <li>
                  <a href="#privacy" className="hover:text-white transition-colors text-gray-300 hover:text-white">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4 text-lg">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="hover:text-white transition-colors text-gray-300 hover:text-white">About</a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-white transition-colors text-gray-300 hover:text-white">Blog</a>
                </li>
                <li>
                  <a href="#affiliates" className="hover:text-white transition-colors text-gray-300 hover:text-white">Affiliates</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4 text-lg">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#terms" className="hover:text-white transition-colors text-gray-300 hover:text-white">Terms of Service</a>
                </li>
                <li>
                  <a href="#privacy" className="hover:text-white transition-colors text-gray-300 hover:text-white">Privacy Policy</a>
                </li>
                <li>
                  <a href="#refund" className="hover:text-white transition-colors text-gray-300 hover:text-white">Refund Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-blue-600 font-bold text-sm">AI</span>
                </div>
                <span className="text-white font-semibold text-xl">AI Director OS</span>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-400 text-sm mb-2">
                  © 2025 AI Director OS. All rights reserved.
                </p>
                <div className="flex items-center gap-4 justify-center md:justify-end mt-2">
                  <a href="mailto:hello@aidirectoros.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                    hello@aidirectoros.com
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-xs">
                Built with ❤️ for AI-powered professionals
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
