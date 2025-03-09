export type Projects = {
    image: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
}

export const projects: Projects[] = [
    {
        image: "/projects/vanlifer.png",
        title: "VanLifer",
        description: "Application de publication de voyages en van.",
        tags: ["Laravel", "Blade", "CSS", "SQLite"],
        link: "https://github.com/axelriv62/vanlifer",
    },
    {
        image: "/projects/lens-judge.png",
        title: "Lens Judge",
        description: "Juge automatique pour les compétitions de programmation.",
        tags: ["Java"],
        link: "https://github.com/axelriv62/lens-judge",
    },
    {
        image: "/projects/bomberman.png",
        title: "Bomberman",
        description: "Jeu du Bomberman.",
        tags: ["Java", "JavaFX"],
        link: "https://github.com/axelriv62/bomberman",
    },
    {
        image: "/projects/mamy-lens.png",
        title: "Les Recettes de Mamy Lens",
        description: "Application de gestion de recette.",
        tags: ["Laravel", "Blade", "CSS", "SQLite"],
        link: "https://github.com/axelriv62/recettes-de-mamy-lens",
    },
    {
        image: "/projects/juste-le-prix.png",
        title: "Juste Le Prix",
        description: "Jeu du Juste Prix.",
        tags: ["Python", "Flask", "CSS", "SQLite"],
        link: "https://github.com/axelriv62/juste-le-prix",
    },
    {
        image: "/projects/2048.png",
        title: "2048",
        description: "Jeu du 2048.",
        tags: ["Java", "JavaFX"],
        link: "https://github.com/axelriv62/2048",
    },
    {
        image: "/projects/four-in-a-line.png",
        title: "Puissance 4",
        description: "Jeu du Puissance 4.",
        tags: ["Java", "JavaFX"],
        link: "https://github.com/axelriv62/four-in-a-line",
    },
    {
        image: "/projects/abyss-explore.png",
        title: "Abyss Explore",
        description: "Site vitrine d'une entreprise organisatrice de voyages de plongé.",
        tags: ["HTML", "CSS"],
        link: "https://github.com/axelriv62/abyss-explore",
    },
];
