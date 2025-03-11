import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"

export default function ReviewsPage() {
  const reviews = [
    {
      name: "김지영",
      project: "강남 레지던스",
      rating: 5,
      date: "2023.10.15",
      review:
        "처음부터 끝까지 세심하게 관리해주셔서 만족스러운 결과물을 얻을 수 있었습니다. 특히 공간 활용도가 높아져서 너무 좋아요! 디자이너분의 전문적인 조언 덕분에 제가 생각하지 못했던 부분까지 완벽하게 구현되었습니다. 다음에도 기회가 된다면 꼭 다시 의뢰하고 싶습니다.",
    },
    {
      name: "이상호",
      project: "성수동 카페",
      rating: 5,
      date: "2023.09.22",
      review:
        "예상했던 것보다 훨씬 더 멋진 공간이 완성되었습니다. 고객들의 반응도 매우 좋고 인스타그램 핫플레이스가 되었어요. 특히 조명과 가구 배치가 정말 탁월했습니다. 카페의 분위기를 정확히 이해하고 그에 맞는 디자인을 제안해주셔서 감사합니다.",
    },
    {
      name: "박미라",
      project: "용산 아파트",
      rating: 4,
      date: "2023.08.05",
      review:
        "전문적인 조언과 세련된 디자인으로 오래된 아파트가 완전히 새로운 모습으로 변신했습니다. 시공 품질도 매우 만족스럽습니다. 다만 일정이 조금 지연된 점이 아쉬웠지만, 결과물은 정말 훌륭했습니다.",
    },
    {
      name: "정태영",
      project: "분당 오피스",
      rating: 5,
      date: "2023.07.18",
      review:
        "사무실 인테리어를 맡겼는데, 직원들의 만족도가 매우 높습니다. 업무 효율성을 고려한 공간 배치와 세련된 디자인이 조화롭게 어우러져 있어요. 특히 회의실과 휴게 공간의 디자인이 정말 마음에 듭니다.",
    },
    {
      name: "최수진",
      project: "한남동 빌라",
      rating: 5,
      date: "2023.06.30",
      review:
        "빌라 리모델링을 의뢰했는데, 생각했던 것보다 훨씬 더 넓고 밝은 공간으로 탈바꿈했습니다. 특히 수납 공간 활용이 정말 뛰어나요. 디자이너분의 센스와 전문성에 정말 감사드립니다. 다음에도 인테리어가 필요하면 꼭 다시 찾을 것입니다.",
    },
    {
      name: "장현우",
      project: "이태원 레스토랑",
      rating: 4,
      date: "2023.05.12",
      review:
        "레스토랑 인테리어를 맡겼는데, 분위기가 정말 좋아졌습니다. 고객들의 반응도 매우 긍정적이에요. 시공 과정에서 약간의 의사소통 문제가 있었지만, 최종 결과물은 매우 만족스럽습니다.",
    },
    {
      name: "김민지",
      project: "송파 아파트",
      rating: 5,
      date: "2023.04.25",
      review:
        "아이가 있는 집이라 안전과 수납을 가장 중요하게 생각했는데, 두 가지 모두 완벽하게 해결해주셨어요. 깔끔하면서도 실용적인 디자인이 정말 마음에 듭니다. 특히 아이 방 디자인이 너무 예쁘게 나왔어요!",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <MainNavigation />

      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/img/room-1.jpg"
          alt="Customer Reviews"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">고객 후기</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            SPACE 스튜디오의 서비스를 경험한 고객님들의 소중한 후기입니다
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {reviews.map((review, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#007AFF] text-[#007AFF]" />
                    ))}
                  {Array(5 - review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-muted-foreground" />
                    ))}
                </div>
                <p className="mb-4 text-muted-foreground">"{review.review}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.project}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">{review.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Before & After Section */}
      <section className="bg-[#F5F5F7] px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-medium tracking-tight">Before & After</h2>
            <p className="mt-4 text-lg text-muted-foreground">SPACE 스튜디오의 놀라운 변화를 확인하세요</p>
          </div>

          <div className="grid gap-12">
            {[
              { title: "강남 레지던스", category: "주거공간", image1: "/img/room-1.jpg", image2: "/img/room-2.jpg" },
              { title: "성수동 카페", category: "상업공간", image1: "/img/room-7.jpg", image2: "/img/room-3.jpg" },
              { title: "용산 아파트", category: "리모델링", image1: "/img/room-6.jpg", image2: "/img/room-9.jpg" },
            ].map((project, index) => (
              <div key={index} className="overflow-hidden rounded-lg bg-white shadow-md">
                <div className="p-6">
                  <div className="mb-2 text-sm text-[#007AFF]">{project.category}</div>
                  <h3 className="mb-4 text-xl font-medium">{project.title}</h3>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="relative aspect-video">
                    <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
                      Before
                    </div>
                    <Image
                      src={project.image1}
                      alt={`${project.title} Before`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-video">
                    <div className="absolute left-4 top-4 rounded-full bg-[#007AFF] px-3 py-1 text-xs text-white">
                      After
                    </div>
                    <Image
                      src={project.image2}
                      alt={`${project.title} After`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <Link href={`/portfolio/${index}`} className="text-sm text-[#007AFF] hover:underline">
                    프로젝트 자세히 보기 <ArrowRight className="ml-1 inline-block h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black px-4 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-medium tracking-tight">당신의 공간도 변화시켜 드립니다</h2>
          <p className="mt-4 text-lg text-white/80">지금 바로 무료 상담을 신청하세요</p>
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

