import GenerateFog from "@/components/parts/GenerateFog";
import Container from "@/components/ui/Container";
import { getPost } from "@/lib/services";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
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
                    <div className="bg-zinc-900 p-1 mt-9 rounded-2xl border-2 border-zinc-800/50">
                      <span className="text-xs px-2 py-2 block text-zinc-400 font-bold">
                        {match[1]}
                      </span>
                      <SyntaxHighlighter
                        PreTag="div"
                        language={match[1]}
                        showLineNumbers={true}
                        style={materialDark}
                        customStyle={{
                          borderRadius: "0.7rem",
                          fontSize: "0.875rem",
                          margin: 0,
                          backgroundColor: "#000",
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
                table(props) {
                  const { children } = props;

                  let headers: string[] = [];
                  if (Array.isArray(children)) {
                    const thead = children.find(
                      (child: any) => child?.props?.children
                    );
                    if (thead) {
                      const headerRow = Array.isArray(thead.props.children)
                        ? thead.props.children.find(
                            (row: any) => row?.props?.children
                          )
                        : thead.props.children;

                      if (headerRow?.props?.children) {
                        const headerElements = Array.isArray(
                          headerRow.props.children
                        )
                          ? headerRow.props.children
                          : [headerRow.props.children];

                        headers = headerElements
                          .filter((header: any) => header?.props?.children)
                          .map((header: any) => {
                            const text =
                              typeof header.props.children === "string"
                                ? header.props.children
                                : String(header.props.children);
                            return text.trim();
                          })
                          .filter((text: any) => text.length > 0);
                      }
                    }
                  }

                  return (
                    <div className="bg-zinc-900 p-1 mt-9 rounded-2xl border-2 border-zinc-800/50">
                      {headers.length > 0 && (
                        <div className="py-0 pb-0">
                          <table
                            className="w-full text-xs"
                            style={{ tableLayout: "fixed" }}
                          >
                            <colgroup>
                              {headers.map((_, index) => (
                                <col
                                  key={index}
                                  style={{ width: `${100 / headers.length}%` }}
                                />
                              ))}
                            </colgroup>
                            <thead>
                              <tr>
                                {headers.map((header, index) => (
                                  <th
                                    key={index}
                                    className="px-4 py-2.5 pt-1.5 text-left font-medium text-zinc-400"
                                  >
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                          </table>
                        </div>
                      )}
                      <div className="bg-black rounded-xl border border-zinc-800">
                        <table
                          className="w-full text-sm text-zinc-300"
                          style={{ tableLayout: "fixed" }}
                        >
                          <colgroup>
                            {headers.map((_, index) => (
                              <col
                                key={index}
                                style={{ width: `${100 / headers.length}%` }}
                              />
                            ))}
                          </colgroup>
                          {children}
                        </table>
                      </div>
                    </div>
                  );
                },
                th() {
                  return null; // Скрываем заголовки таблицы
                },
                td(props) {
                  const { children } = props;
                  return (
                    <td className="border-b border-zinc-900 px-4 py-2.5">
                      {children}
                    </td>
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
