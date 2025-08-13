"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { CheckIcon, SparklesIcon, HeartIcon, ShieldCheckIcon, ClockIcon, BeakerIcon, StarIcon } from "@heroicons/react/24/outline"

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
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-ochre-200 to-ochre-300 text-sage-800 animate-gradient">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-center">
            <StarIcon className="w-4 h-4 animate-bounce-subtle" />
            <span>Founding Parent Panel - Limited Spots Available</span>
            <a href="#join" className="underline hover:no-underline transition-all hover:text-sage-900">
              Join Now
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-sage-50/95 backdrop-blur-md border-b border-sage-200/50 soft-shadow">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-18">
            <div className="flex items-center animate-float">
              <Image
                src="/images/belly-good-logo.png"
                alt="BellyGood"
                width={180}
                height={54}
                className="h-12 sm:h-14 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#benefits"
                className="text-sage-600 hover:text-sage-700 font-medium transition-all hover:scale-105"
              >
                Benefits
              </a>
              <a
                href="#solution"
                className="text-sage-600 hover:text-sage-700 font-medium transition-all hover:scale-105"
              >
                How It Works
              </a>
              <a
                href="#join"
                className="bg-gradient-to-r from-ochre-300 to-ochre-400 hover:from-ochre-400 hover:to-ochre-500 text-sage-800 px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 soft-shadow text-sm"
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
                  href="#benefits"
                  className="text-sage-600 font-medium hover:text-sage-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Benefits
                </a>
                <a
                  href="#solution"
                  className="text-sage-600 font-medium hover:text-sage-700 transition-colors"
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-ochre-50/30 to-sage-100"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8 reveal-fade-up">
              
              {/* Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-ochre-200 to-ochre-300 text-sage-800 px-4 py-2 rounded-full text-sm font-bold animate-bounce-subtle soft-shadow">
                <SparklesIcon className="w-4 h-4 mr-2" />
                Ready in 30 Seconds • Pediatrician-Approved
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl leading-tight font-light text-sage-800">
                The easiest way to feed your baby{" "}
                <span className="text-ochre-600 relative font-normal">
                  anywhere
                  <svg className="absolute -bottom-1 left-0 w-full h-2 text-ochre-400/70" viewBox="0 0 100 8" fill="none">
                    <path d="M0 6c20-3 40-3 60 0s40 3 40 0" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-sage-600 max-w-xl mx-auto lg:mx-0 font-light">
                Freeze-dried, organic baby meals that keep their natural taste and nutrition — ready in 30 seconds wherever life takes you
              </p>

              {/* Three Key Benefits */}
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 my-8">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left reveal-slide-up" style={{animationDelay: '0.1s'}}>
                  <div className="w-12 h-12 bg-gradient-to-br from-ochre-200 to-ochre-300 rounded-xl flex items-center justify-center mb-3">
                    <ClockIcon className="w-6 h-6 text-sage-700" />
                  </div>
                  <h3 className="font-bold text-sage-800 text-sm sm:text-base">30-Second Prep</h3>
                  <p className="text-sage-600 text-xs sm:text-sm">Just add warm water</p>
                </div>

                <div className="flex flex-col items-center lg:items-start text-center lg:text-left reveal-slide-up" style={{animationDelay: '0.2s'}}>
                  <div className="w-12 h-12 bg-gradient-to-br from-ochre-200 to-ochre-300 rounded-xl flex items-center justify-center mb-3">
                    <BeakerIcon className="w-6 h-6 text-sage-700" />
                  </div>
                  <h3 className="font-bold text-sage-800 text-sm sm:text-base">97% Nutrients</h3>
                  <p className="text-sage-600 text-xs sm:text-sm">Freeze-dried to lock nutrition</p>
                </div>

                <div className="flex flex-col items-center lg:items-start text-center lg:text-left reveal-slide-up" style={{animationDelay: '0.3s'}}>
                  <div className="w-12 h-12 bg-gradient-to-br from-ochre-200 to-ochre-300 rounded-xl flex items-center justify-center mb-3">
                    <ShieldCheckIcon className="w-6 h-6 text-sage-700" />
                  </div>
                  <h3 className="font-bold text-sage-800 text-sm sm:text-base">Doctor Approved</h3>
                  <p className="text-sage-600 text-xs sm:text-sm">Iron, DHA & Vitamin D</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="reveal-zoom-in" style={{animationDelay: '0.4s'}}>
                <a
                  href="#join"
                  className="inline-flex items-center bg-gradient-to-r from-sage-700 to-sage-600 hover:from-sage-800 hover:to-sage-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 soft-shadow-lg"
                >
                  Join Early Access – Get 20% Off Launch
                </a>
                <p className="text-sage-500 text-sm mt-3">No commitment • Free to join • Limited spots</p>
              </div>
            </div>

            {/* Right Column - Image Space */}
            <div className="relative reveal-slide-left" style={{animationDelay: '0.2s'}}>
              <div className="relative bg-gradient-to-br from-ochre-100 to-ochre-200 rounded-3xl p-8 sm:p-12 soft-shadow-lg min-h-[400px] sm:min-h-[500px] flex items-center justify-center">
                {/* Placeholder for your image */}
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-ochre-300 to-ochre-400 rounded-2xl mx-auto flex items-center justify-center">
                    <SparklesIcon className="w-12 h-12 text-sage-700" />
                  </div>
                  <p className="text-sage-600 font-medium">Your Product Image Here</p>
                  <p className="text-sage-500 text-sm">Replace with actual product photo</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-ochre-300/50 rounded-full animate-float"></div>
                <div className="absolute bottom-6 left-6 w-6 h-6 bg-sage-300/50 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-4 w-4 h-4 bg-ochre-400/50 rounded-full animate-bounce-subtle" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="benefits" className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-sage-800 mb-12 font-light reveal-fade-up">
            Stop choosing between convenience and nutrition
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="bg-gradient-to-br from-sage-50 to-sage-100 p-6 sm:p-8 rounded-2xl soft-shadow reveal-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="text-3xl sm:text-4xl mb-4">😰</div>
              <h3 className="font-bold text-sage-800 mb-3 text-base sm:text-lg">"Is this healthy?"</h3>
              <p className="text-sage-600 text-sm sm:text-base">Endless ingredient research</p>
            </div>
            <div className="bg-gradient-to-br from-sage-50 to-sage-100 p-6 sm:p-8 rounded-2xl soft-shadow reveal-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl sm:text-4xl mb-4">⏰</div>
              <h3 className="font-bold text-sage-800 mb-3 text-base sm:text-lg">"No time to cook"</h3>
              <p className="text-sage-600 text-sm sm:text-base">Juggling work and meals</p>
            </div>
            <div className="bg-gradient-to-br from-sage-50 to-sage-100 p-6 sm:p-8 rounded-2xl soft-shadow reveal-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="text-3xl sm:text-4xl mb-4">🍎</div>
              <h3 className="font-bold text-sage-800 mb-3 text-base sm:text-lg">"Will they be picky?"</h3>
              <p className="text-sage-600 text-sm sm:text-base">Worried about habits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 sm:py-20 bg-gradient-to-br from-sage-50 via-ochre-50 to-sage-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-sage-800 mb-6 font-light reveal-fade-up">
              How BellyGood Solves It
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white/80 backdrop-blur-sm border border-sage-200/50 rounded-2xl p-6 sm:p-8 text-center soft-shadow reveal-slide-up hover:scale-105 transition-all" style={{animationDelay: '0.1s'}}>
              <div className="w-14 h-14 bg-gradient-to-br from-ochre-200 to-ochre-300 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <ClockIcon className="w-7 h-7 text-sage-700" />
              </div>
              <h3 className="font-bold text-sage-800 mb-3 text-base sm:text-lg">30 Second Prep</h3>
              <p className="text-sage-600 text-sm sm:text-base">Just add warm water anywhere</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-sage-200/50 rounded-2xl p-6 sm:p-8 text-center soft-shadow reveal-slide-up hover:scale-105 transition-all" style={{animationDelay: '0.2s'}}>
              <div className="w-14 h-14 bg-gradient-to-br from-ochre-200 to-ochre-300 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <BeakerIcon className="w-7 h-7 text-sage-700" />
              </div>
              <h3 className="font-bold text-sage-800 mb-3 text-base sm:text-lg">97% Nutrients</h3>
              <p className="text-sage-600 text-sm sm:text-base">Freeze-dried to lock nutrition</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-sage-200/50 rounded-2xl p-6 sm:p-8 text-center soft-shadow reveal-slide-up hover:scale-105 transition-all" style={{animationDelay: '0.3s'}}>
              <div className="w-14 h-14 bg-gradient-to-br from-ochre-200 to-ochre-300 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <SparklesIcon className="w-7 h-7 text-sage-700" />
              </div>
              <h3 className="font-bold text-sage-800 mb-3 text-base sm:text-lg">Guided Flavors</h3>
              <p className="text-sage-600 text-sm sm:text-base">Build healthy eating habits</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-sage-200/50 rounded-2xl p-6 sm:p-8 text-center soft-shadow reveal-slide-up hover:scale-105 transition-all" style={{animationDelay: '0.4s'}}>
              <div className="w-14 h-14 bg-gradient-to-br from-ochre-200 to-ochre-300 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <ShieldCheckIcon className="w-7 h-7 text-sage-700" />
              </div>
              <h3 className="font-bold text-sage-800 mb-3 text-base sm:text-lg">Doctor Approved</h3>
              <p className="text-sage-600 text-sm sm:text-base">Iron, DHA & Vitamin D included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Detail Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-ochre-100/50 to-ochre-200/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-sage-800 mb-12 font-light reveal-fade-up">
            Imagine mealtime this simple
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-4 sm:gap-6 text-left bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl soft-shadow reveal-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-ochre-300 to-ochre-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-sage-800 font-bold text-sm sm:text-base">30s</span>
              </div>
              <p className="text-sage-700 font-medium text-base sm:text-lg">Add warm water, stir, serve</p>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 text-left bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl soft-shadow reveal-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-ochre-300 to-ochre-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                <HeartIcon className="w-6 h-6 sm:w-7 sm:h-7 text-sage-800" />
              </div>
              <p className="text-sage-700 font-medium text-base sm:text-lg">Iron & DHA in every serving</p>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 text-left bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl soft-shadow reveal-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-ochre-300 to-ochre-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                <ShieldCheckIcon className="w-6 h-6 sm:w-7 sm:h-7 text-sage-800" />
              </div>
              <p className="text-sage-700 font-medium text-base sm:text-lg">Batch test info for transparency</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="py-16 sm:py-20 bg-gradient-to-br from-sage-700 via-sage-600 to-sage-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl mb-6 font-light reveal-fade-up">Be Part of the First Launch</h2>
          <p className="text-lg sm:text-xl text-sage-100 mb-12 font-light reveal-fade-up" style={{animationDelay: '0.1s'}}>
            Join our Founding Parent Panel. Limited spots available.
          </p>

          {!emailSubmitted ? (
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 soft-shadow-lg reveal-zoom-in" style={{animationDelay: '0.2s'}}>
              <form onSubmit={handleEmailSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-sage-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ochre-400 text-sage-800 text-base sm:text-lg soft-shadow"
                  />
                  <select className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-sage-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ochre-400 bg-white text-sage-800 text-base sm:text-lg soft-shadow">
                    <option value="">Child age (optional)</option>
                    <option value="0-6m">0–6 months</option>
                    <option value="6-12m">6–12 months</option>
                    <option value="12-24m">12–24 months</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-ochre-300 to-ochre-400 hover:from-ochre-400 hover:to-ochre-500 text-sage-800 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all transform hover:scale-105 soft-shadow-lg"
                >
                  Join Early Access Today
                </button>
                <p className="text-sage-600 text-xs sm:text-sm">
                  <strong>Panel perks:</strong> Early tastings • 20% launch discount • Help pick flavors • Direct input
                  on packaging
                </p>
              </form>
            </div>
          ) : (
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 soft-shadow-lg text-sage-800 animate-slide-up">
              <div className="w-16 h-16 bg-gradient-to-br from-ochre-200 to-ochre-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckIcon className="w-8 h-8 text-sage-700" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl mb-4 font-light">Welcome to the Panel! ✨</h3>
              <p className="text-sage-600">
                You're now part of our exclusive Founding Parent Panel. We'll be in touch soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-sage-200/50 py-6 sm:py-8 bg-sage-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 text-center text-sage-500 text-sm">
          <span>© BellyGood. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}