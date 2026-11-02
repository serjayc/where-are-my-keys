import Container from "@/components/shared/Container";
import PageHeading from "@/components/shared/PageHeading";
import Members from "@/pages/cast/Members";

export default function CastPage() {
  return (
    <Container className="py-16 lg:pt-32">
      <PageHeading title="The ones who" titleHighlighted="Live here." />
      <Members />
    </Container>
  );
}
