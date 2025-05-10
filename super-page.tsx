"use client"

import { useState, useEffect, Suspense, lazy } from "react"
import { motion } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import { PreLoader } from "@/components/preloader"
import { Button } from "@/components/ui/button"

// Ленивая загрузка компонентов для оптимизации
const HomePage = lazy(() => import("./page"))
// const ThreeDScene = lazy(() => import("@/components/3d-scene"))
const ParallaxSection = lazy(() => import("@/components/parallax-section"))
const Testimonials = lazy(() => import("@/components/testimonials"))
const StatsCounter = lazy(() => import("@/components/stats-counter"))
const BlogPreview = lazy(() => import("@/components/blog-preview"))
const Footer = lazy(() => import("@/components/footer"))

// Компонент загрузки
const SectionLoader = () => (
  <div className="flex items-center justify-center h-[300px]">
    <div className="relative w-16 h-16">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
    </div>
  </div>
)

export default function SuperPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Имитация загрузки ресурсов
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {isLoading ? (
        <PreLoader />
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
          <Suspense fallback={<PreLoader />}>
            <HomePage />

            {/* 3D Scene Section - Temporarily Disabled */}
            <section className="container mx-auto px-4 py-12">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-12 relative"
              >
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
              </motion.h2>

              <div className="relative w-full h-[400px] my-12">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/5 rounded-lg border border-primary/10">
                  <p className="mb-4 text-muted-foreground">3D демонстрация временно недоступна</p>
                  <Button className="bg-gradient-to-r from-primary to-primary-dark">Будет доступно скоро</Button>
                </div>
              </div>
            </section>

            {/* Parallax Section */}
            <Suspense fallback={<SectionLoader />}>
              <ParallaxSection />
            </Suspense>

            {/* Testimonials Section */}
            <Suspense fallback={<SectionLoader />}>
              <Testimonials />
            </Suspense>

            {/* Stats Counter Section */}
            <Suspense fallback={<SectionLoader />}>
              <StatsCounter />
            </Suspense>

            {/* Blog Preview Section */}
            <Suspense fallback={<SectionLoader />}>
              <BlogPreview />
            </Suspense>

            {/* Footer */}
            <Suspense fallback={<SectionLoader />}>
              <Footer />
            </Suspense>
          </Suspense>
        </div>
      )}
    </ThemeProvider>
  )
}
