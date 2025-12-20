import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Ủng hộ 'Nuôi Tôi' có phải lừa đảo không?",
    answer:
      "Không. Đây là dự án thiện nguyện tự nguyện 100%. Không bắt buộc. Không refund. Không kiện tụng. Tất cả thông tin tài chính đều được công khai minh bạch.",
  },
  {
    question: "Tôi có được xem tôi đang nuôi như thế nào không?",
    answer:
      "Có. Bạn sẽ nhận được ảnh cập nhật định kỳ về cuộc sống của người được nuôi. Với gói VIP, bạn còn được video call trực tiếp.",
  },
  {
    question: "Có hợp đồng nuôi không?",
    answer:
      "Không có hợp đồng ràng buộc pháp lý. Nhưng bạn sẽ nhận được 'Mã Nuôi Tôi (NT)' như một chứng nhận danh dự và lòng biết ơn từ người được nuôi.",
  },
  {
    question: "Tiền tôi ủng hộ được xài vào đâu?",
    answer:
      "Số tiền sẽ được sử dụng vào trà sữa, cơm tấm, tiền điện, tiền thuê Netflix và một ít niềm vui sống. Tất cả đều được ghi chép và báo cáo minh bạch mỗi 15 ngày.",
  },
  {
    question: "Tôi có thể ngừng nuôi không?",
    answer:
      "Được. Bạn có thể ngừng ủng hộ bất cứ lúc nào. Nhưng hơi buồn. Người được nuôi sẽ nhớ bạn và những đóng góp của bạn.",
  },
  {
    question: "Tôi có được lợi ích gì không?",
    answer:
      "Có — niềm vui tinh thần, cảm giác cứu rỗi một tâm hồn, và quyền khoe với mọi người rằng bạn là người nhân ái. Ngoài ra còn có 'Mã NT' và ảnh cập nhật định kỳ.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Câu hỏi thường gặp</h2>
          <p className="text-muted-foreground text-lg">Những thắc mắc phổ biến về dự án Nuôi Tôi</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-border bg-card px-6 data-[state=open]:border-primary"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
