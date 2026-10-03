type Input = {
  type: string;
  style: string;
  project: string;
  notes?: string;
  viewType?: string;
  monthName?: string;
  materials?: string;
  location?: string;
  photoCount?: number;
};

function extra(data: Input) {
  const bits: string[] = [];
  if (data.location?.trim()) bits.push(`موقعیت: ${data.location.trim()}`);
  if (data.materials?.trim()) bits.push(`متریال: ${data.materials.trim()}`);
  if (data.notes?.trim()) bits.push(`یادداشت: ${data.notes.trim()}`);
  if (data.photoCount && data.photoCount > 0) {
    bits.push(`مرجع تصویری: ${data.photoCount} عکس پروژه`);
  }
  return bits.length ? `\n\n${bits.join("\n")}` : "";
}

export function localContent(data: Input): string {
  const { style, project, type } = data;
  const e = extra(data);
  const loc = data.location?.trim();
  const mat = data.materials?.trim();
  const place = loc ? ` در ${loc}` : "";
  const mats = mat ? ` با متریال ${mat}` : "";

  switch (type) {
    case "instagram":
      return `وقتی یک ${project}${place} فقط دیده نمی‌شود، بلکه زندگی در آن جریان پیدا می‌کند.

در این پروژه با رویکرد ${style}${mats} روی چهار چیز ایستادیم: نور طبیعی، ارتباط داخل و بیرون، متریال صادق، و مقیاس انسانی. هدف، فضایی است که بعد از چند سال هنوز تازه بماند.

کدام جزئیات برای شما در طراحی خانه مهم‌تر است: نور، متریال، یا سلسله‌مراتب فضا؟

#معماری #طراحی_معماری #معماری_ایرانی #${style.replace(/\s+/g, "_")} #Architecture #InteriorDesign${e}`;

    case "linkedin":
      return `طراحی یک ${project}${place} دیگر فقط مسئلهٔ فرم نیست؛ مسئلهٔ تجربه است.

در پروژه‌ای با رویکرد ${style}${mats} سه اصل را جلو گذاشتیم:

۱. پایداری واقعی، نه تزئین سبز
۲. احترام به هویت و اقلیم محل
۳. رابطهٔ روشن بین کاربر و فضا

معماری خوب فضایی می‌سازد که آدم‌ها در آن ساکن نمی‌شوند؛ به آن تعلق پیدا می‌کنند.

شما در پروژه‌هایتان کدام اصل را اول می‌گذارید؟${e}`;

    case "portfolio":
      return `عنوان پروژه: ${project}
سبک: ${style}${loc ? `\nموقعیت: ${loc}` : ""}${mat ? `\nمتریال: ${mat}` : ""}

مفهوم
هدف، ساختن فضایی بود که عملکرد روزانه را پوشش دهد و همزمان حس تعلق بسازد. نور به‌عنوان متریال اصلی دیده شد، نه فقط منبع روشنایی.

چالش
ایجاد تعادل میان زیبایی بصری و زندگی واقعی کارفرما؛ محدودیت سایت و بودجه بدون افت کیفیت جزئیات.

راه‌حل
سلسله‌مراتب فضایی شفاف، بازشوهای کنترل‌شده، و انتخاب متریال بومی با دوام بالا. جزئیات لمسی در مقیاس دست طراحی شد.

نتیجه
فضایی که دیده می‌شود، اما بیشتر از آن تجربه می‌شود.${e}`;

    case "ideas":
      return `۱. از اسکچ تا رندر: پشت‌صحنهٔ ${project} با سبک ${style}
۲. پنج اصل ${style} که قبل از پلان باید معلوم باشد
۳. قبل و بعد بازسازی یک ${project}${place}
۴. اشتباه‌های رایج نورپردازی در ${project}
۵. متریال${mat ? ` ${mat}` : " طبیعی"} چگونه حس فضا را عوض می‌کند
۶. تور کوتاه از جزئیات اجرایی
۷. یک اتصال کوچک که کل پروژه را نجات داد
۸. پالت رنگی ${style} برای ${project}
۹. گفتگو با کارفرما: زندگی بعد از تحویل
۱۰. چک‌لیست بازدید کارگاه برای معمار جوان${e}`;

    case "prompt":
      return `نقش: نویسندهٔ ارشد محتوای معماری.
پروژه: ${project}
سبک: ${style}${loc ? `\nموقعیت: ${loc}` : ""}${mat ? `\nمتریال: ${mat}` : ""}
خروجی: کپشن اینستاگرام فارسی، ۱۲۰ تا ۱۸۰ کلمه، بدون ایموجی.
ساختار: جملهٔ آغاز قوی + دو نکتهٔ طراحی + دعوت به تعامل + ۸ تا ۱۲ هشتگ فارسی و انگلیسی.
لحن: حرفه‌ای، آرام، انسانی. از شعار فروش کلیشه‌ای پرهیز کن.${e}`;

    case "hashtags":
      return `فارسی
#معماری #معماری_ایرانی #طراحی_معماری #معمار #طراحی_داخلی #معماری_معاصر #معماری_پایدار #رندر_معماری #ویلا #طراحی_شهری #معماری_سبز #اسکچ_معماری

انگلیسی
#Architecture #ArchitecturalDesign #ModernArchitecture #InteriorDesign #VillaDesign #SustainableArchitecture #ArchDaily #Render #PersianArchitecture #MinimalArchitecture #BiophilicDesign #ArchitectureStudio${e}`;

    case "ad":
      return `به دنبال طراحی یک ${project}${place} هستید که بعد از مد شدن هم ارزشش بماند؟

ما با تمرکز روی ${style}${mats} پروژه‌هایی می‌سازیم که هویت دارند، با زندگی واقعی شما جور درمی‌آیند، و در زمان ارزش اضافه می‌کنند.

از جلسهٔ اول تا نظارت اجرا کنار شما هستیم. برای مشاوره بنویسید.${e}`;

    case "story":
      return `داستان ${project}${place}

درخواست ساده بود: فضایی که وقتی واردش می‌شوم نفس بکشم. سبک ${style} را انتخاب کردیم چون با خلق‌وخوی کارفرما جور بود، نه چون مد فصل بود.${mats ? ` متریال اصلی ${mat} بود.` : ""}

چالش، تعادل زیبایی و روزمرگی بود. بارها پلان برگشت، نور در ساعت چهار عصر مدل شد، و جزئیات دستگیره تا اتصال سقف بازنگری شد.

حالا فضا خانه است؛ بخشی از هویت ساکنین، نه فقط یک آدرس.${e}`;

    case "image": {
      const view = data.viewType || "exterior";
      return `پرامپت انگلیسی
Professional architectural photograph of a ${project} in ${style} style${loc ? `, located in ${loc}` : ""}${mat ? `, materials: ${mat}` : ""}, ${view} view, golden-hour light, honest materials, medium-format camera, cinematic composition, ultra-detailed, architectural-digest quality, 8k, sharp focus --ar 16:9

راهنما
این متن را در Grok Imagine، Flux یا Midjourney قرار دهید. برای نمای داخلی interior، برای شب night و برای جزئیات detail را جایگزین کنید.${e}`;
    }

    case "calendar": {
      const month = data.monthName || "ماه جاری";
      const kinds = [
        ["نمایش کار", "جزئیات نما"],
        ["آموزش", "نور طبیعی در پلان"],
        ["پشت‌صحنه", "از اسکچ تا مدل"],
        ["قبل و بعد", "بازسازی فضا"],
        ["نکته کوتاه", "ارتفاع دست‌انداز"],
        ["داستان", "گفتگو با کارفرما"],
        ["پرسش", "اولویت شما نور یا متریال؟"],
        ["متریال", mat || "سنگ، چوب، آجر"],
        ["الهام", loc ? `اقلیم ${loc}` : "الگوی حیاط ایرانی"],
        ["دعوت", "رزرو مشاوره"],
      ];
      const lines = kinds
        .map((pair, i) => {
          const day = i + 1;
          return `${day} | ${pair[0]} | ${pair[1]} در ${project} / ${style} | تعامل`;
        })
        .join("\n");
      return `تقویم محتوا — ${month}
تمرکز: ${project} | ${style}${place}

روز | نوع | موضوع | هدف
${lines}

نکات اجرا
- هفته‌ای دو نمایش کار و دو آموزش
- استوری روزانه از کارگاه یا اسکچ
- یک ریلز آموزشی در هفته
- آخر هفته محتوای آرام‌تر و الهام‌بخش
(برای ۳۰ روز همین الگو را تکرار و موضوع را عوض کنید.)${e}`;
    }

    case "pack":
      return [
        localContent({ ...data, type: "instagram" }),
        localContent({ ...data, type: "linkedin" }),
        localContent({ ...data, type: "portfolio" }),
        localContent({ ...data, type: "ideas" }),
        localContent({ ...data, type: "story" }),
        localContent({ ...data, type: "ad" }),
        localContent({ ...data, type: "hashtags" }),
        localContent({ ...data, type: "image" }),
      ]
        .map((block, i) => {
          const titles = [
            "کپشن اینستاگرام",
            "پست لینکدین",
            "توضیح پروژه",
            "ایده‌های محتوا",
            "داستان پروژه",
            "متن تبلیغاتی",
            "هشتگ‌ها",
            "پرامپت تصویر",
          ];
          return `## ${titles[i]}\n\n${block}`;
        })
        .join("\n\n---\n\n");

    default:
      return `محتوا برای ${project} با سبک ${style}.${e}`;
  }
}
