import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          Incubator25
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/about" className="text-sm font-medium hover:underline">
            About
          </Link>
          <Link
            href="/programs"
            className="text-sm font-medium hover:underline"
          >
            Programs
          </Link>
          <Link href="/funding" className="text-sm font-medium hover:underline">
            Funding
          </Link>
          <Link
            href="/community"
            className="text-sm font-medium hover:underline"
          >
            Community
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline">Login</Button>
          <Button className="bg-green-600 hover:bg-green-700">Apply</Button>
        </div>
      </div>
    </header>
  );
}
