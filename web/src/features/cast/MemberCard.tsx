import { Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  item: {
    name: string;
    role: string;
    src: string;
    socials?: { platform: string; url: string }[];
  };
}

export default function MemberCard({ item }: Props) {
  const { name, role, src, socials = [] } = item;
  return (
    <article className="group relative isolate h-full min-h-60 w-full overflow-hidden rounded-xl">
      <Image
        src={src}
        width={800}
        height={600}
        alt={name}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-primary">
            {role}
          </p>
          <h2 className="font-serif text-xl font-semibold uppercase leading-tight md:text-2xl">
            {name}
          </h2>
        </div>

        {socials.length > 0 && (
          <div className="flex shrink-0 items-center gap-3">
            {socials.map((social) => (
              <Link
                key={social.platform}
                href={social.url}
                target="_blank"
                className=" flex size-10 items-center justify-center rounded-full border border-border bg-secondary text-primary opacity-100 transition-all duration-300 hover:border-primary md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
              >
                <LinkIcon className="size-5" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
