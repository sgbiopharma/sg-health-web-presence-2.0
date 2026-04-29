import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[#E0F1DF] text-primary-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div>
            <img
              src={logo}
              alt="SG Biopharma logo"
              width={480}
              height={480}
              className="h-32 w-auto object-contain"
            />
            <div className="mt-4 text-xs uppercase tracking-[0.2em] text-primary-deep/70">
              Delivering Wellness, Ensuring Access
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-deep/80">
            A trusted pharmaceutical and medical supply distributor committed to making quality healthcare
            accessible and affordable across the Philippines.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-deep/80">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/products" className="hover:text-primary">Our Products</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-deep/85">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" /><span>0917-6788-808&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;0977-811-1186</span></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0" /><span>sgbiopharma.ph@gmail.com</span></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /><span>B6 L6 Sapphire St., Fortuneville 1, Baliti,<br />San Fernando, Pampanga, Philippines 2000</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-deep/15">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-primary-deep/70 md:px-8">
          © {new Date().getFullYear()} SG Global Healthcare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}