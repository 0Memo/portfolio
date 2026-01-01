'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import bg from '../../../public/background/forest.png';
import me from '../../../public/test.png';
import Navigation from "@/components/navigation";
import Fairy from '@/components/fairy/index';
import NewYear from '@/components/newYear/index';
/* import Easter from "@/components/easter";
import Xmas from "@/components/xmas"; */
import Navbar from "@/components/Navbar";
import { useTranslations } from "next-intl";

export default function Home() {
  const tMenu = useTranslations('menu');
  const tCredit = useTranslations('credit');
  const tFooter = useTranslations('footer');
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
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-32 md:gap-52 lg:gap-20">
        <Image
          priority
          src={me}
          alt="me"
          width={300}
          height={300}
          className="object-cover object-center mt-10 hidden md:block md:-mt-20 rounded-full md:opacity-60 opacity-100 lg:opacity-100 md:scale-[0.6] lg:scale-[1]"
        />
        <div
          className="flex flex-col items-center justify-center text-xl font-bold
          text-center shadow-lg text-custom lg:text-4xl md:-translate-y-64 lg:translate-y-0 mt-[27rem] md:mt-52"
        >
          <p>{tMenu("introduction")}</p>
          <p>{tMenu("developer")}</p>
          <p>{tMenu("designer")}</p>
        </div>
        <Navigation />
      </div>
      <Fairy />
      <NewYear />
      {/* <Xmas />
      <Easter />
       */}
      <p className="text-[60%] mt-20 text-center mx-5 sm:mx-0">
          {tCredit('title')}: Cuban mambo by oymaldonado -- https://freesound.org/s/544019/ -- License: Attribution 4.0
      </p>
      {/* <p className="text-[60%] mt-20 text-center mx-5 sm:mx-0">
        {t("credit.title")}: mini christmas song.mp3 by milton. <br />
        -- https://freesound.org/s/85209/ -- License: Attribution NonCommercial
        3.0
      </p> */}
      {currentYear && (
        <p className="fixed mb-0 text-sm font-semibold bottom-9 text-custom lg:text-md">
          &copy; Guillermo {currentYear} | {tFooter("title")}
        </p>
      )}
    </main>
  );
}