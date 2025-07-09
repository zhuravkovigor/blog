import GenerateFog from "@/components/parts/GenerateFog";
import CodeViewer from "@/components/ui/CodeViewer";
import Container from "@/components/ui/Container";
import { TableCell, TableViewer } from "@/components/ui/table";
import { getPost } from "@/lib/services";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost({
    where: { slug },
  });

  return (
    <Container className="pb-32">
      <div className="flex flex-col sticky z-20 top-0 gap-1 pt-8">
        <h2 className="text-xl text-zinc-300 font-medium">{post?.title}</h2>
      </div>
      <GenerateFog />
      <main className="mt-44 max-w-3xl">
        {post?.content && (
          <div className="prose max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code(props) {
                  const { children, className, ...rest } = props;
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
                table(props) {
                  const { children } = props;
                  return <TableViewer>{children}</TableViewer>;
                },
                th() {
                  return null; // Скрываем заголовки таблицы
                },
                td(props) {
                  const { children } = props;
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
