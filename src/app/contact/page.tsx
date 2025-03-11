"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "residential",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, projectType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 여기에 폼 제출 로직 추가
    console.log("Form submitted:", formData)
    alert("상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.")
    setFormData({
      name: "",
      phone: "",
      email: "",
      projectType: "residential",
      message: "",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MainNavigation />

      {/* Hero Section */}
      <section className="relative h-[30vh] md:h-[40vh] w-full overflow-hidden">
        <Image
          src="/img/room-1.jpg"
          alt="Contact Us"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">문의하기</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">궁금한 점이 있으시면 언제든지 문의해 주세요</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-medium tracking-tight">상담 신청</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              아래 양식을 작성하시면 전문 상담사가 빠른 시일 내에 연락드립니다.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">이름</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="홍길동"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">연락처</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="010-1234-5678"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label>프로젝트 유형</Label>
                <RadioGroup defaultValue="residential" value={formData.projectType} onValueChange={handleRadioChange}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="residential" id="residential" />
                    <Label htmlFor="residential">주거공간</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="commercial" id="commercial" />
                    <Label htmlFor="commercial">상업공간</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="remodeling" id="remodeling" />
                    <Label htmlFor="remodeling">리모델링</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="consulting" id="consulting" />
                    <Label htmlFor="consulting">공간 컨설팅</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">문의 내용</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="궁금한 점이나 요청사항을 자유롭게 작성해 주세요."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full bg-[#007AFF] hover:bg-[#0062CC] py-6 text-base">
                상담 신청하기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-between lg:pl-12 mt-12 lg:mt-0">
            <div>
              <h2 className="mb-6 text-3xl font-medium tracking-tight">연락처 정보</h2>
              <div className="mb-8 space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-[#007AFF]" />
                  <div>
                    <h3 className="font-medium">주소</h3>
                    <p className="text-muted-foreground">서울특별시 강남구 테헤란로 123 스페이스빌딩 8층</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-[#007AFF]" />
                  <div>
                    <h3 className="font-medium">전화</h3>
                    <p className="text-muted-foreground">02-123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-[#007AFF]" />
                  <div>
                    <h3 className="font-medium">이메일</h3>
                    <p className="text-muted-foreground">info@spacestudio.kr</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-xl font-medium">영업 시간</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>월요일 - 금요일: 09:00 - 18:00</p>
                  <p>토요일: 10:00 - 15:00 (예약제)</p>
                  <p>일요일 및 공휴일: 휴무</p>
                </div>
              </div>
            </div>

            <Card className="mt-8 bg-[#F5F5F7]">
              <CardContent className="flex items-center p-6">
                <MessageCircle className="mr-4 h-10 w-10 text-[#007AFF]" />
                <div>
                  <h3 className="text-lg font-medium">카카오톡 상담</h3>
                  <p className="text-muted-foreground">빠른 상담이 필요하시면 카카오톡으로 문의해 주세요.</p>
                  <Button className="mt-4 bg-[#FEE500] text-black hover:bg-[#FEE500]/90" asChild>
                    <Link href="#">카카오톡 상담하기</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-[#F5F5F7]">
        <div className="relative h-full w-full">
          <Image src="/img/location.png" alt="Map" fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <div className="rounded-lg bg-white p-4 shadow-lg">
              <MapPin className="h-8 w-8 text-[#007AFF]" />
            </div> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

