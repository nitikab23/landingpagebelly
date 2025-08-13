"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { CheckIcon, SparklesIcon, HeartIcon, ShieldCheckIcon, ClockIcon, BeakerIcon } from "@heroicons/react/24/outline"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Enhanced reveal animation observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const revealElements = document.querySelectorAll(".reveal")
    revealElements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmailSubmitted(true)
  }

  return (
    <div className="min-h-screen dreamy-bg">
      <div className="bg-gradient-to-r from-ochre-200 to-ochre-300 text-sage-800 animate-gradient">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-center">
            <span className="animate-bounce-subtle">✨ Founding Parent Panel - Limited Spots</span>
            <a href="#join" className="underline hover:no-underline transition-all hover:text-sage-900">
              Join Now
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-sage-50/90 backdrop-blur-md border-b border-sage-200/50 soft-shadow">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-18">
            <div className="flex items-center animate-float">
              <Image
                src="/images/belly-good-logo.png"
                alt="BellyGood"
                width={200}
                height={60}
                className="h-14 sm:h-16 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#solution"
                className="text-sage-600 hover:text-sage-700 font-semibold transition-all hover:scale-105"
              >
                How It Works
              </a>
              <a
                href="#join"
                className="bg-gradient-to-r from-ochre-300 to-ochre-400 hover:from-ochre-400 hover:to-ochre-500 text-sage-800 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 soft-shadow"
              >
                Join Early Access
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-sage-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span
                  className={`block h-0.5 w-6 bg-sage-700 transition-all rounded-full ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                />
                <span
                  className={`block h-0.5 w-6 bg-sage-700 transition-all rounded-full ${isMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 w-6 bg-sage-700 transition-all rounded-full ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-sage-200/50 py-4 animate-fade-in">
              <div className="flex flex-col space-y-4">
                <a
                  href="#solution"
                  className="text-sage-600 font-semibold hover:text-sage-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </a>
                <a
                  href="#join"
                  className="bg-gradient-to-r from-ochre-300 to-ochre-400 text-sage-800 px-6 py-3 rounded-full font-bold text-center transition-all soft-shadow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Early Access
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden dreamy-hero">
        {/* Soft overlay instead of dark one */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>

        {/* Overlaid Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-white/90 text-sage-800 px-6 py-3 rounded-full text-sm font-bold mb-8 animate-bounce-subtle soft-shadow">
            <SparklesIcon className="w-4 h-4 mr-2 text-ochre-600" />
            Ready in 30 Seconds • Pediatrician-Approved
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl mb-8 leading-tight font-light">
            The easiest way to feed your baby{" "}
            <span className="text-ochre-200 relative font-normal">
              anywhere
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-ochre-300/70" viewBox="0 0 100 12" fill="none">
                <path d="M0 8c20-4 40-4 60 0s40 4 40 0" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl mb-10 text-white/90 max-w-2xl mx-auto font-light">
            Freeze-dried, ready in 30 seconds — wherever life takes you
          </p>

          <a
            href="#join"
            className="inline-flex items-center bg-white text-sage-800 hover:bg-sage-50 px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 soft-shadow-lg"
          >
            Join Early Access – Get 20% Off Launch
          </a>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-sage-800 mb-12 font-light">
            Stop choosing between convenience and nutrition
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="bg-gradient-to-br from-sage-50 to-sage-100 p-8 rounded-2xl soft-shadow reveal">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="font-bold text-sage-800 mb-3 text-lg">"Is this healthy?"</h3>
              <p className="text-sage-600">Endless ingredient research</p>
            </div>
            <div className="bg-gradient-to-br from-sage-50 to-sage-100 p-8 rounded-2xl soft-shadow reveal">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="font-bold text-sage-800 mb-3 text-lg">"No time to cook"</h3>
              <p className="text-sage-600">Juggling work and meals</p>
            </div>
            <div className="bg-gradient-to-br from-sage-50 to-sage-100 p-8 rounded-2xl soft-shadow reveal">
              <div className="text-4xl mb-4">🍎</div>
              <h3 className="font-bold text-sage-800 mb-3 text-lg">"Will they be picky?"</h3>
              <p className="text-sage-600">Worried about habits</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-sage-50 via-ochre-50 to-sage-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-sage-800 mb-6 font-light">
              How BellyGood Solves It
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-sm border border-sage-200/50 rounded-2xl p-8 text-center soft-shadow reveal hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-ochre-200 to-ochre-300 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <ClockIcon className="w-8 h-8 text-sage-700" />
              </div>
              <h3 className="font-bold text-sage-800 mb-3 text-lg">30 Second Prep</h3>
              <p className="text-sage-600">Just add warm water anywhere</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-sage-200/50 rounded-2xl p-8 text-center soft-shadow reveal hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-ochre-200 to-ochre-300 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <BeakerIcon className="w-8 h-8 text-sage-700" />
              </div>
              <h3 className="font-bold text-sage-800 mb-3 text-lg">97% Nutrients</h3>
              <p className="text-sage-600">Freeze-dried to lock nutrition</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-sage-200/50 rounded-2xl p-8 text-center soft-shadow reveal hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-ochre-200 to-ochre-300 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <SparklesIcon className="w-8 h-8 text-sage-700" />
              </div>
              <h3 className="font-bold text-sage-800 mb-3 text-lg">Guided Flavors</h3>
              <p className="text-sage-600">Build healthy eating habits</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-sage-200/50 rounded-2xl p-8 text-center soft-shadow reveal hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-ochre-200 to-ochre-300 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <ShieldCheckIcon className="w-8 h-8 text-sage-700" />
              </div>
              <h3 className="font-bold text-sage-800 mb-3 text-lg">Doctor Approved</h3>
              <p className="text-sage-600">Iron, DHA & Vitamin D included</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-ochre-100/50 to-ochre-200/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-sage-800 mb-12 font-light">
            Imagine mealtime this simple
          </h2>
          <div className="space-y-6">
            <div className="flex items-center gap-6 text-left bg-white/90 backdrop-blur-sm p-6 rounded-2xl soft-shadow reveal">
              <div className="w-14 h-14 bg-gradient-to-br from-ochre-300 to-ochre-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-sage-800 font-bold">30s</span>
              </div>
              <p className="text-sage-700 font-medium text-lg">Add warm water, stir, serve</p>
            </div>
            <div className="flex items-center gap-6 text-left bg-white/90 backdrop-blur-sm p-6 rounded-2xl soft-shadow reveal">
              <div className="w-14 h-14 bg-gradient-to-br from-ochre-300 to-ochre-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                <HeartIcon className="w-7 h-7 text-sage-800" />
              </div>
              <p className="text-sage-700 font-medium text-lg">Iron & DHA in every serving</p>
            </div>
            <div className="flex items-center gap-6 text-left bg-white/90 backdrop-blur-sm p-6 rounded-2xl soft-shadow reveal">
              <div className="w-14 h-14 bg-gradient-to-br from-ochre-300 to-ochre-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                <ShieldCheckIcon className="w-7 h-7 text-sage-800" />
              </div>
              <p className="text-sage-700 font-medium text-lg">Batch test info for transparency</p>
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="py-16 sm:py-20 bg-gradient-to-br from-sage-700 via-sage-600 to-sage-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 font-light">Be Part of the First Launch</h2>
          <p className="text-xl text-sage-100 mb-12 font-light">
            Join our Founding Parent Panel. Limited spots available.
          </p>

          {!emailSubmitted ? (
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 soft-shadow-lg">
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full px-6 py-4 border border-sage-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ochre-400 text-sage-800 text-lg soft-shadow"
                  />
                  <select className="w-full px-6 py-4 border border-sage-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ochre-400 bg-white text-sage-800 text-lg soft-shadow">
                    <option value="">Child age (optional)</option>
                    <option value="0-6m">0–6 months</option>
                    <option value="6-12m">6–12 months</option>
                    <option value="12-24m">12–24 months</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-ochre-300 to-ochre-400 hover:from-ochre-400 hover:to-ochre-500 text-sage-800 py-5 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 soft-shadow-lg"
                >
                  Join Early Access Today
                </button>
                <p className="text-sage-600 text-sm">
                  <strong>Panel perks:</strong> Early tastings • 20% launch discount • Help pick flavors • Direct input
                  on packaging
                </p>
              </form>
            </div>
          ) : (
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 soft-shadow-lg text-sage-800 animate-slide-up">
              <div className="w-16 h-16 bg-gradient-to-br from-ochre-200 to-ochre-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckIcon className="w-8 h-8 text-sage-700" />
              </div>
              <h3 className="font-serif text-2xl mb-4 font-light">Welcome to the Panel! ✨</h3>
              <p className="text-sage-600">
                You're now part of our exclusive Founding Parent Panel. We'll be in touch soon!
              </p>
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-sage-200/50 py-8 bg-sage-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 text-center text-sage-500">
          <span>© BellyGood. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}
