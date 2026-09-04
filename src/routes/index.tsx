import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Brain,
  Search,
  Ship,
  Store,
  Clapperboard,
  Facebook,
  Music2,
  Users,
  FileSpreadsheet,
  ListChecks,
  MessageCircle,
  Instagram,
  Video,
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  GraduationCap,
  TrendingUp,
  Plus,
  Minus,
  Trophy,
} from "lucide-react";

import { CountUp } from "@/components/CountUp";
import heroImg from "@/assets/hero.jpg";
import credibility from "@/assets/credibility.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khabrel — Coach Formateur en E-commerce | Khabrel Ecom Académie" },
      {
        name: "description",
        content:
          "Khabrel, coach formateur en e-commerce : 1M FCFA de CA par jour. Formation complète et coaching individuel pour lancer ton business e-commerce.",
      },
      { property: "og:title", content: "Khabrel — Coach Formateur en E-commerce" },
      {
        property: "og:description",
        content:
          "Formation et coaching e-commerce : produit gagnant, importation, Shopify, Facebook & TikTok Ads.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP = "http://wa.me/24177146624";
const TIKTOK = "https://www.tiktok.com/@khabrel_ecom";
const INSTAGRAM = "https://www.instagram.com/khabrel._.ecom";

const navLinks = [
  { label: "Méthode", href: "#methode" },
  { label: "Résultats", href: "#resultats" },
  { label: "Formation", href: "#formation" },
  { label: "Coaching", href: "#coaching" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "FAQ", href: "#faq" },
];

const stats = [
  { value: 2, suffix: " ans", label: "d'expérience", icon: Zap },
  { value: 1, suffix: "M+ FCFA", label: "de CA généré par jour", icon: TrendingUp },
  { value: 300, suffix: "+", label: "élèves accompagnés", icon: GraduationCap },
  { value: 200, suffix: "M+ FCFA", label: "déjà générés", icon: Trophy },
];

const formationProgram = [
  { icon: Brain, title: "Mindset de l'e-commerçant" },
  { icon: Search, title: "Comment trouver son produit gagnant" },
  { icon: Ship, title: "Maîtrise de l'importation (Chine 🇨🇳 - Dubaï)" },
  { icon: Store, title: "Boutique Shopify optimisée grâce à l'IA" },
  { icon: Clapperboard, title: "Création des créas publicitaires" },
  { icon: Facebook, title: "Publicité Facebook" },
  { icon: Music2, title: "Publicité TikTok" },
  { icon: Users, title: "Comment mettre en place une bonne équipe" },
];

const coachingProgram = [
  "Comment trouver un produit gagnant",
  "Comment créer une boutique Shopify très optimisée avec l'IA",
  "Stratégie TikTok Ads",
  "Stratégie Facebook Ads",
  "Maîtrise de l'importation en Chine 🇨🇳, Dubaï, Turquie 🇹🇷",
];

const faq = {
  formation: [
    {
      q: "C'est adapté aux débutants ?",
      a: "Oui. Que tu partes de zéro ou que tu aies déjà commencé, la formation s'adapte à ton niveau.",
    },
    {
      q: "Comment se déroule la formation ?",
      a: "Accès immédiat aux modules, à ton rythme, avec accès à vie et au groupe privé.",
    },
    { q: "Y a-t-il un accompagnement ?", a: "Oui, via le groupe privé." },
    { q: "Combien de temps dure l'accès ?", a: "À vie." },
  ],
  coaching: [
    {
      q: "C'est adapté aux débutants ?",
      a: "Oui, le coaching individuel s'adapte entièrement à ton niveau de départ.",
    },
    {
      q: "Comment se déroule le coaching ?",
      a: "Des sessions en face à face sur Google Meet, personnalisées selon tes besoins.",
    },
    {
      q: "Combien de temps dure le coaching ?",
      a: "À définir selon la formule choisie avec Khabrel.",
    },
  ],
};

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
        <Sparkles className="h-4 w-4 text-primary-foreground" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-sm font-bold tracking-tight">KHABREL</span>
        <span className="block text-[9px] tracking-[0.25em] text-muted-foreground">
          ECOM ACADÉMIE
        </span>
      </span>
    </a>
  );
}

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-center text-[11px] font-semibold tracking-[0.25em] text-primary-glow uppercase">
      {children}
    </p>
  );
}

