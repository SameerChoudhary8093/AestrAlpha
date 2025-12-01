import {
  FooterContact,
  FooterLinks,
  SocialMediaLinks,
  LegalLinks,
  LegalText,
} from "@/data/footer";
import Link from "next/link";
import AestrIcon from "@/components/icons/Aestr";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center p-8">
      <div className="w-full flex flex-row justify-between items-start mb-16">
        <div className="flex flex-col gap-6 items-start justify-center">
          <Link
            href="/"
            aria-label="Aestr Home"
            className="shrink-0 text-(--primary-color)"
          >
            <AestrIcon className="w-48 h-auto" />
          </Link>
          <div className="text-(--primary-color) flex flex-col gap-2 items-start justify-center">
            <p className="font-bold">Address:</p>
            <p>{FooterContact.address}</p>
          </div>
          <div className="text-(--primary-color) flex flex-col gap-2 items-start justify-center">
            <p className="font-bold">Contact:</p>
            <Link href={`tel:${FooterContact.phone}`} className="underline">
              {FooterContact.phone}
            </Link>
            <Link href={`mailto:${FooterContact.email}`} className="underline">
              {FooterContact.email}
            </Link>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center">
            {SocialMediaLinks.map((link) => (
              <Link
                key={link.platform}
                href={link.url}
                aria-label={link.platform}
                className="text-(--primary-color) hover:opacity-90 transition-colors duration-300"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="text-(--primary-color) grid grid-cols-2 gap-y-2 gap-x-32 items-start justify-center pr-16">
          {FooterLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-bold hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <hr className="w-full border-(--primary-color) my-4" />
      <div className="w-full flex flex-row justify-between items-center">
        <div className="text-(--primary-color)">{LegalText}</div>
        <div className="flex flex-row gap-4 items-center justify-center">
          {LegalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-(--primary-color) underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
