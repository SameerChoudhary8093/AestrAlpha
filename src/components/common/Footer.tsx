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
    <footer className="flex flex-col justify-center items-center p-6 md:p-8" id="footer">
      
    
      <div className="w-full flex flex-col md:flex-row justify-between items-start mb-8 md:mb-16 gap-12 md:gap-0">
        
      
        <div className="flex flex-col gap-6 items-start justify-center w-full md:w-auto">
          <Link
            href="/"
            aria-label="Aestr Home"
            className="shrink-0 text-(--primary-color)"
          >
            
            <AestrIcon className="w-40 md:w-48 h-auto" />
          </Link>
          
          {/* <div
            className="text-(--primary-color) flex flex-col gap-2 items-start justify-center text-sm md:text-base"
            id="contact"
          >
            <p className="font-bold">Address:</p>
            <p className="max-w-[300px]">{FooterContact.address}</p>
          </div> */}
          
          <div className="text-(--primary-color) flex flex-col gap-2 items-start justify-center text-sm md:text-base">
            <p className="font-bold">Contact:</p>
            <Link href={`tel:${FooterContact.phone}`} className="underline hover:text-opacity-80">
              {FooterContact.phone}
            </Link>
            <Link href={`mailto:${FooterContact.email}`} className="underline hover:text-opacity-80">
              {FooterContact.email}
            </Link>
          </div>
          
          <div className="flex flex-row gap-6 items-center justify-start mt-2">
            {SocialMediaLinks.map((link) => (
              <Link
                key={link.platform}
                href={link.url}
                aria-label={link.platform}
                className="text-(--primary-color) hover:opacity-70 transition-opacity duration-300"
              >
                {/* Clone element to force size control if icon is SVG, or wrap in div */}
                <span className="scale-110">{link.icon}</span>
              </Link>
            ))}
          </div>
        </div>

       
        <div className="text-(--primary-color) grid grid-cols-2 gap-y-4 gap-x-12 md:gap-x-32 items-start justify-center pr-0 md:pr-16 w-full md:w-auto text-sm md:text-base">
          {FooterLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-bold hover:underline whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <hr className="w-full border-(--primary-color) my-4 md:my-6 opacity-30" />

     
      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-0 text-xs md:text-sm">
        <div className="text-(--primary-color) text-center md:text-left opacity-80">
          {LegalText}
        </div>
        
        <div className="flex flex-wrap flex-row gap-4 md:gap-6 items-center justify-center">
          {LegalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-(--primary-color) underline hover:no-underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}