import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"

export default function PortfolioPage() {
  const projects = [
    { title: "강남 레지던스", category: "주거공간", image: "/img/room-1.jpg" },
    { title: "성수동 카페", category: "상업공간", image: "/img/room-2.jpg" },
    { title: "분당 오피스", category: "상업공간", image: "/img/room-3.jpg" },
    { title: "한남동 빌라", category: "리모델링", image: "/img/room-4.jpg" },
    { title: "이태원 레스토랑", category: "상업공간", image: "/img/room-5.jpg" },
    { title: "용산 아파트", category: "주거공간", image: "/img/room-6.jpg" },
    { title: "판교 테크노밸리 사무실", category: "상업공간", image: "/img/room-7.jpg" },
    { title: "청담동 펜트하우스", category: "주거공간", image: "/img/room-9.jpg" },
    { title: "홍대 쇼룸", category: "상업공간", image: "/img/room-9.jpg" },
    { title: "송파 아파트", category: "리모델링", image: "/img/kitchen-1.jpg" },
    { title: "광화문 오피스", category: "상업공간", image: "/img/kitchen-2.jpg" },
    { title: "마포 단독주택", category: "주거공간", image: "/img/kitchen-3.jpg" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <MainNavigation />

      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Portfolio"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">포트폴리오</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">SPACE 스튜디오의 다양한 프로젝트를 소개합니다</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Tabs defaultValue="all" className="w-full">
          <div className="mb-8 flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-4">
              <TabsTrigger value="all">전체</TabsTrigger>
              <TabsTrigger value="residential">주거공간</TabsTrigger>
              <TabsTrigger value="commercial">상업공간</TabsTrigger>
              <TabsTrigger value="remodeling">리모델링</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="residential" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "주거공간")
                .map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="commercial" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "상업공간")
                .map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="remodeling" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "리모델링")
                .map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="bg-black px-4 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-medium tracking-tight">나만의 프로젝트를 시작하세요</h2>
          <p className="mt-4 text-lg text-white/80">당신의 공간에 새로운 가치를 더해드립니다</p>
          <Button size="lg" className="mt-8 bg-[#007AFF] hover:bg-[#0062CC]" asChild>
            <Link href="/contact">
              무료 상담 신청하기 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ProjectCard({ project, index }: { project: { title: string; category: string; image: string }; index: number }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-64 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="mb-2 text-sm text-[#007AFF]">{project.category}</div>
        <h3 className="text-xl font-medium">{project.title}</h3>
        <Link href={`/portfolio/${index}`} className="mt-4 inline-block text-sm text-[#007AFF] hover:underline">
          자세히 보기
        </Link>
      </CardContent>
    </Card>
  )
}

