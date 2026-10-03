import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Copy,
  Download,
  FolderOpen,
  ImagePlus,
  Loader2,
  PenLine,
  Trash2,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTENT_TYPES, PROJECTS, STYLES, type ContentTypeId } from "@/lib/catalog";
import { generateArchitectureContent } from "@/lib/generate";
import {
  downloadText,
  formatArchiveFile,
  formatItemFile,
  loadArchive,
  saveArchive,
  safeFilename,
  type ArchiveItem,
} from "@/lib/archive";
import { filesToPhotos, remainingPhotoSlots, type ProjectPhoto } from "@/lib/photos";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/")({ component: Home });

const VIEW_TYPES = [
  { id: "exterior", label: "نمای خارجی" },
  { id: "interior", label: "نمای داخلی" },
  { id: "detail", label: "جزئیات" },
  { id: "aerial", label: "نمای هوایی" },
  { id: "night", label: "نمای شب" },
  { id: "moodboard", label: "مودبورد" },
] as const;

function Home() {
  const [style, setStyle] = useState<string>(STYLES[0]);
  const [project, setProject] = useState<string>(PROJECTS[0]);
  const [notes, setNotes] = useState("");
  const [location, setLocation] = useState("");
  const [materials, setMaterials] = useState("");
  const [photos, setPhotos] = useState<ProjectPhoto[]>([]);
  const [type, setType] = useState<ContentTypeId>("instagram");
  const [viewType, setViewType] = useState("exterior");
  const [monthName, setMonthName] = useState("مهر");
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [archive, setArchive] = useState<ArchiveItem[]>([]);
  const [tab, setTab] = useState<"studio" | "archive">("studio");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setArchive(loadArchive());
  }, []);

  const typeMeta = useMemo(
    () => CONTENT_TYPES.find((t) => t.id === type) ?? CONTENT_TYPES[0],
    [type],
  );

  async function onPickPhotos(list: FileList | null) {
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
      const result = await generateArchitectureContent({
        data: {
          type,
          style,
          project,
          notes,
          location,
          materials,
          photos: photos.map((p) => p.dataUrl),
          viewType: type === "image" ? viewType : undefined,
          monthName: type === "calendar" ? monthName : undefined,
        },
      });
      if (!result.ok) {
        setError("تولید محتوا انجام نشد. دوباره تلاش کنید.");
        return;
      }
      setText(result.text);
      const item: ArchiveItem = {
        id: crypto.randomUUID(),
        type,
        typeTitle: typeMeta.title,
        style,
        project,
        text: result.text,
        createdAt: new Date().toISOString(),
      };
      const next = [item, ...archive].slice(0, 40);
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
    void navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  function removeItem(id: string) {
    const next = archive.filter((i) => i.id !== id);
    setArchive(next);
    saveArchive(next);
  }

  const slots = remainingPhotoSlots(photos.length);

  return (
    <main className="min-h-dvh bg-bg text-fg">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-md bg-primary text-primary-foreground">
              <PenLine className="size-4" strokeWidth={1.75} />
            </span>
            <div>
              <p className="font-display text-lg font-medium leading-tight tracking-tight">
                آتلیه
              </p>
              <p className="text-xs text-muted">استودیو محتوای معماری</p>
            </div>
          </div>
          <nav className="flex rounded-lg bg-surface-2 p-1">
            <button
              type="button"
              onClick={() => setTab("studio")}
              className={cn(
                "h-9 rounded-md px-3 text-sm",
                tab === "studio" ? "bg-surface text-fg" : "text-muted",
              )}
            >
              استودیو
            </button>
            <button
              type="button"
              onClick={() => setTab("archive")}
              className={cn(
                "inline-flex h-9 items-center gap-1.5 rounded-md px-3 text-sm",
                tab === "archive" ? "bg-surface text-fg" : "text-muted",
              )}
            >
              <FolderOpen className="size-3.5" />
              بایگانی
              <span className="tabular-nums text-xs">({archive.length})</span>
            </button>
          </nav>
        </div>
      </header>

      {tab === "studio" ? (
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_300px]">
          <aside className="h-fit rounded-xl border border-border bg-surface p-4 lg:sticky lg:top-4 lg:order-2">
            <p className="text-xs font-medium text-muted">تنظیمات پروژه</p>
            <label className="mt-4 block text-sm">
              سبک معماری
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="mt-1.5 h-11 w-full rounded-md border border-border bg-bg px-3 text-sm"
              >
                {STYLES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="mt-4 block text-sm">
              نوع پروژه
              <select
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="mt-1.5 h-11 w-full rounded-md border border-border bg-bg px-3 text-sm"
              >
                {PROJECTS.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </label>
            <label className="mt-4 block text-sm">
              موقعیت / اقلیم
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                maxLength={120}
                placeholder="شمال تهران، شیراز، کوهپایه..."
                className="mt-1.5 h-11 w-full rounded-md border border-border bg-bg px-3 text-sm"
              />
            </label>
            <label className="mt-4 block text-sm">
              متریال اصلی
              <input
                value={materials}
                onChange={(e) => setMaterials(e.target.value)}
                maxLength={160}
                placeholder="آجر، بتن اکسپوز، چوب بلوط..."
                className="mt-1.5 h-11 w-full rounded-md border border-border bg-bg px-3 text-sm"
              />
            </label>
            {type === "image" ? (
              <label className="mt-4 block text-sm">
                نوع نما
                <select
                  value={viewType}
                  onChange={(e) => setViewType(e.target.value)}
                  className="mt-1.5 h-11 w-full rounded-md border border-border bg-bg px-3 text-sm"
                >
                  {VIEW_TYPES.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.label}
                    </option>
                  ))}
                </select>
              </label>
            ) : null}
            {type === "calendar" ? (
              <label className="mt-4 block text-sm">
                نام ماه
                <input
                  value={monthName}
                  onChange={(e) => setMonthName(e.target.value)}
                  className="mt-1.5 h-11 w-full rounded-md border border-border bg-bg px-3 text-sm"
                />
              </label>
            ) : null}
            <label className="mt-4 block text-sm">
              نکات پروژه (اختیاری)
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                maxLength={800}
                placeholder="نور شمال، کارفرمای خانوادگی..."
                className="mt-1.5 w-full resize-none rounded-md border border-border bg-bg px-3 py-2 text-sm leading-relaxed"
              />
            </label>

            <div className="mt-4">
              <p className="text-sm">عکس پروژه (تا ۳ تصویر)</p>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                multiple
                className="sr-only"
                onChange={(e) => void onPickPhotos(e.target.files)}
              />
              <div className="mt-1.5 grid grid-cols-3 gap-2">
                {photos.map((photo) => (
                  <div key={photo.id} className="relative overflow-hidden rounded-md border border-border">
                    <img
                      src={photo.dataUrl}
                      alt=""
                      className="aspect-square w-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute start-1 top-1 grid size-7 place-items-center rounded-md bg-fg/80 text-bg"
                      onClick={() => setPhotos((prev) => prev.filter((p) => p.id !== photo.id))}
                      aria-label="حذف تصویر"
                    >
                      <X className="size-3.5" />
                    </button>
                  </div>
                ))}
                {slots > 0 ? (
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    className="flex aspect-square flex-col items-center justify-center gap-1 rounded-md border border-dashed border-border bg-bg text-muted"
                  >
                    <ImagePlus className="size-4" />
                    <span className="text-xs">افزودن</span>
                  </button>
                ) : null}
              </div>
            </div>

            <Button className="mt-5 w-full" disabled={busy} onClick={() => void generate()}>
              {busy ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  در حال نوشتن
                </>
              ) : (
                "تولید محتوا"
              )}
            </Button>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              متن بر اساس سبک، موقعیت، متریال و عکس‌های پروژه نوشته می‌شود.
            </p>
          </aside>

          <section className="min-w-0 lg:order-1">
            <h1 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              محتوای حرفه‌ای برای دفتر معماری
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              نوع محتوا را انتخاب کنید؛ کپشن، پست تخصصی، پورتفولیو، تقویم ماهانه یا
              پرامپت تصویر آماده می‌شود.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
              {CONTENT_TYPES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setType(item.id)}
                  className={cn(
                    "rounded-lg border px-3 py-3 text-right transition-opacity duration-[var(--motion-quick)]",
                    type === item.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-surface text-fg hover:bg-surface-2",
                  )}
                >
                  <span className="block text-sm font-medium">{item.title}</span>
                  <span
                    className={cn(
                      "mt-1 block text-xs",
                      type === item.id ? "text-primary-foreground/80" : "text-muted",
                    )}
                  >
                    {item.hint}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-border bg-surface p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-sm font-medium">{typeMeta.title}</h2>
                  <p className="text-xs text-muted">
                    {style} · {project}
                    {location.trim() ? ` · ${location.trim()}` : ""}
                    {materials.trim() ? ` · ${materials.trim()}` : ""}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled={!text} onClick={copy}>
                    <Copy className="size-3.5" />
                    {copied ? "کپی شد" : "کپی"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={!text}
                    onClick={() =>
                      downloadText(
                        `${safeFilename(typeMeta.title)}.md`,
                        formatItemFile({
                          id: "current",
                          type,
                          typeTitle: typeMeta.title,
                          style,
                          project,
                          text,
                          createdAt: new Date().toISOString(),
                        }),
                      )
                    }
                  >
                    <Download className="size-3.5" />
                    دانلود
                  </Button>
                </div>
              </div>

              {error ? (
                <p className="mt-4 rounded-md border border-danger/30 bg-danger/8 px-3 py-2 text-sm text-danger">
                  {error}
                </p>
              ) : null}

              {busy && !text ? (
                <div className="mt-5 space-y-2">
                  <div className="h-3 w-4/5 animate-pulse rounded bg-surface-2" />
                  <div className="h-3 w-full animate-pulse rounded bg-surface-2" />
                  <div className="h-3 w-3/5 animate-pulse rounded bg-surface-2" />
                </div>
              ) : text ? (
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="mt-4 min-h-[320px] w-full resize-y rounded-lg border border-border bg-bg p-4 text-sm leading-7"
                />
              ) : (
                <p className="mt-8 text-sm text-muted">
                  هنوز محتوایی تولید نشده. تنظیمات را انتخاب کنید و دکمه تولید را بزنید.
                </p>
              )}
            </div>
          </section>
        </div>
      ) : (
        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
          <h1 className="font-display text-2xl font-medium">بایگانی محلی</h1>
          <p className="mt-1 text-sm text-muted">
            محتواها روی همین دستگاه ذخیره می‌شوند و به‌صورت فایل مارک‌داون قابل دریافت هستند.
          </p>
          {archive.length === 0 ? (
            <p className="mt-10 text-sm text-muted">هنوز موردی ذخیره نشده است.</p>
          ) : (
            <>
              <Button
                className="mt-5"
                variant="outline"
                onClick={() =>
                  downloadText(`بسته-محتوا-آتلیه.md`, formatArchiveFile(archive))
                }
              >
                <Download className="size-3.5" />
                دانلود همه ({archive.length} فایل در یک سند)
              </Button>
              <ul className="mt-6 space-y-3">
                {archive.map((item) => (
                  <li
                    key={item.id}
                    className="rounded-xl border border-border bg-surface p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium">{item.typeTitle}</p>
                        <p className="text-xs text-muted">
                          {item.style} · {item.project} ·{" "}
                          {new Date(item.createdAt).toLocaleDateString("fa-IR")}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setText(item.text);
                            setType(item.type as ContentTypeId);
                            setTab("studio");
                          }}
                        >
                          باز کردن
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            downloadText(
                              `${safeFilename(item.typeTitle)}.md`,
                              formatItemFile(item),
                            )
                          }
                        >
                          <Download className="size-3.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="size-3.5" />
                        </Button>
                      </div>
                    </div>
                    <p className="mt-3 line-clamp-3 text-sm text-muted">{item.text}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </main>
  );
}
