import { faker } from "@faker-js/faker";
import { Prisma, PrismaClient } from "../app/generated/prisma";

const prisma = new PrismaClient();

// Function to generate blog post with Markdown content
function generateBlogPost(): Prisma.PostCreateInput {
  const technologies = [
    "React",
    "TypeScript",
    "Next.js",
    "Prisma",
    "Node.js",
    "Python",
    "Docker",
    "Kubernetes",
  ];

  // Sometimes generate tech posts, sometimes general posts
  const isTechPost = faker.datatype.boolean(0.6); // 60% chance for tech posts

  let title: string;

  if (isTechPost) {
    const tech = faker.helpers.arrayElement(technologies);
    title = `${faker.helpers.arrayElement([
      "Getting Started with",
      "Advanced Techniques in",
      "Best Practices for",
      "Complete Guide to",
      "Building with",
      "Optimizing",
      "Mastering",
      "Exploring",
      "Understanding",
      "Harnessing",
      "Leveraging",
      "Integrating",
      "Innovating with",
      "Crafting",
      "Designing",
      "Developing",
      "Implementing",
      "Creating",
      "Architecting",
      "Scaling",
      "Deploying",
      "Testing",
      "Debugging",
      "Securing",
      "Automating",
      "Configuring",
      "Extending",
      "Customizing",
      "Enhancing",
      "Refactoring",
      "Migrating",
      "Upgrading",
      "Transitioning",
      "Comparing",
      "Evaluating",
      "Choosing",
    ])} ${tech}`;
  } else {
    title = faker.company.catchPhrase();
  }

  const slug = `${faker.helpers.slugify(title).toLowerCase()}`;

  const content = `
## Introduction

${faker.lorem.paragraphs({ min: 1, max: 2 })}

## Main Content

${faker.lorem.paragraph()}

### Key Points

- **${faker.lorem.words(2)}**: ${faker.lorem.sentence()}
- **${faker.lorem.words(2)}**: ${faker.lorem.sentence()}
- **${faker.lorem.words(2)}**: ${faker.lorem.sentence()}

## Practical Example

${faker.lorem.paragraph()}

\`\`\`${faker.helpers.arrayElement([
    "javascript",
    "typescript",
    "python",
    "bash",
  ])}
// ${faker.lorem.words({ min: 3, max: 6 })}
const ${faker.lorem.word()} = {
  ${faker.lorem.word()}: "${faker.lorem.words(2)}",
  ${faker.lorem.word()}: ${faker.number.int({ min: 1, max: 100 })},
  ${faker.lorem.word()}: ${faker.datatype.boolean()}
};

function ${faker.lorem.word()}() {
  return ${faker.lorem.word()}.${faker.lorem.word()}();
}
\`\`\`

## Comparison

| Approach | Advantages | Disadvantages |
|----------|------------|---------------|
| ${faker.lorem.word()} | ${faker.lorem.words(3)} | ${faker.lorem.words(3)} |
| ${faker.lorem.word()} | ${faker.lorem.words(3)} | ${faker.lorem.words(3)} |
| ${faker.lorem.word()} | ${faker.lorem.words(3)} | ${faker.lorem.words(3)} |

## Tips

> 💡 **Tip**: ${faker.lorem.sentence()}

${faker.lorem.paragraph()}

### Common Mistakes

1. ${faker.lorem.sentence()}
2. ${faker.lorem.sentence()}
3. ${faker.lorem.sentence()}

## Conclusion

${faker.lorem.paragraphs({ min: 1, max: 2 })}
`.trim();

  return {
    title,
    slug,
    description: faker.lorem.sentences({ min: 1, max: 1 }),
    content,
    published: faker.datatype.boolean(0.75), // 75% chance to be published
    createdAt: faker.date.between({
      from: new Date("2020-01-01"),
      to: new Date(),
    }),
  };
}

export async function main() {
  console.log("🌱 Starting database seeding...");

  // Clear existing posts
  await prisma.post.deleteMany();
  console.log("🗑️ Cleared existing posts");

  // Generate and create posts
  const postsCount = 12;

  for (let i = 0; i < postsCount; i++) {
    const postData = generateBlogPost();

    const post = await prisma.post.create({
      data: postData,
    });

    console.log(`✅ Created post: ${post.title}`);
    console.log(`   📝 Slug: ${post.slug}`);
    console.log(`   📊 Published: ${post.published ? "✅" : "❌"}`);
    console.log(`   📄 Description: ${post.description?.substring(0, 60)}...`);
    console.log("");
  }

  console.log(`🎉 Successfully seeded ${postsCount} posts!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
