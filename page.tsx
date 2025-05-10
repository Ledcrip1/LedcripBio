"use client"

import type React from "react"

import { useState, useRef, useCallback, Suspense, lazy, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Moon,
  Sun,
  Mail,
  Phone,
  Send,
  Award,
  User,
  FileText,
  Layers,
  Cpu,
  Server,
  Database,
  Globe,
  Smartphone,
  Gamepad,
  Bot,
  Sparkles,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { useTheme } from "next-themes"
import { useMobile } from "@/hooks/use-mobile"

// Используем динамический импорт для оптимизации загрузки
const ParticlesBackground = lazy(() => import("@/components/particles-background"))
const TypewriterEffect = lazy(() => import("@/components/typewriter-effect"))
const SkillCard = lazy(() => import("@/components/skill-card"))
const ProjectCard = lazy(() => import("@/components/project-card"))
const ExperienceTimeline = lazy(() => import("@/components/experience-timeline"))
const ContactForm = lazy(() => import("@/components/contact-form"))
const AboutMeModal = lazy(() => import("@/components/about-me-modal"))
const CertificatesModal = lazy(() => import("@/components/certificates-modal"))
const ContactModal = lazy(() => import("@/components/contact-modal"))
const ScrollToTop = lazy(() => import("@/components/scroll-to-top"))
const HeroBackground = lazy(() => import("@/components/hero-background"))
const FloatingIcons = lazy(() => import("@/components/floating-icons"))
const ParallaxSection = lazy(() => import("@/components/parallax-section"))
const Testimonials = lazy(() => import("@/components/testimonials"))
const StatsCounter = lazy(() => import("@/components/stats-counter"))
const BlogPreview = lazy(() => import("@/components/blog-preview"))
const Footer = lazy(() => import("@/components/footer"))
const ThreeDScene = lazy(() => import("@/components/3d-scene"))

// Добавляем компонент загрузки
const Loading = () => (
  <div className="flex items-center justify-center h-full min-h-[200px]">
    <div className="relative w-16 h-16">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
    </div>
  </div>
)

export default function HomePage() {
  const [showAboutModal, setShowAboutModal] = useState(false)
  const [showCertificatesModal, setShowCertificatesModal] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const { theme, setTheme } = useTheme()
  const isMobile = useMobile()
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const threeDRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const blogRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  // Устанавливаем флаг загрузки после монтирования компонента
  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const bioText =
    "Я профессиональный full-stack разработчик с более чем 3-летним опытом работы. Специализируюсь на создании современных веб-приложений с использованием Python, JavaScript и связанных технологий. Моя страсть - создавать чистый, эффективный и масштабируемый код, который решает реальные проблемы."
  const aboutMeText =
    "Я начал свой путь в программировании в 2020 году и с тех пор непрерывно развиваю свои навыки. За это время я успел поработать над десятками проектов различной сложности - от простых лендингов до сложных веб-приложений с использованием современных фреймворков. Я постоянно учусь новым технологиям и слежу за трендами в разработке. В свободное время люблю участвовать в open-source проектах и решать задачи на CodeWars."

  const skills = [
    { name: "Python", level: 90, icon: <Code className="h-5 w-5" /> },
    { name: "JavaScript", level: 85, icon: <Code className="h-5 w-5" /> },
    { name: "HTML/CSS", level: 95, icon: <Globe className="h-5 w-5" /> },
    { name: "C++", level: 75, icon: <Cpu className="h-5 w-5" /> },
    { name: "React", level: 80, icon: <Layers className="h-5 w-5" /> },
    { name: "Node.js", level: 75, icon: <Server className="h-5 w-5" /> },
    { name: "Django", level: 85, icon: <Database className="h-5 w-5" /> },
    { name: "Git", level: 80, icon: <Github className="h-5 w-5" /> },
  ]

  const projects = {
    web: [
      {
        title: "Интернет-магазин",
        description: "Разработка интернет-магазина на Django (полный цикл от проектирования до deployment)",
        icon: <Globe className="h-6 w-6" />,
        tags: ["Django", "Python", "JavaScript", "HTML/CSS"],
      },
      {
        title: "Корпоративный сайт",
        description: "Создание корпоративного сайта с CMS на WordPress (настройка сервера, разработка темы)",
        icon: <Globe className="h-6 w-6" />,
        tags: ["WordPress", "PHP", "JavaScript", "HTML/CSS"],
      },
      {
        title: "Веб-приложение для управления задачами",
        description: "Веб-приложение для управления задачами с React и Node.js (JWT аутентификация, REST API)",
        icon: <Layers className="h-6 w-6" />,
        tags: ["React", "Node.js", "MongoDB", "JWT"],
      },
      {
        title: "Портал для онлайн-курсов",
        description: "Портал для онлайн-курсов с системой оплаты и видео-хостингом",
        icon: <FileText className="h-6 w-6" />,
        tags: ["Django", "React", "PostgreSQL", "AWS"],
      },
    ],
    mobile: [
      {
        title: "Трекер привычек",
        description: "Мобильное приложение для трекинга привычек (React Native, Firebase)",
        icon: <Smartphone className="h-6 w-6" />,
        tags: ["React Native", "Firebase", "JavaScript"],
      },
      {
        title: "Приложение для доставки еды",
        description: "Кроссплатформенное приложение для доставки еды",
        icon: <Smartphone className="h-6 w-6" />,
        tags: ["Flutter", "Dart", "Firebase", "Google Maps API"],
      },
      {
        title: "Приложение для изучения языков",
        description: "Приложение для изучения иностранных языков с игровыми элементами",
        icon: <Smartphone className="h-6 w-6" />,
        tags: ["React Native", "Redux", "Node.js", "MongoDB"],
      },
    ],
    games: [
      {
        title: "2D платформер",
        description: "2D платформер на Python с PyGame",
        icon: <Gamepad className="h-6 w-6" />,
        tags: ["Python", "PyGame", "Pixel Art"],
      },
      {
        title: "Текстовая RPG",
        description: "Текстовая RPG игра с инвентарём и системой квестов",
        icon: <Gamepad className="h-6 w-6" />,
        tags: ["JavaScript", "HTML5 Canvas", "CSS3"],
      },
      {
        title: "Мультиплеерная игра",
        description: "Мультиплеерная игра на Socket.io и Node.js",
        icon: <Gamepad className="h-6 w-6" />,
        tags: ["Node.js", "Socket.io", "JavaScript", "HTML5"],
      },
    ],
    ai: [
      {
        title: "Чат-бот с NLP",
        description: "Чат-бот с NLP для техподдержки (Python, NLTK)",
        icon: <Bot className="h-6 w-6" />,
        tags: ["Python", "NLTK", "Flask", "NLP"],
      },
      {
        title: "Система рекомендаций",
        description: "Система рекомендаций на основе машинного обучения",
        icon: <Bot className="h-6 w-6" />,
        tags: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
      },
      {
        title: "Анализ тональности",
        description: "Анализ тональности отзывов с использованием нейросетей",
        icon: <Bot className="h-6 w-6" />,
        tags: ["Python", "PyTorch", "BERT", "NLP"],
      },
    ],
  }

  const experience = [
    {
      period: "2025 - Настоящее время",
      title: "Full-Stack Разработчик",
      company: "Freelance",
      description: "Разработка веб-приложений, создание API, работа с базами данных, оптимизация производительности.",
    },
    {
      period: "2022 - 2024",
      title: "Frontend Разработчик",
      company: "Web Studio",
      description: "Создание адаптивных интерфейсов, работа с JavaScript фреймворками, оптимизация UX.",
    },
    {
      period: "2020 - 2023",
      title: "Python Разработчик",
      company: "Startup Project",
      description: "Разработка бэкенд логики, создание скриптов для автоматизации, работа с API.",
    },
  ]

  const contacts = [
    { icon: <Mail className="h-5 w-5" />, text: "example@email.com" },
    { icon: <Phone className="h-5 w-5" />, text: "+7 (XXX) XXX-XX-XX" },
    { icon: <Send className="h-5 w-5" />, text: "@loderps" },
  ]

  const friends = ["t.me/usertmd", "t.me/hello_friend", "t.me/ruvezove", "t.me/xxument"]

  const scrollToSection = useCallback((ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const navItems = [
    { name: "Проекты", ref: projectsRef },
    { name: "3D Демо", ref: threeDRef },
    { name: "Отзывы", ref: testimonialsRef },
    { name: "Блог", ref: blogRef },
    { name: "Контакты", ref: contactRef },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
      <Suspense fallback={<Loading />}>
        <ParticlesBackground />
        <FloatingIcons />
      </Suspense>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg gradient-text">Ledcrip Coder</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.ref)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setShowContactModal(true)} className="hover:bg-primary/10">
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* Theme Toggle */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full h-9 w-9 bg-background/80 backdrop-blur-sm border-primary/20"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Переключить тему</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center py-12 md:py-24 relative">
          <Suspense fallback={<Loading />}>
            <HeroBackground />
          </Suspense>

          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center md:items-start"
              >
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl relative group">
                    <img
                      src="/placeholder.svg?height=128&width=128"
                      alt="Аватар"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <motion.div
                    className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-background"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  ></motion.div>
                  <motion.div
                    className="absolute -top-1 -right-1 text-primary"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <Sparkles className="h-6 w-6" />
                  </motion.div>
                </motion.div>

                <div className="text-center md:text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.h1
                      className="text-4xl font-bold tracking-tight gradient-text"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Ledcrip Coder
                    </motion.h1>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, type: "spring" }}
                    >
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        PRO
                      </Badge>
                    </motion.div>
                  </div>
                  <motion.p
                    className="text-muted-foreground mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    крутой разработчик
                  </motion.p>

                  <motion.div
                    className="flex gap-6 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="text-center">
                      <motion.p
                        className="text-2xl font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        3+
                      </motion.p>
                      <p className="text-sm text-muted-foreground">Года опыта</p>
                    </div>
                    <div className="text-center">
                      <motion.p
                        className="text-2xl font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        20+
                      </motion.p>
                      <p className="text-sm text-muted-foreground">Проектов</p>
                    </div>
                    <div className="text-center">
                      <motion.p
                        className="text-2xl font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                      >
                        100%
                      </motion.p>
                      <p className="text-sm text-muted-foreground">Идеальный</p>
                    </div>
                  </motion.div>

                  <Suspense fallback={<p className="text-muted-foreground">Загрузка...</p>}>
                    <TypewriterEffect text={bioText} delay={10} /> {/* Ускоряем печать текста */}
                  </Suspense>

                  <motion.div
                    className="flex flex-wrap gap-3 mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        asChild
                        variant="default"
                        size="lg"
                        className="gap-2 bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
                      >
                        <a href="https://t.me/loderps" target="_blank" rel="noopener noreferrer">
                          <Send className="h-4 w-4" />
                          Telegram
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => setShowAboutModal(true)}
                        className="border-primary/20 hover:border-primary/50"
                      >
                        Подробнее обо мне
                      </Button>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="flex flex-wrap gap-2 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    <motion.div whileHover={{ scale: 1.05, y: -2 }}>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => scrollToSection(projectsRef)}
                        className="hover:bg-primary/10"
                      >
                        <Code className="h-4 w-4 mr-2" />
                        Проекты
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05, y: -2 }}>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowContactModal(true)}
                        className="hover:bg-primary/10"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Контакты
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05, y: -2 }}>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowCertificatesModal(true)}
                        className="hover:bg-primary/10"
                      >
                        <Award className="h-4 w-4 mr-2" />
                        Маи кенты
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="overflow-hidden border-primary/10 bg-background/60 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <User className="h-5 w-5 mr-2 text-primary" />
                        Навыки
                      </h2>

                      <div className="space-y-4">
                        {skills.slice(0, 4).map((skill, index) => (
                          <motion.div
                            key={index}
                            className="space-y-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                          >
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                {skill.icon}
                                <span className="ml-2 text-sm font-medium">{skill.name}</span>
                              </div>
                              <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                            >
                              <Progress value={skill.level} className="h-2" />
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {["Python", "JavaScript", "HTML", "CSS", "React", "Node.js", "Django", "Git"].map(
                          (skill, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.8 + index * 0.05 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                            >
                              <Badge
                                variant="secondary"
                                className="bg-primary/10 hover:bg-primary/20 transition-colors"
                              >
                                {skill}
                              </Badge>
                            </motion.div>
                          ),
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <div className="flex gap-4 justify-center">
                  {[
                    { icon: <Github className="h-6 w-6" />, url: "https://github.com" },
                    { icon: <Linkedin className="h-6 w-6" />, url: "https://linkedin.com" },
                    { icon: <Twitter className="h-6 w-6" />, url: "https://twitter.com" },
                    { icon: <Instagram className="h-6 w-6" />, url: "https://instagram.com" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-background/60 backdrop-blur-sm p-3 rounded-full border border-primary/10 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex justify-center mt-16"
            >
              <motion.button
                onClick={() => scrollToSection(projectsRef)}
                className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -5 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              >
                <span className="text-sm mb-2">Прокрутите вниз</span>
                <ChevronDown className="h-6 w-6" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-24 bg-gradient-to-b from-background via-primary/5 to-background"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 relative">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Технологии и языки
              </span>
              <motion.span
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              ></motion.span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Suspense fallback={<Loading />}>
                {[
                  { name: "Python", icon: <Code className="h-6 w-6" /> },
                  { name: "C++", icon: <Cpu className="h-6 w-6" /> },
                  { name: "HTML", icon: <Globe className="h-6 w-6" /> },
                  { name: "CSS", icon: <Layers className="h-6 w-6" /> },
                  { name: "JavaScript", icon: <Code className="h-6 w-6" /> },
                  { name: "React", icon: <Layers className="h-6 w-6" /> },
                  { name: "Node.js", icon: <Server className="h-6 w-6" /> },
                  { name: "Django", icon: <Database className="h-6 w-6" /> },
                  { name: "Git", icon: <Github className="h-6 w-6" /> },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <SkillCard name={skill.name} icon={skill.icon} />
                  </motion.div>
                ))}
              </Suspense>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          ref={projectsRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-24"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 relative">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Мои проекты
              </span>
              <motion.span
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              ></motion.span>
            </h2>

            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-5 mb-8 w-full max-w-2xl mx-auto">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="web">Веб</TabsTrigger>
                <TabsTrigger value="mobile">Мобильные</TabsTrigger>
                <TabsTrigger value="games">Игры</TabsTrigger>
                <TabsTrigger value="ai">AI/ML</TabsTrigger>
              </TabsList>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="all" className="mt-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <Suspense fallback={<Loading />}>
                        {[...projects.web, ...projects.mobile, ...projects.games, ...projects.ai]
                          .slice(0, 6)
                          .map((project, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * index }}
                            >
                              <ProjectCard
                                title={project.title}
                                description={project.description}
                                icon={project.icon}
                                tags={project.tags}
                              />
                            </motion.div>
                          ))}
                      </Suspense>
                    </div>
                  </TabsContent>

                  <TabsContent value="web" className="mt-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <Suspense fallback={<Loading />}>
                        {projects.web.map((project, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                          >
                            <ProjectCard
                              title={project.title}
                              description={project.description}
                              icon={project.icon}
                              tags={project.tags}
                            />
                          </motion.div>
                        ))}
                      </Suspense>
                    </div>
                  </TabsContent>

                  <TabsContent value="mobile" className="mt-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <Suspense fallback={<Loading />}>
                        {projects.mobile.map((project, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                          >
                            <ProjectCard
                              title={project.title}
                              description={project.description}
                              icon={project.icon}
                              tags={project.tags}
                            />
                          </motion.div>
                        ))}
                      </Suspense>
                    </div>
                  </TabsContent>

                  <TabsContent value="games" className="mt-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <Suspense fallback={<Loading />}>
                        {projects.games.map((project, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                          >
                            <ProjectCard
                              title={project.title}
                              description={project.description}
                              icon={project.icon}
                              tags={project.tags}
                            />
                          </motion.div>
                        ))}
                      </Suspense>
                    </div>
                  </TabsContent>

                  <TabsContent value="ai" className="mt-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <Suspense fallback={<Loading />}>
                        {projects.ai.map((project, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                          >
                            <ProjectCard
                              title={project.title}
                              description={project.description}
                              icon={project.icon}
                              tags={project.tags}
                            />
                          </motion.div>
                        ))}
                      </Suspense>
                    </div>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-24 bg-gradient-to-b from-background via-primary/5 to-background"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 relative">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Опыт работы
              </span>
              <motion.span
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              ></motion.span>
            </h2>

            <Suspense fallback={<Loading />}>
              <ExperienceTimeline experience={experience} />
            </Suspense>
          </div>
        </motion.section>

        {/* 3D Scene Section */}
        <motion.section
          ref={threeDRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-24"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 relative">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                3D Демонстрация
              </span>
              <motion.span
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              ></motion.span>
            </h2>

            <ThreeDScene />
          </div>
        </motion.section>

        {/* Parallax Section */}
        <Suspense fallback={<Loading />}>
          <ParallaxSection />
        </Suspense>

        {/* Testimonials Section */}
        <motion.section
          ref={testimonialsRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Suspense fallback={<Loading />}>
            <Testimonials />
          </Suspense>
        </motion.section>

        {/* Stats Counter Section */}
        <Suspense fallback={<Loading />}>
          <StatsCounter />
        </Suspense>

        {/* Blog Preview Section */}
        <motion.section
          ref={blogRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Suspense fallback={<Loading />}>
            <BlogPreview />
          </Suspense>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          ref={contactRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-24 bg-gradient-to-b from-background via-primary/5 to-background"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 relative">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Свяжитесь со мной
              </span>
              <motion.span
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              ></motion.span>
            </h2>

            <div className="max-w-2xl mx-auto">
              <Suspense fallback={<Loading />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <Suspense fallback={<Loading />}>
          <Footer />
        </Suspense>
      </main>

      {/* Modals */}
      <Suspense fallback={null}>
        <AboutMeModal isOpen={showAboutModal} onClose={() => setShowAboutModal(false)} content={aboutMeText} />

        <CertificatesModal
          isOpen={showCertificatesModal}
          onClose={() => setShowCertificatesModal(false)}
          friends={friends}
        />

        <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} contacts={contacts} />

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </Suspense>
    </div>
  )
}

function Menu(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
