import { DEVELOPERS_DATA } from "@/config/developers.data";
import Image from "next/image";
import { Link as LinkIcon } from "lucide-react";

function DeveloperCard({ item }: { item: (typeof DEVELOPERS_DATA)[number] }) {
  const { name, role, src, socials = [] } = item;

  return (
    <article className="group relative isolate aspect-3/4 max-w-md mx-auto h-full w-full overflow-hidden">
      <Image
        src={src}
        width={800}
        height={600}
        alt={name}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-6 md:p-8">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-primary">
            {role}
          </p>
          <h2 className="font-serif text-3xl font-semibold uppercase leading-tight md:text-4xl">
            {name}
          </h2>
        </div>

        {socials.length > 0 && (
          <div className="flex shrink-0 items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                className="flex size-10 items-center justify-center rounded-full border border-border bg-secondary text-primary opacity-100 transition-all duration-300 hover:border-primary md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
              >
                <LinkIcon className="size-5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Developers() {
  return (
    <section className="mx-auto max-w-4xl grid md:grid-cols-2 gap-4">
      {DEVELOPERS_DATA.map((item) => (
        <DeveloperCard key={item.name} item={item} />
      ))}
    </section>
  );
}
