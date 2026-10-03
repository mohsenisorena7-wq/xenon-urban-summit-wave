import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { a as string, i as object, t as array } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/generate-DxQPe9zX.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function extra(data) {
	const bits = [];
	if (data.location?.trim()) bits.push(`موقعیت: ${data.location.trim()}`);
	if (data.materials?.trim()) bits.push(`متریال: ${data.materials.trim()}`);
	if (data.notes?.trim()) bits.push(`یادداشت: ${data.notes.trim()}`);
	if (data.photoCount && data.photoCount > 0) bits.push(`مرجع تصویری: ${data.photoCount} عکس پروژه`);
	return bits.length ? `\n\n${bits.join("\n")}` : "";
}
function localContent(data) {
	const { style, project, type } = data;
	const e = extra(data);
	const loc = data.location?.trim();
	const mat = data.materials?.trim();
	const place = loc ? ` در ${loc}` : "";
	const mats = mat ? ` با متریال ${mat}` : "";
	switch (type) {
		case "instagram": return `وقتی یک ${project}${place} فقط دیده نمی‌شود، بلکه زندگی در آن جریان پیدا می‌کند.

در این پروژه با رویکرد ${style}${mats} روی چهار چیز ایستادیم: نور طبیعی، ارتباط داخل و بیرون، متریال صادق، و مقیاس انسانی. هدف، فضایی است که بعد از چند سال هنوز تازه بماند.

کدام جزئیات برای شما در طراحی خانه مهم‌تر است: نور، متریال، یا سلسله‌مراتب فضا؟

#معماری #طراحی_معماری #معماری_ایرانی #${style.replace(/\s+/g, "_")} #Architecture #InteriorDesign${e}`;
		case "linkedin": return `طراحی یک ${project}${place} دیگر فقط مسئلهٔ فرم نیست؛ مسئلهٔ تجربه است.

در پروژه‌ای با رویکرد ${style}${mats} سه اصل را جلو گذاشتیم:

۱. پایداری واقعی، نه تزئین سبز
۲. احترام به هویت و اقلیم محل
۳. رابطهٔ روشن بین کاربر و فضا

معماری خوب فضایی می‌سازد که آدم‌ها در آن ساکن نمی‌شوند؛ به آن تعلق پیدا می‌کنند.

شما در پروژه‌هایتان کدام اصل را اول می‌گذارید؟${e}`;
		case "portfolio": return `عنوان پروژه: ${project}
سبک: ${style}${loc ? `\nموقعیت: ${loc}` : ""}${mat ? `\nمتریال: ${mat}` : ""}

مفهوم
هدف، ساختن فضایی بود که عملکرد روزانه را پوشش دهد و همزمان حس تعلق بسازد. نور به‌عنوان متریال اصلی دیده شد، نه فقط منبع روشنایی.

چالش
ایجاد تعادل میان زیبایی بصری و زندگی واقعی کارفرما؛ محدودیت سایت و بودجه بدون افت کیفیت جزئیات.

راه‌حل
سلسله‌مراتب فضایی شفاف، بازشوهای کنترل‌شده، و انتخاب متریال بومی با دوام بالا. جزئیات لمسی در مقیاس دست طراحی شد.

نتیجه
فضایی که دیده می‌شود، اما بیشتر از آن تجربه می‌شود.${e}`;
		case "ideas": return `۱. از اسکچ تا رندر: پشت‌صحنهٔ ${project} با سبک ${style}
۲. پنج اصل ${style} که قبل از پلان باید معلوم باشد
۳. قبل و بعد بازسازی یک ${project}${place}
۴. اشتباه‌های رایج نورپردازی در ${project}
۵. متریال${mat ? ` ${mat}` : " طبیعی"} چگونه حس فضا را عوض می‌کند
۶. تور کوتاه از جزئیات اجرایی
۷. یک اتصال کوچک که کل پروژه را نجات داد
۸. پالت رنگی ${style} برای ${project}
۹. گفتگو با کارفرما: زندگی بعد از تحویل
۱۰. چک‌لیست بازدید کارگاه برای معمار جوان${e}`;
		case "prompt": return `نقش: نویسندهٔ ارشد محتوای معماری.
پروژه: ${project}
سبک: ${style}${loc ? `\nموقعیت: ${loc}` : ""}${mat ? `\nمتریال: ${mat}` : ""}
خروجی: کپشن اینستاگرام فارسی، ۱۲۰ تا ۱۸۰ کلمه، بدون ایموجی.
ساختار: جملهٔ آغاز قوی + دو نکتهٔ طراحی + دعوت به تعامل + ۸ تا ۱۲ هشتگ فارسی و انگلیسی.
لحن: حرفه‌ای، آرام، انسانی. از شعار فروش کلیشه‌ای پرهیز کن.${e}`;
		case "hashtags": return `فارسی
#معماری #معماری_ایرانی #طراحی_معماری #معمار #طراحی_داخلی #معماری_معاصر #معماری_پایدار #رندر_معماری #ویلا #طراحی_شهری #معماری_سبز #اسکچ_معماری

انگلیسی
#Architecture #ArchitecturalDesign #ModernArchitecture #InteriorDesign #VillaDesign #SustainableArchitecture #ArchDaily #Render #PersianArchitecture #MinimalArchitecture #BiophilicDesign #ArchitectureStudio${e}`;
		case "ad": return `به دنبال طراحی یک ${project}${place} هستید که بعد از مد شدن هم ارزشش بماند؟

ما با تمرکز روی ${style}${mats} پروژه‌هایی می‌سازیم که هویت دارند، با زندگی واقعی شما جور درمی‌آیند، و در زمان ارزش اضافه می‌کنند.

از جلسهٔ اول تا نظارت اجرا کنار شما هستیم. برای مشاوره بنویسید.${e}`;
		case "story": return `داستان ${project}${place}

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
		case "calendar": return `تقویم محتوا — ${data.monthName || "ماه جاری"}
تمرکز: ${project} | ${style}${place}

روز | نوع | موضوع | هدف
${[
			["نمایش کار", "جزئیات نما"],
			["آموزش", "نور طبیعی در پلان"],
			["پشت‌صحنه", "از اسکچ تا مدل"],
			["قبل و بعد", "بازسازی فضا"],
			["نکته کوتاه", "ارتفاع دست‌انداز"],
			["داستان", "گفتگو با کارفرما"],
			["پرسش", "اولویت شما نور یا متریال؟"],
			["متریال", mat || "سنگ، چوب، آجر"],
			["الهام", loc ? `اقلیم ${loc}` : "الگوی حیاط ایرانی"],
			["دعوت", "رزرو مشاوره"]
		].map((pair, i) => {
			return `${i + 1} | ${pair[0]} | ${pair[1]} در ${project} / ${style} | تعامل`;
		}).join("\n")}

نکات اجرا
- هفته‌ای دو نمایش کار و دو آموزش
- استوری روزانه از کارگاه یا اسکچ
- یک ریلز آموزشی در هفته
- آخر هفته محتوای آرام‌تر و الهام‌بخش
(برای ۳۰ روز همین الگو را تکرار و موضوع را عوض کنید.)${e}`;
		case "pack": return [
			localContent({
				...data,
				type: "instagram"
			}),
			localContent({
				...data,
				type: "linkedin"
			}),
			localContent({
				...data,
				type: "portfolio"
			}),
			localContent({
				...data,
				type: "ideas"
			}),
			localContent({
				...data,
				type: "story"
			}),
			localContent({
				...data,
				type: "ad"
			}),
			localContent({
				...data,
				type: "hashtags"
			}),
			localContent({
				...data,
				type: "image"
			})
		].map((block, i) => {
			return `## ${[
				"کپشن اینستاگرام",
				"پست لینکدین",
				"توضیح پروژه",
				"ایده‌های محتوا",
				"داستان پروژه",
				"متن تبلیغاتی",
				"هشتگ‌ها",
				"پرامپت تصویر"
			][i]}\n\n${block}`;
		}).join("\n\n---\n\n");
		default: return `محتوا برای ${project} با سبک ${style}.${e}`;
	}
}
var InputSchema = object({
	type: string(),
	style: string().min(1).max(80),
	project: string().min(1).max(80),
	notes: string().max(800).optional(),
	viewType: string().optional(),
	monthName: string().optional(),
	materials: string().max(160).optional(),
	location: string().max(120).optional(),
	photos: array(string().startsWith("data:image/")).max(3).optional()
});
function systemPrompt() {
	return `تو نویسنده ارشد محتوای استودیو معماری هستی. خروجی را فقط به فارسی معیار، دقیق، بدون ایموجی و بدون مقدمهٔ توضیحی بنویس.
