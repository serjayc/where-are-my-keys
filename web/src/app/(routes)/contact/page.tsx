import Container from "@/components/shared/Container";
import PageHeading from "@/components/shared/PageHeading";
import ContactForm from "@/pages/contact/ContactForm";

export default function ContactPage() {
  return (
    <Container className="py-16 lg:pt-32">
      <div className="flex flex-col lg:flex-row items-start justify-between lg:gap-8">
        <PageHeading title="Get in" titleHighlighted="Touch." />
        <ContactForm />
      </div>
    </Container>
  );
}
