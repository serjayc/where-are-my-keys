import Image from "next/image";

const chapters = [
  {
    title: "The invisible helper",
    copy: "The house is never quite as empty as Leo thinks. Little things shift, familiar objects disappear, and a quiet presence leaves its mark around every corner.",
    imageSide: "left",
    label: "Act one · A presence at home",
  },
  {
    title: "If I'm to blame…",
    copy: "As the unexplained moments pile up, Leo starts to question the things he has always taken for granted — and the strange housemate he cannot see.",
    imageSide: "right",
    label: "Act two · Following the clues",
  },
  {
    title: "Milk",
    copy: "An old offering, a missing key and a meeting between worlds. Leo discovers that even the smallest gesture can change the way a home feels.",
    imageSide: "left",
    label: "Act three · An unexpected friendship",
  },
];

function StoryChapter({
  title,
  copy,
  imageSide,
  label,
  index,
}: (typeof chapters)[number] & { index: number }) {
  return (
    <article
      className={`grid items-start gap-5 sm:gap-8 md:grid-cols-2 md:gap-12 ${
        imageSide === "right" ? "md:[&>div:first-child]:order-2" : ""
      }`}
    >
      <div className="relative aspect-[1.55] overflow-hidden rounded-xl border border-border bg-card">
        <Image
          src="/house.png"
          alt={`A quiet moment from act ${index + 1} of the story`}
          fill
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-cover"
        />
      </div>
      <div
        className={`max-w-md ${imageSide === "right" ? "md:justify-self-end" : ""}`}
      >
        <p className="mb-3 text-xs uppercase tracking-[.24em] text-primary">
          {label}
        </p>
        <h2 className="max-w-sm font-serif text-3xl uppercase leading-[.94] sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
          {copy}
        </p>
      </div>
    </article>
  );
}

export default function StoryChapters() {
  return (
    <section
      aria-label="The three acts"
      className="mx-auto max-w-6xl space-y-12 sm:space-y-16 lg:space-y-18"
    >
      {chapters.map((chapter, index) => (
        <StoryChapter key={chapter.title} {...chapter} index={index} />
      ))}
    </section>
  );
}
