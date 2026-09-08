import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import {
  BookOpen,
  Compass,
  Flag,
  LayoutGrid,
  Map,
  Menu,
  ShieldAlert,
  SunMedium,
  Target,
  Users,
  Wallet,
  X,
} from "lucide-react";

const NAV = [
  { to: "/", label: "Command", icon: Compass },
  { to: "/map", label: "Priority map", icon: Map },
  { to: "/districts", label: "Districts", icon: LayoutGrid },
  { to: "/localities", label: "Localities", icon: Target },
  { to: "/segments", label: "Segments", icon: Users },
  { to: "/playbook", label: "Playbook", icon: Flag },
  { to: "/roi", label: "ROI & profit", icon: Wallet },
  { to: "/plan", label: "90-day plan", icon: SunMedium },
  { to: "/risks", label: "Risks", icon: ShieldAlert },
  { to: "/method", label: "Method & data", icon: BookOpen },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur-sm">
        <div className="flex items-center gap-3 px-4 py-3 md:px-6">
          <button
            className="md:hidden flex size-11 items-center justify-center rounded-md border border-line"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          <Link to="/" className="flex items-baseline gap-2 min-w-0">
            <span className="font-display text-lg tracking-tight">SOURA</span>
            <span className="text-fg-muted text-sm tracking-[0.18em] uppercase truncate">
              Command
            </span>
          </Link>
          <span className="ml-auto hidden sm:block text-[11px] uppercase tracking-[0.16em] text-fg-subtle">
            Kerala rooftop · 8 Sep 2026 snapshot
          </span>
        </div>
      </header>

      {open ? (
        <div className="md:hidden fixed inset-0 top-[57px] z-30 bg-bg">
          <nav className="p-4 grid gap-1">
            {NAV.map((item) => {
              const active = pathname === item.to;
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex h-12 items-center gap-3 rounded-md px-3 text-sm",
                    active ? "bg-bg-subtle text-fg" : "text-fg-muted",
                  )}
                >
                  <Icon className="size-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}

      <div className="md:grid md:grid-cols-[220px_minmax(0,1fr)] min-h-[calc(100vh-57px)]">
        <aside className="hidden md:block border-r border-line bg-bg-elev">
          <nav className="sticky top-[57px] p-3 grid gap-0.5">
            {NAV.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname === item.to || pathname.startsWith(item.to + "/");
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex h-10 items-center gap-3 rounded-sm px-3 text-[13px] transition-colors",
                    active
                      ? "bg-bg-subtle text-fg"
                      : "text-fg-muted hover:text-fg hover:bg-bg-hover",
                  )}
                >
                  <Icon className="size-4 shrink-0" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
