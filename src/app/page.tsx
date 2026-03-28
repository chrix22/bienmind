import Link from "next/link";

const products = [
  {
    name: "Oliceo",
    url: "https://oliceo.com",
    tagline: "Vivre Mieux Simplement",
    description:
      "La plateforme de contenus bien-être et remèdes naturels. Blog, guides et ressources pour un quotidien plus zen.",
    color: "from-green-500 to-emerald-600",
    bgLight: "bg-green-50",
    textColor: "text-green-700",
  },
  {
    name: "SonoCrea",
    url: "https://sonocrea.com",
    tagline: "Studio de Sonothérapie",
    description:
      "La solution digitale pour les praticiens en sonothérapie. Gestion de rendez-vous, contenu thérapeutique et suivi client.",
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    textColor: "text-blue-700",
  },
  {
    name: "Bientôt...",
    url: "#",
    tagline: "Nouveaux projets en cours",
    description:
      "D'autres produits SaaS innovants pour le care et le bien-être sont en préparation. Restez à l'écoute.",
    color: "from-purple-500 to-violet-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-700",
  },
];

const expertise = [
  {
    title: "Développement MVP",
    description: "Un SaaS complet livré en 7 jours : auth, base de données, paiement Stripe et déploiement.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    title: "Intégration IA",
    description: "Chatbots, GPT-4, Claude, RAG : nous intégrons l'intelligence artificielle au coeur de vos produits.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: "Automatisation SaaS",
    description: "Paiements Stripe, emails, workflows N8N/Make.com : des automatisations qui font tourner votre business.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
  },
  {
    title: "Prototypage rapide",
    description: "Prototypes haute-fidélité en 48h pour valider votre concept avant de construire.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Supabase", "Stripe",
  "Node.js", "TailwindCSS", "Vercel", "N8N", "Make.com",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700 mb-6">
              <span className="h-2 w-2 rounded-full bg-primary-500" />
              Agentic SaaS Studio
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Lancez votre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                SaaS en jours,
              </span>{" "}
              pas en mois
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              BienMind conçoit et lance des produits SaaS innovants pour le secteur du
              care et du bien-être. De l&apos;idée au lancement, en un temps record.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-primary-600 px-8 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-700 hover:shadow-primary-500/40 transition-all"
              >
                Lancer votre projet
              </Link>
              <Link
                href="/services"
                className="rounded-full bg-white px-8 py-3.5 text-center text-base font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50 transition-all"
              >
                Découvrir nos produits
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Produits SaaS livrés" },
              { number: "90%", label: "Plus rapide qu'un dev classique" },
              { number: "7j", label: "Pour livrer un MVP" },
              { number: "30j", label: "De support post-lancement" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">{stat.number}</div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Nos produits
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Des SaaS conçus pour transformer le secteur du care et du bien-être.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.url}
                target={product.url !== "#" ? "_blank" : undefined}
                rel={product.url !== "#" ? "noopener noreferrer" : undefined}
                className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br ${product.color} mb-6`}>
                  <span className="text-white font-bold text-lg">{product.name.charAt(0)}</span>
                </div>
                <div className={`inline-block ${product.bgLight} ${product.textColor} text-xs font-medium px-2.5 py-1 rounded-full mb-3`}>
                  {product.tagline}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{product.description}</p>
                {product.url !== "#" && (
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:text-primary-700">
                    Visiter le site
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-primary-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
                Notre expertise technique
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Nous combinons les technologies les plus modernes avec une approche
                agentique pour construire des produits SaaS robustes, rapides à
                déployer et prêts pour la croissance.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block bg-white px-3 py-1.5 rounded-full text-sm font-medium text-gray-700 ring-1 ring-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-primary-600 hover:text-primary-700"
              >
                En savoir plus sur nous
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {expertise.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary-100 text-primary-600 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Quote */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-12 sm:p-16 text-center">
            <div className="text-5xl text-primary-300 font-display font-bold mb-6">&ldquo;</div>
            <blockquote className="text-2xl sm:text-3xl font-display text-gray-900 leading-relaxed max-w-3xl mx-auto">
              80 000€ économisés, 6 mois d&apos;avance sur la roadmap. BienMind a transformé
              notre façon de lancer des produits.
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">F</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">Fondateur</div>
                <div className="text-gray-500 text-xs">Startup Wellness, Paris</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-primary-700 to-primary-500 px-8 py-16 sm:px-16 sm:py-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="relative text-center max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                Une idée de SaaS pour le care ?
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Parlons de votre projet. De l&apos;idée au lancement, nous vous
                accompagnons à chaque étape.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-8 py-3.5 text-center text-base font-semibold text-primary-700 shadow-lg hover:bg-gray-50 transition-all"
                >
                  Discutons de votre projet
                </Link>
                <Link
                  href="/blog"
                  className="rounded-full bg-white/10 px-8 py-3.5 text-center text-base font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 transition-all"
                >
                  Lire le blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
