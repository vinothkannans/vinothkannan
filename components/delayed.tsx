"use client"

import { useEffect, useState } from "react";

export default function Delayed({ delay = 1000, children }: { delay: number, children: React.ReactNode }) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldRender(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return shouldRender ? children : null;
}