import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Article non trouvé" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 transition-colors mb-8"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Retour au blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
              {post.category}
            </span>
            <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {post.author.charAt(0)}
              </span>
            </div>
            <div>
              <div className="font-medium text-gray-900 text-sm">{post.author}</div>
              <div className="text-gray-500 text-xs">BienMind</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className={`aspect-[21/9] rounded-3xl bg-gradient-to-br ${post.coverColor} flex items-center justify-center`}>
            <span className="text-8xl font-display font-bold text-white/20">
              {post.title.charAt(0)}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-primary-600 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </div>
      </section>

      {/* Back to blog CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="font-display text-2xl font-bold text-gray-900">
              Envie d&apos;aller plus loin ?
            </h2>
            <p className="mt-3 text-gray-600">
              Découvrez nos services d&apos;accompagnement pour un bien-être durable.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/services"
                className="rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
              >
                Voir nos services
              </Link>
              <Link
                href="/blog"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50 transition-colors"
              >
                Lire d&apos;autres articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
