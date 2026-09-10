import { useEffect, useState } from "react";
import { Flame, Timer } from "lucide-react";

const DURATION = 30 * 60;

export function Urgency({ places = 2 }: { places?: number }) {
  const [left, setLeft] = useState(DURATION);

  useEffect(() => {
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");

  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-1.5 rounded-md border border-destructive/40 bg-destructive/10 px-2.5 py-1 text-[11px] font-semibold text-destructive">
        <Flame className="h-3.5 w-3.5" />
        Il ne reste que {places} places
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary-glow tabular-nums">
        <Timer className="h-3.5 w-3.5" />
        Offre expire dans {mm}:{ss}
      </span>
    </div>
  );
}

export function SecureBadge() {
  return (
    <p className="mt-4 flex items-center justify-center gap-1.5 rounded-md border border-border bg-secondary/50 px-3 py-2 text-[11px] text-muted-foreground">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-primary-glow" aria-hidden>
        <path d="M12 1 3 5v6c0 5.25 3.84 10.16 9 12 5.16-1.84 9-6.75 9-12V5l-9-4Zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8Z" />
      </svg>
      Paiement sécurisé par Mobile Money / Carte
    </p>
  );
}
