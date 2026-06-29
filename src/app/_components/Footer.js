import Link from "next/link";
import { Globe } from "lucide-react";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="w-full py-12 md:py-28 px-6 md:px-28 bg-secondary text-primary">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        {/* Logo + Navigation */}
        <div className="flex gap-10">
          <Logo type={"primary"} />

          <div className="flex gap-10 text-h5">
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/recipes" className="underline hover:text-white">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/blog" className="underline hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/support" className="underline hover:text-white">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="/profile" className="underline hover:text-white">
                  Your Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Description */}
        <p className="text-body text-primary max-w-[500px]">
          Join us on our journey to make meal planning simple and joyful.
          Connect with us, explore our FAQs for quick answers, or drop us a
          message anytime.
        </p>

        {/* Icons */}
        <div className="flex md:flex-col gap-3">
          <a
            href="#"
            aria-label="Website"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-105 transition"
          >
            <Globe className="w-12 h-12 text-secondary" />
          </a>

          <a
            href="#"
            aria-label="Website"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-105 transition"
          >
            <Globe className="w-12 h-12 text-secondary" />
          </a>

          <a
            href="#"
            aria-label="Website"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-105 transition"
          >
            <Globe className="w-12 h-12 text-secondary" />
          </a>
        </div>
      </div>

      <div className="mt-10 pt-6 text-h5 text-white flex flex-wrap items-center gap-1">
        <span>
          © {new Date().getFullYear()} AIChefMate. All rights reserved.
        </span>
        <span>|</span>
        <Link href="/privacy" className="underline hover:text-white">
          Privacy Policy
        </Link>
        <span>|</span>
        <Link href="/terms" className="underline hover:text-white">
          Terms of Use
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
