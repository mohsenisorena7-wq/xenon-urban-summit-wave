import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as string, i as object, t as array } from "../_libs/zod.mjs";
import { a as LoaderCircle, c as Download, i as PenLine, l as Copy, o as ImagePlus, r as Trash2, s as FolderOpen, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-m2CjjrwQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-opacity duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.98]",
			outline: "border border-border bg-surface text-fg hover:bg-surface-2",
			ghost: "text-muted hover:text-fg hover:bg-surface-2"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var STYLES = [
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
	"های‌تک"
];
var PROJECTS = [
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
	"فضای کار اشتراکی"
];
var CONTENT_TYPES = [
	{
		id: "instagram",
		title: "کپشن اینستاگرام",
		hint: "متن جذاب و تعاملی برای فید"
	},
	{
		id: "linkedin",
		title: "پست لینکدین",
		hint: "لحن تخصصی و حرفه‌ای"
	},
	{
		id: "portfolio",
		title: "توضیح پروژه",
		hint: "برای پورتفولیو و سایت"
	},
	{
		id: "ideas",
		title: "ایده‌های آموزشی",
		hint: "موضوع پست و ریلز"
	},
	{
		id: "prompt",
		title: "پرامپت هوش مصنوعی",
		hint: "آماده برای Grok و ChatGPT"
	},
	{
		id: "hashtags",
		title: "هشتگ تخصصی",
		hint: "فارسی و انگلیسی"
	},
	{
		id: "ad",
		title: "متن تبلیغاتی",
		hint: "جذب مشتری و مشاوره"
	},
	{
		id: "story",
		title: "داستان پروژه",
		hint: "روایت انسانی از طراحی"
	},
	{
		id: "image",
		title: "پرامپت تصویر",
		hint: "برای رندر و Imagine"
	},
	{
		id: "calendar",
		title: "تقویم ماهانه",
		hint: "برنامه ۳۰ روزه محتوا"
	},
	{
		id: "pack",
		title: "بسته کامل",
		hint: "چند نوع محتوا یکجا"
	}
];
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
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
var generateArchitectureContent = createServerFn({ method: "POST" }).validator((input) => InputSchema.parse(input)).handler(createSsrRpc("87791704e5b7b15b49eb9bcc3f043ee49700cc5cc126f5c32f9a30213b9f2a13"));
var KEY = "atelier-archive-v1";
function loadArchive() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function saveArchive(items) {
	localStorage.setItem(KEY, JSON.stringify(items.slice(0, 40)));
}
function safeFilename(name) {
	return name.replace(/[^\u0600-\u06FF\w\-]+/g, "-").replace(/-+/g, "-");
}
function formatItemFile(item) {
	const date = new Date(item.createdAt).toLocaleDateString("fa-IR");
	return `# ${item.typeTitle}

سبک: ${item.style}
پروژه: ${item.project}
تاریخ: ${date}

${item.text}
`;
}
function formatArchiveFile(items) {
	return `# بسته محتوای آتلیه

تعداد: ${items.length}
تاریخ خروجی: ${(/* @__PURE__ */ new Date()).toLocaleDateString("fa-IR")}

` + items.map((item, i) => `---\n\n## ${i + 1}. ${item.typeTitle}\n\n${formatItemFile(item).replace(/^# /, "")}`).join("\n\n");
}
function downloadText(filename, text) {
	const blob = new Blob(["﻿" + text], { type: "text/plain;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}
var MAX_PHOTOS = 3;
var MAX_EDGE = 720;
function remainingPhotoSlots(count) {
	return Math.max(0, MAX_PHOTOS - count);
}
async function filesToPhotos(files, existing) {
	const room = remainingPhotoSlots(existing);
	const picked = Array.from(files).filter((f) => f.type.startsWith("image/")).slice(0, room);
	const out = [];
	for (const file of picked) {
		const dataUrl = await compressImage(file);
		out.push({
			id: crypto.randomUUID(),
			dataUrl
		});
	}
	return out;
}
function compressImage(file) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		const url = URL.createObjectURL(file);
		img.onload = () => {
			URL.revokeObjectURL(url);
			const scale = Math.min(1, MAX_EDGE / Math.max(img.width, img.height));
			const w = Math.max(1, Math.round(img.width * scale));
			const h = Math.max(1, Math.round(img.height * scale));
			const canvas = document.createElement("canvas");
			canvas.width = w;
			canvas.height = h;
			const ctx = canvas.getContext("2d");
			if (!ctx) {
				reject(/* @__PURE__ */ new Error("canvas"));
				return;
			}
			ctx.drawImage(img, 0, 0, w, h);
			resolve(canvas.toDataURL("image/jpeg", .72));
		};
		img.onerror = () => {
			URL.revokeObjectURL(url);
			reject(/* @__PURE__ */ new Error("image"));
		};
		img.src = url;
	});
}
var VIEW_TYPES = [
	{
		id: "exterior",
		label: "نمای خارجی"
	},
	{
		id: "interior",
		label: "نمای داخلی"
	},
	{
		id: "detail",
		label: "جزئیات"
	},
	{
		id: "aerial",
		label: "نمای هوایی"
	},
	{
		id: "night",
		label: "نمای شب"
	},
	{
		id: "moodboard",
		label: "مودبورد"
	}
];
function Home() {
	const [style, setStyle] = (0, import_react.useState)(STYLES[0]);
	const [project, setProject] = (0, import_react.useState)(PROJECTS[0]);
	const [notes, setNotes] = (0, import_react.useState)("");
	const [location, setLocation] = (0, import_react.useState)("");
	const [materials, setMaterials] = (0, import_react.useState)("");
	const [photos, setPhotos] = (0, import_react.useState)([]);
	const [type, setType] = (0, import_react.useState)("instagram");
	const [viewType, setViewType] = (0, import_react.useState)("exterior");
	const [monthName, setMonthName] = (0, import_react.useState)("مهر");
	const [text, setText] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [archive, setArchive] = (0, import_react.useState)([]);
	const [tab, setTab] = (0, import_react.useState)("studio");
	const fileRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setArchive(loadArchive());
	}, []);
	const typeMeta = (0, import_react.useMemo)(() => CONTENT_TYPES.find((t) => t.id === type) ?? CONTENT_TYPES[0], [type]);
	async function onPickPhotos(list) {
		if (!list?.length) return;
		try {
			const next = await filesToPhotos(list, photos.length);
			setPhotos((prev) => [...prev, ...next].slice(0, 3));
		} catch {
			setError("یکی از تصویرها خوانده نشد. فایل دیگری انتخاب کنید.");
		}
		if (fileRef.current) fileRef.current.value = "";
	}
	async function generate() {
		setBusy(true);
		setError("");
		setCopied(false);
		try {
			const result = await generateArchitectureContent({ data: {
				type,
				style,
				project,
				notes,
				location,
				materials,
				photos: photos.map((p) => p.dataUrl),
				viewType: type === "image" ? viewType : void 0,
				monthName: type === "calendar" ? monthName : void 0
			} });
			if (!result.ok) {
				setError("تولید محتوا انجام نشد. دوباره تلاش کنید.");
				return;
			}
			setText(result.text);
			const next = [{
				id: crypto.randomUUID(),
				type,
				typeTitle: typeMeta.title,
				style,
				project,
				text: result.text,
				createdAt: (/* @__PURE__ */ new Date()).toISOString()
			}, ...archive].slice(0, 40);
			setArchive(next);
			saveArchive(next);
		} catch {
			setError("ارتباط برقرار نشد. دوباره تلاش کنید.");
		} finally {
			setBusy(false);
		}
	}
	function copy() {
		if (!text) return;
		navigator.clipboard.writeText(text);
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1600);
	}
	function removeItem(id) {
		const next = archive.filter((i) => i.id !== id);
		setArchive(next);
		saveArchive(next);
	}
	const slots = remainingPhotoSlots(photos.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-9 place-items-center rounded-md bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, {
							className: "size-4",
							strokeWidth: 1.75
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg font-medium leading-tight tracking-tight",
						children: "آتلیه"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "استودیو محتوای معماری"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex rounded-lg bg-surface-2 p-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setTab("studio"),
						className: cn("h-9 rounded-md px-3 text-sm", tab === "studio" ? "bg-surface text-fg" : "text-muted"),
						children: "استودیو"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setTab("archive"),
						className: cn("inline-flex h-9 items-center gap-1.5 rounded-md px-3 text-sm", tab === "archive" ? "bg-surface text-fg" : "text-muted"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-3.5" }),
							"بایگانی",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums text-xs",
								children: [
									"(",
									archive.length,
									")"
								]
							})
						]
					})]
				})]
			})
		}), tab === "studio" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_300px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit rounded-xl border border-border bg-surface p-4 lg:sticky lg:top-4 lg:order-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium text-muted",
						children: "تنظیمات پروژه"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 block text-sm",
						children: ["سبک معماری", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: style,
							onChange: (e) => setStyle(e.target.value),
							className: "mt-1.5 h-11 w-full rounded-md border border-border bg-bg px-3 text-sm",
							children: STYLES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 block text-sm",
						children: ["نوع پروژه", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: project,
							onChange: (e) => setProject(e.target.value),
							className: "mt-1.5 h-11 w-full rounded-md border border-border bg-bg px-3 text-sm",
							children: PROJECTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: p }, p))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 block text-sm",
						children: ["موقعیت / اقلیم", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: location,
							onChange: (e) => setLocation(e.target.value),
							maxLength: 120,
							placeholder: "شمال تهران، شیراز، کوهپایه...",
							className: "mt-1.5 h-11 w-full rounded-md border border-border bg-bg px-3 text-sm"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 block text-sm",
						children: ["متریال اصلی", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: materials,
							onChange: (e) => setMaterials(e.target.value),
							maxLength: 160,
							placeholder: "آجر، بتن اکسپوز، چوب بلوط...",
							className: "mt-1.5 h-11 w-full rounded-md border border-border bg-bg px-3 text-sm"
						})]
					}),
					type === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 block text-sm",
						children: ["نوع نما", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: viewType,
							onChange: (e) => setViewType(e.target.value),
							className: "mt-1.5 h-11 w-full rounded-md border border-border bg-bg px-3 text-sm",
							children: VIEW_TYPES.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: v.id,
								children: v.label
							}, v.id))
						})]
					}) : null,
					type === "calendar" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 block text-sm",
						children: ["نام ماه", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: monthName,
							onChange: (e) => setMonthName(e.target.value),
							className: "mt-1.5 h-11 w-full rounded-md border border-border bg-bg px-3 text-sm"
						})]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 block text-sm",
						children: ["نکات پروژه (اختیاری)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: notes,
							onChange: (e) => setNotes(e.target.value),
							rows: 3,
							maxLength: 800,
							placeholder: "نور شمال، کارفرمای خانوادگی...",
							className: "mt-1.5 w-full resize-none rounded-md border border-border bg-bg px-3 py-2 text-sm leading-relaxed"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: "عکس پروژه (تا ۳ تصویر)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: fileRef,
								type: "file",
								accept: "image/*",
								multiple: true,
								className: "sr-only",
								onChange: (e) => void onPickPhotos(e.target.files)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1.5 grid grid-cols-3 gap-2",
								children: [photos.map((photo) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative overflow-hidden rounded-md border border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: photo.dataUrl,
										alt: "",
										className: "aspect-square w-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "absolute start-1 top-1 grid size-7 place-items-center rounded-md bg-fg/80 text-bg",
										onClick: () => setPhotos((prev) => prev.filter((p) => p.id !== photo.id)),
										"aria-label": "حذف تصویر",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
									})]
								}, photo.id)), slots > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => fileRef.current?.click(),
									className: "flex aspect-square flex-col items-center justify-center gap-1 rounded-md border border-dashed border-border bg-bg text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs",
										children: "افزودن"
									})]
								}) : null]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-5 w-full",
						disabled: busy,
						onClick: () => void generate(),
						children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), "در حال نوشتن"] }) : "تولید محتوا"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs leading-relaxed text-muted",
						children: "متن بر اساس سبک، موقعیت، متریال و عکس‌های پروژه نوشته می‌شود."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "min-w-0 lg:order-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl font-medium tracking-tight sm:text-3xl",
						children: "محتوای حرفه‌ای برای دفتر معماری"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm text-muted",
						children: "نوع محتوا را انتخاب کنید؛ کپشن، پست تخصصی، پورتفولیو، تقویم ماهانه یا پرامپت تصویر آماده می‌شود."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4",
						children: CONTENT_TYPES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setType(item.id),
							className: cn("rounded-lg border px-3 py-3 text-right transition-opacity duration-[var(--motion-quick)]", type === item.id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-surface text-fg hover:bg-surface-2"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("mt-1 block text-xs", type === item.id ? "text-primary-foreground/80" : "text-muted"),
								children: item.hint
							})]
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-xl border border-border bg-surface p-4 sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-sm font-medium",
									children: typeMeta.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted",
									children: [
										style,
										" · ",
										project,
										location.trim() ? ` · ${location.trim()}` : "",
										materials.trim() ? ` · ${materials.trim()}` : ""
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										size: "sm",
										disabled: !text,
										onClick: copy,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), copied ? "کپی شد" : "کپی"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										size: "sm",
										disabled: !text,
										onClick: () => downloadText(`${safeFilename(typeMeta.title)}.md`, formatItemFile({
											id: "current",
											type,
											typeTitle: typeMeta.title,
											style,
											project,
											text,
											createdAt: (/* @__PURE__ */ new Date()).toISOString()
										})),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), "دانلود"]
									})]
								})]
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 rounded-md border border-danger/30 bg-danger/8 px-3 py-2 text-sm text-danger",
								children: error
							}) : null,
							busy && !text ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-4/5 animate-pulse rounded bg-surface-2" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-full animate-pulse rounded bg-surface-2" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-3/5 animate-pulse rounded bg-surface-2" })
								]
							}) : text ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: text,
								onChange: (e) => setText(e.target.value),
								className: "mt-4 min-h-[320px] w-full resize-y rounded-lg border border-border bg-bg p-4 text-sm leading-7"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-sm text-muted",
								children: "هنوز محتوایی تولید نشده. تنظیمات را انتخاب کنید و دکمه تولید را بزنید."
							})
						]
					})
				]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 py-6 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-medium",
					children: "بایگانی محلی"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "محتواها روی همین دستگاه ذخیره می‌شوند و به‌صورت فایل مارک‌داون قابل دریافت هستند."
				}),
				archive.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-sm text-muted",
					children: "هنوز موردی ذخیره نشده است."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "mt-5",
					variant: "outline",
					onClick: () => downloadText(`بسته-محتوا-آتلیه.md`, formatArchiveFile(archive)),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }),
						"دانلود همه (",
						archive.length,
						" فایل در یک سند)"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-3",
					children: archive.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-border bg-surface p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: item.typeTitle
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									item.style,
									" · ",
									item.project,
									" ·",
									" ",
									new Date(item.createdAt).toLocaleDateString("fa-IR")
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "sm",
										onClick: () => {
											setText(item.text);
											setType(item.type);
											setTab("studio");
										},
										children: "باز کردن"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "sm",
										onClick: () => downloadText(`${safeFilename(item.typeTitle)}.md`, formatItemFile(item)),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "sm",
										onClick: () => removeItem(item.id),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 line-clamp-3 text-sm text-muted",
							children: item.text
						})]
					}, item.id))
				})] })
			]
		})]
	});
}
//#endregion
export { Home as component };
