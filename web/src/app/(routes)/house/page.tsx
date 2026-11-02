import Container from "@/components/shared/Container";
import PageHeading from "@/components/shared/PageHeading";
import GameWrapper from "@/features/house/GameWrapper";

export default function HousePage() {
  return (
    <Container className="py-24 lg:pt-32">
      <PageHeading title="Come in." titleHighlighted="Look closer." />
      <GameWrapper />
    </Container>
  );
}
