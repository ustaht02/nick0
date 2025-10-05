export interface SEOContent {
  title: string
  description: string
  keywords: string[]
  h1: string
  h2: string
  content: string
}

export const seoContent: Record<string, SEOContent> = {
  tr: {
    title: "Şekilli Nick Oluşturucu - Ücretsiz Online Nick Yapma Aracı",
    description:
      "Ücretsiz şekilli nick oluşturucu ile benzersiz ve havalı nickler oluşturun. 200+ hazır stil, özel karakterler ve dekorasyonlarla nickinizi özelleştirin.",
    keywords: [
      "şekilli nick",
      "nick oluşturucu",
      "havalı nick",
      "özel nick",
      "nick yapma",
      "şekilli yazı",
      "nick generator",
      "oyun nick",
      "sosyal medya nick",
    ],
    h1: "Şekilli Nick Oluşturucu",
    h2: "Benzersiz ve Havalı Nickler Oluşturun",
    content:
      "Şekilli nick oluşturucu aracımız ile oyunlar, sosyal medya ve diğer platformlar için benzersiz nickler oluşturabilirsiniz. 8 farklı font stili, 10+ dekorasyon seçeneği ve 200+ hazır şablon ile nickinizi özelleştirin. Ücretsiz, hızlı ve kullanımı kolay nick yapma aracı.",
  },
  en: {
    title: "Stylish Nickname Generator - Free Online Nick Maker Tool",
    description:
      "Create unique and cool nicknames with our free stylish nickname generator. Customize your nick with 200+ ready styles, special characters and decorations.",
    keywords: [
      "stylish nickname",
      "nickname generator",
      "cool nickname",
      "custom nickname",
      "nick maker",
      "fancy text",
      "username generator",
      "gaming nickname",
      "social media nickname",
    ],
    h1: "Stylish Nickname Generator",
    h2: "Create Unique and Cool Nicknames",
    content:
      "Create unique nicknames for games, social media and other platforms with our stylish nickname generator tool. Customize your nickname with 8 different font styles, 10+ decoration options and 200+ ready templates. Free, fast and easy to use nickname maker tool.",
  },
  es: {
    title: "Generador de Apodos Elegantes - Herramienta Gratuita de Creación de Apodos",
    description:
      "Crea apodos únicos y geniales con nuestro generador gratuito de apodos elegantes. Personaliza tu apodo con más de 200 estilos listos, caracteres especiales y decoraciones.",
    keywords: [
      "apodo elegante",
      "generador de apodos",
      "apodo genial",
      "apodo personalizado",
      "crear apodo",
      "texto elegante",
      "generador de nombres",
      "apodo de juego",
      "apodo de redes sociales",
    ],
    h1: "Generador de Apodos Elegantes",
    h2: "Crea Apodos Únicos y Geniales",
    content:
      "Crea apodos únicos para juegos, redes sociales y otras plataformas con nuestra herramienta generadora de apodos elegantes. Personaliza tu apodo con 8 estilos de fuente diferentes, más de 10 opciones de decoración y más de 200 plantillas listas. Herramienta de creación de apodos gratuita, rápida y fácil de usar.",
  },
  ar: {
    title: "منشئ الأسماء المستعارة الأنيقة - أداة مجانية لإنشاء الأسماء المستعارة",
    description:
      "أنشئ أسماء مستعارة فريدة ورائعة باستخدام منشئ الأسماء المستعارة الأنيقة المجاني. خصص اسمك المستعار بأكثر من 200 نمط جاهز وأحرف خاصة وزخارف.",
    keywords: [
      "اسم مستعار أنيق",
      "منشئ الأسماء المستعارة",
      "اسم مستعار رائع",
      "اسم مستعار مخصص",
      "إنشاء اسم مستعار",
      "نص أنيق",
      "منشئ أسماء المستخدمين",
      "اسم مستعار للألعاب",
      "اسم مستعار لوسائل التواصل الاجتماعي",
    ],
    h1: "منشئ الأسماء المستعارة الأنيقة",
    h2: "أنشئ أسماء مستعارة فريدة ورائعة",
    content:
      "أنشئ أسماء مستعارة فريدة للألعاب ووسائل التواصل الاجتماعي والمنصات الأخرى باستخدام أداة منشئ الأسماء المستعارة الأنيقة. خصص اسمك المستعار بـ 8 أنماط خطوط مختلفة وأكثر من 10 خيارات زخرفة وأكثر من 200 قالب جاهز. أداة إنشاء أسماء مستعارة مجانية وسريعة وسهلة الاستخدام.",
  },
}

