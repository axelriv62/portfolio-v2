import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <body>
            <header>
                <menu className="flex justify-between font-semibold">
                    <Link href="/">Axel Rivière</Link>
                    <link rel="icon" href="https://avatars.githubusercontent.com/u/130988871?v=4" />
                    <div className="flex space-x-8">
                        <Link href="/about">Présentation</Link>
                        <Link href="/projects">Réalisations</Link>
                    </div>
                </menu>
            </header>
            {children}
            <footer className="flex justify-between font-semibold">
                <p>© 2025 Axel Rivière</p>
                <div className="flex space-x-6">
                    <Link href="https://github.com/axelriv62" className="duration-100 hover:scale-105"><Image src="logos/github.svg" alt="GitHub" width="30" height="30"/></Link>
                    <Link href="https://linkedin.com/in/axel-riviere-dev" className="duration-100 hover:scale-105"><Image src="logos/linkedin.svg" alt="LinkedIn" width="30" height="30"/></Link>
                    <Link href="mailto:axel.riviere.dev@gmail.com" className="duration-100 hover:scale-105"><Image src="icons/mail.svg" alt="Mail" width="30" height="30"/></Link>
                </div>
            </footer>
        </body>
        </html>
    );
}