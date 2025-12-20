"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function HeroSection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/70 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold text-primary-foreground md:text-7xl mb-4 text-balance">Nuôi Chính</h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 font-medium">
            Hãy thiện nguyện cho một cuộc sống tốt đẹp hơn
          </p>

          <p className="max-w-2xl text-base md:text-lg text-primary-foreground/80 mb-8 leading-relaxed text-pretty">
            Là một người trẻ đang cố gắng sống qua từng ngày bằng trà sữa, cơm tấm, Netflix, deadline và một chút niềm
            tin mong manh, tôi cần sự hỗ trợ từ các bạn. Không phải vì tôi lười, mà vì cuộc sống hiện đại đang khiến tôi
            kiệt quệ. Hãy nuôi tôi để tôi có thể tiếp tục mơ ước và sống một cuộc đời tốt đẹp hơn.
          </p>

          <Button
            onClick={scrollToPricing}
            size="lg"
            className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg font-bold px-8 mb-12 cursor-pointer"
          >
            Nuôi tôi ngay
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            <Card className="rounded-3xl border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary-foreground mb-2">1</div>
                <div className="text-sm text-primary-foreground/80">Người được nuôi</div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary-foreground mb-2">1</div>
                <div className="text-sm text-primary-foreground/80">Nhà hảo tâm</div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary-foreground mb-2">1 tỷ</div>
                <div className="text-sm text-primary-foreground/80">Mục tiêu</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
