import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire de BienMind, notre mission et l'équipe qui vous accompagne vers un meilleur bien-être mental.",
};

const values = [
  {
    title: "Bienveillance",
    description: "Nous accueillons chaque personne sans jugement, avec empathie et respect.",
  },
  {
    title: "Expertise",
    description: "Nos praticiens sont certifiés et formés aux méthodes les plus récentes.",
  },
  {
    title: "Personnalisation",
    description: "Chaque parcours est unique, nous adaptons notre approche à vos besoins.",
  },
  {
    title: "Accessibilité",
    description: "Nous rendons le bien-être mental accessible à tous, partout.",
  },
];

const team = [
  {
    name: "Dr. Claire Dupont",
    role: "Fondatrice & Psychologue",
    bio: "Plus de 15 ans d'expérience en psychologie positive et accompagnement du bien-être.",
  },
  {
    name: "Marc Lefebvre",
    role: "Coach certifié",
    bio: "Spécialiste en gestion du stress et développement personnel.",
  },
  {
    name: "Amina Benali",
    role: "Instructrice de méditation",
    bio: "Formée en Inde et au Japon, elle enseigne la pleine conscience depuis 10 ans.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-white to-primary-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900">
              Notre mission : votre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                bien-être mental
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              BienMind est né d&apos;une conviction simple : chacun mérite d&apos;avoir accès
              à un accompagnement de qualité pour prendre soin de sa santé mentale.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-gray-900">Notre histoire</h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fondé en 2015, BienMind est né de la volonté du Dr. Claire Dupont de rendre
                  le bien-être mental accessible au plus grand nombre. Après des années de pratique
                  clinique, elle a constaté que de nombreuses personnes souffraient en silence,
                  faute d&apos;accès à un accompagnement adapté.
                </p>
                <p>
                  Aujourd&apos;hui, BienMind réunit une équipe pluridisciplinaire de praticiens
                  passionnés qui partagent la même vision : accompagner chaque personne avec
                  bienveillance sur le chemin du mieux-être.
                </p>
                <p>
                  Notre approche combine les méthodes les plus récentes de la psychologie
                  positive, de la pleine conscience et du coaching pour offrir un accompagnement
                  complet et personnalisé.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-5xl font-display font-bold text-primary-600">2015</div>
                  <div className="mt-2 text-gray-600">Année de création</div>
                </div>
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
              Nos valeurs
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Les principes qui guident notre action au quotidien.
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

      {/* Team */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Notre équipe
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Des professionnels passionnés à votre service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-primary-300 to-accent-300 flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-white">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <div className="text-sm text-primary-600 font-medium">{member.role}</div>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-primary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900">
            Envie de nous rencontrer ?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Prenez contact avec nous pour discuter de vos besoins. La première consultation est offerte.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-primary-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-700 transition-all"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </>
  );
}