لحن: حرفه‌ای، آرام، انسانی، بدون شعار فروش کلیشه‌ای.
اگر تصویر پروژه دیدی، جزئیات واقعی متریال، نور و فرم را در متن منعکس کن.
هرگز ننویس که هوش مصنوعی هستی.`;
}
function contextBlock(data) {
	const extra = [
		data.location?.trim() ? `موقعیت / اقلیم: ${data.location.trim()}` : "",
		data.materials?.trim() ? `متریال: ${data.materials.trim()}` : "",
		data.notes?.trim() ? `نکات کارفرما:\n${data.notes.trim()}` : "",
		data.photos?.length ? `تعداد عکس مرجع: ${data.photos.length}` : ""
	].filter(Boolean).join("\n");
	return `سبک: ${data.style}\nنوع پروژه: ${data.project}${extra ? `\n${extra}` : ""}`;
}
function userPrompt(data) {
	const base = contextBlock(data);
	return {
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
هر بخش کامل و قابل انتشار باشد.`
	}[data.type] ?? `${base}\nمحتوای تخصصی معماری تولید کن. نوع: ${data.type}`;
}
var maxTokensFor = (type) => {
	if (type === "pack" || type === "calendar") return 2200;
	if (type === "portfolio" || type === "linkedin" || type === "story") return 900;
	return 700;
};
var generateArchitectureContent_createServerFn_handler = createServerRpc({
	id: "87791704e5b7b15b49eb9bcc3f043ee49700cc5cc126f5c32f9a30213b9f2a13",
	name: "generateArchitectureContent",
	filename: "src/lib/generate.ts"
}, (opts) => generateArchitectureContent.__executeServer(opts));
var generateArchitectureContent = createServerFn({ method: "POST" }).validator((input) => InputSchema.parse(input)).handler(generateArchitectureContent_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (apiKey) try {
		const prompt = userPrompt(data);
		const photos = data.photos?.slice(0, 3) ?? [];
		const content = photos.length > 0 ? [{
			type: "text",
			text: prompt
		}, ...photos.map((url) => ({
			type: "image_url",
			image_url: { url }
		}))] : prompt;
		const res = await fetch("https://api.x.ai/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				model: "grok-4.5",
				temperature: .7,
				max_tokens: maxTokensFor(data.type),
				messages: [{
					role: "system",
					content: systemPrompt()
				}, {
					role: "user",
					content
				}]
			})
		});
		if (res.ok) {
			const text = (await res.json()).choices?.[0]?.message?.content?.trim() ?? "";
			if (text) return {
				ok: true,
				text,
				source: "ai"
			};
		}
	} catch {}
	return {
		ok: true,
		text: localContent({
			...data,
			photoCount: data.photos?.length ?? 0
		}),
		source: "studio"
	};
});
//#endregion
export { generateArchitectureContent_createServerFn_handler };
