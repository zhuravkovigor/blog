import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const { title, description, content, published } = await request.json();

  // Validate input
  if (!title || !description || !content) {
    return new Response("Missing required fields", { status: 400 });
  }

  try {
    const post = await prisma.post.create({
      data: {
        title,
        slug: title.toLowerCase().replace(/\s+/g, "-"),
        description,
        content,
        published,
      },
    });

    return new Response(JSON.stringify(post), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating post:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
