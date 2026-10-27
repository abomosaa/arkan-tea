/**
 * ARKAN | أركان - Specialty Tea & Roastery
 * Core Interactive Web App & UX State Engine
 */

// Product Database
const PRODUCTS = [
  {
    id: 1,
    nameAr: "مزيج الشاي الأسود الفاخر الملكي",
    nameEn: "Royal Reserve Black Tea Blend",
    category: "black",
    categoryAr: "شاي أسود",
    categoryEn: "Black Tea",
    price: 68,
    oldPrice: 85,
    rating: 4.9,
    reviews: 142,
    weight: "250g / أوراق نقية",
    weightEn: "250g / Pure Whole Leaf",
    origin: "سيلان - سريلانكا (ارتفاع 1800م)",
    originEn: "Ceylon Highlands, 1800m",
    temp: "95°C",
    steepTime: "3-4 دقائق",
    steepTimeEn: "3-4 Mins",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    descriptionAr: "قطفة أولى من أوراق الشاي السيلاني العتيقة، معالجة بحرفية يدوية وتكشف عن نوتات عسل الدغموس وخشب الأرز الدافئ.",
    descriptionEn: "First-flush single estate Ceylon tea leaves, carefully handcrafted to reveal warm wild honey and subtle cedar undertones.",
    tag: "الأكثر طلباً",
    tagEn: "Bestseller",
    flavorNotes: ["عسل جبلي", "خشب الصندل", "قوام مخملي"],
    flavorNotesEn: ["Wild Honey", "Sandalwood", "Velvety Body"],
    mood: "focus"
  },
  {
    id: 2,
    nameAr: "شاي الياسمين الإمبراطوري المعتق",
    nameEn: "Imperial Jasmine Silver Needle",
    category: "white",
    categoryAr: "شاي أبيض",
    categoryEn: "White & Green",
    price: 92,
    oldPrice: null,
    rating: 5.0,
    reviews: 89,
    weight: "150g / براعم فضية",
    weightEn: "150g / Silver Needles",
    origin: "فوجيان - الصين",
    originEn: "Fujian, China",
    temp: "80°C",
    steepTime: "2-3 دقائق",
    steepTimeEn: "2-3 Mins",
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80",
    descriptionAr: "براعم شاي فضية نادرة معطرة بأزهار الياسمين الطازجة التي تُقطف ليلاً لسبع دورات عطرية متعاقبة.",
    descriptionEn: "Rare silver needle white tea buds naturally scented with seven midnight blossomings of fresh jasmine petals.",
    tag: "محصول نادر",
    tagEn: "Rare Lot",
    flavorNotes: ["أزهار بيضاء", "نكهة سكرية", "انتعاش زهري"],
    flavorNotesEn: ["Night Jasmine", "Sweet Cane", "Floral Crisp"],
    mood: "relax"
  },
  {
    id: 3,
    nameAr: "مشروب الأعشاب والبابونج الخزامى",
    nameEn: "Lavender Chamomile Botanical Infusion",
    category: "herbal",
    categoryAr: "شاي أعشاب",
    categoryEn: "Herbal Infusions",
    price: 54,
    oldPrice: 62,
    rating: 4.8,
    reviews: 210,
    weight: "180g / خالي من الكافيين",
    weightEn: "180g / Caffeine-Free",
    origin: "حوض البحر الأبيض المتوسط",
    originEn: "Mediterranean Basin",
    temp: "100°C",
    steepTime: "5-7 دقائق",
    steepTimeEn: "5-7 Mins",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    descriptionAr: "توليفة مهدئة من رؤوس زهور البابونج الذهبية الكاملة مع لمسات من الخزامى البري وأوراق النعناع المختار.",
    descriptionEn: "A soothing floral sanctuary crafted with whole golden chamomile heads, wild mountain lavender, and cool peppermint.",
    tag: "للاسترخاء",
    tagEn: "Calm & Sleep",
    flavorNotes: ["بابونج نقي", "خزامى", "تفاح بري"],
    flavorNotesEn: ["Pure Chamomile", "Lavender", "Wild Apple"],
    mood: "relax"
  },
  {
    id: 4,
    nameAr: "ماتشا احتفالية يابانية من أوجي",
    nameEn: "Ceremonial Uji Heritage Matcha",
    category: "green",
    categoryAr: "ماتشا وشاي أخضر",
    categoryEn: "Ceremonial Matcha",
    price: 135,
    oldPrice: 150,
    rating: 4.9,
    reviews: 312,
    weight: "40g / مسحوق مطحون حجرياً",
    weightEn: "40g / Stone-Ground",
    origin: "كيوتو - اليابان",
    originEn: "Kyoto, Japan",
    temp: "75°C",
    steepTime: "خفق بالخيزران",
    steepTimeEn: "Bamboo Whisk",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    descriptionAr: "ماتشا خضراء زمردية فائقة النقاء مظللة لـ 30 يوماً قبل الحصاد، تمنح حلاوة الأومامي الطبيعية وطاقة ذهنية متقدة.",
    descriptionEn: "Ultra-pure ceremonial grade emerald matcha shaded for 30 days before harvest, yielding deep natural umami sweetness.",
    tag: "جودة احتفالية",
    tagEn: "Ceremonial",
    flavorNotes: ["أومامي حريري", "طحالب بحرية عذبة", "حلاوة طبيعية"],
    flavorNotesEn: ["Silky Umami", "Sweet Grass", "Creamy Finish"],
    mood: "energize"
  },
  {
    id: 5,
    nameAr: "توليفة أركان التراثية بالهيل والزعفران",
    nameEn: "ARKAN Signature Cardamom & Saffron",
    category: "black",
    categoryAr: "توليفة أركان التراثية",
    categoryEn: "Heritage Blend",
    price: 79,
    oldPrice: null,
    rating: 5.0,
    reviews: 420,
    weight: "200g / علبة معدنية محكمة",
    weightEn: "200g / Sealed Luxury Tin",
    origin: "الجزيرة العربية والهند",
    originEn: "Arabian Blend & Assam",
    temp: "98°C",
    steepTime: "4 دقائق",
    steepTimeEn: "4 Mins",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80",
    descriptionAr: "التوليفة المميزة لدار أركان، تجمع بين الشاي الأسود القوي مع حبات الهيل الأخضر الملكي وخيوط الزعفران الإيراني الفاخر.",
    descriptionEn: "ARKAN's signature recipe marrying robust whole leaf Assam with green jumbo cardamom pods and pure Kashmiri saffron threads.",
    tag: "توقيع الدار",
    tagEn: "Signature",
    flavorNotes: ["هيل ملكي", "زعفران نقي", "دفء شرقي"],
    flavorNotesEn: ["Royal Cardamom", "Saffron", "Warm Spice"],
    mood: "energize"
  },
  {
    id: 6,
    nameAr: "شاي أولونغ دا هونغ باو الصخري",
    nameEn: "Da Hong Pao Rock Oolong Reserve",
    category: "oolong",
    categoryAr: "شاي أولونغ",
    categoryEn: "Wuyi Oolong",
    price: 115,
    oldPrice: 140,
    rating: 4.8,
    reviews: 75,
    weight: "100g / أوراق مطوية يدوياً",
    weightEn: "100g / Hand-Twisted",
    origin: "جبال وويي - فوجيان",
    originEn: "Wuyi Mountains",
    temp: "95°C",
    steepTime: "45 ثانية (متعدد الصبات)",
    steepTimeEn: "45s Multi-Steep",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=800&q=80",
    descriptionAr: "شاي شبه مؤكسد ينمو بين صخور الجبال الضبابية، يمتاز بطبقات تحميص خفيفة مع نوتات الفاكهة الناضجة والكراميل المدخن.",
    descriptionEn: "Semi-oxidized artisanal tea grown in mineral-rich mist cliffs, bringing roasted plum, caramel smoke, and profound longevity.",
    tag: "محصول صخري",
    tagEn: "Cliff Reserve",
    flavorNotes: ["برقوق مشوي", "كراميل مدخن", "معادن جبلية"],
    flavorNotesEn: ["Roasted Plum", "Smoked Caramel", "Mineral Finish"],
    mood: "focus"
  },
  {
    id: 7,
    nameAr: "إبريق الخزف الحجري الحرفي مع كوبين",
    nameEn: "Handcrafted Ceramic Teapot & Cup Set",
    category: "teaware",
    categoryAr: "أدوات التحضير الفاخرة",
    categoryEn: "Artisanal Teaware",
    price: 240,
    oldPrice: 280,
    rating: 4.9,
    reviews: 98,
    weight: "سعة 650 مل / صلب حراري",
    weightEn: "650ml / Thermal Stoneware",
    origin: "استوديو الحرفيين - الرياض",
    originEn: "Artisan Studio, Riyadh",
    temp: "-",
    steepTime: "-",
    steepTimeEn: "-",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    descriptionAr: "إبريق خزفي مصبوب يدوياً بملمس ترابي ناعم وفلتر داخلي دقيق من الفولاذ المقاوم للصدأ لسكب مثالي ومظهر مائدة استثنائي.",
    descriptionEn: "Handmade ceramic teapot with textured sand matte glaze and removable micro-mesh stainless infuser for ceremonial pouring.",
    tag: "إصدار يدوي",
    tagEn: "Artisan Made",
    flavorNotes: ["طين طبيعي", "عزل حراري عالي", "سكب انسيابي"],
    flavorNotesEn: ["Natural Clay", "Heat Retention", "Drip-Free Spout"],
    mood: "relax"
  },
  {
    id: 8,
    nameAr: "أكواب أركان المحمولة الفاخرة (طقم 12 كوب)",
    nameEn: "ARKAN To-Go Insulated Eco Cups (Pack of 12)",
    category: "teaware",
    categoryAr: "أكواب وتقديم",
    categoryEn: "To-Go Collection",
    price: 38,
    oldPrice: null,
    rating: 4.7,
    reviews: 512,
    weight: "12 أونصة / مزدوجة العزل",
    weightEn: "12oz / Double Wall Insulated",
    origin: "مواد نباتية قابلة للتحلل",
    originEn: "100% Eco-Friendly Materials",
    temp: "-",
    steepTime: "-",
    steepTimeEn: "-",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    descriptionAr: "أكواب أركان الأيقونية ذات الهوية العربية المطورة مع غلاف عازل يحافظ على حرارة مشروبك وأناقة يدك أينما كنت.",
    descriptionEn: "ARKAN's signature pattern to-go cups featuring double-walled thermal insulation and eco-friendly recyclable lids.",
    tag: "النمط الأيقوني",
    tagEn: "Iconic Pattern",
    flavorNotes: ["عزل حراري مزدوج", "صديق للبيئة", "مظهر أنيق"],
    flavorNotesEn: ["Double-Wall", "Biodegradable", "Sleek Grip"],
    mood: "energize"
  }
];

