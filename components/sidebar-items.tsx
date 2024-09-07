"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

type Props = {
  label: string;
  href: string;
  iconSrc: string;
  isOpen?: boolean;
};

export const SidebarItem = ({
  label,
  href,
  iconSrc,
  isOpen = true,
}: Props) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      className="justify-start h-[52px]  bg-slate-100 text-black hover:bg-slate-300"
      asChild
    >
      <Link href={href}>
      <Image
          src={iconSrc}
          alt={label}
          className="mr-5"
          height={20}
          width={20}
        />
        {isOpen && (
            <span className="ml-2">{label}</span> // Use span to wrap the label text
          )}
      </Link>
    </Button>
  );
};