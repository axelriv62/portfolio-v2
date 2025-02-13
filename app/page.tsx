import Link from "next/link";

export default function Home() {
  return (
      <main className="">
        <div className="p-20 mt-48">
          <h3 className="text-2xl font-semibold p-1">Bonjour, je suis</h3>
          <h1 className="text-8xl font-semibold p-1">Axel Rivière</h1>
          <h2 className="text-4xl font-semibold p-1">Développeur Full-Stack</h2>
          <button className="border font-bold text-xs py-2 px-4 rounded-full mt-4 border-stone-500">
              <Link href="#">Présentation</Link>
          </button>
        </div>
        <div className="p-20 mt-20">
            <h3 className="text-2xl font-semibold p-1">Dernère réalisation</h3>
        </div>
        <div className="p-20 mt-20">
            <h3 className="text-2xl font-semibold p-1">Derniers articles</h3>
        </div>
      </main>
  );
}