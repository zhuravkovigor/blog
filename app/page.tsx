import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";

export default async function Home() {
  return (
    <Container>
      <Typography
        variant="h2"
        className="text-center leading-relaxed text-zinc-400 font-medium"
      >
        <span className="text-white">Hi 👋🏻 I'm Igor, and this is my blog.</span>{" "}
        Here, I share through my writing my experience as a developer, my ideas
        and my thuds about tech stuff.
      </Typography>

      <div>
        <Typography variant="h4" className="mt-42">
          Latest news
        </Typography>
      </div>
    </Container>
  );
}
