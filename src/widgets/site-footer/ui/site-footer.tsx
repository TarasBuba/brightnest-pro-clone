import Link from 'next/link';
import {
  Phone as IconPhone,
  Mail as IconMail,
  Clock as IconClock,
  MapPin as IconMapPin,
  ShieldCheck as IconShieldCheck,
  ArrowRight as IconArrowRight,
} from 'lucide-react';
import { FacebookIcon as IconBrandFacebook, InstagramIcon as IconBrandInstagram } from '@/src/shared/ui/brand-icons';
import { siteConfig } from '@/src/shared/config/site';

export const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="reveal-on-scroll bg-[var(--color-bg-dark)] text-[var(--color-text-on-dark)] pt-14 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          {/* Brand & Mission */}
          <div className="space-y-3">
            <Link href="/" className="inline-block" aria-label="BrightNest Pro Services Home">
              <span className="text-xl font-bold text-white tracking-tight">
                BrightNest{' '}
                <span className="text-[var(--color-brand-teal)]">Pro</span>
              </span>
            </Link>
            <p className="text-sm text-white/75 leading-relaxed">
              Professional home care services in Edmonton and surrounding areas.
              High quality handyman repairs and painting with care and reliability.
            </p>
            <div className="flex items-center gap-2 text-xs text-[var(--color-brand-teal)] font-medium pt-1">
              <IconShieldCheck size={16} />
              <span>Licensed &amp; Insured in Alberta</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <Link
                  href="/#services"
                  className="hover:text-[var(--color-brand-teal)] transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#work"
                  className="hover:text-[var(--color-brand-teal)] transition-colors"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[var(--color-brand-teal)] transition-colors"
                >
                  About Our Family
                </Link>
              </li>
              <li>
                <Link
                  href="/#reviews"
                  className="hover:text-[var(--color-brand-teal)] transition-colors"
                >
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="hover:text-[var(--color-brand-teal)] transition-colors"
                >
                  Get a Free Quote
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-[var(--color-brand-teal)] font-semibold hover:underline transition-colors flex items-center gap-1.5"
                >
                  <span>Book Online</span>
                  <IconArrowRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <Link href="/#services" className="hover:text-[var(--color-brand-teal)] transition-colors">
                  Handyman &amp; Minor Repairs
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[var(--color-brand-teal)] transition-colors">
                  Interior &amp; Exterior Painting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Direct Booking Action */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <div className="space-y-2.5 text-sm text-white/75">
              <div className="flex items-start gap-2">
                <IconMapPin size={18} className="text-[var(--color-brand-teal)] shrink-0 mt-0.5" />
                <address className="not-italic">
                  Edmonton, AB &amp; surrounding areas
                </address>
              </div>
              <div className="flex items-center gap-2">
                <IconPhone size={18} className="text-[var(--color-brand-teal)] shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <IconMail size={18} className="text-[var(--color-brand-teal)] shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <IconClock size={18} className="text-[var(--color-brand-teal)] shrink-0" />
                <span>{siteConfig.hours}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/book"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-brand-teal)] px-4 py-2 text-xs font-semibold text-[var(--color-brand-navy-deep)] transition-colors hover:bg-white"
              >
                <span>Contact Us / Book Now</span>
                <IconArrowRight size={14} />
              </Link>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BrightNest Pro on Facebook"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              >
                <IconBrandFacebook width={20} height={20} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BrightNest Pro on Instagram"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              >
                <IconBrandInstagram width={20} height={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar with all primary routes */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            &copy; {currentYear} BrightNest Pro Services. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <Link href="/book" className="hover:text-white transition-colors font-medium text-[var(--color-brand-teal)]">
              Book Online / Get Quote
            </Link>
            <Link href="/#services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/#work" className="hover:text-white transition-colors">
              Our Work
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/#reviews" className="hover:text-white transition-colors">
              Reviews
            </Link>
            <span>Edmonton, Alberta</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
