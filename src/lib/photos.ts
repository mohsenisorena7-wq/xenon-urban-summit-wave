export type ProjectPhoto = { id: string; dataUrl: string };

const MAX_PHOTOS = 3;
const MAX_EDGE = 480;

export function remainingPhotoSlots(count: number) {
  return Math.max(0, MAX_PHOTOS - count);
}

export async function filesToPhotos(files: FileList | File[], existing: number): Promise<ProjectPhoto[]> {
  const room = remainingPhotoSlots(existing);
  const picked = Array.from(files)
    .filter((f) => f.type.startsWith("image/"))
    .slice(0, room);

  const out: ProjectPhoto[] = [];
  for (const file of picked) {
    const dataUrl = await compressImage(file);
    out.push({ id: crypto.randomUUID(), dataUrl });
  }
  return out;
}

function compressImage(file: File): Promise<string> {
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
        reject(new Error("canvas"));
        return;
      }
      ctx.drawImage(img, 0, 0, w, h);
      resolve(canvas.toDataURL("image/jpeg", 0.62));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("image"));
    };
    img.src = url;
  });
}
