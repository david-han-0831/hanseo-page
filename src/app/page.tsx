import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNavigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <Image
          src="/img/room-8.jpg"
          alt="Modern interior design"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="max-w-4xl text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            당신의 공간을 특별하게
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            최고의 디자인과 시공 품질로 당신만의 특별한 공간을 만들어 드립니다
          </p>
          <Button size="lg" className="mt-8 bg-[#007AFF] hover:bg-[#0062CC]">
            무료 상담 신청 <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-medium tracking-tight">미션 & 비전</h2>
            <p className="text-lg text-muted-foreground">
              우리는 공간의 가치를 재창조하여 사람들의 삶의 질을 향상시키는 것을 목표로 합니다. 최신 트렌드와 기술을
              접목한 디자인으로 기능성과 미학적 가치를 모두 충족시키는 공간을 만들어 드립니다.
            </p>
            <div className="pt-4">
              <Link href="/about" className="text-[#007AFF] hover:underline">
                더 알아보기 <ArrowRight className="ml-1 inline-block h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-medium tracking-tight">핵심 가치</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start">
                <div className="mr-4 rounded-full bg-[#F5F5F7] p-2">
                  <Star className="h-5 w-5 text-[#007AFF]" />
                </div>
                <div>
                  <strong>혁신</strong> - 끊임없는 도전과 창의적인 접근
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 rounded-full bg-[#F5F5F7] p-2">
                  <Star className="h-5 w-5 text-[#007AFF]" />
                </div>
                <div>
                  <strong>신뢰</strong> - 정직한 소통과 약속 이행
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 rounded-full bg-[#F5F5F7] p-2">
                  <Star className="h-5 w-5 text-[#007AFF]" />
                </div>
                <div>
                  <strong>품질</strong> - 타협하지 않는 최고의 품질 추구
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-[#F5F5F7] px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-medium tracking-tight">주요 프로젝트</h2>
            <p className="mt-4 text-lg text-muted-foreground">최근 완성된 대표 프로젝트를 소개합니다</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "강남 레지던스", category: "주거공간", image: "/img/room-1.jpg" },
              { title: "성수동 카페", category: "상업공간", image: "/img/room-2.jpg" },
              { title: "분당 오피스", category: "상업공간", image: "/img/room-3.jpg" },
              { title: "한남동 빌라", category: "리모델링", image: "/img/room-4.jpg" },
              { title: "이태원 레스토랑", category: "상업공간", image: "/img/room-5.jpg" },
              { title: "용산 아파트", category: "주거공간", image: "/img/room-6.jpg" },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
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
                  <Link
                    href={`/portfolio/${index}`}
                    className="mt-4 inline-block text-sm text-[#007AFF] hover:underline"
                  >
                    자세히 보기
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-[#007AFF] text-[#007AFF] hover:bg-[#007AFF] hover:text-white"
              asChild
            >
              <Link href="/portfolio">
                모든 프로젝트 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="mx-auto max-w-6xl px-4 py-24">
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
            <div key={index} className="relative rounded-lg bg-[#F5F5F7] p-6">
              <div className="mb-4 text-3xl font-bold text-[#007AFF]">{process.step}</div>
              <h3 className="mb-2 text-xl font-medium">{process.title}</h3>
              <p className="text-muted-foreground">{process.description}</p>
              {index < 3 && (
                <ArrowRight className="absolute -right-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 text-[#007AFF] lg:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F5F5F7] px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-medium tracking-tight">고객 후기</h2>
            <p className="mt-4 text-lg text-muted-foreground">저희 서비스를 경험한 고객님들의 소중한 후기입니다</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "김지영",
                project: "강남 레지던스",
                rating: 5,
                review:
                  "처음부터 끝까지 세심하게 관리해주셔서 만족스러운 결과물을 얻을 수 있었습니다. 특히 공간 활용도가 높아져서 너무 좋아요!",
              },
              {
                name: "이상호",
                project: "성수동 카페",
                rating: 5,
                review:
                  "예상했던 것보다 훨씬 더 멋진 공간이 완성되었습니다. 고객들의 반응도 매우 좋고 인스타그램 핫플레이스가 되었어요.",
              },
              {
                name: "박미라",
                project: "용산 아파트",
                rating: 4,
                review:
                  "전문적인 조언과 세련된 디자인으로 오래된 아파트가 완전히 새로운 모습으로 변신했습니다. 시공 품질도 매우 만족스럽습니다.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#007AFF] text-[#007AFF]" />
                      ))}
                  </div>
                  <p className="mb-4 text-muted-foreground">"{testimonial.review}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.project}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-[#007AFF] text-[#007AFF] hover:bg-[#007AFF] hover:text-white"
              asChild
            >
              <Link href="/reviews">
                모든 후기 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black px-4 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">당신의 공간, 지금 시작하세요</h2>
          <p className="mt-4 text-lg text-white/80">무료 상담을 통해 당신의 공간이 가진 가능성을 발견하세요</p>
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

