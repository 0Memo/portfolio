import Image from "next/image";
import bg from '../../public/background/forest.png';
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";
import dynamic from "next/dynamic";

const Wizard = dynamic(() => import('@/components/models/Wizard2'), {ssr: false});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image priority sizes="100vw" src={bg} alt="image de fond" fill className="w-full h-full object-cover object-center opacity-25" />
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
      <p className="fixed bottom-0 text-custom mb-2 font-semibold text-md">&copy; Guillermo 2024 | Tous droits réservés</p>
    </main>
  );
}
