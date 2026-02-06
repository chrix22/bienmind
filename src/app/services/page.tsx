import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Découvrez nos services de coaching individuel, méditation guidée, ateliers collectifs et programmes en ligne pour votre bien-être mental.",
};

const services = [
  {
    id: "coaching",
    title: "Coaching individuel",
    description:
      "Un accompagnement sur-mesure pour vous aider à surmonter vos défis personnels et professionnels.",
    features: [
      "Séances de 60 minutes en présentiel ou en visio",
      "Programme personnalisé selon vos objectifs",
      "Outils pratiques à appliquer au quotidien",
      "Suivi entre les séances",
    ],
    price: "80€",
    unit: "/ séance",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    id: "meditation",
    title: "Méditation guidée",
    description:
      "Apprenez à cultiver la pleine conscience avec nos séances de méditation adaptées à tous les niveaux.",
    features: [
      "Sessions individuelles ou en petit groupe",
      "Techniques de respiration et relaxation",
      "Méditation de pleine conscience (MBSR)",
      "Exercices audio à emporter",
    ],
    price: "45€",
    unit: "/ séance",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    id: "ateliers",
    title: "Ateliers collectifs",
    description:
      "Des ateliers thématiques en groupe pour apprendre, partager et progresser ensemble.",
    features: [
      "Groupes de 6 à 12 participants",
      "Thématiques variées (stress, confiance, etc.)",
      "Exercices pratiques et mises en situation",
      "Support de cours fourni",
    ],
    price: "35€",
    unit: "/ atelier",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    id: "programmes",
    title: "Programmes en ligne",
    description:
      "Des programmes complets accessibles depuis chez vous, à votre rythme, pour un bien-être durable.",
    features: [
      "Accès illimité aux contenus",
      "Vidéos, exercices et fiches pratiques",
      "Communauté de soutien en ligne",
      "Consultation de suivi mensuelle incluse",
    ],
    price: "29€",
    unit: "/ mois",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
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
              Des services adaptés à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                vos besoins
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Que vous cherchiez un accompagnement individuel ou une expérience collective,
              nous avons la solution qu&apos;il vous faut.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary-100 text-primary-600 mb-6">
                    {service.icon}
                  </div>
                  <h2 className="font-display text-3xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className="h-5 w-5 text-primary-500 shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex items-end gap-2">
                    <span className="text-4xl font-bold text-gray-900">{service.price}</span>
                    <span className="text-gray-500 pb-1">{service.unit}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-6 inline-block rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
                  >
                    Réserver une séance
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                    <div className="text-primary-600/30">{service.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-gray-900">
              Questions fréquentes
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Comment se déroule la première séance ?",
                a: "La première séance est un entretien de découverte gratuit de 30 minutes. Nous faisons connaissance, vous partagez vos besoins et nous définissons ensemble un plan d'accompagnement adapté.",
              },
              {
                q: "Peut-on faire les séances en visio ?",
                a: "Oui, tous nos services sont disponibles en présentiel et en visioconférence. Vous pouvez choisir le format qui vous convient le mieux.",
              },
              {
                q: "Combien de séances faut-il prévoir ?",
                a: "Cela dépend de vos objectifs et de votre situation. En général, un accompagnement de 8 à 12 séances permet d'obtenir des résultats significatifs et durables.",
              },
              {
                q: "Les séances sont-elles remboursées ?",
                a: "Certaines mutuelles prennent en charge les séances de coaching et de psychologie. Nous vous fournissons une facture que vous pouvez soumettre à votre mutuelle.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm">
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
