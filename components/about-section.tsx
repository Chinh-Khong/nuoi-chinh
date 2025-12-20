import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <img
              src="/images/anhQR.png"
              alt="Về tôi"
              className="rounded-3xl w-full h-auto shadow-xl"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Về tôi</h2>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Tôi là một người trẻ đang sống trong thời đại mà việc "sống qua ngày" không còn đơn giản như trước nữa.
                Giữa deadline, áp lực công việc, và những kỳ vọng từ xã hội, tôi cần một chút động lực để tiếp tục.
              </p>

              <p>
                Vì sao bạn nên nuôi tôi thay vì để tôi phải tự nuôi mình? Bởi vì khi bạn nuôi tôi, bạn đang góp phần tạo
                ra một cuộc sống tốt đẹp hơn, nơi người trẻ không phải lo lắng về ly trà sữa hay bữa cơm tiếp theo.
              </p>

              <Card className="rounded-2xl bg-destructive/10 border-destructive/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
                    <div>
                      <p className="font-bold text-destructive text-lg mb-1">Chỉ 1 tỷ đồng/năm</p>
                      <p className="text-sm text-foreground/70">
                        Đủ cho trà sữa hàng ngày, cơm văn phòng, và Netflix để tôi có thể nghỉ ngơi sau những ngày làm
                        việc căng thẳng.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-bold text-foreground mb-3">Cam kết minh bạch 💯</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  Tôi sẽ công khai tài chính định kỳ mỗi 15 ngày. Bạn sẽ biết chính xác số tiền đi đâu.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  * Chi phí vận hành được trích từ lãi ngân hàng, không ảnh hưởng đến khoản đóng góp của bạn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
