import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description:
    "My thoughts on AI, problem-solving, learning, and building things that matter.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="mb-8">
          <h1 className="font-medium text-2xl mb-2 tracking-tighter">blog</h1>
          <p className="text-muted-foreground">
            Thoughts on AI, problem-solving, learning, and building things that
            matter.
          </p>
        </div>
      </BlurFade>
      <div className="space-y-6">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                className="block p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                href={`/blog/${post.slug}`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium tracking-tight">
                      {post.metadata.title}
                    </h2>
                    {post.metadata.readingTime && (
                      <span className="text-xs text-muted-foreground">
                        {post.metadata.readingTime}
                      </span>
                    )}
                  </div>

                  {post.metadata.summary && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.metadata.summary}
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {post.metadata.category && (
                        <Badge variant="secondary" className="text-xs">
                          {post.metadata.category}
                        </Badge>
                      )}
                      {post.metadata.tags?.slice(0, 2).map((tag: string) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {post.metadata.publishedAt}
                    </p>
                  </div>
                </div>
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
