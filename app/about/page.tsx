import Link from "next/link";
import Image from "next/image";
import { competences } from "@/data/competences";
import { formations, experiences, certifications } from "@/data/experiences";

export default function About() {
    const half = Math.ceil(competences.length / 2);
    const firstHalf = competences.slice(0, half);
    const secondHalf = competences.slice(half);

    return (
        <main className="fade-in-bottom w-3/4 mx-auto mt-28 mb-28">
            <div className="flex space-x-12">
                <div className="flex flex-col items-center">
                    <Image src="/profile-picture.png" alt="Profile picture" width={500} height={500} className="border rounded-full border-stone-500 object-cover" />
                    <div className="flex space-x-5 mt-5 items-center ">
                        <h3 className="text-2xl font-semibold p-1">Langues</h3>
                        <div className="flex space-x-5">
                            <Image src="icons//french.svg" alt="France" width="40" height="10" title="Français" className="object-cover rounded-xl border border-stone-500 duration-100 hover:scale-105" />
                            <Image src="icons/english.svg" alt="English" width="40" height="10" title="English" className="object-cover rounded-xl border border-stone-500 duration-100 hover:scale-105" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-grow mt-5">
                    <div className="flex space-x-2">
                        <button className="border font-bold text-xs py-2 px-4 rounded-xl border-stone-500 flex items-center space-x-2 duration-100 hover:scale-105">
                            <Image src="icons/resume.svg" alt="CV" width={20} height={20} />
                            <Link href="/resume.pdf">CV</Link>
                        </button>
                        <button className="border font-bold text-xs py-2 px-4 rounded-xl border-stone-500 flex items-center space-x-2 duration-100 hover:scale-105">
                            <Image src="logos/github.svg" alt="GitHub" width={20} height={20} />
                            <Link href="https://github.com/axelriv62">GitHub</Link>
                        </button>
                        <button className="border font-bold text-xs py-2 px-4 rounded-xl border-stone-500 flex items-center space-x-2 duration-100 hover:scale-105">
                            <Image src="logos/linkedin.svg" alt="LinkedIn" width={20} height={20} />
                            <Link href="https://linkedin.com/in/axel-riviere-dev">LinkedIn</Link>
                        </button>
                        <button className="border font-bold text-xs py-2 px-4 rounded-xl border-stone-500 flex items-center space-x-2 duration-100 hover:scale-105">
                            <Image src="icons/mail.svg" alt="Mail" width={20} height={20} />
                            <Link href="mailto:axel.riviere.dev@gmail.com">Mail</Link>
                        </button>
                    </div>
                    <div>
                        <h1 className="text-8xl font-semibold p-1 mt-3">Axel Rivière</h1>
                        <h2 className="text-4xl font-semibold p-1">Développeur Full-Stack</h2>
                        <p className="font-medium mt-5">
                            Je m’appelle Axel, je suis étudiant en 2ᵉ année de BUT Informatique à l’IUT de Lens et passionné par le développement d’applications.
                            Je recherche une alternance dès juillet 2025 pour ma 3ᵉ année afin de mettre en pratique mes compétences et approfondir mon expérience.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-semibold p-1 mt-20">Compétences</h3>
                <ul className="flex justify-between flex-wrap mt-4">
                    {firstHalf.map((competence) => (
                        <li key={competence.name} className="p-2 flex items-center justify-center duration-100 hover:scale-110">
                            <Image src={competence.icon} alt={competence.name} title={competence.name} width={50} height={50} />
                        </li>
                    ))}
                </ul>
                <ul className="flex justify-between flex-wrap mt-4">
                    {secondHalf.map((competence) => (
                        <li key={competence.name} className="p-2 flex items-center justify-center duration-100 hover:scale-110">
                            <Image src={competence.icon} alt={competence.name} title={competence.name} width={50} height={50} />
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex space-x-12 mt-20">
                <div className="flex flex-col w-1/2">
                    <h3 className="text-2xl font-semibold">Formations</h3>
                    <ul className="flex-grow">
                        {formations.map((formation) => (
                            <li key={formation.title} className="mt-10">
                                <p className="mt-1">{formation.date}</p>
                                <h4 className="text-lg font-bold mt-1">{formation.title}</h4>
                                <p className="mt-1">{formation.place}</p>
                                <ul className="p-2 mt-3">
                                    {formation.details?.split('\n').map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                    <h3 className="text-2xl font-semibold mt-10">Certifications</h3>
                    <ul className="flex-grow">
                        {certifications.map((certification) => (
                            <li key={certification.title} className="mt-10">
                                <p className="mt-1">{certification.date}</p>
                                <h4 className="text-lg font-bold mt-1">{certification.title}</h4>
                                <p className="mt-1">{certification.place}</p>
                                <ul className="mt-1">
                                    {certification.details?.split('\n').map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col w-1/2">
                    <h3 className="text-2xl font-semibold">Expériences</h3>
                    <ul className="flex-grow">
                        {experiences.map((experience) => (
                            <li key={experience.title} className="mt-10">
                                <p className="mt-1">{experience.date}</p>
                                <h4 className="text-lg font-bold mt-1">{experience.title}</h4>
                                <p className="mt-1">{experience.place}</p>
                                <ul className="mt-1">
                                    {experience.details?.split('\n').map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}