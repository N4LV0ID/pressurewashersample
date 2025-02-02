import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <nav className="bg-blue-600 p-4 text-white flex justify-between">
          <h1 className="text-xl font-bold">Pressure Washing Pros</h1>
          <div>
            <Link href="/" className="mr-4">Home</Link>
            <Link href="/services" className="mr-4">Services</Link>
            <Link href="/blog" className="mr-4">Blog</Link>
            <Link href="/contact" className="mr-4">Contact Us</Link>
          </div>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
