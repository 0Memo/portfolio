import Image from "next/image";
import bg from '../../../public/background/forest.png';
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import dynamic from "next/dynamic";
import Fairy from '@/components/fairy/index';
/* import NewYear from '@/components/newYear/index';
import Easter from "@/components/easter"; */
import Navbar from "@/components/Navbar";
import { useTranslations } from "next-intl";

const Wizard = dynamic(() => import('@/components/models/Wizard2'), {ssr: false});

export default function Home() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear(); 
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image priority sizes="100vw" src={bg} alt="image de fond" fill className="w-full h-full object-cover object-center opacity-25" />
      <Navbar />
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
      <Fairy />
      {/* <Easter />
      <NewYear /> */}
      {/* <p className="text-[60%] mt-20 text-center mx-5 sm:mx-0">
          {t('credits')}: Cuban mambo by oymaldonado -- https://freesound.org/s/544019/ -- License: Attribution 4.0
          {t('credits')}: mini christmas song.mp3 by milton. <br />-- https://freesound.org/s/85209/ -- License: Attribution NonCommercial 3.0
      </p> */}
      <p className="fixed bottom-9 text-custom mb-0 font-semibold text-sm lg:text-md">&copy; Guillermo 2025 | {t('title')}</p>
    </main>
  );
}