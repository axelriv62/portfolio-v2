import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
            <header>
                <menu className="flex justify-between font-semibold">
                    <Link href="/">Axel Rivière</Link>
                    <div className="flex space-x-8">
                        <Link href="/about">Présentation</Link>
                        <Link href="/projects">Réalisations</Link>
                        <Link href="/blog">Blog</Link>
                    </div>
                </menu>
            </header>
            {children}
            <footer className="flex justify-between font-semibold">
                <p>© 2025 Axel Rivière</p>
                <div className="flex space-x-6">
                    <Link href="https://github.com/axelriv62"><Image src="/github.svg" alt="GitHub" width="30" height="30"/></Link>
                    <Link href="https://linkedin.com/in/axel-riviere-dev"><Image src="/linkedin.svg" alt="LinkedIn" width="30" height="30"/></Link>
                    <Link href="mailto:axel.riviere.dev@gmail.com"><Image src="/mail.svg" alt="Mail" width="30" height="30"/></Link>
                </div>
            </footer>
        </body>
        </html>
    );
}