import Container from "@/components/shared/Container";
import PageHeading from "@/components/shared/PageHeading";
import BehindScenesHero from "@/features/behind-scenes/BehindScenesHero";
import ProductionNotes from "@/features/behind-scenes/ProductionNotes";
import ProductionStill from "@/features/behind-scenes/ProductionStill";

export default function BehindScenesPage() {
  return (
    <Container className="py-16 lg:pt-32">
      <PageHeading title="Making the" titleHighlighted="Invisible visible." />
      <BehindScenesHero />
      <ProductionNotes />
      <ProductionStill />
    </Container>
  );
}
