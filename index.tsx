"use client"

import { Suspense, lazy, useState, useEffect } from "react"
import { PreLoader } from "@/components/preloader"

// Ленивая загрузка компонентов для оптимизации
const HomePage = lazy(() => import("./page"))

export default function Index() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Имитация загрузки ресурсов
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <Suspense fallback={<PreLoader />}>
          <HomePage />
        </Suspense>
      )}
    </>
  )
}
