import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <main className="p-64">
            <div className="flex space-x-12">
                <div className="flex flex-col space-y-4">
                    <Image src="/file.svg" alt="Profile picture" width={400} height={400} className="border rounded-full border-stone-500" />
                    <div className="flex space-x-4">
                        <h3 className="text-2xl font-semibold p-1">Langues</h3>
                        <p className="font-medium p-2">FR</p>
                        <p className="font-medium p-2">EN</p>
                    </div>
                </div>
                <div className="flex flex-col flex-grow space-y-4">
                    <div className="flex space-x-2">
                        <button className="border font-bold text-xs py-2 px-4 rounded-full mt-4 border-stone-500 w-14">
                            <Link href="#">CV</Link>
                        </button>
                        <button className="border font-bold text-xs py-2 px-4 rounded-full mt-4 border-stone-500 w-20">
                            <Link href="https://github.com/axelriv62">GitHub</Link>
                        </button>
                        <button className="border font-bold text-xs py-2 px-4 rounded-full mt-4 border-stone-500 w-24">
                            <Link href="https://linkedin.com/in/axel-riviere-dev">LinkedIn</Link>
                        </button>
                        <button className="border font-bold text-xs py-2 px-4 rounded-full mt-4 border-stone-500 w-16">
                            <Link href="mailto:axel.riviere.dev@gmail.com">Mail</Link>
                        </button>
                    </div>
                    <div>
                        <h1 className="text-8xl font-semibold p-1 mt-3">Axel Rivière</h1>
                        <h2 className="text-4xl font-semibold p-1">Développeur Full-Stack</h2>
                        <p className="font-medium p-1 mt-5">Je m’appelle Axel, je suis étudiant en 2ᵉ année de BUT Informatique à l’IUT de Lens et passionné par le développement d’applications. Je recherche un stage de 8 à 10 semaines dès le 28 avril 2025 pour mettre en pratique mes compétences et approfondir mon expérience.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}