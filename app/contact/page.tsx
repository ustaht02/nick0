import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, MessageSquare, Globe } from "lucide-react"
import { Card } from "@/components/ui/card"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata = {
  title: "İletişim | Şekilli Nick Oluşturucu",
  description: "Bizimle iletişime geçin, sorularınızı ve önerilerinizi iletin",
  openGraph: {
    title: "İletişim | Şekilli Nick Oluşturucu",
    description: "Bizimle iletişime geçin, sorularınızı ve önerilerinizi iletin",
  },
}

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup type="contact" />

      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Ana Sayfaya Dön
              </Button>
            </Link>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 text-center">
              <div className="text-6xl mb-4">📧</div>
              <h1 className="text-4xl font-bold mb-4">İletişim</h1>
              <p className="text-xl text-muted-foreground">
                Sorularınız, önerileriniz veya geri bildirimleriniz için bizimle iletişime geçin
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center space-y-4">
                <Mail className="h-12 w-12 mx-auto text-purple-500" />
                <h3 className="font-semibold text-lg">E-posta</h3>
                <p className="text-sm text-muted-foreground">support@example.com</p>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <a href="mailto:support@example.com">E-posta Gönder</a>
                </Button>
              </Card>

              <Card className="p-6 text-center space-y-4">
                <MessageSquare className="h-12 w-12 mx-auto text-pink-500" />
                <h3 className="font-semibold text-lg">Destek</h3>
                <p className="text-sm text-muted-foreground">7/24 destek ekibimiz</p>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <a href="mailto:support@example.com">Destek Talebi</a>
                </Button>
              </Card>

              <Card className="p-6 text-center space-y-4">
                <Globe className="h-12 w-12 mx-auto text-blue-500" />
                <h3 className="font-semibold text-lg">Sosyal Medya</h3>
                <p className="text-sm text-muted-foreground">Bizi takip edin</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Sosyal Medya
                </Button>
              </Card>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 space-y-6">
              <h2 className="text-3xl font-bold">Sık Sorulan Sorular</h2>

              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Hizmet ücretsiz mi?</h3>
                  <p className="text-muted-foreground">
                    Evet, tüm özelliklerimiz tamamen ücretsizdir. Gizli ücret veya abonelik yoktur.
                  </p>
                </div>

                <div className="border-l-4 border-pink-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Oluşturduğum nickleri kullanabilir miyim?</h3>
                  <p className="text-muted-foreground">
                    Elbette! Oluşturduğunuz tüm nickler size aittir ve istediğiniz platformda kullanabilirsiniz.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Hangi platformlarda çalışır?</h3>
                  <p className="text-muted-foreground">
                    Oluşturduğunuz nickler PUBG, Free Fire, Mobile Legends, Instagram, TikTok ve Unicode destekleyen tüm
                    platformlarda kullanılabilir.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Özel nick stili ekleyebilir miyim?</h3>
                  <p className="text-muted-foreground">
                    Admin panelinden özel font stilleri ve dekorasyonlar ekleyebilirsiniz. Demo şifre: admin123
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Mobil cihazlarda çalışır mı?</h3>
                  <p className="text-muted-foreground">
                    Evet, web sitemiz tüm cihazlarda (telefon, tablet, bilgisayar) mükemmel çalışır.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Verilerim güvende mi?</h3>
                  <p className="text-muted-foreground">
                    Kişisel bilgilerinizi saklamıyoruz. Tüm işlemler tarayıcınızda gerçekleşir.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Başka bir sorunuz mu var?</h2>
              <p className="mb-6">
                Yukarıdaki sorular arasında cevabını bulamadığınız bir konu varsa, lütfen bizimle iletişime geçin.
                Mümkün olan en kısa sürede size geri dönüş yapacağız.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:support@example.com">Bize Yazın</a>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
