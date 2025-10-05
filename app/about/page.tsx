import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles, Users, Globe, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata = {
  title: "Hakkımızda | Şekilli Nick Oluşturucu",
  description: "Şekilli Nick Oluşturucu hakkında bilgiler ve misyonumuz",
  openGraph: {
    title: "Hakkımızda | Şekilli Nick Oluşturucu",
    description: "Şekilli Nick Oluşturucu hakkında bilgiler ve misyonumuz",
  },
}

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup type="about" />

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
              <div className="text-6xl mb-4">✨</div>
              <h1 className="text-4xl font-bold mb-4">Hakkımızda</h1>
              <p className="text-xl text-muted-foreground">
                Oyun dünyasında ve sosyal medyada öne çıkmanız için en iyi araçları sunuyoruz
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-8 w-8 text-purple-500" />
                  <h2 className="text-2xl font-semibold">Misyonumuz</h2>
                </div>
                <p className="text-muted-foreground">
                  Kullanıcılarımıza benzersiz ve yaratıcı nickler oluşturma imkanı sunarak, dijital kimliklerini
                  güçlendirmelerine yardımcı olmak.
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-pink-500" />
                  <h2 className="text-2xl font-semibold">Vizyonumuz</h2>
                </div>
                <p className="text-muted-foreground">
                  Dünya çapında milyonlarca kullanıcının tercih ettiği, en kapsamlı nick oluşturma platformu olmak.
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="h-8 w-8 text-blue-500" />
                  <h2 className="text-2xl font-semibold">Küresel Erişim</h2>
                </div>
                <p className="text-muted-foreground">
                  6 farklı dilde hizmet vererek, dünyanın her yerinden kullanıcılara ulaşıyoruz.
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-red-500" />
                  <h2 className="text-2xl font-semibold">Topluluk</h2>
                </div>
                <p className="text-muted-foreground">
                  Kullanıcı geri bildirimlerini dinleyerek sürekli gelişen bir platform oluşturuyoruz.
                </p>
              </Card>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 space-y-6">
              <h2 className="text-3xl font-bold">Neden Bizi Seçmelisiniz?</h2>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl">🎮</div>
                  <div>
                    <h3 className="font-semibold text-lg">Oyunculara Özel</h3>
                    <p className="text-muted-foreground">
                      PUBG, Free Fire, Mobile Legends ve daha fazlası için optimize edilmiş nick stilleri
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h3 className="font-semibold text-lg">Hızlı ve Kolay</h3>
                    <p className="text-muted-foreground">
                      Saniyeler içinde yüzlerce farklı stil deneyin ve en beğendiğinizi seçin
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">🎨</div>
                  <div>
                    <h3 className="font-semibold text-lg">200+ Hazır Stil</h3>
                    <p className="text-muted-foreground">
                      Gaming, Cool, Cute, Dark, VIP ve Aesthetic kategorilerinde hazır nickler
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">🔒</div>
                  <div>
                    <h3 className="font-semibold text-lg">Gizlilik Odaklı</h3>
                    <p className="text-muted-foreground">
                      Kişisel bilgilerinizi saklamıyoruz, tamamen tarayıcınızda çalışıyor
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">💯</div>
                  <div>
                    <h3 className="font-semibold text-lg">Tamamen Ücretsiz</h3>
                    <p className="text-muted-foreground">Tüm özellikler ücretsiz, gizli ücret veya abonelik yok</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Hemen Başlayın!</h2>
              <p className="text-lg mb-6">Benzersiz nickinizi oluşturmak için sadece birkaç saniye</p>
              <Link href="/">
                <Button size="lg" variant="secondary">
                  Nick Oluştur
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
