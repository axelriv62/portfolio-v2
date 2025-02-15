import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Home() {
    const firstProject = projects[0];

    return (
        <main className="mb-28 mr-28 ml-28">
            <div className="h-screen flex flex-col justify-center">
                <h3 className="text-2xl font-semibold p-1">Bonjour, je suis</h3>
                <h1 className="text-8xl font-semibold p-1">Axel Rivière</h1>
                <h2 className="text-4xl font-semibold p-1">Développeur Full-Stack</h2>
                <button className="border font-bold text-xs py-2 px-4 rounded-full mt-4 border-stone-500 w-32">
                    <Link href="#">Présentation</Link>
                </button>
            </div>
            <div>
                <h3 className="text-2xl font-semibold p-1">Dernière réalisation</h3>
                <div className="flex w-full mt-24 p-8">
                    <div className="flex flex-col items-center w-1/2">
                        <Image src={firstProject.image} alt={firstProject.title} width={400} height={200} className="rounded-lg shadow-lg" />
                    </div>
                    <div className="flex flex-col w-1/2 ml-8 mr-8">
                        <h4 className="text-2xl font-bold mt-1">{firstProject.title}</h4>
                        <p className="mt-2 text-lg">{firstProject.description}</p>
                        <ul className="mt-4 flex space-x-2">
                            {firstProject.tags.map((tag, i) => (
                                <li key={i} className="p-2 rounded font-semibold bg-stone-700 text-white">{tag}</li>
                            ))}
                        </ul>
                        <a href={firstProject.link} className="mt-4 inline-block font-semibold">En savoir plus</a>
                    </div>
                </div>
            </div>
            <div className="mt-32">
                <h3 className="text-2xl font-semibold p-1">Derniers articles</h3>
            </div>
        </main>
    );
}