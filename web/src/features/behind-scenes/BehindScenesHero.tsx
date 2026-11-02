import Image from "next/image";

export default function BehindScenesHero() {
  return (
    <section className="mx-auto grid max-w-6xl items-start gap-5 border-b border-border pb-9 sm:gap-8 sm:pb-12 md:grid-cols-[1.2fr_.8fr] md:gap-12">
      <div className="relative aspect-[1.55] overflow-hidden rounded-xl border border-border bg-card">
        <Image
          src="/hero-bg.png"
          alt="Behind the camera on the film set"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover"
        />
      </div>
      <div className="max-w-md pt-1 md:pt-2">
        <h2 className="max-w-xs font-serif text-3xl uppercase leading-[.95] sm:text-4xl">Behind the camera</h2>
        <p className="mt-4 font-serif text-lg italic leading-relaxed text-muted-foreground">
          “I wanted the house to feel like a character — living, watchful and just a little odd.”
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          A glimpse at the thinking and craft that shaped the world of Where Are My Keys?
        </p>
      </div>
    </section>
  );
}
