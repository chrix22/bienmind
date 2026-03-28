export default function Disclaimer() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-sm text-amber-800 leading-relaxed">
      <div className="flex items-start gap-3">
        <svg
          className="h-5 w-5 text-amber-500 shrink-0 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
        <div>
          <p className="font-semibold text-amber-900 mb-1">Avertissement</p>
          <p>
            BienMind est un <strong>éditeur de contenus et de services numériques</strong> pour
            le bien-être et le care non médicalisé. Nous ne proposons aucun service médical,
            diagnostic, traitement ou conseil de santé. Les informations publiées sur ce blog
            sont à titre informatif uniquement et ne se substituent en aucun cas à un avis
            médical professionnel. Consultez toujours un professionnel de santé qualifié pour
            toute question relative à votre santé.
          </p>
        </div>
      </div>
    </div>
  );
}