export const faqData: Record<string, Array<{ question: string; answer: string }>> = {
  tr: [
    {
      question: "Şekilli nick oluşturucu nasıl kullanılır?",
      answer:
        "Nickinizi giriş alanına yazın, istediğiniz font stilini ve dekorasyonu seçin. Oluşturulan nick otomatik olarak görünecektir. Kopyala butonuna tıklayarak nickinizi kopyalayabilirsiniz.",
    },
    {
      question: "Oluşturduğum nickler hangi platformlarda çalışır?",
      answer:
        "Oluşturduğunuz şekilli nickler Discord, Instagram, TikTok, PUBG, Free Fire, Mobile Legends ve diğer tüm oyun ve sosyal medya platformlarında kullanılabilir.",
    },
    {
      question: "Şekilli nick oluşturucu ücretsiz mi?",
      answer:
        "Evet, şekilli nick oluşturucu tamamen ücretsizdir. Sınırsız sayıda nick oluşturabilir ve kullanabilirsiniz.",
    },
    {
      question: "Kaç farklı font stili var?",
      answer:
        "8 farklı font stili (Bold, Italic, Script, Fraktur, Double Struck, Circled, Squared, Fullwidth) ve 10+ dekorasyon seçeneği bulunmaktadır.",
    },
    {
      question: "Hazır nick şablonları var mı?",
      answer:
        "Evet, 200+ hazır nick şablonu kategoriler halinde sunulmaktadır. İstediğiniz kategoriyi seçip hazır şablonları kullanabilirsiniz.",
    },
  ],
  en: [
    {
      question: "How to use the stylish nickname generator?",
      answer:
        "Type your nickname in the input field, select your desired font style and decoration. The generated nickname will appear automatically. Click the copy button to copy your nickname.",
    },
    {
      question: "Which platforms do the generated nicknames work on?",
      answer:
        "The stylish nicknames you create can be used on Discord, Instagram, TikTok, PUBG, Free Fire, Mobile Legends and all other gaming and social media platforms.",
    },
    {
      question: "Is the stylish nickname generator free?",
      answer: "Yes, the stylish nickname generator is completely free. You can create and use unlimited nicknames.",
    },
    {
      question: "How many different font styles are there?",
      answer:
        "There are 8 different font styles (Bold, Italic, Script, Fraktur, Double Struck, Circled, Squared, Fullwidth) and 10+ decoration options.",
    },
    {
      question: "Are there ready-made nickname templates?",
      answer:
        "Yes, 200+ ready-made nickname templates are offered in categories. You can select the category you want and use ready-made templates.",
    },
  ],
  es: [
    {
      question: "¿Cómo usar el generador de apodos elegantes?",
      answer:
        "Escribe tu apodo en el campo de entrada, selecciona el estilo de fuente y la decoración deseados. El apodo generado aparecerá automáticamente. Haz clic en el botón copiar para copiar tu apodo.",
    },
    {
      question: "¿En qué plataformas funcionan los apodos generados?",
      answer:
        "Los apodos elegantes que crees se pueden usar en Discord, Instagram, TikTok, PUBG, Free Fire, Mobile Legends y todas las demás plataformas de juegos y redes sociales.",
    },
    {
      question: "¿El generador de apodos elegantes es gratuito?",
      answer: "Sí, el generador de apodos elegantes es completamente gratuito. Puedes crear y usar apodos ilimitados.",
    },
    {
      question: "¿Cuántos estilos de fuente diferentes hay?",
      answer:
        "Hay 8 estilos de fuente diferentes (Bold, Italic, Script, Fraktur, Double Struck, Circled, Squared, Fullwidth) y más de 10 opciones de decoración.",
    },
    {
      question: "¿Hay plantillas de apodos prediseñadas?",
      answer:
        "Sí, se ofrecen más de 200 plantillas de apodos prediseñadas en categorías. Puedes seleccionar la categoría que desees y usar plantillas prediseñadas.",
    },
  ],
  ar: [
    {
      question: "كيفية استخدام منشئ الأسماء المستعارة الأنيقة؟",
      answer:
        "اكتب اسمك المستعار في حقل الإدخال، واختر نمط الخط والزخرفة المطلوبة. سيظهر الاسم المستعار الذي تم إنشاؤه تلقائيًا. انقر فوق زر النسخ لنسخ اسمك المستعار.",
    },
    {
      question: "على أي منصات تعمل الأسماء المستعارة التي تم إنشاؤها؟",
      answer:
        "يمكن استخدام الأسماء المستعارة الأنيقة التي تنشئها على Discord و Instagram و TikTok و PUBG و Free Fire و Mobile Legends وجميع منصات الألعاب ووسائل التواصل الاجتماعي الأخرى.",
    },
    {
      question: "هل منشئ الأسماء المستعارة الأنيقة مجاني؟",
      answer: "نعم، منشئ الأسماء المستعارة الأنيقة مجاني تمامًا. يمكنك إنشاء واستخدام أسماء مستعارة غير محدودة.",
    },
    {
      question: "كم عدد أنماط الخطوط المختلفة الموجودة؟",
      answer:
        "هناك 8 أنماط خطوط مختلفة (Bold، Italic، Script، Fraktur، Double Struck، Circled، Squared، Fullwidth) وأكثر من 10 خيارات زخرفة.",
    },
    {
      question: "هل هناك قوالب أسماء مستعارة جاهزة؟",
      answer:
        "نعم، يتم تقديم أكثر من 200 قالب اسم مستعار جاهز في فئات. يمكنك تحديد الفئة التي تريدها واستخدام القوالب الجاهزة.",
    },
  ],
}
