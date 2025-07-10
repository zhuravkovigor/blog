import { Prisma } from "@/app/generated/prisma";
import { getPosts } from "@/lib/services";
import { ComponentWithSettings } from "@/lib/types";
import { classNames } from "@/lib/utils";
import Post from "../ui/Post";

type PostListProps = ComponentWithSettings<Prisma.PostFindManyArgs> & {
  className?: string;
};

export default async function PostList(props: PostListProps) {
  const { settings, className } = props;

  // Получаем посты с сортировкой по дате создания (новые сверху)
  const posts = await getPosts({
    orderBy: { createdAt: "desc" },
    ...settings,
  });

  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.createdAt).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<number, typeof posts>);

  const years = Object.keys(postsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  const postListClassNames = classNames("flex flex-col gap-16", className);

  return (
    <div className={postListClassNames}>
      {years.map((year) => (
        <div key={year} className="flex flex-col gap-4">
          <h2 className="text-xl px-4 font-semibold text-zinc-300 pb-2 sticky top-8 z-20  border-b border-transparent">
            {year}
          </h2>
          <div className="flex flex-col gap-1">
            {postsByYear[year].map((post) => (
              <Post {...post} key={post.id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
