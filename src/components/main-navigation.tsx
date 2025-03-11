"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { label: "홈", href: "/" },
    { label: "포트폴리오", href: "/portfolio" },
    { label: "서비스", href: "/services" },
    { label: "후기", href: "/reviews" },
    { label: "문의하기", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">SPACE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="text-sm font-medium transition-colors hover:text-[#007AFF]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="bg-[#007AFF] hover:bg-[#0062CC]" asChild>
            <Link href="/contact">무료 상담 신청</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-50 h-[calc(100vh-4rem)] transform overflow-y-auto bg-background p-4 transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col space-y-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex h-12 items-center rounded-md px-4 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4">
            <Button className="w-full bg-[#007AFF] hover:bg-[#0062CC] py-6 text-base" asChild>
              <Link href="/contact">무료 상담 신청</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

