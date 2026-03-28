import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "BienMind est un studio agentique qui conçoit des produits SaaS pour le care et le bien-être. Découvrez notre histoire et notre approche.",
};

const values = [
  {
    title: "Rapidité",
    description: "Du concept au lancement en jours, pas en mois. Chaque jour compte pour votre business.",
  },
  {
    title: "Innovation",
    description: "IA, automatisation, workflows agentiques : nous utilisons les technologies de demain, aujourd'hui.",
  },
  {
    title: "Spécialisation",
    description: "100% focalisés sur le care et le bien-être. Nous comprenons les enjeux de votre secteur.",
  },
  {
    title: "Qualité",
    description: "Code propre, architecture scalable, sécurité enterprise-grade. Pas de compromis.",
  },
];

const milestones = [
  { year: "2020", event: "Création de BienMind à Paris" },
  { year: "2023", event: "100+ produits SaaS livrés" },
  { year: "2025", event: "Lancement d'Oliceo et SonoCrea" },
  { year: "2026", event: "Expansion du portfolio care & wellness" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900">
              L&apos;agence qui{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                construit le care de demain
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              BienMind est un studio agentique spécialisé dans la conception et le lancement
              rapide de produits SaaS pour le secteur du care et du bien-être.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-gray-900">Notre vision</h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Nous avons fondé BienMind avec une conviction : le secteur du care et du
                  bien-être mérite des outils digitaux à la hauteur de sa mission. Trop
                  de praticiens et d&apos;entrepreneurs du wellness sont freinés par des
                  solutions techniques inadaptées ou des délais de développement prohibitifs.
                </p>
                <p>
                  Grâce à notre approche agentique &mdash; combinant IA, automatisation et
                  expertise technique pointue &mdash; nous compressons les cycles de
                  développement pour livrer des MVPs complets en 7 jours, là où le
                  développement traditionnel prend des mois.
                </p>
                <p>
                  Nos produits comme Oliceo et SonoCrea témoignent de cette approche :
                  des solutions ciblées, déployées rapidement, qui répondent à de vrais
                  besoins du terrain.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="space-y-4">
                {milestones.map((m) => (
                  <div key={m.year} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5">
                    <div className="text-2xl font-display font-bold text-primary-600 shrink-0 w-16">
                      {m.year}
                    </div>
                    <div className="text-gray-700">{m.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Ce qui nous différencie
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Une approche unique au croisement de la tech et du care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="h-12 w-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech & Process */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Notre processus
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              De l&apos;idée au produit live, en un temps record.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Prototypage",
                desc: "En 48h, nous validons votre concept avec un prototype haute-fidélité et une étude de faisabilité technique.",
              },
              {
                step: "02",
                title: "Build & Ship",
                desc: "En 7 jours, votre MVP est live : authentification, features core, base de données, paiements et déploiement.",
              },
              {
                step: "03",
                title: "Grow & Scale",
                desc: "30 jours de support post-lancement, itérations rapides et intégration de features IA pour accélérer votre croissance.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary-100 text-primary-600 font-display text-2xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-primary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900">
            Prêt à lancer votre SaaS ?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discutons de votre projet. Nous vous répondons sous 24h.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-primary-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-700 transition-all"
          >
            Lancer votre projet
          </Link>
        </div>
      </section>
    </>
  );
}
