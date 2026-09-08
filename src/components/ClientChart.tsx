import { useEffect, useState, type ReactNode } from "react";

export function ClientChart({
  children,
  height = 280,
}: {
  children: ReactNode;
  height?: number;
}) {
  const [on, setOn] = useState(false);
  useEffect(() => setOn(true), []);
  if (!on) {
    return (
      <div
        className="rounded-md bg-bg-subtle animate-pulse"
        style={{ height }}
        aria-hidden
      />
    );
  }
  return <div style={{ height }}>{children}</div>;
}
