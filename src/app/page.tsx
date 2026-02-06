import Link from "next/link";

const services = [
  {
    title: "Coaching individuel",
    description:
      "Un accompagnement personnalisé pour vous aider à surmonter vos défis et atteindre vos objectifs de bien-être.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Méditation guidée",
    description:
      "Des séances de méditation adaptées à votre niveau pour cultiver la paix intérieure et la pleine conscience.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Ateliers collectifs",
    description:
      "Des ateliers en groupe pour partager, apprendre et grandir ensemble dans un cadre bienveillant.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Programmes en ligne",
    description:
      "Des programmes structurés accessibles où que vous soyez, à votre rythme, pour un bien-être durable.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "BienMind a transformé ma façon de gérer le stress au quotidien. Je me sens plus sereine et plus en contrôle de mes émotions.",
    author: "Marie L.",
    role: "Entrepreneuse",
  },
  {
    quote:
      "Les séances de méditation guidée m'ont permis de retrouver un sommeil de qualité et une vraie paix intérieure.",
    author: "Thomas D.",
    role: "Cadre en entreprise",
  },
  {
    quote:
      "L'approche bienveillante et professionnelle de l'équipe fait toute la différence. Je recommande sans hésiter.",
    author: "Sophie M.",
    role: "Enseignante",
  },
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
              Votre bien-être commence ici
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Cultivez votre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                équilibre mental
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              BienMind vous accompagne avec bienveillance vers un meilleur bien-être mental.
              Coaching, méditation et ateliers pour retrouver sérénité et confiance en soi.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-primary-600 px-8 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-700 hover:shadow-primary-500/40 transition-all"
              >
                Commencer maintenant
              </Link>
              <Link
                href="/services"
                className="rounded-full bg-white px-8 py-3.5 text-center text-base font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50 transition-all"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Clients accompagnés" },
              { number: "98%", label: "Taux de satisfaction" },
              { number: "10+", label: "Années d'expérience" },
              { number: "50+", label: "Ateliers par an" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">{stat.number}</div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Nos services pour votre bien-être
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Des approches complémentaires pour vous accompagner sur le chemin du mieux-être.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{service.description}</p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  En savoir plus
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-primary-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
                Une approche humaine et bienveillante
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Chez BienMind, nous croyons que chaque personne possède les ressources
                nécessaires pour trouver son équilibre. Notre rôle est de vous guider
                avec bienveillance et expertise sur ce chemin.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Praticiens certifiés et expérimentés",
                  "Approche personnalisée et respectueuse",
                  "Méthodes validées scientifiquement",
                  "Suivi continu et ajusté à vos besoins",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-primary-500 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
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
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="text-6xl mb-4 text-primary-700/20 font-display font-bold">&ldquo;</div>
                  <p className="text-xl font-display text-primary-900/70 italic">
                    Le bien-être n&apos;est pas une destination, c&apos;est une pratique quotidienne.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Ce que disent nos clients
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Découvrez les témoignages de ceux qui ont fait confiance à BienMind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-warm-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.author}</div>
                    <div className="text-gray-500 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-primary-600 to-accent-600 px-8 py-16 sm:px-16 sm:py-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="relative text-center max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                Prêt à prendre soin de votre esprit ?
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Faites le premier pas vers un meilleur équilibre mental.
                Réservez votre première consultation gratuite dès aujourd&apos;hui.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-8 py-3.5 text-center text-base font-semibold text-primary-700 shadow-lg hover:bg-gray-50 transition-all"
                >
                  Réserver ma consultation gratuite
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
