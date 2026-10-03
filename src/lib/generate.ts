import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { localContent } from "./templates";

const InputSchema = z.object({
  type: z.string(),
  style: z.string().min(1).max(80),
  project: z.string().min(1).max(80),
  notes: z.string().max(800).optional(),
  viewType: z.string().optional(),
  monthName: z.string().optional(),
  materials: z.string().max(160).optional(),
  location: z.string().max(120).optional(),
  photos: z.array(z.string().startsWith("data:image/")).max(3).optional(),
});

export type GenerateInput = z.infer<typeof InputSchema>;

function systemPrompt() {
  return `تو نویسنده ارشد محتوای استودیو معماری هستی. خروجی را فقط به فارسی معیار، دقیق، بدون ایموجی و بدون مقدمهٔ توضیحی بنویس.
لحن: حرفه‌ای، آرام، انسانی، بدون شعار فروش کلیشه‌ای.
اگر تصویر پروژه دیدی، جزئیات واقعی متریال، نور و فرم را در متن منعکس کن.
هرگز ننویس که هوش مصنوعی هستی.`;
}

function contextBlock(data: GenerateInput): string {
  const extra = [
    data.location?.trim() ? `موقعیت / اقلیم: ${data.location.trim()}` : "",
    data.materials?.trim() ? `متریال: ${data.materials.trim()}` : "",
    data.notes?.trim() ? `نکات کارفرما:\n${data.notes.trim()}` : "",
    data.photos?.length ? `تعداد عکس مرجع: ${data.photos.length}` : "",
  ]
    .filter(Boolean)
    .join("\n");
  return `سبک: ${data.style}\nنوع پروژه: ${data.project}${extra ? `\n${extra}` : ""}`;
}

function userPrompt(data: GenerateInput): string {
  const base = contextBlock(data);

  const map: Record<string, string> = {
    instagram: `${base}

یک کپشن اینستاگرام بنویس (۱۲۰ تا ۱۸۰ کلمه). ساختار:
- جملهٔ آغاز قوی
- ۲ تا ۳ نکتهٔ طراحی (اگر عکس هست از واقعیت عکس بگو)
- یک دعوت به تعامل در پایان
- در خط آخر ۸ تا ۱۲ هشتگ فارسی و انگلیسی مرتبط`,
    linkedin: `${base}

یک پست لینکدین تخصصی بنویس.
ساختار: مقدمه قوی + سه اصل طراحی شماره‌گذاری‌شده + نتیجه‌گیری + یک سوال تعاملی.
بدون هشتگ زیاد. حدود ۱۸۰ تا ۲۶۰ کلمه.`,
    portfolio: `${base}

توضیح حرفه‌ای پورتفولیو بنویس با این بخش‌ها:
عنوان پروژه، موقعیت، متریال، مفهوم طراحی، چالش‌ها، راه‌حل‌ها، نور، نتیجه.
لحن رسمی. حدود ۲۲۰ تا ۳۲۰ کلمه.`,
    ideas: `${base}

۱۰ ایدهٔ محتوایی شماره‌دار برای اینستاگرام / لینکدین / ریلز بنویس.
هر ایده یک خط عنوان + یک خط توضیح اجرا.`,
    prompt: `${base}

یک پرامپت آماده و کامل برای مدل زبانی بنویس که بتواند کپشن اینستاگرام معماری تولید کند.
پرامپت باید شامل نقش، سبک، موقعیت، متریال، محدودیت طول، لحن، ساختار و هشتگ باشد.
فقط خود پرامپت را بده.`,
    hashtags: `${base}

دو گروه هشتگ بده:
۱) فارسی (۱۲ مورد)
۲) انگلیسی (۱۲ مورد)
فقط هشتگ، بدون توضیح اضافه.`,
    ad: `${base}

متن کوتاه تبلیغ خدمات معماری (۸۰ تا ۱۴۰ کلمه) با:
یک سوال بازکننده، سه مزیت مشخص، دعوت به مشاوره.
بدون اغراق غیرواقعی.`,
    story: `${base}

داستان پروژه را از زاویهٔ معمار روایت کن: درخواست کارفرما، انتخاب سبک، چالش، جزئیات، نتیجهٔ انسانی.
حدود ۲۰۰ تا ۲۸۰ کلمه. بدون ایموجی.`,
    image: `${base}
نوع نما: ${data.viewType || "exterior"}

خروجی را در دو بخش بده:
۱) پرامپت انگلیسی بسیار دقیق برای تولید تصویر معماری (یک پاراگراف، شامل سبک، موقعیت، متریال، نور، لنز، ترکیب‌بندی)
۲) راهنمای کوتاه فارسی برای استفاده در Grok Imagine / Midjourney / Flux`,
    calendar: `${base}
ماه: ${data.monthName || "ماه جاری"}

تقویم محتوایی ۳۰ روزه بساز. برای هر روز:
روز | نوع محتوا | موضوع | هدف
انواع را متنوع کن: نمایش کار، آموزش، پشت‌صحنه، قبل/بعد، نکته کوتاه، داستان، پرسش، متریال، الهام، دعوت به اقدام.
در پایان ۴ نکتهٔ اجرایی بنویس.`,
    pack: `${base}

بسته کامل محتوا بساز با این عناوین دقیق و جداکننده:
## کپشن اینستاگرام
## پست لینکدین
## توضیح پروژه
## پنج ایده محتوا
## داستان پروژه
## متن تبلیغاتی
## هشتگ‌ها
## پرامپت تصویر (انگلیسی)
هر بخش کامل و قابل انتشار باشد.`,
  };

  return map[data.type] ?? `${base}\nمحتوای تخصصی معماری تولید کن. نوع: ${data.type}`;
}

const maxTokensFor = (type: string) => {
  if (type === "pack" || type === "calendar") return 2200;
  if (type === "portfolio" || type === "linkedin" || type === "story") return 900;
  return 700;
};

type ChatContent =
  | string
  | Array<{ type: "text"; text: string } | { type: "image_url"; image_url: { url: string } }>;

export const generateArchitectureContent = createServerFn({ method: "POST" })
  .validator((input: GenerateInput) => InputSchema.parse(input))
  .handler(async ({ data }): Promise<{ ok: true; text: string; source: "ai" | "studio" }> => {
    const apiKey = process.env.XAI_API_KEY;
    if (apiKey) {
      try {
        const prompt = userPrompt(data);
        const photos = data.photos?.slice(0, 3) ?? [];
        const content: ChatContent =
          photos.length > 0
            ? [
                { type: "text", text: prompt },
                ...photos.map((url) => ({
                  type: "image_url" as const,
                  image_url: { url },
                })),
              ]
            : prompt;

        const res = await fetch("https://api.x.ai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "grok-4.5",
            temperature: 0.7,
            max_tokens: maxTokensFor(data.type),
            messages: [
              { role: "system", content: systemPrompt() },
              { role: "user", content },
            ],
          }),
        });
        if (res.ok) {
          const body = (await res.json()) as {
            choices?: { message?: { content?: string } }[];
          };
          const text = body.choices?.[0]?.message?.content?.trim() ?? "";
          if (text) return { ok: true, text, source: "ai" };
        }
      } catch {
        // fall through to studio templates
      }
    }

    return {
      ok: true,
      text: localContent({
        ...data,
        photoCount: data.photos?.length ?? 0,
      }),
      source: "studio",
    };
  });
