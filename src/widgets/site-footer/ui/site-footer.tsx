import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconPhone,
  IconMail,
  IconClock,
  IconMapPin,
  IconShieldCheck,
} from '@tabler/icons-react';
import { siteConfig } from '@/src/shared/config/site-config';

export const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-dark)] text-[var(--color-text-on-dark)] pt-14 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          {/* Brand & Mission */}
          <div className="space-y-3">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-white tracking-tight">
                BrightNest{' '}
                <span className="text-[var(--color-brand-teal)]">Pro</span>
              </span>
            </Link>
            <p className="text-sm text-white/75 leading-relaxed">
              Professional home care services in Edmonton and surrounding areas.
              High quality cleaning, handyman repairs, and painting with care and reliability.
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
                  href="/about"
                  className="hover:text-[var(--color-brand-teal)] transition-colors"
                >
                  About Our Family
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-[var(--color-brand-teal)] font-semibold hover:underline transition-colors flex items-center gap-1.5"
                >
                  Book Online &rarr;
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
                  href="/#contact"
                  className="hover:text-[var(--color-brand-teal)] transition-colors"
                >
                  Free Quote Form
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
              <li>Residential &amp; Deep Cleaning</li>
              <li>Move-In / Move-Out Cleans</li>
              <li>Handyman &amp; Home Repairs</li>
              <li>Interior &amp; Exterior Painting</li>
              <li>Power Washing Maintenance</li>
            </ul>
          </div>

          {/* Contact Details */}
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

            <div className="flex gap-3 pt-2">
              <a
                href="https://facebook.com/brightnestpro"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BrightNest Pro on Facebook"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              >
                <IconBrandFacebook size={20} />
              </a>
              <a
                href="https://instagram.com/brightnestpro"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BrightNest Pro on Instagram"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              >
                <IconBrandInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            &copy; {currentYear} BrightNest Pro Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/book" className="hover:text-white transition-colors">
              Book Service
            </Link>
            <Link href="/#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <span>Edmonton, Alberta</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