function WhatsAppButton({ label }: { label: string }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-whatsapp/40 bg-whatsapp/10 text-whatsapp transition-colors hover:bg-whatsapp/20"
    >
      <MessageCircle className="h-4.5 w-4.5" fill="currentColor" strokeWidth={0} />
    </a>
  );
}

function CtaButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-gradient-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </a>
  );
}

function Index() {
  const [tab, setTab] = useState<"formation" | "coaching">("formation");
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div id="top" className="min-h-screen bg-background">
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
          <Logo />
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
          <CtaButton href="#formation" className="h-9 px-4 text-xs">
            Rejoindre <ArrowRight className="h-3.5 w-3.5" />
          </CtaButton>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden px-5 pt-14 pb-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-[140px]"
          />
          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-md border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-primary-glow uppercase">
                Khabrel — Coach Formateur en E-commerce
              </span>
              <h1 className="mt-6 font-display text-4xl leading-[1.08] font-extrabold sm:text-5xl">
                1 million FCFA de CA
                <br />
                par jour.
                <br />
                <span className="text-gradient-primary">Méthode reproductible.</span>
              </h1>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                Ce que j'applique au quotidien pour générer ce résultat, je te l'enseigne
                étape par étape.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <CtaButton href="#methode">
                  Découvre la méthode <ArrowRight className="h-4 w-4" />
                </CtaButton>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-secondary/60 px-5 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  Écris-moi sur WhatsApp
                  <MessageCircle className="h-4 w-4 text-whatsapp" />
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["K", "A", "M", "S"].map((c) => (
                    <span
                      key={c}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-accent text-[11px] font-semibold"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <p className="text-xs leading-snug text-muted-foreground">
                  Rejoins 300+ élèves accompagnés
                  <br />à travers l'Afrique.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-xl border border-border">
                <img
                  src={heroImg}
                  alt="Khabrel travaillant sur son business e-commerce"
                  width={1280}
                  height={960}
                  className="h-72 w-full object-cover sm:h-[24rem]"
                />
              </div>
              <div className="card-surface absolute -top-5 -left-4 w-40 p-3 backdrop-blur-sm sm:-left-8">
                <p className="text-[10px] text-muted-foreground">CA par jour</p>
                <p className="font-display text-lg font-bold">1M+ FCFA</p>
                <p className="text-[10px] text-primary-glow">Méthode reproductible</p>
              </div>
              <div className="card-surface absolute -right-3 bottom-16 w-36 p-3 backdrop-blur-sm sm:-right-6">
                <p className="text-[10px] text-muted-foreground">Élèves</p>
                <p className="font-display text-lg font-bold">300+</p>
                <p className="text-[10px] text-primary-glow">Accompagnés</p>
              </div>
              <div className="card-surface absolute -bottom-5 left-8 w-40 p-3 backdrop-blur-sm">
                <p className="text-[10px] text-muted-foreground">Généré par les élèves</p>
                <p className="font-display text-lg font-bold">200M+ FCFA</p>
              </div>
            </div>
          </div>
        </section>

        {/* BAND STATS */}
        <section className="px-5 pb-20">
          <div className="card-surface mx-auto grid w-full max-w-6xl grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
            {stats.map(({ icon: Icon, value, suffix, label }) => (
              <div key={label} className="p-6 text-center sm:p-8">
                <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary-glow">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <p className="mt-4 font-display text-xl font-bold sm:text-2xl">
                  <CountUp value={value} suffix={suffix} />
                </p>
                <p className="mt-1.5 text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted-foreground">
            Des résultats concrets, obtenus par des étudiants, des salariés et des
            entrepreneurs à travers l'Afrique.
          </p>
        </section>

        {/* ACCROCHE + CRÉDIBILITÉ */}
        <section id="methode" className="px-5 pb-20">
          <div className="mx-auto w-full max-w-6xl">
            <Eyebrow>La méthode</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-2xl leading-snug font-bold sm:text-4xl">
              Peu importe ton statut aujourd'hui, tu peux te lancer dans l'e-commerce et
              construire ton <span className="text-gradient-primary">indépendance financière</span>.
            </h2>

            <div className="card-surface mt-12 grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center rounded-md border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-primary-glow uppercase">
                  Bienvenue dans Khabrel Ecom Académie
                </span>
                <h3 className="mt-5 font-display text-xl font-bold sm:text-2xl">
                  Ce que j'enseigne, je le vis au quotidien
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  La formation complète pour construire ton business e-commerce, de zéro
                  jusqu'aux premiers résultats. Pas de théorie apprise dans un livre : ce que
                  je partage avec toi, c'est ce que j'applique moi-même chaque jour pour
                  générer du chiffre d'affaires en e-commerce.
                </p>
              </div>
              <div className="overflow-hidden rounded-lg border border-border">
                <img
                  src={credibility}
                  alt="Tableau de bord e-commerce affichant plusieurs millions FCFA de chiffre d'affaires"
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMME */}
        <section id="formation" className="px-5 pb-20">
          <div className="mx-auto w-full max-w-6xl">
            <Eyebrow>Le programme</Eyebrow>
            <h2 className="mt-4 text-center font-display text-2xl font-bold sm:text-4xl">
              Tout ce qu'il te faut pour <span className="text-gradient-primary">vendre</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
              Un système complet, de la recherche du produit gagnant jusqu'à la mise en place
              de ton équipe.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {formationProgram.map(({ icon: Icon, title }) => (
                <div key={title} className="card-surface flex gap-4 p-5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary-glow">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-semibold">{title}</p>
                </div>
              ))}
              {[
                { icon: FileSpreadsheet, title: "Bonus — Fichier de gestion de stock" },
                { icon: ListChecks, title: "Bonus — Liste de 100 produits gagnants" },
              ].map(({ icon: Icon, title }) => (
                <div key={title} className="card-surface flex gap-4 border-primary/30 p-5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/25 text-primary-glow">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-semibold">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OFFRE 1 — FORMATION */}
        <section className="px-5 pb-16">
          <div className="card-surface mx-auto grid w-full max-w-6xl gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center rounded-md border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-primary-glow uppercase">
                Offre 1 — Formation
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold">
                Formation — KHABREL ECOM ACADÉMIE
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Le système complet, à ton rythme, avec la communauté.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Accès à vie à tous les modules",
                  "Accès au groupe privé",
                  "2 bonus inclus (stock + 100 produits gagnants)",
                  "Rejoins 300+ élèves accompagnés",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-primary/30 bg-background/60 p-6">
              <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Accès à vie
              </p>
              <p className="mt-3 text-sm font-medium text-muted-foreground line-through">
                150.000 FCFA
              </p>
              <p className="font-display text-4xl font-extrabold text-gradient-primary">
                45.000 FCFA
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Paiement unique</p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#payment-formation"
                  className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-primary px-4 text-sm font-semibold text-primary-foreground glow transition-transform hover:-translate-y-0.5"
                >
                  Rejoindre la formation <ArrowRight className="h-4 w-4" />
                </a>
                <WhatsAppButton label="Poser une question sur la formation via WhatsApp" />
              </div>
            </div>

            <div className="flex gap-4">
              <ShieldCheck className="h-6 w-6 shrink-0 text-primary-glow" />
              <div>
                <p className="font-display text-sm font-bold text-primary-glow">
                  Accès à vie & groupe privé
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Tu gardes l'accès à tous les modules et aux mises à jour, et tu es
                  accompagné dans le groupe privé.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OFFRE 2 — COACHING */}
        <section id="coaching" className="px-5 pb-20">
          <div className="card-surface mx-auto grid w-full max-w-6xl gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center rounded-md border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-primary-glow uppercase">
                Offre 2 — Coaching individuel
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold">
                Coaching Individuel — KHABREL ECOM ACADÉMIE
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Un accompagnement en face à face sur Google Meet, où je te transmets les
                secrets de l'écosystème e-commerce.
              </p>
              <ul className="mt-6 space-y-3">
                {coachingProgram.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-primary/30 bg-background/60 p-6">
              <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Sessions individuelles
              </p>
              <p className="mt-3 text-sm font-medium text-muted-foreground line-through">
                250.000 FCFA
              </p>
              <p className="font-display text-4xl font-extrabold text-gradient-primary">
                85.000 FCFA
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Places limitées</p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#payment-coaching"
                  className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-primary px-4 text-sm font-semibold text-primary-foreground glow transition-transform hover:-translate-y-0.5"
                >
                  Rejoindre le coaching <ArrowRight className="h-4 w-4" />
                </a>
                <WhatsAppButton label="Poser une question sur le coaching via WhatsApp" />
              </div>
            </div>

            <div className="flex gap-4">
              <Video className="h-6 w-6 shrink-0 text-primary-glow" />
              <div>
                <p className="font-display text-sm font-bold text-primary-glow">
                  Face à face sur Google Meet
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Des sessions individuelles en visio, personnalisées selon ton niveau et tes
                  objectifs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TÉMOIGNAGES */}
        <section id="temoignages" className="px-5 pb-20">
          <div className="mx-auto w-full max-w-6xl">
            <Eyebrow>Résultats réels</Eyebrow>
            <h2 className="mt-4 text-center font-display text-2xl font-bold sm:text-4xl">
              Ils ont <span className="text-gradient-primary">franchi le cap</span>
            </h2>
            <div id="resultats" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <figure key={i} className="card-surface overflow-hidden">
                  <div className="flex aspect-4/5 items-center justify-center bg-background/60 text-xs text-muted-foreground">
                    Capture d'écran {i + 1}
                  </div>
                  <figcaption className="border-t border-border p-4 text-xs text-muted-foreground">
                    Légende du résultat {i + 1}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-5 pb-20">
          <div className="mx-auto w-full max-w-3xl">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 text-center font-display text-2xl font-bold sm:text-4xl">
              Tes questions, <span className="text-gradient-primary">mes réponses</span>
            </h2>
            <div className="mx-auto mt-8 flex w-fit gap-1 rounded-lg border border-border bg-secondary/50 p-1">
              {(["formation", "coaching"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setTab(t);
                    setOpen(null);
                  }}
                  className={`rounded-md px-5 py-2 text-sm font-semibold capitalize transition-colors ${
                    tab === t
                      ? "bg-gradient-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="mt-8 space-y-3">
              {faq[tab].map((item) => {
                const key = `${tab}-${item.q}`;
                const isOpen = open === key;
                return (
                  <div key={key} className="card-surface overflow-hidden">
                    <button
                      onClick={() => setOpen(isOpen ? null : key)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-semibold"
                    >
                      {item.q}
                      {isOpen ? (
                        <Minus className="h-4 w-4 shrink-0 text-primary-glow" />
                      ) : (
                        <Plus className="h-4 w-4 shrink-0 text-primary-glow" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-5 pb-20">
          <div className="card-surface mx-auto flex w-full max-w-5xl flex-col items-center gap-6 p-6 sm:p-8 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-xl font-bold sm:text-2xl">
                Ta place dans l'e-commerce commence maintenant
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Rejoins la formation ou le coaching, ou écris-moi sur WhatsApp si tu as des
                questions avant.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <CtaButton href="#payment-formation">Rejoindre la formation</CtaButton>
              <CtaButton href="#payment-coaching">Rejoindre le coaching</CtaButton>
              <WhatsAppButton label="Écrire à Khabrel sur WhatsApp" />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border px-5 py-12">
        <div className="mx-auto grid w-full max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-xs text-muted-foreground">
              Khabrel — Coach formateur en e-commerce
            </p>
            <div className="mt-4 flex items-center gap-2">
              {[
                { href: WHATSAPP, icon: MessageCircle, label: "WhatsApp" },
                { href: TIKTOK, icon: Music2, label: "TikTok" },
                { href: INSTAGRAM, icon: Instagram, label: "Instagram" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/60 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Programme",
              links: [
                { label: "La méthode", href: "#methode" },
                { label: "Formation", href: "#formation" },
                { label: "Coaching", href: "#coaching" },
              ],
            },
            {
              title: "Ressources",
              links: [
                { label: "Témoignages", href: "#temoignages" },
                { label: "FAQ", href: "#faq" },
              ],
            },
            {
              title: "Contact",
              links: [
                { label: "WhatsApp", href: WHATSAPP },
                { label: "TikTok", href: TIKTOK },
                { label: "Instagram", href: INSTAGRAM },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold tracking-wide uppercase">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 w-full max-w-6xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 Khabrel. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
