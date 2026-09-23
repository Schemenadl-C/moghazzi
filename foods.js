export function faDigits(n) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
}

export const IMAGES = {
  choline: {
    uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/3fd4a3919672ec430b4cdfbe81fd44f5",
  },
  omega: {
    uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/9ba45f560333c523f13990ffb5816dc6",
  },
  iron: {
    uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c119e8a3573bf098e2839d1a9bd49c1d",
  },
  zinc: {
    uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/b598f5d15d2e9ed32f56ce21e3e86eb9",
  },
  magnesium: {
    uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/a9f2706f88850421e0b7f66028510d95",
  },
  hormone: {
    uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2f08838c44835635395eb4f601cd7a84",
  },
  hero: {
    uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e385217a0517a29965dcd3083db5c22c",
  },
};

export const categories = [
  {
    slug: "choline",
    title: "مه مغزی",
    nutrient: "کولین",
    signal: "تمرکز، حافظه و وضوح ذهنی",
    why: "کولین پیش‌ساز استیل‌کولین است؛ انتقال‌دهنده‌ای که مغز برای حافظه، توجه و گفتار شفاف به آن وابسته است. کمبودش اغلب به‌صورت مه ذهنی ظاهر می‌شود، نه گرسنگی.",
    image: "choline",
    foods: [
      { id: "eggs", name: "تخم‌مرغ", latin: "Eggs", note: "غنی‌ترین منبع روزمره کولین؛ تقریباً تمام آن در زرده است.", serving: "۲ عدد کامل" },
      { id: "soy", name: "سویا", latin: "Soybeans", note: "لسیتین سویا فسفاتیدیل‌کولین دارد و برای گیاه‌خواران کلیدی است.", serving: "۱ پیمانه پخته" },
      { id: "tofu", name: "توفو", latin: "Tofu", note: "فرم نرم‌تر سویا؛ کولین به‌علاوه پروتئین کامل.", serving: "۱۵۰ گرم" },
      { id: "tempeh", name: "تمپه", latin: "Tempeh", note: "سویای تخمیری؛ کولین با قابلیت جذب بهتر و فیبر.", serving: "۱۰۰ گرم" },
      { id: "quinoa", name: "کینوا", latin: "Quinoa", note: "شبه غله کامل با کولین متوسط و اسید آمینه لیزین.", serving: "۱ پیمانه پخته" },
      { id: "broccoli", name: "بروکلی", latin: "Broccoli", note: "کولین گیاهی به‌علاوه فولات برای ساخت انتقال‌دهنده‌ها.", serving: "۱ پیمانه پخته" },
      { id: "brussels", name: "کلم بروکسل", latin: "Brussels sprouts", note: "از بهترین سبزی‌ها برای کولین در هر کالری.", serving: "۱ پیمانه" },
      { id: "chicken", name: "مرغ", latin: "Chicken", note: "سینه کبابی منبع پایدار کولین و پروتئین بدون سنگینی.", serving: "۱۲۰ گرم" },
      { id: "salmon", name: "سالمون", latin: "Salmon", note: "کولین همراه امگا-۳؛ حمایت مضاعف از غشای سلول عصبی.", serving: "۱۲۰ گرم" },
    ],
  },
  {
    slug: "omega",
    title: "پوست خشک",
    nutrient: "امگا-۳",
    signal: "نرمی پوست، التهاب و رطوبت سلولی",
    why: "امگا-۳ ساختار لایه چربی پوست را می‌سازد. بدون آن، رطوبت از اپیدرم فرار می‌کند و پوست پوسته‌پوسته و کدر می‌شود — حتی اگر آب زیاد بنوشید.",
    image: "omega",
    foods: [
      { id: "salmon2", name: "سالمون", latin: "Salmon", note: "EPA و DHA مستقیم؛ سریع‌ترین اثر روی التهاب پوست.", serving: "۲ وعده در هفته" },
      { id: "walnut", name: "گردو", latin: "Walnuts", note: "بهترین منبع گیاهی ALA؛ مغز گردو تقریباً روغن است.", serving: "۳۰ گرم، یک مشت" },
      { id: "flax", name: "بذر کتان", latin: "Flaxseed", note: "ALA بالا؛ آسیاب‌شده جذب می‌شود، کامل نه.", serving: "۱ قاشق غذاخوری آسیاب‌شده" },
      { id: "chia", name: "دانه چیا", latin: "Chia", note: "امگا-۳، فیبر ژلی و رطوبت درونی.", serving: "۱ قاشق غذاخوری خیس‌خورده" },
      { id: "avocado", name: "آووکادو", latin: "Avocado", note: "چربی تک‌غیراشباع برای سد پوست، نه امگا-۳ خالص.", serving: "نیم عدد" },
      { id: "sardine", name: "ساردین", latin: "Sardines", note: "امگا-۳ فشرده با استخوان خوراکی و کلسیم.", serving: "۱ قوطی کوچک" },
      { id: "fishoil", name: "روغن ماهی", latin: "Fish oil", note: "وقتی ماهی تازه کم است؛ به کیفیت تصفیه توجه کنید.", serving: "طبق برچسب، با غذا" },
      { id: "hemp", name: "دانه شاهدانه", latin: "Hemp seed", note: "نسبت امگا-۳ به امگا-۶ متعادل و معدنی.", serving: "۲ قاشق غذاخوری" },
      { id: "brussels2", name: "کلم بروکسل", latin: "Brussels sprouts", note: "ALA گیاهی به‌علاوه ویتامین C برای کلاژن.", serving: "۱ پیمانه" },
    ],
  },
  {
    slug: "iron",
    title: "خستگی پنهان",
    nutrient: "آهن",
    signal: "انرژی، رنگ‌پریدگی و نفس کوتاه",
    why: "آهن اکسیژن را روی هموگلوبین سوار می‌کند. کمبودش در خانم‌ها به‌خاطر قاعدگی شایع است و اغلب با «کم‌خوابی» اشتباه گرفته می‌شود.",
    image: "iron",
    foods: [
      { id: "lentil", name: "عدس", latin: "Lentils", note: "آهن غیرهم؛ با لیمو یا فلفل دلمه‌ای جذبش چند برابر می‌شود.", serving: "۱ پیمانه پخته" },
      { id: "spinach", name: "اسفناج", latin: "Spinach", note: "آهن گیاهی با فولات؛ خام در سالاد یا تفت کوتاه.", serving: "۲ پیمانه خام" },
      { id: "dates", name: "خرما", latin: "Dates", note: "آهن، پتاسیم و قند طبیعی برای افت انرژی عصر.", serving: "۳–۴ عدد" },
      { id: "pumpkin", name: "دانه کدو", latin: "Pumpkin seeds", note: "آهن و زینک همزمان؛ میان‌وعده معدنی.", serving: "۳۰ گرم" },
      { id: "chickpea", name: "نخود", latin: "Chickpeas", note: "آهن پایدار برای خورش و حمص.", serving: "۱ پیمانه" },
      { id: "pistachio", name: "پسته", latin: "Pistachios", note: "آهن، B6 و چربی برای جذب ویتامین‌های محلول در چربی.", serving: "یک مشت" },
      { id: "cacao", name: "شکلات تلخ", latin: "Dark chocolate", note: "آهن و منیزیم؛ بالای ۷۰٪ کاکائو.", serving: "۲۰ گرم" },
      { id: "beef", name: "گوشت قرمز", latin: "Red meat", note: "آهن هم با جذب بالا؛ مقدار کم کافی است.", serving: "۹۰ گرم" },
      { id: "figs", name: "انجیر خشک", latin: "Figs", note: "آهن، فیبر و کلسیم برای یبوست ناشی از کم‌آبی سلول.", serving: "۳ عدد" },
    ],
  },
  {
    slug: "zinc",
    title: "ریزش مو",
    nutrient: "زینک و بیوتین",
    signal: "تار شکننده، رشد کند، پوست سر خشک",
    why: "فولیکول مو یکی از بافت‌های پرتقاضا برای زینک، بیوتین و پروتئین است. کمبود خفیف ماه‌ها طول می‌کشد تا روی شانه دیده شود.",
    image: "zinc",
    foods: [
      { id: "eggs3", name: "تخم‌مرغ", latin: "Eggs", note: "بیوتین در زرده؛ سفیده خام بیوتین را مهار می‌کند، پخته نه.", serving: "۱–۲ عدد" },
      { id: "pumpkin2", name: "دانه کدو", latin: "Pumpkin seeds", note: "یکی از غنی‌ترین منابع گیاهی زینک.", serving: "۲ قاشق غذاخوری" },
      { id: "almond", name: "بادام", latin: "Almonds", note: "ویتامین E برای غلاف تار مو و چربی پوست سر.", serving: "۲۰ عدد" },
      { id: "sweetpotato", name: "سیب‌زمینی شیرین", latin: "Sweet potato", note: "بتاکاروتن برای پوست سر و رشد سلول.", serving: "۱ عدد متوسط" },
      { id: "avocado2", name: "آووکادو", latin: "Avocado", note: "چربی و ویتامین E برای سد پوست سر.", serving: "نیم عدد" },
      { id: "walnut2", name: "گردو", latin: "Walnuts", note: "امگا-۳ گیاهی برای التهاب فولیکول.", serving: "۴ نصف" },
      { id: "yogurt", name: "ماست", latin: "Yogurt", note: "پروتئین کامل، زینک و باکتری برای جذب مواد معدنی.", serving: "۱ کاسه" },
      { id: "lentil2", name: "عدس", latin: "Lentils", note: "آهن و پروتئین گیاهی که ریزش از کم‌خونی را کم می‌کند.", serving: "۱ پیمانه" },
      { id: "sunflower", name: "دانه آفتابگردان", latin: "Sunflower seeds", note: "ویتامین E، سلنیوم و زینک در یک مشت.", serving: "۳۰ گرم" },
    ],
  },
  {
    slug: "magnesium",
    title: "خلق و خواب",
    nutrient: "منیزیم",
    signal: "اضطراب عضلانی، کج‌خلقی، بیداری نیمه‌شب",
    why: "منیزیم گیرنده GABA را آرام می‌کند و قند خون شب را پایدار نگه می‌دارد. کمبودش در رژیم تصفیه‌شده تقریباً قاعده است، نه استثنا.",
    image: "magnesium",
    foods: [
      { id: "cacao2", name: "شکلات تلخ", latin: "Dark chocolate", note: "منیزیم فشرده؛ تلخ‌تر یعنی معدنی‌تر.", serving: "۲۰–۳۰ گرم" },
      { id: "pumpkin3", name: "دانه کدو", latin: "Pumpkin seeds", note: "قهرمان منیزیم در میان‌وعده‌ها.", serving: "۳۰ گرم عصر" },
      { id: "almond2", name: "بادام", latin: "Almonds", note: "منیزیم با چربی برای جذب آهسته و بدون جهش قند.", serving: "یک مشت" },
      { id: "spinach2", name: "اسفناج", latin: "Spinach", note: "منیزیم برگ سبز؛ حرارت کوتاه حفظش می‌کند.", serving: "۱ پیمانه تفت‌داده" },
      { id: "banana", name: "موز", latin: "Banana", note: "پتاسیم و منیزیم ملایم برای گرفتگی شب.", serving: "۱ عدد" },
      { id: "avocado3", name: "آووکادو", latin: "Avocado", note: "منیزیم به‌علاوه چربی آرام‌بخش.", serving: "نیم عدد" },
      { id: "blackbean", name: "لوبیا سیاه", latin: "Black beans", note: "منیزیم، فیبر و آهن برای انرژی پایدار.", serving: "۱ پیمانه" },
      { id: "cashew", name: "بادام هندی", latin: "Cashews", note: "منیزیم خامه‌ای؛ بهتر است نمک‌زده صنعتی نباشد.", serving: "۲۵ گرم" },
      { id: "figs2", name: "انجیر", latin: "Figs", note: "منیزیم و فیبر برای آرامش روده که روی خلق اثر می‌گذارد.", serving: "۲–۳ عدد" },
    ],
  },
  {
    slug: "hormone",
    title: "استخوان و هورمون",
    nutrient: "ویتامین D و کلسیم",
    signal: "درد استخوان، خلق فصلی، چرخه نامنظم",
    why: "ویتامین D کلید ورود کلسیم و تنظیم ایمنی و خلق است. در عرض‌های کم‌آفتاب، غذا به‌تنهایی کافی نیست اما پایه‌ای است که مکمل روی آن می‌نشیند.",
    image: "hormone",
    foods: [
      { id: "yolk", name: "زرده تخم‌مرغ", latin: "Egg yolk", note: "ویتامین D غذایی در زرده، نه سفیده.", serving: "۲ زرده" },
      { id: "mushroom", name: "قارچ", latin: "Mushrooms", note: "اگر در آفتاب خشک شود D2 می‌سازد؛ شی‌تاکه غنی‌تر است.", serving: "۱ پیمانه" },
      { id: "yogurt2", name: "ماست", latin: "Yogurt", note: "کلسیم قابل جذب با پروتئین و پروبیوتیک.", serving: "۱ کاسه" },
      { id: "sardine2", name: "ساردین", latin: "Sardines", note: "D، کلسیم استخوان و امگا-۳ در یک قوطی.", serving: "۱ قوطی" },
      { id: "sesame", name: "کنجد و ارده", latin: "Sesame / tahini", note: "کلسیم گیاهی متراکم؛ ارده جذب بهتری دارد.", serving: "۱ قاشق غذاخوری" },
      { id: "kale", name: "کلم پیچ", latin: "Kale", note: "کلسیم با ویتامین K برای نشاندن کلسیم در استخوان.", serving: "۱ پیمانه" },
      { id: "salmon3", name: "سالمون", latin: "Salmon", note: "یکی از معدود غذاهای غنی از ویتامین D3.", serving: "۱۲۰ گرم" },
      { id: "cheese", name: "پنیر کهنه", latin: "Aged cheese", note: "کلسیم فشرده؛ مقدار کم با سبزی.", serving: "۳۰ گرم" },
      { id: "oliveoil", name: "روغن زیتون", latin: "Olive oil", note: "چربی حامل برای جذب D؛ پلی‌فنول ضدالتهاب.", serving: "۱ قاشق غذاخوری خام" },
    ],
  },
];

export function allFoods() {
  return categories.flatMap((c) => c.foods.map((f) => ({ ...f, category: c })));
}

export const FOOD_COUNT = categories.reduce((n, c) => n + c.foods.length, 0);
