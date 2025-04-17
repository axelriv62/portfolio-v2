import { projects } from "@/data/projects";
import Image from "next/image";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Réalisations - Axel Rivière',
};
export default function Projects() {
    return (
        <main className="mt-28 mb-28 ">
            <div className="flex flex-col items-center space-y-24">
                {projects.map((project, index) => (
                    <div key={index} className={`fade-in-bottom flex flex-col xl:flex-row p-8 min-w-full ${index % 2 === 1 ? 'xl:flex-row-reverse' : ''} space-y-4 lg:space-y-0 lg:space-x-8`}>
                        <div className={`flex flex-col items-center w-full xl:w-1/2 ${index % 2 === 0 ? 'xl:mr-[64px] xl:ml-[128px]' : 'xl:ml-[64px] xl:mr-[128px]'} mx-0`}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={800}
                                height={500}
                                className="rounded-lg shadow-lg duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col justify-center max-w-lg lg:w-1/2">
                            <h4 className="xl:text-2xl font-bold">{project.title}</h4>
                            <p className="mt-2 xl:text-lg">{project.description}</p>
                            <ul className="mt-4 flex space-x-2">
                                {project.tags.map((tag, i) => (
                                    <li key={i} className="p-2 rounded font-semibold bg-stone-700 text-white duration-100 hover:scale-105">{tag}</li>
                                ))}
                            </ul>
                            <a href={project.link} className="mt-4 inline-block font-semibold">En savoir plus</a>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}