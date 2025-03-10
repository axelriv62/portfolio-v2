import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Home() {
    const firstProject = projects[0];

    return (
        <main className="fade-in-bottom mb-28 mr-28 ml-28">
            <div className="h-[calc(100vh-40px)] flex flex-col justify-center items-center w-full">
                <h3 className="text-3xl font-semibold p-2">Bonjour, je suis</h3>
                <h1 className="text-9xl font-semibold p-2">Axel Rivière</h1>
                <h2 className="text-5xl font-semibold p-2">Développeur Full-Stack</h2>
                <button className="border font-bold text-xs py-1.5 px-1.5 rounded-full mt-8 border-stone-500 w-48 flex items-center space-x-2 duration-100 hover:scale-105">
                    <Link href="/about" className="flex items-center space-x-5">
                        <Image src="/profile-picture.png" alt="Photo de profile" width="32" height="32" className="rounded-full" />
                        <p>Présentation</p>
                        <Image src="/icons/arrow.png" width="16" height="16" alt="Arrow"></Image>
                    </Link>
                </button>
            </div>
            <div className="mb-48">
                <h3 className="text-2xl font-semibold p-1">Dernière réalisation</h3>
                <div className="flex w-full mt-24 justify-center">
                    <div className="flex flex-col ">
                        <Image src={firstProject.image} alt={firstProject.title} width={600} height={500} className="rounded-lg shadow-lg duration-300 hover:scale-105" />
                    </div>
                    <div className="flex flex-col ml-36">
                        <h4 className="text-2xl font-bold mt-20">{firstProject.title}</h4>
                        <p className="mt-2 text-lg">{firstProject.description}</p>
                        <ul className="mt-4 flex space-x-2">
                            {firstProject.tags.map((tag, i) => (
                                <li key={i} className="p-2 rounded font-semibold bg-stone-700 text-white duration-100 hover:scale-105">{tag}</li>
                            ))}
                        </ul>
                        <a href={firstProject.link} className="mt-4 inline-block font-semibold">En savoir plus</a>
                    </div>
                </div>
            </div>
        </main>
    );
}