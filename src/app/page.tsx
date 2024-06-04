import Image from "next/image";
import TypeIcons from "@/../public/TypeIcon/exporter";

export default function Home() {
  return (
    <main>
      <div className="grid h-[calc(100vh-3rem)] grid-cols-6">
        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-normal font-mono text-lg font-bold">
          Normal{" "}
          <Image
            src={TypeIcons["normal"]}
            alt=""
            width={512}
            height={512}
            className="h-8 w-8"
          />
        </div>

        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-electric font-mono text-lg font-bold">
          Electric
        </div>

        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-bug font-mono text-lg font-bold">
          Bug
        </div>

        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-dark font-mono text-lg font-bold">
          Dark
        </div>

        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-dragon font-mono text-lg font-bold">
          Dragon
        </div>

        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-fairy font-mono text-lg font-bold">
          Fairy
        </div>

        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-fighting font-mono text-lg font-bold">
          Fighting
        </div>

        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-fire font-mono text-lg font-bold">
          Fire
        </div>

        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-flying font-mono text-lg font-bold">
          Flying
        </div>

        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-ghost font-mono text-lg font-bold">
          ghost
        </div>

        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-grass font-mono text-lg font-bold">
          Grass
        </div>

        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-ground font-mono text-lg font-bold">
          Ground
        </div>

        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-ice font-mono text-lg font-bold">
          Ice
        </div>

        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-poison font-mono text-lg font-bold">
          Poison
        </div>

        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-psychic font-mono text-lg font-bold">
          Psychic
        </div>

        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-rock font-mono text-lg font-bold">
          Rock
        </div>

        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-steel font-mono text-lg font-bold">
          Steel
        </div>

        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-water font-mono text-lg font-bold">
          Water
        </div>

        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-shadow font-mono text-lg font-bold">
          Shadow
        </div>

        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-unknown font-mono text-lg font-bold">
          Unknown
        </div>
      </div>
    </main>
  );
}
