"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles } from "lucide-react"
import { PaymentModal } from "./payment-modal"
import { toast } from "sonner"

const plans = [
  {
    name: "Gói Cơ Bản",
    price: "55.000đ",
    period: "1 Bữa",
    features: ["1 cốc trà tranh", "1 bát phở 1 trứng", "mong các nhà hảo tâm ủng hộ thêm", "Tôi xin chân thành cảm ơn", "nhìn sang phải để thêm option khác!"],
    buttonText: "Chọn gói này",
    img: "/images/55.png",
    popular: false,
  },
  {
    name: "Gói Tiêu Chuẩn",
    price: "1.450.000đ",
    period: "2 Tuần",
    features: ["14 ly trà sữa", "28 bữa cơm văn phòng", "Netflix Premium", "Xăng xe", "Nhận 'Mã Nuôi Tôi (Chính Khổng)'"],
    buttonText: "Nuôi tôi luôn",
    img: "/images/1450.png",
    popular: true,
  },
  {
    name: "Gói VIP",
    price: "5.000.000đ",
    period: "1 Tháng",
    features: [
      "Starbucks mỗi sáng",
      "Ăn nhà hàng 2 lần/tháng",
      "Du lịch 1 chuyến/năm",
      "Video call định kỳ",
      "Tên ghi vào danh sách 'Ân nhân cuộc đời tôi'",
    ],
    buttonText: "Tôi chọn VIP",
    img: "/images/5cu.png",
    popular: false,
  },
]

export function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string; img: string } | null>(null)

  const handlePlanClick = (planName: string, planPrice: string, planImg: string) => {
    setSelectedPlan({ name: planName, price: planPrice, img: planImg })
  }

  const handleCloseModal = () => {
    alert("vui lòng chuyển khoản theo mã QR để hoàn tất ủng hộ. Cảm ơn bạn rất nhiều!!!")
  }

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Gói ủng hộ</h2>
          <p className="text-muted-foreground text-lg">Chọn gói phù hợp để bắt đầu hành trình thiện nguyện</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`rounded-3xl relative ${plan.popular ? "border-primary border-2 shadow-xl scale-105" : "border-border"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-bold">
                    <Sparkles className="h-4 w-4" />
                    Phổ biến nhất
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">{plan.name}</CardTitle>
                <CardDescription>
                  <div className="text-4xl font-bold text-primary mt-4">{plan.price}</div>
                  <div className="text-muted-foreground mt-2">/ {plan.period}</div>
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 ">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="pt-6">
                <Button
                  className={`w-full rounded-full font-bold cursor-pointer ${plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    }`}
                  size="lg"
                  onClick={() => handlePlanClick(plan.name, plan.price, plan.img)}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {selectedPlan && (
        <PaymentModal
          isOpen={!!selectedPlan}
          onClose={handleCloseModal}
          planName={selectedPlan.name}
          planPrice={selectedPlan.price}
          img={selectedPlan.img}
        />
      )}
    </section>
  )
}
