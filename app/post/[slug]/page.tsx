import GenerateFog from "@/components/parts/GenerateFog";
import StickyTitle from "@/components/parts/StickyTitle";
import CodeViewer from "@/components/ui/CodeViewer";
import Container from "@/components/ui/Container";
import { TableCell, TableViewer } from "@/components/ui/table";
import { getPost, getPosts } from "@/lib/services";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost({
    where: { slug },
  });

  return {
    title: post?.title || "Post not found",
    description: post?.description || "No description available",
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getPosts(); // по аналогии с getPost

  return posts.map((p) => ({ slug: p.slug }));
}

export const revalidate = 60;
export const dynamicParams = true;

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost({
    where: { slug },
  });

  return (
    <Container className="pb-32">
      <StickyTitle title={post?.title} />

      <div className="flex flex-col pt-44 gap-1">
        <h1 className="text-zinc-300 text-3xl font-medium">{post?.title}</h1>
      </div>
      <GenerateFog />
      <main className=" max-w-3xl">
        {post?.content && (
          <div className="prose max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ children, className, ...rest }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <CodeViewer className={className}>
                      {String(children).replace(/\n$/, "")}
                    </CodeViewer>
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  );
                },
                table({ children }) {
                  return <TableViewer>{children}</TableViewer>;
                },
                th: () => null,
                td({ children }) {
                  return <TableCell>{children}</TableCell>;
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        )}
      </main>
    </Container>
  );
}
