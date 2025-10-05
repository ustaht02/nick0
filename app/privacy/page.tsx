import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata = {
  title: "Gizlilik Politikası | Şekilli Nick Oluşturucu",
  description: "Gizlilik politikamız ve kişisel verilerinizin korunması hakkında bilgiler",
  openGraph: {
    title: "Gizlilik Politikası | Şekilli Nick Oluşturucu",
    description: "Gizlilik politikamız ve kişisel verilerinizin korunması hakkında bilgiler",
  },
}

export default function PrivacyPage() {
  return (
    <>
      <SchemaMarkup type="privacy" />

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
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 space-y-6">
            <h1 className="text-4xl font-bold">Gizlilik Politikası</h1>
            <p className="text-muted-foreground">Son güncelleme: {new Date().toLocaleDateString("tr-TR")}</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Genel Bilgiler</h2>
              <p>
                Bu gizlilik politikası, Şekilli Nick Oluşturucu web sitesini ziyaret eden kullanıcıların kişisel
                verilerinin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi vermektedir.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Toplanan Veriler</h2>
              <p>Web sitemizi kullanırken aşağıdaki veriler toplanabilir:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Tarayıcı türü ve sürümü</li>
                <li>İşletim sistemi bilgileri</li>
                <li>IP adresi</li>
                <li>Ziyaret edilen sayfalar ve geçirilen süre</li>
                <li>Çerez verileri</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Verilerin Kullanımı</h2>
              <p>Toplanan veriler aşağıdaki amaçlarla kullanılır:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Web sitesinin işlevselliğini sağlamak</li>
                <li>Kullanıcı deneyimini iyileştirmek</li>
                <li>İstatistiksel analizler yapmak</li>
                <li>Güvenlik önlemlerini almak</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Çerezler</h2>
              <p>
                Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanmaktadır. Çerezleri tarayıcı
                ayarlarınızdan yönetebilir veya devre dışı bırakabilirsiniz.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Üçüncü Taraf Hizmetler</h2>
              <p>Web sitemiz aşağıdaki üçüncü taraf hizmetleri kullanabilir:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Google Analytics (analiz için)</li>
                <li>Google AdSense (reklam gösterimi için)</li>
                <li>Sosyal medya eklentileri</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Veri Güvenliği</h2>
              <p>
                Kişisel verilerinizin güvenliğini sağlamak için endüstri standardı güvenlik önlemleri alınmaktadır.
                Ancak, internet üzerinden yapılan hiçbir veri iletiminin %100 güvenli olmadığını unutmayın.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Kullanıcı Hakları</h2>
              <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                <li>Verilerin düzeltilmesini veya silinmesini isteme</li>
                <li>İşleme faaliyetine itiraz etme</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">8. İletişim</h2>
              <p>
                Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
                <br />
                E-posta: privacy@example.com
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">9. Değişiklikler</h2>
              <p>
                Bu gizlilik politikası zaman zaman güncellenebilir. Önemli değişiklikler olduğunda kullanıcılarımızı
                bilgilendireceğiz.
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}
