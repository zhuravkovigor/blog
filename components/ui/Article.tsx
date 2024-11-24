import Link from "next/link";

type ArticleProps = {
  href: string;
};

export default function Article(props: ArticleProps) {
  const { href } = props;

  return (
    <Link
      href={href}
      className="flex rounded-xl h-[65px] items-center relative before:content before:transition-all duration-300 hover:before:bg-white/10 before:w-[106%] before:left-1/2 before:-translate-x-1/2 before:h-full before:rounded-xl before:top-1/2 before:-translate-y-1/2 before:absolute"
    >
      <article className="flex gap-[20px] text-lg">
        <span className="font-bold text-white/60">29 Dec</span>
        <h1 className="font-bold">Create a 3d game with three js</h1>
      </article>
    </Link>
  );
}
