import { Prisma } from "@/app/generated/prisma";
import { APP_ROUTES } from "@/lib/constants";
import { createUrl, formatShortDate } from "@/lib/utils";
import Link from "next/link";

interface PostProps
  extends Pick<
    Prisma.PostGetPayload<{}>,
    "title" | "description" | "createdAt" | "slug"
  > {}

export default function Post(props: PostProps) {
  const { createdAt, description, title, slug } = props;

  return (
    <Link
      href={createUrl(APP_ROUTES.POST_BY_SLUG, { slug })}
      tabIndex={-1}
      prefetch
      aria-label={`Go to post: ${title}`}
      className="block w-fit focus:outline-none focus:ring-2 focus:ring-white/60 rounded-lg"
    >
      <article
        className="flex transition duration-300 gap-4 hover:bg-zinc-900 hover:border-white/2 p-4 cursor-pointer rounded-lg border border-transparent w-fit"
        aria-label={`Article: ${title}`}
        tabIndex={0}
      >
        <p className="text-sm text-zinc-600" aria-label="Post date">
          {formatShortDate(createdAt)}
        </p>
        <div className="flex flex-col gap-2">
          <h2 className="text-sm" aria-label="Post title">
            {title}
          </h2>
          <p className="text-sm text-zinc-400" aria-label="Post description">
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
}
