"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { NickGenerator } from "@/components/nick-generator"
import { ReadyNicksSection } from "@/components/ready-nicks-section"
import { CookieConsent } from "@/components/cookie-consent"
import { SchemaMarkup } from "@/components/schema-markup"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PlatformPreview } from "@/components/platform-preview"
import { AdZone } from "@/components/ad-zone"
import { getTranslation, type LanguageCode } from "@/lib/i18n"
import { getSiteSettings } from "@/lib/site-settings"

export default function Home({ params }: { params: { lang: LanguageCode } }) {
  const currentLang = params.lang || "tr"
  const [generatedNick, setGeneratedNick] = useState("")
  const [customHeadCode, setCustomHeadCode] = useState("")
  const t = getTranslation(currentLang)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const settings = getSiteSettings()
    if (settings.customHeadCode) {
      setCustomHeadCode(settings.customHeadCode)
    }
  }, [])

  const handleLanguageChange = (newLang: LanguageCode) => {
    const pathWithoutLang = pathname.replace(/^\/(tr|en|es|ar|de|fr)/, "")
    const newPath = `/${newLang}${pathWithoutLang || ""}`
    router.push(newPath)
  }

  return (
    <>
      <SchemaMarkup type="home" lang={currentLang} />
      {customHeadCode && <div dangerouslySetInnerHTML={{ __html: customHeadCode }} />}

      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        <Navigation currentLang={currentLang} onLanguageChange={handleLanguageChange} translations={t} />

        <AdZone position="header" />

        <main className="container mx-auto px-4 py-12 space-y-16">
          <AdZone position="content-top" />

          <NickGenerator translations={t} onNickGenerated={setGeneratedNick} />

          {generatedNick && <PlatformPreview nickname={generatedNick} translations={t} />}

          <div className="grid lg:grid-cols-[1fr_300px] gap-8">
            <div>
              <div className="border-t pt-16">
                <ReadyNicksSection currentLang={currentLang} translations={t} />
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <AdZone position="sidebar" />
              </div>
            </div>
          </div>

          <AdZone position="content-bottom" />

          <div className="border-t pt-16">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              {currentLang === "tr" && (
                <div className="space-y-6 text-foreground">
                  <h2 className="text-3xl font-bold text-primary">Şekilli Nick Oluşturucu ile Benzersiz Nickler</h2>
                  <p>
                    Şekilli nick oluşturucu, oyun ve sosyal medya platformlarında öne çıkmanızı sağlayan en kapsamlı
                    araçtır. Binlerce farklı font stili ve dekorasyon seçeneği ile nickinizi tamamen kişiselleştirin.
                    PUBG, Free Fire, Mobile Legends, Instagram, TikTok ve daha birçok platformda kullanabileceğiniz
                    havalı nickler oluşturun.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Neden Şekilli Nick Kullanmalısınız?</h3>
                  <p>
                    Şekilli nickler, dijital dünyada kimliğinizi yansıtan en önemli unsurlardan biridir. Oyunlarda
                    rakiplerinizin dikkatini çekerken, sosyal medyada profilinizi daha çekici hale getirir. Özellikle
                    oyun nicknamelerinde şekilli karakterler kullanmak, sizi diğer oyunculardan ayırır ve
                    unutulmazlaştırır. Instagram, TikTok ve Twitter gibi platformlarda şekilli nick kullanarak
                    takipçilerinizin ilgisini çekebilir, profilinizi daha profesyonel gösterebilirsiniz.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">200+ Hazır Nick Stili</h3>
                  <p>
                    Platformumuzda 200'den fazla hazır nick stili bulunmaktadır. Gaming, Cool, Cute, Dark, VIP ve
                    Aesthetic kategorilerinde binlerce seçenek arasından size en uygun olanı seçebilirsiniz. Her
                    kategori özenle hazırlanmış ve en popüler nick trendlerini içermektedir. Arama özelliği ile
                    istediğiniz stili kolayca bulabilir, tek tıkla kopyalayabilirsiniz.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Çoklu Font Desteği</h3>
                  <p>
                    Bold, Italic, Cursive, Monospace, Gothic ve daha birçok font stilini destekliyoruz. Her font stili
                    farklı bir karakter ve atmosfer yaratır. Gothic fontlar karanlık ve gizemli bir hava verirken,
                    Cursive fontlar zarif ve şık görünüm sağlar. Monospace fontlar teknik ve profesyonel bir izlenim
                    bırakır. İstediğiniz font stilini seçerek nickinize kişilik katın.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Zengin Dekorasyon Seçenekleri</h3>
                  <p>
                    Yıldızlar, kalpler, taçlar, kılıçlar, ejderhalar ve daha yüzlerce dekorasyon seçeneği ile nickinizi
                    süsleyin. Her dekorasyon kategorisi farklı temalar için özel olarak tasarlanmıştır. Oyun severler
                    için kılıç, kalkan ve zırh sembolleri; romantik ruhlar için kalp ve çiçek motifleri; gizemli
                    karakterler için ay, yıldız ve büyü sembolleri mevcuttur. Dekorasyonları nickinizin başına, sonuna
                    veya her iki tarafına ekleyebilirsiniz.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Tüm Platformlarda Uyumlu</h3>
                  <p>
                    Oluşturduğunuz şekilli nickler PUBG Mobile, Free Fire, Mobile Legends, Call of Duty Mobile, Brawl
                    Stars, Clash of Clans, Instagram, TikTok, Twitter, Discord, WhatsApp ve daha birçok platformda
                    sorunsuz çalışır. Unicode karakter desteği sayesinde tüm cihazlarda doğru görüntülenir. Mobil ve
                    masaüstü cihazlarda aynı kalitede görünüm sağlar.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Kolay Kullanım</h3>
                  <p>
                    Şekilli nick oluşturmak için sadece nickinizi yazın, istediğiniz font stilini ve dekorasyonu seçin.
                    Anında önizleme ile sonucu görün ve tek tıkla kopyalayın. Kayıt veya üyelik gerektirmez, tamamen
                    ücretsizdir. Mobil uyumlu arayüzü sayesinde telefonunuzdan da kolayca kullanabilirsiniz.
                  </p>
                </div>
              )}
              {currentLang === "en" && (
                <div className="space-y-6 text-foreground">
                  <h2 className="text-3xl font-bold text-primary">Stylish Nickname Generator for Unique Names</h2>
                  <p>
                    The stylish nickname generator is the most comprehensive tool to help you stand out on gaming and
                    social media platforms. Customize your nickname completely with thousands of different font styles
                    and decoration options. Create cool nicknames that you can use on PUBG, Free Fire, Mobile Legends,
                    Instagram, TikTok, and many other platforms.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Why Use Stylish Nicknames?</h3>
                  <p>
                    Stylish nicknames are one of the most important elements that reflect your identity in the digital
                    world. While catching the attention of your opponents in games, they make your profile more
                    attractive on social media. Especially using stylish characters in game nicknames sets you apart
                    from other players and makes you memorable. You can attract your followers' attention on platforms
                    like Instagram, TikTok, and Twitter by using stylish nicknames and make your profile look more
                    professional.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">200+ Ready Nickname Styles</h3>
                  <p>
                    Our platform features over 200 ready-made nickname styles. You can choose the most suitable one for
                    you from thousands of options in Gaming, Cool, Cute, Dark, VIP, and Aesthetic categories. Each
                    category is carefully prepared and includes the most popular nickname trends. You can easily find
                    the style you want with the search feature and copy it with one click.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Multiple Font Support</h3>
                  <p>
                    We support Bold, Italic, Cursive, Monospace, Gothic, and many more font styles. Each font style
                    creates a different character and atmosphere. Gothic fonts give a dark and mysterious vibe, while
                    Cursive fonts provide an elegant and stylish look. Monospace fonts leave a technical and
                    professional impression. Add personality to your nickname by choosing the font style you want.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Rich Decoration Options</h3>
                  <p>
                    Decorate your nickname with stars, hearts, crowns, swords, dragons, and hundreds of other decoration
                    options. Each decoration category is specially designed for different themes. Sword, shield, and
                    armor symbols for gamers; heart and flower motifs for romantic souls; moon, star, and magic symbols
                    for mysterious characters are available. You can add decorations to the beginning, end, or both
                    sides of your nickname.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Compatible with All Platforms</h3>
                  <p>
                    The stylish nicknames you create work seamlessly on PUBG Mobile, Free Fire, Mobile Legends, Call of
                    Duty Mobile, Brawl Stars, Clash of Clans, Instagram, TikTok, Twitter, Discord, WhatsApp, and many
                    other platforms. Thanks to Unicode character support, they display correctly on all devices. They
                    provide the same quality appearance on mobile and desktop devices.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Easy to Use</h3>
                  <p>
                    To create a stylish nickname, just type your nickname, choose the font style and decoration you
                    want. See the result with instant preview and copy it with one click. No registration or membership
                    required, completely free. You can easily use it from your phone thanks to its mobile-friendly
                    interface.
                  </p>
                </div>
              )}
              {currentLang === "es" && (
                <div className="space-y-6 text-foreground">
                  <h2 className="text-3xl font-bold text-primary">Generador de Apodos Elegantes para Nombres Únicos</h2>
                  <p>
                    El generador de apodos elegantes es la herramienta más completa para ayudarte a destacar en
                    plataformas de juegos y redes sociales. Personaliza completamente tu apodo con miles de estilos de
                    fuente y opciones de decoración diferentes. Crea apodos geniales que puedes usar en PUBG, Free Fire,
                    Mobile Legends, Instagram, TikTok y muchas otras plataformas.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">¿Por qué usar apodos elegantes?</h3>
                  <p>
                    Los apodos elegantes son uno de los elementos más importantes que reflejan tu identidad en el mundo
                    digital. Mientras llaman la atención de tus oponentes en los juegos, hacen que tu perfil sea más
                    atractivo en las redes sociales. Especialmente usar caracteres elegantes en los apodos de juegos te
                    distingue de otros jugadores y te hace memorable. Puedes atraer la atención de tus seguidores en
                    plataformas como Instagram, TikTok y Twitter usando apodos elegantes y hacer que tu perfil se vea
                    más profesional.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Más de 200 estilos de apodos listos</h3>
                  <p>
                    Nuestra plataforma cuenta con más de 200 estilos de apodos listos para usar. Puedes elegir el más
                    adecuado para ti entre miles de opciones en las categorías Gaming, Cool, Cute, Dark, VIP y
                    Aesthetic. Cada categoría está cuidadosamente preparada e incluye las tendencias de apodos más
                    populares. Puedes encontrar fácilmente el estilo que deseas con la función de búsqueda y copiarlo
                    con un clic.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Soporte de múltiples fuentes</h3>
                  <p>
                    Admitimos estilos de fuente Bold, Italic, Cursive, Monospace, Gothic y muchos más. Cada estilo de
                    fuente crea un carácter y una atmósfera diferentes. Las fuentes góticas dan una vibra oscura y
                    misteriosa, mientras que las fuentes cursivas proporcionan un aspecto elegante y con estilo. Las
                    fuentes monoespaciadas dejan una impresión técnica y profesional. Agrega personalidad a tu apodo
                    eligiendo el estilo de fuente que desees.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Opciones de decoración ricas</h3>
                  <p>
                    Decora tu apodo con estrellas, corazones, coronas, espadas, dragones y cientos de otras opciones de
                    decoración. Cada categoría de decoración está especialmente diseñada para diferentes temas. Símbolos
                    de espada, escudo y armadura para jugadores; motivos de corazón y flor para almas románticas;
                    símbolos de luna, estrella y magia para personajes misteriosos están disponibles. Puedes agregar
                    decoraciones al principio, al final o en ambos lados de tu apodo.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Compatible con todas las plataformas</h3>
                  <p>
                    Los apodos elegantes que creas funcionan sin problemas en PUBG Mobile, Free Fire, Mobile Legends,
                    Call of Duty Mobile, Brawl Stars, Clash of Clans, Instagram, TikTok, Twitter, Discord, WhatsApp y
                    muchas otras plataformas. Gracias al soporte de caracteres Unicode, se muestran correctamente en
                    todos los dispositivos. Proporcionan la misma calidad de apariencia en dispositivos móviles y de
                    escritorio.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Fácil de usar</h3>
                  <p>
                    Para crear un apodo elegante, simplemente escribe tu apodo, elige el estilo de fuente y la
                    decoración que desees. Ve el resultado con vista previa instantánea y cópialo con un clic. No se
                    requiere registro ni membresía, completamente gratis. Puedes usarlo fácilmente desde tu teléfono
                    gracias a su interfaz compatible con dispositivos móviles.
                  </p>
                </div>
              )}
              {currentLang === "de" && (
                <div className="space-y-6 text-foreground">
                  <h2 className="text-3xl font-bold text-primary">
                    Stilvoller Spitznamen-Generator für einzigartige Namen
                  </h2>
                  <p>
                    Der stilvolle Spitznamen-Generator ist das umfassendste Tool, um Ihnen zu helfen, auf Gaming- und
                    Social-Media-Plattformen hervorzustechen. Passen Sie Ihren Spitznamen vollständig mit Tausenden von
                    verschiedenen Schriftstilen und Dekorationsoptionen an. Erstellen Sie coole Spitznamen, die Sie auf
                    PUBG, Free Fire, Mobile Legends, Instagram, TikTok und vielen anderen Plattformen verwenden können.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Warum stilvolle Spitznamen verwenden?</h3>
                  <p>
                    Stilvolle Spitznamen sind eines der wichtigsten Elemente, die Ihre Identität in der digitalen Welt
                    widerspiegeln. Während sie in Spielen die Aufmerksamkeit Ihrer Gegner auf sich ziehen, machen sie
                    Ihr Profil in sozialen Medien attraktiver. Besonders die Verwendung stilvoller Zeichen in
                    Spiel-Spitznamen hebt Sie von anderen Spielern ab und macht Sie unvergesslich. Sie können die
                    Aufmerksamkeit Ihrer Follower auf Plattformen wie Instagram, TikTok und Twitter durch die Verwendung
                    stilvoller Spitznamen auf sich ziehen und Ihr Profil professioneller aussehen lassen.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Über 200 fertige Spitznamen-Stile</h3>
                  <p>
                    Unsere Plattform bietet über 200 fertige Spitznamen-Stile. Sie können aus Tausenden von Optionen in
                    den Kategorien Gaming, Cool, Cute, Dark, VIP und Aesthetic den für Sie am besten geeigneten
                    auswählen. Jede Kategorie ist sorgfältig vorbereitet und enthält die beliebtesten Spitznamen-Trends.
                    Sie können den gewünschten Stil mit der Suchfunktion leicht finden und mit einem Klick kopieren.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Mehrere Schriftarten-Unterstützung</h3>
                  <p>
                    Wir unterstützen Bold, Italic, Cursive, Monospace, Gothic und viele weitere Schriftstile. Jeder
                    Schriftstil schafft einen anderen Charakter und eine andere Atmosphäre. Gotische Schriften geben
                    eine dunkle und mysteriöse Stimmung, während kursive Schriften ein elegantes und stilvolles Aussehen
                    bieten. Monospace-Schriften hinterlassen einen technischen und professionellen Eindruck. Fügen Sie
                    Ihrem Spitznamen Persönlichkeit hinzu, indem Sie den gewünschten Schriftstil wählen.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Reiche Dekorationsoptionen</h3>
                  <p>
                    Dekorieren Sie Ihren Spitznamen mit Sternen, Herzen, Kronen, Schwertern, Drachen und Hunderten von
                    anderen Dekorationsoptionen. Jede Dekorationskategorie ist speziell für verschiedene Themen
                    konzipiert. Schwert-, Schild- und Rüstungssymbole für Gamer; Herz- und Blumenmotive für romantische
                    Seelen; Mond-, Stern- und Magiesymbole für mysteriöse Charaktere sind verfügbar. Sie können
                    Dekorationen am Anfang, am Ende oder auf beiden Seiten Ihres Spitznamens hinzufügen.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Kompatibel mit allen Plattformen</h3>
                  <p>
                    Die stilvollen Spitznamen, die Sie erstellen, funktionieren nahtlos auf PUBG Mobile, Free Fire,
                    Mobile Legends, Call of Duty Mobile, Brawl Stars, Clash of Clans, Instagram, TikTok, Twitter,
                    Discord, WhatsApp und vielen anderen Plattformen. Dank Unicode-Zeichenunterstützung werden sie auf
                    allen Geräten korrekt angezeigt. Sie bieten die gleiche Qualität auf mobilen und Desktop-Geräten.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Einfach zu bedienen</h3>
                  <p>
                    Um einen stilvollen Spitznamen zu erstellen, geben Sie einfach Ihren Spitznamen ein, wählen Sie den
                    gewünschten Schriftstil und die Dekoration. Sehen Sie das Ergebnis mit sofortiger Vorschau und
                    kopieren Sie es mit einem Klick. Keine Registrierung oder Mitgliedschaft erforderlich, völlig
                    kostenlos. Sie können es dank seiner mobilfreundlichen Oberfläche einfach von Ihrem Telefon aus
                    verwenden.
                  </p>
                </div>
              )}
              {currentLang === "fr" && (
                <div className="space-y-6 text-foreground">
                  <h2 className="text-3xl font-bold text-primary">Générateur de Pseudo Stylé pour des Noms Uniques</h2>
                  <p>
                    Le générateur de pseudo stylé est l'outil le plus complet pour vous aider à vous démarquer sur les
                    plateformes de jeux et de médias sociaux. Personnalisez complètement votre pseudo avec des milliers
                    de styles de police et d'options de décoration différents. Créez des pseudos cool que vous pouvez
                    utiliser sur PUBG, Free Fire, Mobile Legends, Instagram, TikTok et de nombreuses autres plateformes.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Pourquoi utiliser des pseudos stylés?</h3>
                  <p>
                    Les pseudos stylés sont l'un des éléments les plus importants qui reflètent votre identité dans le
                    monde numérique. Tout en attirant l'attention de vos adversaires dans les jeux, ils rendent votre
                    profil plus attrayant sur les médias sociaux. En particulier, l'utilisation de caractères stylés
                    dans les pseudos de jeu vous distingue des autres joueurs et vous rend mémorable. Vous pouvez
                    attirer l'attention de vos abonnés sur des plateformes comme Instagram, TikTok et Twitter en
                    utilisant des pseudos stylés et rendre votre profil plus professionnel.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Plus de 200 styles de pseudo prêts</h3>
                  <p>
                    Notre plateforme propose plus de 200 styles de pseudo prêts à l'emploi. Vous pouvez choisir celui
                    qui vous convient le mieux parmi des milliers d'options dans les catégories Gaming, Cool, Cute,
                    Dark, VIP et Aesthetic. Chaque catégorie est soigneusement préparée et comprend les tendances de
                    pseudo les plus populaires. Vous pouvez facilement trouver le style que vous souhaitez avec la
                    fonction de recherche et le copier en un clic.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Support de plusieurs polices</h3>
                  <p>
                    Nous prenons en charge les styles de police Bold, Italic, Cursive, Monospace, Gothic et bien
                    d'autres. Chaque style de police crée un caractère et une atmosphère différents. Les polices
                    gothiques donnent une ambiance sombre et mystérieuse, tandis que les polices cursives offrent un
                    aspect élégant et stylé. Les polices monospace laissent une impression technique et professionnelle.
                    Ajoutez de la personnalité à votre pseudo en choisissant le style de police que vous souhaitez.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Options de décoration riches</h3>
                  <p>
                    Décorez votre pseudo avec des étoiles, des cœurs, des couronnes, des épées, des dragons et des
                    centaines d'autres options de décoration. Chaque catégorie de décoration est spécialement conçue
                    pour différents thèmes. Symboles d'épée, de bouclier et d'armure pour les joueurs; motifs de cœur et
                    de fleur pour les âmes romantiques; symboles de lune, d'étoile et de magie pour les personnages
                    mystérieux sont disponibles. Vous pouvez ajouter des décorations au début, à la fin ou des deux
                    côtés de votre pseudo.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Compatible avec toutes les plateformes</h3>
                  <p>
                    Les pseudos stylés que vous créez fonctionnent parfaitement sur PUBG Mobile, Free Fire, Mobile
                    Legends, Call of Duty Mobile, Brawl Stars, Clash of Clans, Instagram, TikTok, Twitter, Discord,
                    WhatsApp et de nombreuses autres plateformes. Grâce à la prise en charge des caractères Unicode, ils
                    s'affichent correctement sur tous les appareils. Ils offrent la même qualité d'apparence sur les
                    appareils mobiles et de bureau.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">Facile à utiliser</h3>
                  <p>
                    Pour créer un pseudo stylé, tapez simplement votre pseudo, choisissez le style de police et la
                    décoration que vous souhaitez. Voyez le résultat avec un aperçu instantané et copiez-le en un clic.
                    Aucune inscription ou adhésion requise, entièrement gratuit. Vous pouvez facilement l'utiliser
                    depuis votre téléphone grâce à son interface adaptée aux mobiles.
                  </p>
                </div>
              )}
              {currentLang === "ar" && (
                <div className="space-y-6 text-foreground" dir="rtl">
                  <h2 className="text-3xl font-bold text-primary">منشئ الأسماء المستعارة الأنيقة للأسماء الفريدة</h2>
                  <p>
                    منشئ الأسماء المستعارة الأنيقة هو الأداة الأكثر شمولاً لمساعدتك على التميز في منصات الألعاب ووسائل
                    التواصل الاجتماعي. قم بتخصيص اسمك المستعار بالكامل مع آلاف الأنماط المختلفة للخطوط وخيارات الزخرفة.
                    أنشئ أسماء مستعارة رائعة يمكنك استخدامها على PUBG و Free Fire و Mobile Legends و Instagram و TikTok
                    والعديد من المنصات الأخرى.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">لماذا تستخدم أسماء مستعارة أنيقة؟</h3>
                  <p>
                    الأسماء المستعارة الأنيقة هي واحدة من أهم العناصر التي تعكس هويتك في العالم الرقمي. بينما تجذب
                    انتباه خصومك في الألعاب، فإنها تجعل ملفك الشخصي أكثر جاذبية على وسائل التواصل الاجتماعي. خاصة
                    استخدام الأحرف الأنيقة في أسماء الألعاب المستعارة يميزك عن اللاعبين الآخرين ويجعلك لا تُنسى. يمكنك
                    جذب انتباه متابعيك على منصات مثل Instagram و TikTok و Twitter باستخدام أسماء مستعارة أنيقة وجعل ملفك
                    الشخصي يبدو أكثر احترافية.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">أكثر من 200 نمط اسم مستعار جاهز</h3>
                  <p>
                    تحتوي منصتنا على أكثر من 200 نمط اسم مستعار جاهز للاستخدام. يمكنك اختيار الأنسب لك من بين آلاف
                    الخيارات في فئات Gaming و Cool و Cute و Dark و VIP و Aesthetic. كل فئة معدة بعناية وتتضمن أحدث
                    اتجاهات الأسماء المستعارة. يمكنك بسهولة العثور على النمط الذي تريده باستخدام ميزة البحث ونسخه بنقرة
                    واحدة.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">دعم خطوط متعددة</h3>
                  <p>
                    ندعم أنماط الخطوط Bold و Italic و Cursive و Monospace و Gothic والعديد من الأنماط الأخرى. كل نمط خط
                    يخلق شخصية وجوًا مختلفين. الخطوط القوطية تعطي أجواء مظلمة وغامضة، بينما توفر الخطوط المائلة مظهرًا
                    أنيقًا وعصريًا. خطوط Monospace تترك انطباعًا تقنيًا ومهنيًا. أضف شخصية إلى اسمك المستعار عن طريق اختيار
                    نمط الخط الذي تريده.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">خيارات زخرفة غنية</h3>
                  <p>
                    زين اسمك المستعار بالنجوم والقلوب والتيجان والسيوف والتنانين ومئات من خيارات الزخرفة الأخرى. كل فئة
                    زخرفة مصممة خصيصًا لموضوعات مختلفة. رموز السيف والدرع والدروع للاعبين؛ زخارف القلب والزهور للأرواح
                    الرومانسية؛ رموز القمر والنجوم والسحر للشخصيات الغامضة متاحة. يمكنك إضافة الزخارف في البداية أو
                    النهاية أو على جانبي اسمك المستعار.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">متوافق مع جميع المنصات</h3>
                  <p>
                    الأسماء المستعارة الأنيقة التي تنشئها تعمل بسلاسة على PUBG Mobile و Free Fire و Mobile Legends و
                    Call of Duty Mobile و Brawl Stars و Clash of Clans و Instagram و TikTok و Twitter و Discord و
                    WhatsApp والعديد من المنصات الأخرى. بفضل دعم أحرف Unicode، يتم عرضها بشكل صحيح على جميع الأجهزة.
                    توفر نفس جودة المظهر على الأجهزة المحمولة وأجهزة سطح المكتب.
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">سهل الاستخدام</h3>
                  <p>
                    لإنشاء اسم مستعار أنيق، اكتب اسمك المستعار فقط، اختر نمط الخط والزخرفة التي تريدها. شاهد النتيجة مع
                    المعاينة الفورية وانسخها بنقرة واحدة. لا يتطلب تسجيل أو عضوية، مجاني تمامًا. يمكنك استخدامه بسهولة من
                    هاتفك بفضل واجهته المتوافقة مع الأجهزة المحمولة.
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>

        <AdZone position="footer" />

        <Footer currentLang={currentLang} translations={t} />

        <CookieConsent />
      </div>
    </>
  )
}
