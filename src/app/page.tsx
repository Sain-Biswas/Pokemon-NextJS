import Image from "next/image";
import { TypeIcons } from '@/../public/TypeIcon/exporter';

export default function Home() {
  return (
    <main>
      <div className="h-[calc(100vh-3rem)] grid grid-cols-6">

        <div className="bg-normal w-28 h-10 rounded-md flex justify-center items-center font-mono text-lg font-bold">
          Normal <Image src={TypeIcons['normal']} alt="" width={512} height={512} className="w-8 h-8" />
        </div>

        <div className="bg-electric w-28 h-10 rounded-md flex justify-center items-center font-mono text-lg font-bold">
          Electric
        </div>

        <div className="bg-bug w-28 h-10 rounded-md flex justify-center items-center font-mono text-lg font-bold">
          Bug
        </div>

        <div className="bg-dark w-28 h-10 rounded-md flex justify-center items-center font-mono text-lg font-bold">
          Dark
        </div>

        <div className="bg-dragon w-28 h-10 rounded-md flex justify-center items-center font-mono text-lg font-bold">
          Dragon
        </div>

        <div className="bg-fairy w-28 h-10 rounded-md flex justify-center items-center font-mono text-lg font-bold">
          Fairy
        </div>

        <div className="bg-fighting w-28 h-10 rounded-md flex justify-center items-center font-mono text-lg font-bold">
          Fighting
        </div>

        <div className="bg-fire w-28 h-10 rounded-md flex justify-center items-center font-mono text-lg font-bold">
          Fire
        </div>

        <div className="bg-flying w-28 h-10 rounded-md flex justify-center items-center font-mono text-lg font-bold">
          Flying
        </div>

        <div className="bg-ghost w-28 h-10 rounded-md flex justify-center items-center font-mono text-lg font-bold">
          ghost
        </div>

        <div className="bg-grass w-28 h-10 rounded-md flex justify-center items-center font-mono text-lg font-bold">
          Grass
        </div>

        <div className="bg-ground w-28 h-10 rounded-md flex justify-center items-center font-mono text-lg font-bold">
          Ground
        </div>

        <div className="bg-ice w-28 h-10 rounded-md flex justify-center items-center font-mono text-lg font-bold">
          Ice
        </div>

        <div className="bg-poison w-28 h-10 rounded-md flex justify-center items-center font-mono text-lg font-bold">
          Poison
        </div>

        <div className="bg-psychic w-28 h-10 rounded-md flex justify-center items-center font-mono text-lg font-bold">
          Psychic
        </div>

        <div className="bg-rock w-28 h-10 rounded-md flex justify-center items-center font-mono text-lg font-bold">
          Rock
        </div>

        <div className="bg-steel w-28 h-10 rounded-md flex justify-center items-center font-mono text-lg font-bold">
          Steel
        </div>

        <div className="bg-water w-28 h-10 rounded-md flex justify-center items-center font-mono text-lg font-bold">
          Water
        </div>

        <div className="bg-shadow w-28 h-10 rounded-md flex justify-center items-center font-mono text-lg font-bold">
          Shadow
        </div>

        <div className="bg-unknown w-28 h-10 rounded-md flex justify-center items-center font-mono text-lg font-bold">
          Unknown
        </div>

      </div>
    </main>
  );
}
