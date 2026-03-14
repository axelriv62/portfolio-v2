'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { competences } from "@/data/competences";
import { formations, experiences, certifications } from "@/data/experiences";

export default function About() {
    const third = Math.ceil(competences.length / 3);
    const firstHalf = competences.slice(0, third);
    const secondHalf = competences.slice(third, 2 * third);
    const thirdHalf = competences.slice(2 * third);
    const LOGO_SIZE = 60;

    const [showMoreContent, setShowMoreContent] = useState(false);

    function switchMoreContent() {
        setShowMoreContent(!showMoreContent);
    }

    const CompetenceItem = ({ competence }: { competence: typeof competences[0] }) => (
        <li className="p-2 flex items-center justify-center duration-100 hover:scale-110 group relative z-0 hover:z-50">
            <Image
                src={competence.icon}
                alt={competence.name}
                width={LOGO_SIZE}
                height={LOGO_SIZE}
                loading="lazy"
            />
            <div className="absolute bottom-full mb-2 hidden group-hover:block px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-sm whitespace-nowrap">
                {competence.name}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rotate-45 -bottom-1"></div>
            </div>
        </li>
    );

    return (
        <main className="fade-in-bottom w-3/4 mx-auto mt-28 mb-28">
            <div className="md:flex md:space-x-12 md:items-center">
                <div className="flex flex-col items-center lg:flex-shrink-0">
                    <Image
                        src="/profile-picture.png"
                        alt="Profile picture"
                        width={320}
                        height={320}
                        className="border rounded-full border-stone-500 object-cover w-64 h-64 md:w-80 md:h-80"
                        priority
                    />
                    <div className="flex space-x-5 mt-5 items-center">
                        <h3 className="text-2xl font-semibold p-1">Langues</h3>
                        <div className="flex space-x-5">
                            <div className="relative group">
                                <Image src="/icons/french.svg" alt="France" width={32} height={32} title="Français" className="object-cover rounded-xl border border-stone-500 duration-100 hover:scale-105 h-8 w-10" />
                                <div className="absolute bottom-full mb-2 hidden group-hover:block px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-sm whitespace-nowrap left-1/2 transform -translate-x-1/2">
                                    Français - Maternelle
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rotate-45 -bottom-1"></div>
                                </div>
                            </div>
                            <div className="relative group">
                                <Image src="/icons/english.svg" alt="English" width={32} height={32} title="English" className="object-cover rounded-xl border border-stone-500 duration-100 hover:scale-105 h-8 w-10" />
                                <div className="absolute bottom-full mb-2 hidden group-hover:block px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-sm whitespace-nowrap left-1/2 transform -translate-x-1/2">
                                    English - Niveau B2
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rotate-45 -bottom-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="flex flex-wrap xl:space-x-2">
                        <Link href="/resume-axel-riviere.pdf">
                            <button className="border font-bold text-xs py-2 px-4 rounded-xl border-stone-500 flex items-center space-x-2 duration-100 hover:scale-105">
                                <Image src="icons/resume.svg" alt="CV" width={20} height={20} />
                                <p>CV</p>
                            </button>
                        </Link>
                        <Link href="https://github.com/axelriv62">
                            <button className="border font-bold text-xs py-2 px-4 rounded-xl border-stone-500 flex items-center space-x-2 duration-100 hover:scale-105">
                                <Image src="logos/github.svg" alt="GitHub" width={20} height={20} />
                                <p>GitHub</p>
                            </button>
                        </Link>
                        <Link href="https://linkedin.com/in/axel-riviere-dev">
                            <button className="border font-bold text-xs py-2 px-4 rounded-xl border-stone-500 flex items-center space-x-2 duration-100 hover:scale-105">
                                <Image src="logos/linkedin.svg" alt="LinkedIn" width={20} height={20} />
                                <p>LinkedIn</p>
                            </button>
                        </Link>
                        <Link href="mailto:axel.riviere.dev@gmail.com">
                            <button className="border font-bold text-xs py-2 px-4 rounded-xl border-stone-500 flex items-center space-x-2 duration-100 hover:scale-105">
                                <Image src="icons/mail.svg" alt="Mail" width={20} height={20} />
                                <p>Mail</p>
                            </button>
                        </Link>
                    </div>
                    <div>
                        <h1 className="xl:text-8xl md:text-5xl text-3xl font-semibold p-1 mt-3">Axel Rivière</h1>
                        <h2 className="xl:text-4xl md:text-2xl text-xl font-semibold p-1">Développeur Full-Stack</h2>
                        <p className="font-medium mt-5">
                            Je m&apos;appelle Axel, je suis étudiant en 3ᵉ et dernières année de BUT Informatique à l&apos;IUT de Lens et en alternance chez Wordline Noyelles-lès-Seclin. <br /> <br />
                            En dehors de ma formation, je suis passionné de football, un grand cinéphile, lecteur de romans et de comic books ainsi que joueur à mes heures perdues. Je suis également curieux des dernières avancées technologiques, notamment dans le domaine de l&apos;intelligence artificielle.
                        </p>
                    </div>
                </div>
            </div>

            <div className="overflow-visible">
                <h3 className="text-2xl font-semibold p-1 mt-20">Compétences</h3>
                <ul className="flex justify-between flex-wrap mt-4 overflow-visible">
                    {firstHalf.map((competence) => (
                        <CompetenceItem key={competence.name} competence={competence} />
                    ))}
                </ul>

                {showMoreContent && (
                    <>
                        <ul className="flex justify-between flex-wrap mt-4 overflow-visible">
                            {secondHalf.map((competence) => (
                                <CompetenceItem key={competence.name} competence={competence} />
                            ))}
                        </ul>
                        <ul className="flex justify-between flex-wrap mt-4 overflow-visible">
                            {thirdHalf.map((competence) => (
                                <CompetenceItem key={competence.name} competence={competence} />
                            ))}
                        </ul>
                    </>
                )}
            </div>

            <button onClick={switchMoreContent} className={`flex items-center justify-center mx-auto duration-300 hover:scale-110 transition-transform mt-3 ${showMoreContent ? 'rotate-180' : ''}`}>
                <Image src="/icons/show-more.svg" alt="Afficher plus de compétences" width={50} height={50} />
            </button>

            <div className="xl:flex xl:space-x-12 mt-20">
                <div className="flex flex-col xl:w-1/2">
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
                    <h3 className="text-2xl font-semibold xl:mt-10 mt-20">Certifications</h3>
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
                <div className="mt-20 xl:mt-0">
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