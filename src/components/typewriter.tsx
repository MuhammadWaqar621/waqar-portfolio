"use client";

import { useEffect, useState } from "react";

export function Typewriter({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(phrases[0]);
      return;
    }

    const current = phrases[phraseIndex % phrases.length];

    if (paused) {
      const pauseTimeout = setTimeout(() => {
        setPaused(false);
        setDeleting(true);
      }, 1400);
      return () => clearTimeout(pauseTimeout);
    }

    const speed = deleting ? 35 : 65;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setPaused(true);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setPhraseIndex((i) => (i + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, deleting, paused, phraseIndex]);

  return (
    <span>
      {text}
      <span className="ml-0.5 inline-block w-[1px] animate-pulse bg-accent align-middle" style={{ height: "1em" }} />
    </span>
  );
}
