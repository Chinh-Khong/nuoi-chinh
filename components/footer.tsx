import Link from "next/link"
import { UtensilsCrossed, Facebook, Youtube, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-8">
          {/* Column 1 - Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <UtensilsCrossed className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Nuôi Tôi</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dự án thiện nguyện vì một tương lai no đủ hơn.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Điều hướng</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Về tôi
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gói ủng hộ
                </Link>
              </li>
              <li>
                <Link
                  href="#transparency"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Minh bạch tài chính
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Mạng xã hội</h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Nuôi Tôi Project — Made with love và một chút nước mắt. 💛
          </p>
        </div>
      </div>
    </footer>
  )
}
