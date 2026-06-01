import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/logo-white.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[image:var(--gradient-primary)] text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div>
            <Link to="/" aria-label="Go to homepage" className="inline-block">
              <img
                src={logo}
                alt="SG Biopharma logo"
                width={320}
                height={320}
                className="h-28 w-auto object-contain"
              />
            </Link>
            <div className="mt-4 text-xs uppercase tracking-[0.2em] text-primary-foreground/80">
              Delivering Wellness, Ensuring Access
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/85">
            A trusted pharmaceutical and medical supply distributor committed to making quality healthcare
            accessible and affordable across the Philippines.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/products" className="hover:text-white">Our Products</Link></li>
            <li><Link to="/contact" className="hover:text-white">Get a Quote</Link></li>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/sg-biopharma/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-primary-foreground transition hover:bg-white hover:text-primary-deep"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/people/SG-Biopharma/61587927110398/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-primary-foreground transition hover:bg-white hover:text-primary-deep"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/639778111186"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-primary-foreground transition hover:bg-white hover:text-primary-deep"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.487-8.413z"/>
              </svg>
            </a>
            <a
              href="viber://chat?number=%2B639778111186"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Viber"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-primary-foreground transition hover:bg-white hover:text-primary-deep"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M11.398.002C9.473.028 5.331.344 3.013 2.467 1.292 4.176.687 6.692.62 9.81c-.06 3.108-.13 8.937 5.488 10.516v2.42s-.038.974.602 1.17c.79.246 1.24-.51 1.99-1.323.41-.446.98-1.103 1.41-1.6 3.84.32 6.79-.418 7.13-.528.78-.255 5.181-.819 5.901-6.664.738-6.025-.36-9.832-2.34-11.55l-.013-.005C19.198.788 16.2.04 12.79.002c0 0-.252-.016-.793-.014l-.6.014zm.06 1.694c.46-.003.74.013.74.013 2.886.026 5.36.625 6.687 1.745 1.674 1.434 2.528 4.868 1.905 9.9-.6 4.881-4.166 5.19-4.825 5.402-.282.09-2.879.738-6.142.526 0 0-2.434 2.937-3.193 3.7-.121.123-.265.171-.36.146-.135-.034-.172-.196-.17-.43l.02-4.022C.788 17.357.85 12.396.9 9.792.957 7.183 1.451 5.046 2.901 3.617 4.857 1.842 8.353 1.687 11.398 1.696zm.027 2.51a.532.532 0 1 0 0 1.064c2.105 0 3.81 1.41 3.81 3.157a.526.526 0 1 0 1.052 0c0-2.341-2.18-4.221-4.862-4.221zm-3.586.71a1.62 1.62 0 0 0-.546.075v.008c-.402.094-1.273.487-1.815 1.198-.625.815-.638 1.788-.625 1.997.014.21.043 1.113.598 2.04 1.137 2.094 3.013 4.119 5.876 5.301.94.378 1.71.602 2.318.78.857.273 1.638.232 2.295-.144.823-.485 1.117-1.18 1.117-1.78 0-.273-.043-.41-.075-.479-.118-.223-.342-.346-.566-.479-.708-.387-1.45-.737-2.087-1.075-.546-.286-.927-.198-1.232.187l-.61.768c-.32.39-.892.336-.91.336-.06.001-1.082-.331-2.305-1.418-1.196-1.058-1.59-2.28-1.598-2.323l-.014-.026c-.018-.062.005-.182.082-.265l.61-.625c.273-.273.31-.654.024-1.21-.337-.638-.687-1.38-1.075-2.087-.13-.225-.252-.45-.475-.566a.83.83 0 0 0-.408-.084l-.077-.029zm3.586 1.398a.532.532 0 1 0 0 1.064c1.117 0 2.034.917 2.034 2.034a.526.526 0 1 0 1.052 0c0-1.732-1.354-3.098-3.086-3.098zm0 2.034a.532.532 0 1 0 0 1.064c.273 0 .532.122.732.32.198.198.32.458.32.732a.526.526 0 1 0 1.052 0c0-1.117-.917-2.116-2.104-2.116z"/>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/90">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" /><span>0917-678-8808<br />(045) 966-7012</span></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0" /><span>info@sgbiopharma.health</span></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /><span>Fortuneville 1, Baliti,<br />San Fernando, Pampanga, Philippines 2000</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-primary-foreground/80 md:px-8">
          © {new Date().getFullYear()} SG Global Healthcare Corp. dba SG Biopharma. All rights reserved.
        </div>
      </div>
    </footer>
  );
}