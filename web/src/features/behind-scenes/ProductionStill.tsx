import Image from "next/image";

export default function ProductionStill() {
  return (
    <section aria-label="A still from the film" className="relative mx-auto aspect-[2.8] max-w-6xl overflow-hidden rounded-xl border border-border bg-card">
      <Image
        src="/house.png"
        alt="A cinematic detail from the film"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
    </section>
  );
}
