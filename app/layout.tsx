import "./globals.css";
import Link from "next/link";

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
                        <Link href="/#">Réalisations</Link>
                        <Link href="/#">Blog</Link>
                    </div>
                </menu>
            </header>
            {children}
            <footer className="flex justify-between font-semibold">
                <p>© 2025 Axel Rivière</p>
                <div className="flex space-x-8">
                    <Link href="https://github.com/axelriv62">GitHub</Link>
                    <Link href="https://linkedin.com/in/axel-riviere-dev">LinkedIn</Link>
                    <Link href="mailto:axel.riviere.dev@gmail.com">Mail</Link>
                </div>
            </footer>
        </body>
        </html>
    );
}