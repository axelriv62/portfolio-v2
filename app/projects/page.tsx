import { projects } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
    return (
        <main className="mt-28 mb-28">
            <div className="flex flex-col items-center space-y-24">
                {projects.map((project, index) => (
                    <div key={index} className={`flex w-full max-w-7xl p-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                        <div className="flex flex-col items-center w-1/2" style={{ marginRight: index % 2 === 0 ? '64px' : '0', marginLeft: index % 2 === 1 ? '64px' : '0' }}>
                            <Image src={project.image} alt={project.title} width={600} height={500} className="rounded-lg shadow-lg duration-300 hover:scale-105" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <h4 className="text-2xl font-bold mt-20">{project.title}</h4>
                            <p className="mt-2 text-lg">{project.description}</p>
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