// App State
let currentLang = localStorage.getItem('arkan_lang') || 'ar';
let cart = JSON.parse(localStorage.getItem('arkan_cart')) || [
  { id: 1, quantity: 1 },
  { id: 5, quantity: 2 }
];
let wishlist = JSON.parse(localStorage.getItem('arkan_wishlist')) || [2];
let currentFilterType = 'category'; // 'category' | 'mood'
let activeFilterValue = 'all';
let appliedPromo = null;
let promoDiscount = 0;

// DOM Elements & Event Listeners setup
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initLucide();
  renderProducts();
  updateCartUI();
  setupEventListeners();
});

function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Language Switching
function initLanguage() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  applyLanguageTranslations();
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('arkan_lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  applyLanguageTranslations();
  renderProducts();
  updateCartUI();
  initLucide();
  showToast(lang === 'ar' ? 'تم تحويل اللغة إلى العربية' : 'Switched to English');
}

function applyLanguageTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
      el.innerHTML = TRANSLATIONS[currentLang][key];
    }
  });

  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
      el.setAttribute('placeholder', TRANSLATIONS[currentLang][key]);
    }
  });

  // Toggle button texts
  const langToggleBtn = document.getElementById('lang-toggle-text');
  if (langToggleBtn) {
    langToggleBtn.textContent = currentLang === 'ar' ? 'EN' : 'عربي';
  }
}

