import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez BienMind pour discuter de votre projet SaaS dans le care et le bien-être.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900">
              Parlons de votre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                projet
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Une idée de SaaS pour le care ou le bien-être ? Décrivez-nous votre projet,
              nous vous répondons sous 24h.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Type de projet
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="mvp">Développement MVP</option>
                    <option value="ia">Intégration IA</option>
                    <option value="automation">Automatisation SaaS</option>
                    <option value="prototype">Prototypage rapide</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget estimé (optionnel)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  >
                    <option value="">Sélectionnez une fourchette</option>
                    <option value="5k">Moins de 5 000 &euro;</option>
                    <option value="10k">5 000 - 10 000 &euro;</option>
                    <option value="25k">10 000 - 25 000 &euro;</option>
                    <option value="50k">25 000 - 50 000 &euro;</option>
                    <option value="50k+">Plus de 50 000 &euro;</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Décrivez votre projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                    placeholder="Parlez-nous de votre idée, votre cible, vos objectifs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto rounded-full bg-primary-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-700 transition-all"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Nous contacter</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Email</div>
                      <div className="text-sm text-gray-600">hello@bienmind.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Téléphone</div>
                      <div className="text-sm text-gray-600">+33 (0)1 85 09 80 06</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Localisation</div>
                      <div className="text-sm text-gray-600">Paris, France</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Réponse rapide</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Réponse sous 24h
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Devis gratuit et sans engagement
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    Appel discovery offert
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-2xl p-6">
                <h3 className="font-semibold text-primary-900 mb-2">
                  Nos produits en référence
                </h3>
                <p className="text-sm text-primary-700 leading-relaxed mb-3">
                  Découvrez ce que nous avons déjà construit :
                </p>
                <div className="space-y-2">
                  <a href="https://oliceo.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 font-medium hover:underline flex items-center gap-1">
                    oliceo.com
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                  <a href="https://sonocrea.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 font-medium hover:underline flex items-center gap-1">
                    sonocrea.com
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
