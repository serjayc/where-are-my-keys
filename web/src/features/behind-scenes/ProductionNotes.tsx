const process = [
  { heading: "The idea", body: "A domestic comedy built around the mystery of a forgotten key — and the little details that make a house feel alive." },
  { heading: "The Domovyk", body: "In Slavic folklore, the Domovyk is a home’s unseen guardian: a spirit who protects the family and their home." },
  { heading: "Production", body: "A small, close-knit team brought the story to the screen through careful visual choices and a playful point of view." },
];

export default function ProductionNotes() {
  return (
    <section aria-label="Film production notes" className="mx-auto grid max-w-6xl gap-7 py-8 sm:grid-cols-3 sm:gap-10 sm:py-10">
      {process.map((item) => (
        <article key={item.heading}>
          <h3 className="mb-2 font-serif text-sm uppercase tracking-[.12em] text-primary">{item.heading}</h3>
          <p className="leading-relaxed text-muted-foreground">{item.body}</p>
        </article>
      ))}
    </section>
  );
}