// Translations Dictionary
const TRANSLATIONS = {
  ar: {
    brand_name: "أركان",
    brand_sub: "شاي وقهوة مختصة",
    nav_home: "الرئيسية",
    nav_catalog: "استكشاف الشاي",
    nav_story: "قصتنا وتراثنا",
    nav_ceremony: "طقوس التحضير",
    nav_bestsellers: "الأكثر مبيعاً",
    nav_contact: "تواصل معنا",
    hero_badge: "أوراق نادرة • حصاد يدوي فاخر 2026",
    hero_title: "تجربة الشاي الفاخر بروح الأصالة والمعاصرة",
    hero_desc: "ننتقي أندر أوراق الشاي من أعلى قمم الجبال العالمية، ونمزجها بعراقة الضيافة العربية لنقدم لك كأساً يلامس الحواس بترف استثنائي.",
    hero_btn_explore: "استكشف التشكيلة الكاملة",
    hero_btn_story: "عالم أركان وتراثنا",
    flavor_wild_honey: "عسل الدغموس",
    flavor_sandalwood: "خشب الصندل",
    flavor_amber: "عنبر دافئ",
    origin_label: "المنشأ والحصاد",
    steeping_label: "درجة الحرارة المثالية",
    heritage_sub: "أصالة التراث وعصرية الذوق",
    heritage_title: "حيث يلتقي عبق القصور النجدية بأرقى مزارع الشاي العالمية",
    heritage_desc: "في أركان، لا نقدم مجرد مشروب، بل نروي حكاية كرم الضيافة العربية الأصيلة ممتزجة بأحدث معايير التحضير المختص. من علب الشاي المعدنية المنقوشة بزخارف معمارية أصيلة إلى الأكواب المحمولة بتصميمها العصري الأيقوني.",
    heritage_stat1: "+40 محصول نادر",
    heritage_stat1_desc: "مباشرة من مزارع فردية معتمدة",
    heritage_stat2: "100% عضوي ومستدام",
    heritage_stat2_desc: "بدون أي إضافات صناعية",
    heritage_stat3: "شحن مبرد وفاخر",
    heritage_stat3_desc: "لحفظ الزيوت العطرية والنضارة",
    bestsellers_sub: "مختارات الصفوة",
    bestsellers_title: "المنتجات الأكثر طلباً وتفضيلاً",
    categories_sub: "استكشف عالم النكهات",
    categories_title: "تصنيفات الشاي والأدوات الفاخرة",
    cat_all: "الكل",
    cat_black: "الشاي الأسود",
    cat_green: "الأخضر والماتشا",
    cat_white: "الشاي الأبيض",
    cat_herbal: "الأعشاب والبابونج",
    cat_oolong: "أولونغ صخري",
    cat_teaware: "أدوات التحضير والأكواب",
    quiz_sub: "مساعد الذوق التفاعلي",
    quiz_title: "كيف تشعر اليوم؟ اختر مزاجك وسنقترح شايك المناسب",
    quiz_relax: "استرخاء وهدوء",
    quiz_focus: "تركيز وتأمل",
    quiz_energize: "طاقة وانتعاش",
    cart_title: "سلة المقتنيات الفاخرة",
    cart_empty: "سلتك فارغة حالياً، استكشف تشكيلاتنا الفاخرة!",
    cart_subtotal: "المجموع الفرعي:",
    cart_shipping: "الشحن السريع:",
    cart_free_shipping: "مجاني للطلبات فوق 200 ر.س",
    cart_free_achieved: "تهانينا! حصلت على شحن مجاني فاخر 🎁",
    cart_remaining_prefix: "أضف بـ ",
    cart_remaining_suffix: " ر.س للحصول على الشحن المجاني",
    cart_checkout: "متابعة الشراء الآمن",
    cart_view_catalog: "استكشف المنتجات",
    add_to_cart: "أضف للسلة",
    quick_view: "معاينة سريعة",
    currency: "ر.س",
    newsletter_sub: "نادي أركان الخاص",
    newsletter_title: "انضم إلى مجتمع الذواقة واحصل على دعوات حصرية لندرات المحاصيل",
    newsletter_placeholder: "أدخل بريدك الإلكتروني هنا...",
    newsletter_btn: "انضمام حصري",
    footer_desc: "دار أركان للشاي والقهوة المختصة. نحتفي بأصالة الضيافة العربية عبر أفخر محاصيل الشاي الحرفية في العالم.",
    footer_quick_links: "روابط سريعة",
    footer_experience: "تجربة أركان",
    footer_contact: "المقر الرئيسي وخدمة النخبة",
    footer_rights: "جميع الحقوق محفوظة © 2026 دار أركان لخدمات الشاي والقهوة الفاخرة."
  },
  en: {
    brand_name: "ARKAN",
    brand_sub: "Specialty Tea & Roastery",
    nav_home: "Home",
    nav_catalog: "Explore Teas",
    nav_story: "Heritage & Craft",
    nav_ceremony: "Brewing Rituals",
    nav_bestsellers: "Bestsellers",
    nav_contact: "Contact",
    hero_badge: "Rare Drops • Single Origin 2026 Harvest",
    hero_title: "Artisanal Tea Redefined With Arabian Splendor",
    hero_desc: "We curate the world's most elusive tea harvests from mist-covered mountain peaks, harmonizing ancient Arabian hospitality with modern specialty craft.",
    hero_btn_explore: "Explore The Reserve",
    hero_btn_story: "Our Heritage & Story",
    flavor_wild_honey: "Wild Honey",
    flavor_sandalwood: "Sandalwood",
    flavor_amber: "Warm Amber",
    origin_label: "Origin & Terroir",
    steeping_label: "Optimal Temperature",
    heritage_sub: "Heritage & Contemporary Elegance",
    heritage_title: "Where Arabian Splendor Meets The World's Finest Tea Estates",
    heritage_desc: "At ARKAN, tea is never merely a beverage; it is an enduring tale of Arabian warmth elevated by meticulous modern craftsmanship. From heritage-embossed luxury tins to our sleek, insulated to-go cups.",
    heritage_stat1: "+40 Rare Harvests",
    heritage_stat1_desc: "Direct from single family estates",
    heritage_stat2: "100% Organic & Pure",
    heritage_stat2_desc: "Zero artificial flavoring or fillers",
    heritage_stat3: "Climate-Controlled Air Ship",
    heritage_stat3_desc: "Preserving delicate essential oils",
    bestsellers_sub: "Connoisseur's Choice",
    bestsellers_title: "Curated Bestsellers & Reserve Lots",
    categories_sub: "Discover The Terroir",
    categories_title: "Explore By Category & Ritual",
    cat_all: "All Curations",
    cat_black: "Black Tea",
    cat_green: "Matcha & Green",
    cat_white: "Rare White",
    cat_herbal: "Botanical & Floral",
    cat_oolong: "Cliff Oolong",
    cat_teaware: "Teaware & Cups",
    quiz_sub: "Sensory Sommelier",
    quiz_title: "How do you wish to feel? Select your mood for the ideal tea match",
    quiz_relax: "Calm & Unwind",
    quiz_focus: "Clarity & Focus",
    quiz_energize: "Vibrant Energy",
    cart_title: "Your Curated Cart",
    cart_empty: "Your luxury cart is empty. Explore our private reserve!",
    cart_subtotal: "Subtotal:",
    cart_shipping: "Express White-Glove Shipping:",
    cart_free_shipping: "Free shipping on orders above 200 SAR",
    cart_free_achieved: "Congratulations! You've unlocked Complimentary Express Delivery 🎁",
    cart_remaining_prefix: "Add ",
    cart_remaining_suffix: " SAR more to qualify for Free Shipping",
    cart_checkout: "Proceed to Secure Checkout",
    cart_view_catalog: "Explore Our Reserve",
    add_to_cart: "Add to Cart",
    quick_view: "Quick View",
    currency: "SAR",
    newsletter_sub: "The ARKAN Circle",
    newsletter_title: "Join our private salon for private tastings and priority allocations",
    newsletter_placeholder: "Enter your email address...",
    newsletter_btn: "Request Invitation",
    footer_desc: "House of ARKAN Specialty Tea & Roastery. Honoring timeless Arabian hospitality through the globe's finest single-estate teas.",
    footer_quick_links: "Navigation",
    footer_experience: "The Experience",
    footer_contact: "Boutique & Concierge",
    footer_rights: "All Rights Reserved © 2026 ARKAN House of Fine Teas."
  }
};

