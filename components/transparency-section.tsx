import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

const expenses = [
  { item: "Trà sữa", calculation: "45.000đ × 180 ly", amount: "8.100.000đ" },
  { item: "Cơm văn phòng", calculation: "25.000đ × 200 bữa", amount: "5.000.000đ" },
  { item: "Netflix Premium", calculation: "260.000đ × 12 tháng", amount: "3.120.000đ" },
  { item: "Cafe Highlands", calculation: "55.000đ × 100 ly", amount: "5.500.000đ" },
  { item: "Playstation Plus", calculation: "450.000đ × 12 tháng", amount: "5.400.000đ" },
]

export function TransparencySection() {
  return (
    <section id="transparency" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Báo cáo tài chính minh bạch</h2>
          <p className="text-muted-foreground text-lg">Mọi khoản chi tiêu đều được công khai rõ ràng</p>
        </div>

        <Card className="rounded-3xl border-accent/50 bg-accent/20 mb-8">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
              <p className="text-sm text-foreground/80">
                <span className="font-bold">Thông báo:</span> Hiện đang chờ đối soát 15 ngày. Báo cáo chi tiết sẽ được
                cập nhật vào ngày 27/12/2025.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl">
          <CardContent className="pt-6">
            <div className="space-y-1">
              {expenses.map((expense, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-border last:border-0"
                >
                  <div>
                    <div className="font-semibold text-foreground">{expense.item}</div>
                    <div className="text-sm text-muted-foreground">{expense.calculation}</div>
                  </div>
                  <div className="text-xl font-bold text-primary">{expense.amount}</div>
                </div>
              ))}

              <div className="flex items-center justify-between py-6 mt-4 border-t-2 border-primary">
                <div className="font-bold text-lg text-foreground">Tổng cộng</div>
                <div className="text-2xl font-bold text-primary">27.120.000đ</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6 italic">
          * Tất cả các khoản chi được xác minh và có chứng từ. Báo cáo chi tiết sẽ được gửi qua email cho các nhà hảo
          tâm.
        </p>
      </div>
    </section>
  )
}
