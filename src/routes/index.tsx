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
  Infinity as InfinityIcon,
  MessageCircle,
  Instagram,
  Video,
  Check,
  ArrowDown,
  Sparkles,
  Plus,
  Minus,
} from "lucide-react";

import { CountUp } from "@/components/CountUp";
import portrait from "@/assets/portrait-placeholder.jpg";
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

function WhatsAppButton({ label }: { label: string }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-whatsapp/40 bg-whatsapp/10 text-whatsapp transition-colors hover:bg-whatsapp/20"
    >
      <MessageCircle className="h-5 w-5" fill="currentColor" strokeWidth={0} />
    </a>
  );
}

function PrimaryButton({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="inline-flex h-12 flex-1 items-center justify-center rounded-lg bg-gradient-primary px-6 text-sm font-semibold text-primary-foreground glow transition-transform hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

const stats = [
  { value: 2, suffix: " ans", label: "d'expérience" },
  { value: 1, suffix: "M+ FCFA", label: "de CA généré par jour" },
  { value: 300, suffix: "+", label: "élèves accompagnés" },
  { value: 200, suffix: "M+ FCFA", label: "déjà générés" },
];

const formationProgram = [
  { icon: Brain, text: "Mindset de l'e-commerçant" },
  { icon: Search, text: "Comment trouver son produit gagnant" },
  { icon: Ship, text: "Maîtrise de l'importation (Chine 🇨🇳 - Dubaï)" },
  { icon: Store, text: "Création de la boutique Shopify optimisée grâce à l'IA" },
  { icon: Clapperboard, text: "Création des créas publicitaires" },
  { icon: Facebook, text: "Publicité Facebook" },
  { icon: Music2, text: "Publicité TikTok" },
  { icon: Users, text: "Comment mettre en place une bonne équipe" },
];

const coachingProgram = [
  { icon: Search, text: "Comment trouver un produit gagnant" },
  { icon: Store, text: "Comment créer une boutique Shopify très optimisée avec l'IA" },
  { icon: Music2, text: "Stratégie TikTok Ads" },
  { icon: Facebook, text: "Stratégie Facebook Ads" },
  { icon: Ship, text: "Maîtrise de l'importation en Chine 🇨🇳, Dubaï, Turquie 🇹🇷" },
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

function Price({ old, now }: { old: string; now: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-sm font-medium text-muted-foreground line-through">{old}</span>
      <span className="font-display text-3xl font-bold text-gradient-primary sm:text-4xl">
        {now}
      </span>
    </div>
  );
}

function Index() {
  const [tab, setTab] = useState<"formation" | "coaching">("formation");
  const [open, setOpen] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <header className="relative overflow-hidden px-5 pt-8">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]"
        />
        <nav className="relative mx-auto flex w-full max-w-6xl items-center justify-between">
          <span className="font-display text-lg font-bold tracking-tight">Khabrel</span>
          <div className="flex items-center gap-2">
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/60 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </nav>

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary-glow uppercase">
              <Sparkles className="h-3.5 w-3.5" /> Khabrel Ecom Académie
            </span>
            <h1 className="mt-5 font-display text-4xl leading-tight font-extrabold sm:text-6xl">
              Khabrel
            </h1>
            <p className="mt-2 text-base font-medium text-primary-glow sm:text-lg">
              Khabrel — Coach Formateur en E-commerce
            </p>
            <p className="mt-6 font-display text-xl leading-snug font-semibold sm:text-2xl">
              1 million FCFA de chiffre d'affaires par jour, obtenu grâce à une méthode simple
              et reproductible
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Ce que j'applique au quotidien pour générer ce résultat, je te l'enseigne étape
              par étape.
            </p>
            <a
              href="#formation"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-primary px-7 text-sm font-semibold text-primary-foreground glow transition-transform hover:-translate-y-0.5"
            >
              Découvre la méthode <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="card-surface relative overflow-hidden">
            <img
              src={portrait}
              alt="Khabrel, coach formateur en e-commerce"
              width={1024}
              height={1280}
              className="h-72 w-full object-cover opacity-90 sm:h-[26rem]"
            />
          </div>
        </div>
      </header>

      {/* STATS */}
      <Section className="border-y border-border bg-surface/40">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="card-surface p-5 text-center">
              <div className="font-display text-2xl font-bold text-gradient-primary sm:text-3xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          Des résultats concrets, obtenus par des étudiants, des salariés et des entrepreneurs
          à travers l'Afrique.
        </p>
      </Section>

      {/* ACCROCHE */}
      <Section>
        <h2 className="mx-auto max-w-3xl text-center font-display text-2xl leading-snug font-bold sm:text-4xl">
          Peu importe ton statut aujourd'hui, tu peux te lancer dans l'e-commerce et
          construire ton <span className="text-gradient-primary">indépendance financière</span>.
        </h2>
      </Section>

      {/* PRÉSENTATION FORMATION */}
      <Section className="pt-0">
        <div className="card-surface p-8 text-center sm:p-14">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Bienvenue dans KHABREL ECOM ACADÉMIE
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            La formation complète pour construire ton business e-commerce, de zéro jusqu'aux
            premiers résultats.
          </p>
        </div>
      </Section>

      {/* CRÉDIBILITÉ */}
      <Section className="pt-0">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-4xl">
              Ce que j'enseigne, je le vis au quotidien
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Pas de théorie apprise dans un livre. Ce que je partage avec toi, c'est ce que
              j'applique moi-même chaque jour pour générer du chiffre d'affaires en e-commerce.
            </p>
          </div>
          <div className="card-surface overflow-hidden">
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
      </Section>

      {/* OFFRES */}
      <Section id="formation" className="pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* FORMATION */}
          <article className="card-surface flex flex-col p-7 sm:p-9">
            <h2 className="font-display text-xl font-bold sm:text-2xl">
              Formation — KHABREL ECOM ACADÉMIE
            </h2>
            <ul className="mt-6 space-y-3">
              {formationProgram.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary-glow">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 text-xs font-semibold tracking-wide text-primary-glow uppercase">
              Bonus inclus
            </p>
            <ul className="mt-3 space-y-3">
              {[
                { icon: FileSpreadsheet, text: "Fichier de gestion de stock" },
                { icon: ListChecks, text: "Liste de 100 produits gagnants" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary-glow">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Accès à vie", "Accès au groupe privé"].map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs text-muted-foreground"
                >
                  <InfinityIcon className="h-3.5 w-3.5 text-primary-glow" /> {a}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <Price old="150.000 FCFA" now="45.000 FCFA" />
              <div className="mt-5 flex items-center gap-3">
                <PrimaryButton href="#payment-formation">Rejoindre la formation</PrimaryButton>
                <WhatsAppButton label="Poser une question sur la formation via WhatsApp" />
              </div>
            </div>
          </article>

          {/* COACHING */}
          <article className="card-surface flex flex-col p-7 sm:p-9">
            <h2 className="font-display text-xl font-bold sm:text-2xl">
              Coaching Individuel — KHABREL ECOM ACADÉMIE
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Un accompagnement en face à face sur Google Meet, où je te transmets les secrets
              de l'écosystème e-commerce.
            </p>
            <ul className="mt-6 space-y-3">
              {coachingProgram.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary-glow">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs text-muted-foreground">
                <Video className="h-3.5 w-3.5 text-primary-glow" /> Sessions individuelles en
                visio (Google Meet)
              </span>
            </div>

            <div className="mt-auto pt-8">
              <Price old="250.000 FCFA" now="85.000 FCFA" />
              <div className="mt-5 flex items-center gap-3">
                <PrimaryButton href="#payment-coaching">Rejoindre le coaching</PrimaryButton>
                <WhatsAppButton label="Poser une question sur le coaching via WhatsApp" />
              </div>
            </div>
          </article>
        </div>
      </Section>

      {/* TÉMOIGNAGES */}
      <Section className="pt-0">
        <h2 className="text-center font-display text-2xl font-bold sm:text-4xl">
          Ils ont franchi le cap
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <figure key={i} className="card-surface overflow-hidden">
              <div className="flex aspect-4/5 items-center justify-center bg-secondary/40 text-xs text-muted-foreground">
                Capture d'écran {i + 1}
              </div>
              <figcaption className="border-t border-border p-4 text-xs text-muted-foreground">
                Légende du résultat {i + 1}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="pt-0">
        <h2 className="text-center font-display text-2xl font-bold sm:text-4xl">
          Tes questions, mes réponses
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

        <div className="mx-auto mt-8 max-w-3xl space-y-3">
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
      </Section>

      {/* CTA FINAL */}
      <Section className="pt-0">
        <div className="card-surface p-8 text-center sm:p-14">
          <h2 className="font-display text-2xl font-bold sm:text-4xl">
            Ta place dans l'e-commerce commence maintenant
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Rejoins la formation ou le coaching, ou écris-moi sur WhatsApp si tu as des
            questions avant.
          </p>
          <div className="mx-auto mt-8 flex max-w-2xl flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <PrimaryButton href="#payment-formation">Rejoindre la formation</PrimaryButton>
            <PrimaryButton href="#payment-coaching">Rejoindre le coaching</PrimaryButton>
            <div className="flex justify-center">
              <WhatsAppButton label="Écrire à Khabrel sur WhatsApp" />
            </div>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <Check className="h-3.5 w-3.5 text-primary-glow" /> Réponse rapide sur WhatsApp
          </p>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border px-5 py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 text-center">
          <div>
            <p className="font-display text-lg font-bold">Khabrel</p>
            <p className="mt-1 text-sm text-muted-foreground">Coach formateur en e-commerce</p>
          </div>
          <div className="flex items-center gap-3">
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/60 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 Khabrel. Tous droits réservés.
          </p>
        </div>
      </footer>
    </main>
  );
}
