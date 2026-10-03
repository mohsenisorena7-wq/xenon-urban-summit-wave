const KEY = "atelier-archive-v1";

export type ArchiveItem = {
  id: string;
  type: string;
  typeTitle: string;
  style: string;
  project: string;
  text: string;
  createdAt: string;
};

export function loadArchive(): ArchiveItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as ArchiveItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveArchive(items: ArchiveItem[]) {
  localStorage.setItem(KEY, JSON.stringify(items.slice(0, 40)));
}

export function safeFilename(name: string) {
  return name.replace(/[^\u0600-\u06FF\w\-]+/g, "-").replace(/-+/g, "-");
}

export function formatItemFile(item: ArchiveItem) {
  const date = new Date(item.createdAt).toLocaleDateString("fa-IR");
  return `# ${item.typeTitle}

سبک: ${item.style}
پروژه: ${item.project}
تاریخ: ${date}

${item.text}
`;
}

export function formatArchiveFile(items: ArchiveItem[]) {
  const header = `# بسته محتوای آتلیه

تعداد: ${items.length}
تاریخ خروجی: ${new Date().toLocaleDateString("fa-IR")}

`;
  return (
    header +
    items
      .map((item, i) => `---\n\n## ${i + 1}. ${item.typeTitle}\n\n${formatItemFile(item).replace(/^# /, "")}`)
      .join("\n\n")
  );
}

export function downloadText(filename: string, text: string) {
  const blob = new Blob(["\uFEFF" + text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
