import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-[#F5F5F7]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-medium">SPACE</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              최고의 디자인과 시공 품질로 당신만의 특별한 공간을 만들어 드립니다.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-muted-foreground hover:text-[#007AFF]">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#007AFF]">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#007AFF]">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">바로가기</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-[#007AFF]">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-[#007AFF]">
                  포트폴리오
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-[#007AFF]">
                  서비스
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-muted-foreground hover:text-[#007AFF]">
                  후기
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-[#007AFF]">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">서비스</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#architecture" className="text-muted-foreground hover:text-[#007AFF]">
                  건축 설계
                </Link>
              </li>
              <li>
                <Link href="/services#interior" className="text-muted-foreground hover:text-[#007AFF]">
                  인테리어 디자인
                </Link>
              </li>
              <li>
                <Link href="/services#remodeling" className="text-muted-foreground hover:text-[#007AFF]">
                  리모델링
                </Link>
              </li>
              <li>
                <Link href="/services#consulting" className="text-muted-foreground hover:text-[#007AFF]">
                  공간 컨설팅
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">연락처</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-[#007AFF]" />
                <span className="text-muted-foreground">서울특별시 강남구 테헤란로 123 스페이스빌딩 8층</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-[#007AFF]" />
                <span className="text-muted-foreground">02-123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-[#007AFF]" />
                <span className="text-muted-foreground">info@spacestudio.kr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SPACE Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

