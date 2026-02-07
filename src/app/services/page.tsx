import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Produits & Services",
  description:
    "Découvrez les produits SaaS BienMind pour le care et le bien-être, et nos services de développement rapide : MVP, IA, automatisation.",
};

const products = [
  {
    name: "Oliceo",
    url: "https://oliceo.com",
    tagline: "Vivre Mieux Simplement",
    description:
      "Plateforme de contenus bien-être et remèdes naturels. Oliceo propose des guides, articles et ressources pour un quotidien plus zen. Nutrition, méditation, yoga, art-thérapie et habitat sain.",
    features: [
      "Blog éditorial avec SEO optimisé",
      "Guides et fiches pratiques bien-être",
      "Monétisation via e-commerce intégré",
      "Contenu multiformat (articles, vidéos, podcasts)",
    ],
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "SonoCrea",
    url: "https://sonocrea.com",
    tagline: "Studio de Sonothérapie",
    description:
      "La solution digitale pour les praticiens en sonothérapie et musicothérapie. Prise de rendez-vous, gestion de clientèle et contenus thérapeutiques sonores.",
    features: [
      "Prise de rendez-vous en ligne",
      "Gestion de la relation client",
      "Contenus thérapeutiques audio",
      "Programmes de soins personnalisés",
    ],
    color: "from-blue-500 to-indigo-600",
  },
];

const services = [
  {
    id: "mvp",
    title: "Développement MVP",
    description:
      "Un SaaS complet livré en 7 jours. Authentification, features core, base de données, paiement Stripe et déploiement production.",
    features: [
      "Architecture complète (auth, DB, API, frontend)",
      "Intégration paiement Stripe",
      "Déploiement Vercel/AWS",
      "30 jours de support post-lancement",
    ],
    timeline: "7 jours",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    id: "ia",
    title: "Intégration IA",
    description:
      "Chatbots intelligents, intégration GPT-4/Claude, RAG et recherche sémantique. L'IA au service de vos utilisateurs.",
    features: [
      "Chatbots et assistants IA",
      "Intégration GPT-4, Claude, Mistral",
      "RAG (Retrieval Augmented Generation)",
      "Personnalisation et fine-tuning",
    ],
    timeline: "3-5 jours",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    id: "automation",
    title: "Automatisation SaaS",
    description:
      "Paiements, emails transactionnels, workflows N8N et Make.com. Des automatisations qui font tourner votre business en pilote automatique.",
    features: [
      "Workflows Stripe (abonnements, factures)",
      "Emails transactionnels et marketing",
      "Intégrations N8N / Make.com",
      "Webhooks et API tierces",
    ],
    timeline: "3-5 jours",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
  },
  {
    id: "prototypage",
    title: "Prototypage rapide",
    description:
      "Prototypes haute-fidélité Figma et POC interactifs pour valider votre concept avant d'investir dans le développement complet.",
    features: [
      "Maquettes Figma haute-fidélité",
      "POC interactif fonctionnel",
      "Étude de faisabilité technique",
      "Rapport et recommandations",
    ],
    timeline: "48h",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900">
              Produits &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                Services
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Des SaaS innovants pour le care et le bien-être, et l&apos;expertise
              technique pour construire les vôtres.
            </p>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Nos produits
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Des solutions SaaS que nous avons conçues et que nous opérons.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.name} className="bg-gray-50 rounded-3xl p-8 sm:p-10">
                <div className={`inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br ${product.color} mb-6`}>
                  <span className="text-white font-bold text-xl">{product.name.charAt(0)}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-900">{product.name}</h3>
                <div className="text-sm text-primary-600 font-medium mt-1">{product.tagline}</div>
                <p className="mt-4 text-gray-600 leading-relaxed">{product.description}</p>
                <ul className="mt-6 space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-sm text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
                >
                  Visiter {product.name}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Nos services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Vous avez une idée de SaaS pour le care ? Nous la construisons pour vous.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary-100 text-primary-600 mb-6">
                      {service.icon}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <svg className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {service.timeline}
                      </div>
                      <Link
                        href="/contact"
                        className="text-sm font-semibold text-primary-600 hover:text-primary-700"
                      >
                        Demander un devis &rarr;
                      </Link>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                      <div className="text-primary-300 scale-[2]">{service.icon}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-gray-900">
              Questions fréquentes
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Quel est le délai pour construire un MVP ?",
                a: "Nous livrons un MVP complet en 7 jours ouvrés. Cela inclut l'authentification, les features core, la base de données, l'intégration Stripe et le déploiement en production.",
              },
              {
                q: "Quelles technologies utilisez-vous ?",
                a: "Notre stack principal : React/Next.js, TypeScript, Supabase, Stripe, Node.js, TailwindCSS et Vercel. Nous adaptons selon les besoins du projet.",
              },
              {
                q: "Travaillez-vous uniquement sur le secteur care/bien-être ?",
                a: "Oui, c'est notre spécialisation. Cette verticalité nous permet de comprendre profondément les enjeux du secteur et de livrer des solutions pertinentes plus rapidement.",
              },
              {
                q: "Que comprend le support post-lancement ?",
                a: "30 jours de support inclus : corrections de bugs, ajustements mineurs, monitoring et accompagnement au lancement. Des forfaits de maintenance long terme sont aussi disponibles.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
