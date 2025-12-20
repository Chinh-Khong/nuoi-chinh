import { Card, CardContent } from "@/components/ui/card"
import { Mic2, Music, Bitcoin, Sparkles, Heart, Trophy } from "lucide-react"

const testimonials = [
  {
    icon: Mic2,
    quote:
      "Tôi đã từng nghĩ mình nghèo, cho đến khi tôi gặp Chính này. Giờ tôi biết tiền có thể mang lại niềm vui thật sự.",
    name: "Nghệ sĩ ***",
    title: "Nghệ sĩ nổi tiếng",
  },
  {
    icon: Music,
    quote: "Nuôi người khác là nuôi chính mình. Đó là triết lý tôi học được từ 'Nuôi Tôi'.",
    name: "Ca sĩ HT2",
    title: "Giọng ca triệu view",
  },
  {
    icon: Bitcoin,
    quote: "Crypto có thể lên xuống, nhưng việc nuôi 1 con người thì mãi mãi là khoản đầu tư vào nhân văn.",
    name: "CEO C.K",
    title: "Nhà đầu tư Crypto",
  },
  {
    icon: Sparkles,
    quote: "Tôi đã ủng hộ nhiều người, nhưng đây là lần đầu tôi thấy được sự minh bạch và chân thành đến vậy.",
    name: "Influencer T.P",
    title: "Content Creator",
  },
  {
    icon: Heart,
    quote: "Không chỉ nuôi bụng, mà còn nuôi cả tâm hồn. Đó là điều tuyệt vời nhất.",
    name: "Bác sĩ L.A",
    title: "Nhà hảo tâm trung thành",
  },
  {
    icon: Trophy,
    quote: "Từ khi ủng hộ 'Nuôi Tôi', tôi cảm thấy cuộc đời mình có ý nghĩa hơn. Cảm ơn vì đã cho tôi cơ hội này!",
    name: "Hội Doanh Nhân trẻ",
    title: "hướng về tôi",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Lời nhận xét từ nhà hảo tâm</h2>
          <p className="text-muted-foreground text-lg">Những người đã tin tưởng và ủng hộ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon
            return (
              <Card
                key={index}
                className="rounded-3xl border-border/50 hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary">
                      <Icon className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
