import Image from "next/image";
import bg from '../../../public/background/forest.png';
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";
import dynamic from "next/dynamic";
import './page.css';
import Navbar from "@/components/Navbar";
import { useTranslations } from "next-intl";


const Wizard = dynamic(() => import('@/components/models/Wizard2'), {ssr: false});

export default function Home() {
  const t = useTranslations('footer');
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
      <div id="snow"></div>
      <ul className="bgg">
        <li className="sphere"></li>
      </ul>
      <ul className="tree">
        <li className="top-star"> </li>
        <li className="top">
          <ul className="tree-pts">
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
          </ul>
        </li>
        <li className="middle first">
          <ul className="tree-pts">
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
          </ul>
        </li>
        <li className="middle second">
          <ul className="tree-pts">
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
          </ul>
        </li>
        <li className="middle third">
          <ul className="tree-pts">
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
          </ul>
        </li>
        <li className="bottom outer">
          <ul className="tree-pts">
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts left"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
            <li className="pts right"></li>
          </ul>
        </li>
        <li className="stem">
          <ul className="tree-stem">
            <li className="stem"></li>
            <li className="gift g1"></li>
            <li className="gift g2"></li>
            <li className="gift g3"></li>
            <li className="gift g4"></li>
            <li className="gift g5"></li>
            <li className="gift g6"></li>
            <li className="gift g7"></li>
            <li className="gift g8"></li>
            <li className="gift g9"></li>
            <li className="shadow"></li>
          </ul>
        </li>
      </ul>
      <ul className="toys">
        <li className="star"></li>
        <li className="ball b1"></li>
        <li className="ball b2"></li>
        <li className="ball b3"></li>
        <li className="ball b4"></li>
        <li className="ball b5"></li>
        <li className="ball b6"></li>
        <li className="ball b7"></li>
        <li className="ball b8"></li>
        <li className="ball b9"></li>
        <li className="ball b10"></li>
        <li className="ball b11"></li>
        <li className="ball b12"></li>
        <li className="ball b13"></li>
        <li className="ball b14"></li>
        <li className="ball b15"></li>
        <li className="ball b16"></li>
        <li className="ball b17"></li>
        <li className="ball b18"></li>
        <li className="ball b19"></li>
        <li className="ball b20"></li>
        <li className="light l1"></li>
        <li className="light l2"></li>
        <li className="light l3"></li>
        <li className="light l4"></li>
        <li className="light l5"></li>
        <li className="light l6"></li>
        <li className="light l7"></li>
        <li className="light l8"></li>
        <li className="light l9"></li>
        <li className="light l10"></li>
        <li className="light l11"></li>
        <li className="light l12"></li>
        <li className="light l13"></li>
        <li className="light l14"></li>
        <li className="light l15"></li>
        <li className="light l16"></li>
        <li className="light l17"></li>
        <li className="light l18"></li>
        <li className="light l19"></li>
        <li className="light l20"></li>
        <li className="light l21"></li>
        <li className="light l22"></li>
        <li className="light l23"></li>
        <li className="light l24"></li>
        <li className="light l25"></li>
      </ul>
      <p className="text-[60%] mt-20 text-center mx-5 sm:mx-0">
          {t('credits')}: mini christmas song.mp3 by milton. <br />-- https://freesound.org/s/85209/ -- License: Attribution NonCommercial 3.0
      </p>
      <p className="fixed bottom-9 text-custom mb-0 font-semibold text-sm lg:text-md">&copy; Guillermo 2024 | {t('title')}</p>
    </main>
  );
}
