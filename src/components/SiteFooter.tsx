import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-white.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[image:var(--gradient-primary)] text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div>
            <img
              src={logo}
              alt="SG Biopharma logo"
              width={320}
              height={320}
              className="h-28 w-auto object-contain"
            />
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
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/90">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" /><span>0917-6788-808&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;0977-811-1186</span></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0" /><span>sgbiopharma.ph@gmail.com</span></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /><span>Sapphire St., Fortuneville 1, Baliti,<br />San Fernando, Pampanga, Philippines 2000</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-primary-foreground/80 md:px-8">
          © {new Date().getFullYear()} SG Global Healthcare dba SG Biopharma. All rights reserved.
        </div>
      </div>
    </footer>
  );
}