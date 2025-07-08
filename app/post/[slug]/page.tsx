import GenerateFog from "@/components/parts/GenerateFog";
import Container from "@/components/ui/Container";
import { getPost } from "@/lib/services";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
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
                    <div>
                      {match[1]}
                      <SyntaxHighlighter
                        PreTag="div"
                        language={match[1]}
                        showLineNumbers={true}
                        style={atomDark}
                        customStyle={{
                          margin: "1.5rem 0",
                          borderRadius: "0.5rem",
                          fontSize: "0.875rem",
                          backgroundColor: "#111",
                          border: "0.1rem solid #222",
                          boxShadow:
                            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                        }}
                        codeTagProps={{
                          style: {
                            background: "transparent",
                            padding: "0",
                            margin: "0",
                          },
                        }}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    </div>
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  );
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
