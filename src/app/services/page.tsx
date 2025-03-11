import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNavigation />

      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/img/room-3.jpg"
          alt="Our Services"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">서비스 소개</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">SPACE 스튜디오가 제공하는 전문 서비스를 소개합니다</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:gap-16">
          {/* Architecture Service */}
          <div id="architecture" className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <div className="mb-2 inline-block rounded-full bg-[#F5F5F7] px-3 py-1 text-sm text-[#007AFF]">
                건축 설계
              </div>
              <h2 className="mb-4 text-3xl font-medium tracking-tight">공간의 가능성을 극대화하는 건축 설계</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                기능성과 미학적 가치를 모두 충족시키는 건축 설계 서비스를 제공합니다. 고객의 니즈와 부지의 특성을 고려한
                최적의 솔루션을 제안합니다.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-[#007AFF]" />
                  <span>건축 기획 및 컨셉 디자인</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-[#007AFF]" />
                  <span>기본 및 실시 설계</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-[#007AFF]" />
                  <span>인허가 및 행정 지원</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-[#007AFF]" />
                  <span>시공 감리 및 품질 관리</span>
                </li>
              </ul>
              <Button className="bg-[#007AFF] hover:bg-[#0062CC]" asChild>
                <Link href="/contact">
                  상담 신청하기 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/img/room-2.jpg"
                  alt="건축 설계 서비스"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Interior Design Service */}
          <div id="interior" className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/img/room-3.jpg"
                  alt="인테리어 디자인 서비스"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="mb-2 inline-block rounded-full bg-[#F5F5F7] px-3 py-1 text-sm text-[#007AFF]">
                인테리어 디자인
              </div>
              <h2 className="mb-4 text-3xl font-medium tracking-tight">공간에 생명을 불어넣는 인테리어 디자인</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                공간의 특성과 사용자의 라이프스타일을 고려한 맞춤형 인테리어 디자인을 제공합니다. 트렌디하면서도
                실용적인 공간을 만들어 드립니다.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-[#007AFF]" />
                  <span>공간 컨셉 및 디자인 기획</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-[#007AFF]" />
                  <span>색상 및 재료 선정</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-[#007AFF]" />
                  <span>가구 및 조명 디자인</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-[#007AFF]" />
                  <span>시공 관리 및 스타일링</span>
                </li>
              </ul>
              <Button className="bg-[#007AFF] hover:bg-[#0062CC]" asChild>
                <Link href="/contact">
                  상담 신청하기 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Remodeling Service */}
          <div id="remodeling" className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <div className="mb-2 inline-block rounded-full bg-[#F5F5F7] px-3 py-1 text-sm text-[#007AFF]">
                리모델링
              </div>
              <h2 className="mb-4 text-3xl font-medium tracking-tight">오래된 공간에 새 생명을 불어넣는 리모델링</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                노후화된 공간을 현대적이고 기능적인 공간으로 탈바꿈시켜 드립니다. 구조적 안전성과 미적 가치를 모두
                고려한 리모델링 서비스를 제공합니다.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-[#007AFF]" />
                  <span>공간 진단 및 구조 검토</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-[#007AFF]" />
                  <span>설비 및 전기 시스템 개선</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-[#007AFF]" />
                  <span>공간 재구성 및 확장</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-[#007AFF]" />
                  <span>마감재 교체 및 업그레이드</span>
                </li>
              </ul>
              <Button className="bg-[#007AFF] hover:bg-[#0062CC]" asChild>
                <Link href="/contact">
                  상담 신청하기 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/img/room-4.jpg"
                  alt="리모델링 서비스"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Consulting Service */}
          <div id="consulting" className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/img/room-6.jpg"
                  alt="공간 컨설팅 서비스"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="mb-2 inline-block rounded-full bg-[#F5F5F7] px-3 py-1 text-sm text-[#007AFF]">
                공간 컨설팅
              </div>
              <h2 className="mb-4 text-3xl font-medium tracking-tight">전문적인 시각으로 제안하는 공간 컨설팅</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                공간의 가치를 극대화하기 위한 전문적인 컨설팅 서비스를 제공합니다. 부동산 투자부터 상업 공간 기획까지
                다양한 분야의 컨설팅이 가능합니다.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-[#007AFF]" />
                  <span>부동산 개발 컨설팅</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-[#007AFF]" />
                  <span>상업 공간 기획 및 브랜딩</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-[#007AFF]" />
                  <span>공간 활용 및 효율성 분석</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-[#007AFF]" />
                  <span>예산 계획 및 투자 분석</span>
                </li>
              </ul>
              <Button className="bg-[#007AFF] hover:bg-[#0062CC]" asChild>
                <Link href="/contact">
                  상담 신청하기 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#F5F5F7] px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-medium tracking-tight">작업 프로세스</h2>
            <p className="mt-4 text-lg text-muted-foreground">고객님의 만족을 위한 체계적인 프로세스</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "상담 & 기획",
                description: "고객의 니즈와 예산을 파악하고 최적의 솔루션을 제안합니다.",
              },
              {
                step: "02",
                title: "디자인 제안",
                description: "공간의 특성을 고려한 맞춤형 디자인을 제안하고 협의합니다.",
              },
              {
                step: "03",
                title: "시공 진행",
                description: "전문 시공팀이 철저한 품질 관리 하에 작업을 진행합니다.",
              },
              {
                step: "04",
                title: "마무리 & A/S",
                description: "완벽한 마무리와 지속적인 사후 관리를 약속드립니다.",
              },
            ].map((process, index) => (
              <div key={index} className="relative rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 text-3xl font-bold text-[#007AFF]">{process.step}</div>
                <h3 className="mb-2 text-xl font-medium">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
                {index < 3 && (
                  <ArrowRight className="absolute -right-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 text-[#007AFF] md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black px-4 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-medium tracking-tight">지금 바로 상담을 신청하세요</h2>
          <p className="mt-4 text-lg text-white/80">전문가의 조언으로 당신의 공간을 더 특별하게 만들어 드립니다</p>
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

