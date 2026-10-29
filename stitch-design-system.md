# وثيقة نظام التصميم وموجهات الربط مع Google Stitch & Figma
## العلامة التجارية: أركان | ARKAN - Specialty Tea & Roastery

تهدف هذه الوثيقة إلى توفير كافة المواصفات البصرية، والأكواد، ونظام التصميم (Design System Tokens)، بالإضافة إلى نصوص التوجيه الدقيقة (Prompts) الجاهزة للاستخدام في **Google Stitch** أو **Figma** لتوليد ومزامنة المزيد من الشاشات بنفس الروح الإبداعية والهوية الفاخرة.

---

## 1. الهوية البصرية وفلسفة التصميم (Brand & Visual Philosophy)

* **الاسم العربي:** أركان (ARKAN)
* **المفهوم الجوهري:** دار شاي وقهوة مختصة تجمع بين التراث المعماري النبيل وكرم الضيافة العربية، مع دقة الحرفية العصرية لأندر محاصيل الشاي الجبلية.
* **النمط البصري (Aesthetic Style):**
  * Modern Editorial Luxury (فخامة تحريرية عصرية).
  * Earthy Organic Sophistication (ألوان ترابية دافئة تعكس الطبيعة وأوراق الشاي والجدران الطينية النجدية).
  * Tactile & Minimalist Whitespace (تنظيم المساحات ومربعات Bento Grid الذكية).

---

## 2. لوحة الألوان والرموز البرمجية (Color Palette Tokens)

| اسم اللون (Token Name) | كود HEX | النسبة والاستخدام | الدلالة البصرية |
| :--- | :--- | :--- | :--- |
| **Forest Dark (Matcha Night)** | `#141A13` | 40% (Primary Dark) | خلفيات الهيدر، الفوتر، بطاقات الـ Hero، النصوص الداكنة |
| **Forest Surface** | `#1C241B` | 15% (Card Elev) | البطاقات الزجاجية الشفافة والأسطح المرتفعة |
| **Warm Sand (Camel Silk)** | `#C89B67` | 20% (Accent Gold) | الأزرار الرئيسية، الشارات الملكية، الخطوط العطرية، الأيقونات |
| **Sand Light** | `#DFB17E` | Hover States | تأثيرات التحويم والانتقال |
| **Parchment Linen** | `#FAF8F5` | 25% (Light Canvas) | لون الصفحة الرئيسي المريح للعين |
| **Card Soft Linen** | `#F3EFE9` | Bento Background | خلفية شبكة Bento Grid وحاويات المنتجات |
| **Empire Gold** | `#E5B869` | Micro-Accents | تقييمات النجوم، مؤشرات النضارة، والتنبيهات |

---

## 3. مقاييس الخطوط والطباعة (Typography Hierarchy)

* **الخط العربي الرئيسي:** `Readex Pro` و `Tajawal` (أوزان 400, 500, 600, 700).
* **الخط اللاتيني للعناوين:** `Playfair Display` (Serif Editorial للعناوين الفخمة).
* **الخط اللاتيني للنصوص والأرقام:** `Plus Jakarta Sans`.

```css
/* Typography Scale */
--font-display-hero: clamp(2rem, 5vw, 3.75rem); /* H1 */
--font-heading-section: clamp(1.5rem, 3vw, 2.25rem); /* H2 */
--font-card-title: 1.125rem; /* 18px */
--font-body: 0.875rem; /* 14px */
--font-meta-caps: 0.6875rem; /* 11px uppercase */
```

---

## 4. موجهات Google Stitch الجاهزة (Stitch Canvas Prompts)

إذا كنت ترغب في استخدام أداة **Google Stitch** لإنشاء شاشات إضافية (مثل: صفحة سداد متقدمة، أو صفحة اشتراك في صندوق التذوق الشهري، أو تطبيق جوال)، يمكنك نسخ النص البرمجي التوجيهي التالي ولصقه مباشرة في شريط أوامر Stitch:

### الموجه الرئيسي لـ Google Stitch (System & Vibe Prompt):
```text
Design a luxury responsive e-commerce web and mobile interface for "ARKAN" (أركان) - a high-end specialty tea roastery and boutique brand rooted in Arab heritage and modern minimalist luxury.

Color System:
- Background Canvas: Warm organic linen #FAF8F5
- Primary Accent: Warm Camel Sand #C89B67 and Muted Gold #E5B869
- Deep Contrast: Matcha Forest Dark #141A13
- Surface Neutral: Soft Stone #F3EFE9

Visual Language:
- Ultra-clean editorial layout with generous whitespace.
- Modern Bento-grid composition for categories and story blocks.
- Glassmorphic floating navigation header with bilingual support (Arabic RTL / English LTR).
- Product cards featuring organic tea leaf photography, tasting notes pills (Wild Honey, Cedarwood, Royal Saffron), origin elevation tags, and quick-add actions.
- Tactile artisanal aesthetic: handcrafted ceramics, mud-brick architectural arches, and sleek minimalist to-go cups.
```

### موجه صفحة صندوق الاشتراكات الشهري (Stitch Monthly Reserve Box Prompt):
```text
Create a modern subscription landing screen for "ARKAN Private Tea Reserve Club". 
Include a 3-tier membership card selector (Curator, Connoisseur, Royal Imperial), flavor profile customization slider, brewing gift box mockup with ceramic teapot, and checkout preview with Arabic and English bilingual typography. Follow the ARKAN color tokens (#141A13, #C89B67, #FAF8F5).
```

---

## 5. هيكل المكونات ومسار الملفات المحلية

المشروع مبني وجاهز بالكامل في مجلدك الحالي:
1. `index.html`: الصفحة الرئيسية التفاعلية الكاملة بجميع الأقسام والسلة السريعة ومكتشف الشاي الحسي.
2. `catalog.html`: صفحة استكشاف كافة المحاصيل والفرز والتصنيفات الدائرية الفاخرة.
3. `assets/css/styles.css`: متغيرات الألوان، تأثيرات الزجاج والظلال الفاخرة، والتجاوب الكامل.
4. `assets/js/app.js`: محرك التفاعل (سلة التسوق، التبديل الفوري بين العربية والإنجليزية، النوافذ المنبثقة، والبحث).
