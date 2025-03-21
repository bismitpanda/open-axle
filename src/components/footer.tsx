import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Incubator25</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm hover:underline">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/accelerator" className="text-sm hover:underline">
                  Accelerator
                </Link>
              </li>
              <li>
                <Link href="/mentorship" className="text-sm hover:underline">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link href="/funding" className="text-sm hover:underline">
                  Funding
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-sm hover:underline">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/social" className="text-sm hover:underline">
                  Social Media
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Incubator25. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
