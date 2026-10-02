import { useEffect } from "react";

export default function useImagePreload(questions) {
  useEffect(() => {
    if (!questions) return;
    questions.forEach(({ id }) => {
      const img = new Image();
      img.src = `/monsters/big/${id}.webp`;
      img.decode().catch(() => {});

      const smallImg = new Image();
      smallImg.src = `/monsters/small/${id}.webp`;
      smallImg.decode().catch(() => {});
    });
    const frameImg = new Image();
    frameImg.src = "ui/frame_monster.webp";
    frameImg.decode().catch(() => {});
  }, [questions]);
}
