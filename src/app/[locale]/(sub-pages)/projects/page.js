import Image from "next/image";
import bg from '../../../../../public/background/projects-background.png';
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
//import Staff from "@/components/models/Staff";

const Wand = dynamic(() => import('@/components/models/WizardCane'), {ssr: false});

export default function Projects() {
    const t = useTranslations('credit');

    return (
        <>
            <Image priority sizes="100vw" src={bg} alt="image de fond" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" />
            <Navbar />

            <ProjectList projects={projectsData} />
            <p className="text-[60%] mt-20 text-center mx-5 sm:mx-0">
                {t('title')}: "Wizard's Cane" (https://skfb.ly/6sNtn) by Meee is licensed under Creative Commons Attribution-NonCommercial (http://creativecommons.org/licenses/by-nc/4.0/).
            </p>

            <div className="flex items-center justify-center fixed top-20 lg:top-40 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
                <RenderModel>
                    <Wand />
                </RenderModel>
            </div>
        </>
    );
}
