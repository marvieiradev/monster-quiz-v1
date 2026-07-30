import { useEffect } from "react";

export default function useImagePreload(questions) {
  useEffect(() => {
    if (!questions) return;

    questions.forEach(({ id }) => {
      const img = new Image();

      img.src = `/monsters/big/${id}.webp`;

      img.decode().catch(() => {});
    });
  }, [questions]);
}