// Filter Helpers
function getFilteredProducts() {
  if (currentFilterType === 'mood') {
    return PRODUCTS.filter(p => p.mood === activeFilterValue);
  }
  if (activeFilterValue === 'all') {
    return PRODUCTS;
  }
  return PRODUCTS.filter(p => p.category === activeFilterValue);
}

// Render Products Grid
function renderProducts(targetContainerId = null, customItems = null) {
  const container = (targetContainerId && document.getElementById(targetContainerId)) 
    || document.getElementById('products-grid') 
    || document.getElementById('catalog-products-grid');
  if (!container) return;

  const isAr = currentLang === 'ar';
  const displayItems = customItems || getFilteredProducts();

  updateFilterUIState(displayItems.length);

  if (displayItems.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 text-stone-400 bg-white/50 rounded-2xl border border-dashed border-stone-300">
        <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
          <i data-lucide="filter-x" class="w-6 h-6"></i>
        </div>
        <p class="text-base font-semibold text-stone-700 mb-2">${isAr ? 'لا توجد محاصيل مطابقة لهذا الخيار حالياً' : 'No products found matching this filter'}</p>
        <button onclick="resetFilters()" class="px-4 py-2 text-xs font-semibold bg-[#141a13] text-[#f7d794] rounded-xl hover:bg-[#c89b67] hover:text-stone-900 transition">
          ${isAr ? 'عرض كافة المحاصيل' : 'Show All Teas'}
        </button>
      </div>
    `;
    initLucide();
    return;
  }

  container.innerHTML = displayItems.map((p, idx) => {
    const isWishlisted = wishlist.includes(p.id);
    const flavors = isAr ? p.flavorNotes : p.flavorNotesEn;

    return `
      <div class="luxury-card product-fade-in group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:border-[#c89b67]/40 flex flex-col justify-between" style="animation-delay: ${idx * 40}ms" data-id="${p.id}">
        <!-- Image Container -->
        <div class="relative h-64 overflow-hidden bg-stone-100 cursor-pointer" onclick="openQuickView(${p.id})">
          <img src="${p.image}" alt="${isAr ? p.nameAr : p.nameEn}" class="img-zoom w-full h-full object-cover">
          
          <!-- Badges -->
          <div class="absolute top-3 ${isAr ? 'right-3' : 'left-3'} flex flex-col gap-1.5 z-10">
            <span class="px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase bg-[#141a13]/85 text-[#f7d794] backdrop-blur-md rounded-full border border-[#c89b67]/30 shadow-sm">
              ${isAr ? p.tag : p.tagEn}
            </span>
            ${p.oldPrice ? `
              <span class="px-2 py-0.5 text-[10px] font-semibold bg-rose-900/80 text-rose-100 backdrop-blur-md rounded-full w-max">
                ${isAr ? 'خصم خاص' : 'Special Offer'}
              </span>
            ` : ''}
          </div>

          <!-- Wishlist Button -->
          <button onclick="toggleWishlist(event, ${p.id})" class="absolute top-3 ${isAr ? 'left-3' : 'right-3'} w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-stone-700 hover:text-amber-600 transition shadow-sm z-10">
            <i data-lucide="heart" class="w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}"></i>
          </button>

          <!-- Quick View Hover Pill -->
          <div class="absolute inset-x-0 bottom-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <span class="px-4 py-1.5 text-xs font-medium bg-[#141a13]/90 text-white backdrop-blur-md rounded-full shadow-lg border border-white/10">
              ${isAr ? 'معاينة سريعة' : 'Quick View'}
            </span>
          </div>
        </div>

        <!-- Content Details -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <!-- Category & Rating -->
            <div class="flex items-center justify-between text-xs text-stone-500 mb-2">
              <span class="font-medium text-[#c89b67] tracking-wider uppercase">${isAr ? p.categoryAr : p.categoryEn}</span>
              <div class="flex items-center gap-1 text-amber-500">
                <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i>
                <span class="font-semibold text-stone-800 text-[11px]">${p.rating}</span>
                <span class="text-stone-400 text-[10px]">(${p.reviews})</span>
              </div>
            </div>

            <!-- Title -->
            <h3 onclick="openQuickView(${p.id})" class="text-base font-semibold text-stone-900 hover:text-[#c89b67] transition cursor-pointer line-clamp-1 mb-2">
              ${isAr ? p.nameAr : p.nameEn}
            </h3>

            <!-- Weight / Specs -->
            <p class="text-xs text-stone-400 mb-3">${isAr ? p.weight : p.weightEn}</p>

            <!-- Flavor Pills -->
            <div class="flex flex-wrap gap-1 mb-4">
              ${flavors.slice(0, 3).map(fn => `<span class="flavor-pill">${fn}</span>`).join('')}
            </div>
          </div>

          <!-- Price & Action Button -->
          <div class="pt-3 border-t border-stone-100 flex items-center justify-between">
            <div>
              <div class="flex items-baseline gap-1.5">
                <span class="text-lg font-bold text-[#141a13]">${p.price}</span>
                <span class="text-xs font-semibold text-stone-500">${isAr ? 'ر.س' : 'SAR'}</span>
                ${p.oldPrice ? `
                  <span class="text-xs text-stone-400 line-through">${p.oldPrice}</span>
                ` : ''}
              </div>
            </div>

            <button onclick="addToCart(${p.id})" class="px-3.5 py-2 text-xs font-medium bg-[#141a13] hover:bg-[#c89b67] text-white hover:text-stone-950 transition-colors duration-200 rounded-xl flex items-center gap-1.5 shadow-sm">
              <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
              <span>${isAr ? 'أضف' : 'Add'}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  initLucide();
}

// Update Active Filter UI State
function updateFilterUIState(matchCount = 0) {
  const isAr = currentLang === 'ar';

  // Category Pills
  document.querySelectorAll('.category-pill').forEach(btn => {
    const isMatching = currentFilterType === 'category' && btn.dataset.category === activeFilterValue;
    btn.classList.toggle('active', isMatching);
  });

  // Mood Pills
  document.querySelectorAll('.mood-pill').forEach(btn => {
    const isMatching = currentFilterType === 'mood' && btn.dataset.mood === activeFilterValue;
    btn.classList.toggle('active', isMatching);
  });

  // Active Filter Banner Banner
  const banners = document.querySelectorAll('.active-filter-banner-el');
  banners.forEach(banner => {
    if (currentFilterType === 'category' && activeFilterValue === 'all') {
      banner.classList.add('hidden');
      return;
    }

    banner.classList.remove('hidden');

    // Label mapping
    let label = activeFilterValue;
    if (currentFilterType === 'mood') {
      const moodMapAr = {
        relax: '🌿 استرخاء وسكينة (البابونج والخزامى والشاي الأبيض)',
        focus: '☕ صفاء وتركيز (الشاي الأسود وأولونغ الجبال)',
        energize: '⚡ طاقة وانتعاش (الماتشا اليابانية وتوليفة الهيل)'
      };
      const moodMapEn = {
        relax: '🌿 Calm & Relax (Chamomile & White Tea)',
        focus: '☕ Focus & Meditation (Black Tea & Oolong)',
        energize: '⚡ Vibrant Energy (Ceremonial Matcha & Saffron)'
      };
      label = isAr ? moodMapAr[activeFilterValue] : moodMapEn[activeFilterValue];
    } else {
      const catMapAr = {
        black: 'الشاي الأسود الملكي',
        white: 'الشاي الأبيض الفضي',
        green: 'الماتشا والشاي الأخضر',
        herbal: 'الأعشاب والبابونج',
        oolong: 'شاي أولونغ صخري',
        teaware: 'أدوات التحضير والأكواب'
      };
      const catMapEn = {
        black: 'Royal Black Tea',
        white: 'Silver White Tea',
        green: 'Matcha & Green Tea',
        herbal: 'Botanical & Herbal',
        oolong: 'Rock Oolong',
        teaware: 'Teaware & Cups'
      };
      label = isAr ? catMapAr[activeFilterValue] : catMapEn[activeFilterValue];
    }

    banner.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full">
        <div class="flex items-center gap-2.5">
          <span class="w-2.5 h-2.5 rounded-full bg-[#e5b869] animate-ping shrink-0"></span>
          <span class="text-xs text-stone-200">
            ${isAr ? 'تستعرض الآن تصفية:' : 'Currently filtering by:'} 
            <strong class="text-[#f7d794] font-bold">${label}</strong>
            <span class="inline-block ms-1.5 px-2 py-0.5 rounded-full bg-white/10 text-[11px] text-stone-300 font-medium">(${matchCount} ${isAr ? 'أصناف مختارة' : 'items found'})</span>
          </span>
        </div>
        <button onclick="resetFilters()" class="text-xs text-[#f7d794] hover:text-white flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-xl transition border border-white/10 self-start sm:self-auto shadow-sm">
          <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
          <span>${isAr ? 'إلغاء التصفية وإظهار الكل' : 'Reset to All Teas'}</span>
        </button>
      </div>
    `;
  });

  initLucide();
}

// Filter Categories
function setCategoryFilter(category) {
  currentFilterType = 'category';
  activeFilterValue = category;
  renderProducts();
}

// Mood Filter
function filterByMood(mood) {
  currentFilterType = 'mood';
  activeFilterValue = mood;
  renderProducts();
  
  const moodNamesAr = {
    relax: 'استرخاء وسكينة',
    focus: 'صفاء وتركيز',
    energize: 'طاقة وانتعاش'
  };
  const moodNamesEn = {
    relax: 'Calm & Relax',
    focus: 'Focus & Clarity',
    energize: 'Vibrant Energy'
  };
  const name = currentLang === 'ar' ? moodNamesAr[mood] : moodNamesEn[mood];
  showToast(currentLang === 'ar' ? `✨ تم تفعيل مساعد الذوق: ${name}` : `✨ Sommelier Filter: ${name}`);
}

// Reset All Filters
function resetFilters() {
  currentFilterType = 'category';
  activeFilterValue = 'all';
  renderProducts();
  showToast(currentLang === 'ar' ? 'تمت إعادة تعيين الفلاتر وعرض كافة المنتجات' : 'Filters reset to all products');
}

// Cart Mechanics
function addToCart(productId, qty = 1) {
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({ id: productId, quantity: qty });
  }
  saveCart();
  updateCartUI();
  toggleCartDrawer(true);
  
  const product = PRODUCTS.find(p => p.id === productId);
  const name = currentLang === 'ar' ? product.nameAr : product.nameEn;
  showToast(currentLang === 'ar' ? `تمت إضافة "${name}" للسلة` : `Added "${name}" to your cart`);
}

function updateCartQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('arkan_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const isAr = currentLang === 'ar';
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  
  // Update header badges
  document.querySelectorAll('.cart-count-badge').forEach(badge => {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  });

  const cartList = document.getElementById('cart-items-list');
  const cartSubtotalEl = document.getElementById('cart-subtotal-val');
  const cartShippingEl = document.getElementById('cart-shipping-progress');
  const cartShippingText = document.getElementById('cart-shipping-text');
  
  if (!cartList) return;

  if (cart.length === 0) {
    cartList.innerHTML = `
      <div class="text-center py-16 px-4">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
          <i data-lucide="shopping-bag" class="w-8 h-8"></i>
        </div>
        <p class="text-stone-500 text-sm mb-4">${isAr ? 'سلة المقتنيات فارغة' : 'Your cart is empty'}</p>
        <button onclick="toggleCartDrawer(false)" class="px-5 py-2 text-xs font-semibold bg-[#141a13] text-[#f7d794] rounded-xl hover:bg-[#c89b67] hover:text-stone-900 transition">
          ${isAr ? 'تصفح التشكيلات' : 'Explore Collections'}
        </button>
      </div>
    `;
    if (cartSubtotalEl) cartSubtotalEl.textContent = `0 ${isAr ? 'ر.س' : 'SAR'}`;
    if (cartShippingEl) cartShippingEl.style.width = '0%';
    if (cartShippingText) cartShippingText.textContent = isAr ? 'أضف منتجات بقيمة 200 ر.س للشحن المجاني' : 'Add 200 SAR for Free Express Delivery';
    initLucide();
    return;
  }

  let subtotal = 0;
  cartList.innerHTML = cart.map(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    if (!prod) return '';

    const itemTotal = prod.price * item.quantity;
    subtotal += itemTotal;

    return `
      <div class="flex items-center gap-3 py-3 border-b border-stone-100 group">
        <img src="${prod.image}" class="w-16 h-16 rounded-xl object-cover border border-stone-200" alt="">
        <div class="flex-1 min-w-0">
          <h4 class="text-xs font-semibold text-stone-900 truncate">${isAr ? prod.nameAr : prod.nameEn}</h4>
          <p class="text-[11px] text-stone-400 mb-1">${prod.price} ${isAr ? 'ر.س' : 'SAR'}</p>
          <div class="flex items-center gap-2">
            <div class="flex items-center border border-stone-200 rounded-lg bg-stone-50 overflow-hidden">
              <button onclick="updateCartQuantity(${prod.id}, -1)" class="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-stone-200 text-xs">-</button>
              <span class="w-7 text-center text-xs font-semibold text-stone-800">${item.quantity}</span>
              <button onclick="updateCartQuantity(${prod.id}, 1)" class="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-stone-200 text-xs">+</button>
            </div>
            <button onclick="removeFromCart(${prod.id})" class="text-stone-400 hover:text-rose-600 text-xs transition">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>
        <div class="text-end">
          <span class="text-xs font-bold text-stone-900">${itemTotal} ${isAr ? 'ر.س' : 'SAR'}</span>
        </div>
      </div>
    `;
  }).join('');

  if (cartSubtotalEl) {
    if (appliedPromo) {
      const discountVal = Math.round(subtotal * promoDiscount);
      const finalTotal = Math.max(0, subtotal - discountVal);
      cartSubtotalEl.innerHTML = `
        <div class="flex flex-col items-end">
          <span class="text-xs text-emerald-600 line-through text-stone-400">${subtotal} ${isAr ? 'ر.س' : 'SAR'}</span>
          <span class="text-base font-bold text-stone-900">${finalTotal} ${isAr ? 'ر.س' : 'SAR'}</span>
          <span class="text-[10px] text-emerald-600 font-semibold">(تم تطبيق خصم 10% كود ${appliedPromo})</span>
        </div>
      `;
    } else {
      cartSubtotalEl.textContent = `${subtotal} ${isAr ? 'ر.س' : 'SAR'}`;
    }
  }

  // Shipping progress (Target 200 SAR)
  const freeThreshold = 200;
  const progressPercent = Math.min(100, (subtotal / freeThreshold) * 100);
  if (cartShippingEl) cartShippingEl.style.width = `${progressPercent}%`;

  if (cartShippingText) {
    if (subtotal >= freeThreshold) {
      cartShippingText.innerHTML = `<span class="text-emerald-600 font-medium">${isAr ? 'تهانينا! حصلت على الشحن المجاني الفاخر 🎁' : 'Complimentary Express Shipping Unlocked! 🎁'}</span>`;
    } else {
      const remaining = freeThreshold - subtotal;
      cartShippingText.textContent = isAr 
        ? `تبقّى ${remaining} ر.س للحصول على الشحن المجاني` 
        : `Add ${remaining} SAR more for Free Express Delivery`;
    }
  }

  initLucide();
}

// Promo Code
function handlePromoSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('cart-promo-input');
  if (input) {
    applyPromoCode(input.value);
  }
}

function applyPromoCode(code) {
  const isAr = currentLang === 'ar';
  const cleanCode = code ? code.trim().toUpperCase() : '';
  if (cleanCode === 'ARKAN10' || cleanCode === 'WELCOME') {
    appliedPromo = cleanCode;
    promoDiscount = 0.10;
    updateCartUI();
    showToast(isAr ? 'تم تطبيق كود الخصم بنجاح: خصم 10% ✨' : 'Promo applied: 10% Discount unlocked ✨');
  } else {
    showToast(isAr ? 'كود الخصم غير صالح. جرب كود: ARKAN10' : 'Invalid promo code. Try: ARKAN10');
  }
}

// Drawer Controls
function toggleCartDrawer(open) {
  const backdrop = document.getElementById('cart-drawer-backdrop');
  const panel = document.getElementById('cart-drawer-panel');
  if (!backdrop || !panel) return;

  if (open) {
    backdrop.classList.add('active');
    panel.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    backdrop.classList.remove('active');
    panel.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Quick View Modal
function openQuickView(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const isAr = currentLang === 'ar';
  const modal = document.getElementById('quick-view-modal');
  const content = document.getElementById('quick-view-content');
  if (!modal || !content) return;

  const flavors = isAr ? prod.flavorNotes : prod.flavorNotesEn;

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div class="relative rounded-2xl overflow-hidden bg-stone-100 h-72 md:h-full">
        <img src="${prod.image}" alt="" class="w-full h-full object-cover">
        <span class="absolute top-3 ${isAr ? 'right-3' : 'left-3'} px-3 py-1 text-xs font-semibold bg-[#141a13]/85 text-[#f7d794] rounded-full border border-[#c89b67]/30">
          ${isAr ? prod.tag : prod.tagEn}
        </span>
      </div>
      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-xs text-[#c89b67] font-semibold mb-2">
            <span>${isAr ? prod.categoryAr : prod.categoryEn}</span>
            <div class="flex items-center gap-1 text-amber-500">
              <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400"></i>
              <span class="font-bold text-stone-800">${prod.rating}</span>
            </div>
          </div>
          <h2 class="text-xl font-bold text-stone-900 mb-2">${isAr ? prod.nameAr : prod.nameEn}</h2>
          <p class="text-xs text-stone-400 mb-3">${isAr ? prod.weight : prod.weightEn}</p>
          <p class="text-sm text-stone-600 leading-relaxed mb-4">${isAr ? prod.descriptionAr : prod.descriptionEn}</p>

          <!-- Brewing & Terroir Grid -->
          <div class="grid grid-cols-2 gap-3 p-3 bg-stone-50 rounded-xl border border-stone-200/60 mb-4 text-xs">
            <div>
              <span class="text-stone-400 block text-[10px] uppercase">${isAr ? 'المنشأ' : 'Terroir'}</span>
              <span class="font-semibold text-stone-800">${isAr ? prod.origin : prod.originEn}</span>
            </div>
            <div>
              <span class="text-stone-400 block text-[10px] uppercase">${isAr ? 'الحرارة المثالية' : 'Water Temp'}</span>
              <span class="font-semibold text-stone-800">${prod.temp}</span>
            </div>
            <div>
              <span class="text-stone-400 block text-[10px] uppercase">${isAr ? 'وقت التحضير' : 'Steep Time'}</span>
              <span class="font-semibold text-stone-800">${isAr ? prod.steepTime : prod.steepTimeEn}</span>
            </div>
            <div>
              <span class="text-stone-400 block text-[10px] uppercase">${isAr ? 'درجة التحميص/الأكسدة' : 'Oxidation'}</span>
              <span class="font-semibold text-stone-800">${isAr ? 'حرفي متوازن' : 'Single Estate'}</span>
            </div>
          </div>

          <!-- Flavor Notes -->
          <div class="mb-4">
            <span class="text-xs text-stone-500 font-semibold block mb-2">${isAr ? 'النوتات العطرية الأساسية:' : 'Tasting Notes:'}</span>
            <div class="flex flex-wrap gap-1.5">
              ${flavors.map(f => `<span class="flavor-pill">${f}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
          <div>
            <span class="text-2xl font-bold text-stone-900">${prod.price}</span>
            <span class="text-xs text-stone-500 font-medium">${isAr ? 'ر.س' : 'SAR'}</span>
          </div>
          <button onclick="addToCart(${prod.id}); closeQuickView();" class="flex-1 py-3 bg-[#141a13] hover:bg-[#c89b67] text-white hover:text-stone-900 transition font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md">
            <i data-lucide="shopping-bag" class="w-4 h-4"></i>
            <span>${isAr ? 'أضف للسلة الآن' : 'Add to Cart'}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  initLucide();
}

function closeQuickView() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Wishlist
function toggleWishlist(e, productId) {
  e.stopPropagation();
  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter(id => id !== productId);
    showToast(currentLang === 'ar' ? 'تمت الإزالة من قائمة الرغبات' : 'Removed from wishlist');
  } else {
    wishlist.push(productId);
    showToast(currentLang === 'ar' ? 'تم الحفظ في قائمة الرغبات ❤️' : 'Added to wishlist ❤️');
  }
  localStorage.setItem('arkan_wishlist', JSON.stringify(wishlist));
  renderProducts();
}

// Search Modal
function toggleSearchModal(open) {
  const modal = document.getElementById('search-modal');
  if (!modal) return;
  if (open) {
    modal.classList.remove('hidden');
    document.getElementById('search-input')?.focus();
  } else {
    modal.classList.add('hidden');
  }
}

function handleSearch(query) {
  const q = query.trim().toLowerCase();
  const resultsContainer = document.getElementById('search-results');
  if (!resultsContainer) return;

  if (!q) {
    resultsContainer.innerHTML = '';
    return;
  }

  const isAr = currentLang === 'ar';
  const matches = PRODUCTS.filter(p => 
    p.nameAr.toLowerCase().includes(q) ||
    p.nameEn.toLowerCase().includes(q) ||
    p.flavorNotes.some(f => f.includes(q)) ||
    p.flavorNotesEn.some(f => f.toLowerCase().includes(q))
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = `<p class="text-xs text-stone-400 p-4 text-center">${isAr ? 'لا توجد نتائج مطابقة' : 'No matches found'}</p>`;
    return;
  }

  resultsContainer.innerHTML = matches.map(p => `
    <div onclick="openQuickView(${p.id}); toggleSearchModal(false);" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-stone-50 cursor-pointer transition">
      <img src="${p.image}" class="w-12 h-12 rounded-lg object-cover" alt="">
      <div class="flex-1">
        <h5 class="text-xs font-semibold text-stone-900">${isAr ? p.nameAr : p.nameEn}</h5>
        <span class="text-[11px] text-[#c89b67]">${p.price} ${isAr ? 'ر.س' : 'SAR'}</span>
      </div>
      <i data-lucide="chevron-left" class="w-4 h-4 text-stone-400"></i>
    </div>
  `).join('');
  initLucide();
}

// Toast System
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'flex items-center gap-2.5 px-4 py-2.5 bg-[#141a13]/95 text-stone-100 text-xs font-medium rounded-xl shadow-xl border border-[#c89b67]/30 backdrop-blur-md transform transition-all duration-300 translate-y-2 opacity-0';
  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-[#e5b869] animate-ping"></span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Newsletter Submit
function handleNewsletter(e) {
  e.preventDefault();
  const emailInput = document.getElementById('newsletter-email');
  if (emailInput && emailInput.value) {
    const isAr = currentLang === 'ar';
    showToast(isAr ? 'شكراً لانضمامك! تم تسجيل بريدك في نادي أركان الخاص ✉️' : 'Welcome to the ARKAN Salon! Invitation sent ✉️');
    emailInput.value = '';
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Close modals on Esc
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleCartDrawer(false);
      closeQuickView();
      toggleSearchModal(false);
    }
  });

  // Close Quick View on outside click
  const qvModal = document.getElementById('quick-view-modal');
  if (qvModal) {
    qvModal.addEventListener('click', (e) => {
      if (e.target === qvModal) {
        closeQuickView();
      }
    });
  }

  // Close Search Modal on outside click
  const searchModal = document.getElementById('search-modal');
  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) {
        toggleSearchModal(false);
      }
    });
  }
}
