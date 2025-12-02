import Link from "next/link";
import AestrIcon from "@/components/icons/Aestr";
import { NavigationLinks, NavigationButton } from "@/data/navigation";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center sticky top-0 px-8 py-4 z-50 bg-background">
      <Link
        href="/"
        aria-label="Aestr Home"
        className="shrink-0 text-(--primary-color)"
      >
        <AestrIcon className="w-48 h-auto" />
      </Link>
      <div className="flex flex-row items-center justify-center gap-4">
        {NavigationLinks.map((link) => (
          <Link key={link.href} href={link.href} className="nav-link">
            {link.label}
          </Link>
        ))}
        <Link href="https://aestr-alpha-6vl6.vercel.app/" className="button-primary">{NavigationButton}</Link>
      </div>
    </nav>
  );
}
