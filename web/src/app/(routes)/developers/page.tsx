import Container from "@/components/shared/Container";
import PageHeading from "@/components/shared/PageHeading";
import Developers from "@/features/developers/Developers";

export default function DevelopersPage() {
  return (
    <Container className="py-16 lg:pt-32">
      <PageHeading title="Secrets" titleHighlighted="Held by." />
      <Developers />
    </Container>
  );
}
