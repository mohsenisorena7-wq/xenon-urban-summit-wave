export const STYLES = [
  "مدرن مینیمال",
  "کلاسیک ایرانی",
  "معماری سنتی ایرانی",
  "معماری اسلامی",
  "معماری معاصر",
  "معماری پایدار و سبز",
  "معماری صنعتی",
  "معماری اسکاندیناوی",
  "معماری مدیترانه‌ای",
  "معماری بیوفیلیک",
  "معماری پارامتریک",
  "معماری ارگانیک",
  "نئوکلاسیک",
  "معماری ژاپنی",
  "های‌تک",
] as const;

export const PROJECTS = [
  "ویلای لوکس",
  "آپارتمان مسکونی",
  "ساختمان اداری",
  "فضای تجاری",
  "کافه و رستوران",
  "هتل و اقامتگاه",
  "مرکز فرهنگی",
  "مسجد و مکان مذهبی",
  "ویلای کوهستانی",
  "خانه باغ",
  "پروژه بازسازی",
  "طراحی داخلی",
  "پنت‌هاوس",
  "مجتمع مسکونی",
  "فضای کار اشتراکی",
] as const;

export const CONTENT_TYPES = [
  {
    id: "instagram",
    title: "کپشن اینستاگرام",
    hint: "متن جذاب و تعاملی برای فید",
  },
  {
    id: "linkedin",
    title: "پست لینکدین",
    hint: "لحن تخصصی و حرفه‌ای",
  },
  {
    id: "portfolio",
    title: "توضیح پروژه",
    hint: "برای پورتفولیو و سایت",
  },
  {
    id: "ideas",
    title: "ایده‌های آموزشی",
    hint: "موضوع پست و ریلز",
  },
  {
    id: "prompt",
    title: "پرامپت هوش مصنوعی",
    hint: "آماده برای Grok و ChatGPT",
  },
  {
    id: "hashtags",
    title: "هشتگ تخصصی",
    hint: "فارسی و انگلیسی",
  },
  {
    id: "ad",
    title: "متن تبلیغاتی",
    hint: "جذب مشتری و مشاوره",
  },
  {
    id: "story",
    title: "داستان پروژه",
    hint: "روایت انسانی از طراحی",
  },
  {
    id: "image",
    title: "پرامپت تصویر",
    hint: "برای رندر و Imagine",
  },
  {
    id: "calendar",
    title: "تقویم ماهانه",
    hint: "برنامه ۳۰ روزه محتوا",
  },
  {
    id: "pack",
    title: "بسته کامل",
    hint: "چند نوع محتوا یکجا",
  },
] as const;

export type ContentTypeId = (typeof CONTENT_TYPES)[number]["id"];
export type StyleName = (typeof STYLES)[number];
export type ProjectName = (typeof PROJECTS)[number];
