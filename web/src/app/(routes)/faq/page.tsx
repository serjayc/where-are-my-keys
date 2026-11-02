import Container from "@/components/shared/Container";
import PageHeading from "@/components/shared/PageHeading";
import FAQList from "../../../pages/faq/FAQList";

export default function FAQPage() {
  return (
    <Container className="py-16 lg:pt-32">
      <PageHeading title="Before you" titleHighlighted="Knock." />
      <FAQList />
    </Container>
  );
}
