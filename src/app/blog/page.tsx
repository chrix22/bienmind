import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conseils, réflexions et ressources pour cultiver votre bien-être mental au quotidien.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-white to-primary-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900">
              Le blog{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                BienMind
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Conseils pratiques, réflexions et ressources pour prendre soin de votre
              santé mentale au quotidien.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Aucun article pour le moment. Revenez bientôt !</p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {posts.length > 0 && (
                <div className="mb-16">
                  <Link href={`/blog/${posts[0].slug}`} className="group block">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className={`aspect-[16/10] rounded-3xl bg-gradient-to-br ${posts[0].coverColor} flex items-center justify-center`}>
                        <span className="text-6xl font-display font-bold text-white/30">
                          {posts[0].title.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                            {posts[0].category}
                          </span>
                          <span className="text-sm text-gray-500">{formatDate(posts[0].date)}</span>
                        </div>
                        <h2 className="font-display text-3xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {posts[0].title}
                        </h2>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                          {posts[0].excerpt}
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
                            <span className="text-white text-xs font-semibold">
                              {posts[0].author.charAt(0)}
                            </span>
                          </div>
                          <span className="text-sm text-gray-600">{posts[0].author}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Other Posts */}
              {posts.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.slice(1).map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                      <article className="h-full flex flex-col">
                        <div className={`aspect-[16/10] rounded-2xl bg-gradient-to-br ${post.coverColor} flex items-center justify-center mb-4`}>
                          <span className="text-4xl font-display font-bold text-white/30">
                            {post.title.charAt(0)}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                        </div>
                        <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-grow">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
                            <span className="text-white text-[10px] font-semibold">
                              {post.author.charAt(0)}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">{post.author}</span>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
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
