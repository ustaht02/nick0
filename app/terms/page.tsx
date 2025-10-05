import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata = {
  title: "Kullanım Şartları | Şekilli Nick Oluşturucu",
  description: "Web sitemizin kullanım şartları ve koşulları",
  openGraph: {
    title: "Kullanım Şartları | Şekilli Nick Oluşturucu",
    description: "Web sitemizin kullanım şartları ve koşulları",
  },
}

export default function TermsPage() {
  return (
    <>
      <SchemaMarkup type="terms" />

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
            <h1 className="text-4xl font-bold">Kullanım Şartları</h1>
            <p className="text-muted-foreground">Son güncelleme: {new Date().toLocaleDateString("tr-TR")}</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Hizmetin Kabulü</h2>
              <p>
                Bu web sitesini kullanarak, aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız. Şartları kabul
                etmiyorsanız, lütfen siteyi kullanmayın.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Hizmet Açıklaması</h2>
              <p>
                Şekilli Nick Oluşturucu, kullanıcıların oyunlar, sosyal medya ve diğer platformlar için özelleştirilmiş
                nickler oluşturmasına yardımcı olan ücretsiz bir araçtır.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Kullanıcı Sorumlulukları</h2>
              <p>Kullanıcılar aşağıdaki kurallara uymayı kabul eder:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Hizmeti yalnızca yasal amaçlarla kullanmak</li>
                <li>Saldırgan, küfürlü veya uygunsuz içerik oluşturmamak</li>
                <li>Başkalarının haklarını ihlal etmemek</li>
                <li>Sistemi manipüle etmeye veya zarar vermeye çalışmamak</li>
                <li>Telif hakkı korumalı içerikleri izinsiz kullanmamak</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Fikri Mülkiyet Hakları</h2>
              <p>
                Web sitesinin tasarımı, içeriği ve yazılımı telif hakkı ile korunmaktadır. Kullanıcılar tarafından
                oluşturulan nickler kullanıcılara aittir ve serbestçe kullanılabilir.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Hizmet Garantisi</h2>
              <p>
                Hizmet "olduğu gibi" sunulmaktadır. Kesintisiz veya hatasız çalışma garantisi verilmemektedir. Hizmeti
                kullanımınızdan doğabilecek zararlardan sorumlu değiliz.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Üçüncü Taraf Bağlantılar</h2>
              <p>
                Web sitemiz üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin içeriğinden veya gizlilik
                uygulamalarından sorumlu değiliz.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Hizmetin Değiştirilmesi veya Sonlandırılması</h2>
              <p>
                Hizmeti herhangi bir zamanda, önceden haber vermeksizin değiştirme, askıya alma veya sonlandırma hakkını
                saklı tutarız.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">8. Sorumluluk Sınırlaması</h2>
              <p>
                Hizmetin kullanımından kaynaklanan doğrudan veya dolaylı zararlardan, veri kaybından veya iş
                kesintilerinden sorumlu tutulamayız.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">9. Uygulanacak Hukuk</h2>
              <p>Bu kullanım şartları Türkiye Cumhuriyeti yasalarına tabidir.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">10. İletişim</h2>
              <p>
                Kullanım şartları hakkında sorularınız için:
                <br />
                E-posta: support@example.com
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}
