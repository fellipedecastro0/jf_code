"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#equipe", label: "A Equipe" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Gradient line at the top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
      
      <nav className="backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-sm group-hover:opacity-50 transition-opacity" />
                <span className="relative text-xl font-bold tracking-tight text-zinc-100">
                  JF<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Code</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation - Center */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Button - Right */}
            <div className="hidden md:block">
              <button 
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-zinc-100 font-semibold text-sm px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer"
              >
                Orçamento
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-800/50 bg-zinc-950/95 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-base font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button 
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-zinc-100 font-semibold text-sm px-5 py-2.5 rounded-lg cursor-pointer"
              >
                Orçamento
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
