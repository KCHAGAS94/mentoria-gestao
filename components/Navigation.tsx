"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false) // Close mobile menu after clicking
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-xl font-bold hover:text-blue-200 transition-colors"
            >
              Consultoria Kenedy Chagas
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("resumo")}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
              >
                Resumo
              </button>
              <button
                onClick={() => scrollToSection("escopo")}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
              >
                Escopo Detalhado
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-900 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("resumo")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors"
            >
              Resumo
            </button>
            <button
              onClick={() => scrollToSection("escopo")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors"
            >
              Escopo Detalhado
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
