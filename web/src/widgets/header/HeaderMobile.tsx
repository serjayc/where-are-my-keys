"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight, Key, CalendarFold } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HEADER_DATA } from "@/config/header.data";

export default function HeaderMobile() {
  const pathname = usePathname();

  if (!pathname) return null;

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button variant="outline" size="icon-lg">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader className="flex-row items-center justify-between space-y-0 border-b border-border/60 px-6 py-5">
          <SheetTitle>
            <SheetClose asChild>
              <Link href="/" className="flex items-center gap-2 text-primary">
                <Key className="size-7" />
                <span className="font-mono text-sm font-semibold uppercase">
                  Where are <br /> my keys?
                </span>
              </Link>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex-1 overflow-y-auto px-4">
          <ul className="flex flex-col gap-1">
            {HEADER_DATA.map((item, index) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(`${item.href}/`));

              return (
                <li key={item.href}>
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      className={`
                      group relative flex items-center justify-between
                      rounded-xl px-3 py-3.5 text-[15px] font-medium
                      transition-colors duration-200
                      ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/75 hover:bg-muted hover:text-foreground"
                      }
                    `}
                    >
                      <span className="flex items-center gap-4">
                        <span
                          className={`w-5 text-xs tabular-nums ${
                            isActive
                              ? "text-primary"
                              : "text-muted-foreground/60"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {item.label}
                      </span>

                      <ArrowUpRight
                        className={`size-4 transition-all duration-200 ${
                          isActive
                            ? "text-primary"
                            : "text-muted-foreground/0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-muted-foreground"
                        }`}
                      />

                      {isActive && (
                        <span className="absolute bottom-3 left-0 top-3 w-0.5 rounded-full bg-primary" />
                      )}
                    </Link>
                  </SheetClose>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto border-t border-border p-4">
          <Button asChild size="lg" className="w-full rounded-xl">
            <SheetClose asChild>
              <Link href="/#events">
                <CalendarFold className="size-4" />
                Upcoming Events
                <ArrowUpRight className="ml-auto size-4" />
              </Link>
            </SheetClose>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
