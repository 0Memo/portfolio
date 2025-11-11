'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import bg from '../../../public/background/forest.png';
import me from '../../../public/test.png';
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import dynamic from "next/dynamic";
import Fairy from '@/components/fairy/index';
/* import NewYear from '@/components/newYear/index';
import Easter from "@/components/easter"; */
import Navbar from "@/components/Navbar";
import { useTranslations } from "next-intl";

/* const Wizard = dynamic(() => import('@/components/models/Wizard2'), {ssr: false}); */

export default function Home() {
  const t = useTranslations();
  const [currentYear, setCurrentYear] = useState(null);
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background image"
        fill
        className="object-cover object-center w-full h-full opacity-25"
      />
      <Navbar />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-52 lg:gap-20">
        <Image
          priority
          src={me}
          alt="me"
          width={300}
          height={300}
          className="object-cover object-center rounded-full"
        />
        <div className="flex flex-col items-center justify-center text-xl font-bold text-center shadow-lg text-custom lg:text-4xl">
          <p>{t("menu.introduction")}</p>
          <p>{t("menu.developer")}</p>
          <p>{t("menu.designer")}</p>
        </div>
        <Navigation />
        {/* <RenderModel>
          <Wizard />
        </RenderModel> */}
      </div>
      <Fairy />
      {/* <Easter />
      <NewYear /> */}
      {/* <p className="text-[60%] mt-20 text-center mx-5 sm:mx-0">
          {t('credits')}: Cuban mambo by oymaldonado -- https://freesound.org/s/544019/ -- License: Attribution 4.0
          {t('credits')}: mini christmas song.mp3 by milton. <br />-- https://freesound.org/s/85209/ -- License: Attribution NonCommercial 3.0
      </p> */}
      {currentYear && (
        <p className="fixed mb-0 text-sm font-semibold bottom-9 text-custom lg:text-md">
          &copy; Guillermo {currentYear} | {t("footer.title")}
        </p>
      )}
    </main>
  );
}