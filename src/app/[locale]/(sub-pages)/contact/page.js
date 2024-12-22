import Image from "next/image";
import bg from '../../../../../public/background/contact-background.png';
import Form from "@/components/contact/Form";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";

const Chest = dynamic(() => import('@/components/models/Chest'), {ssr: false});

export default function Contact() {
    const t = useTranslations('contact');

    return (
        <>
            <Image priority sizes="100vw" src={bg} alt="image de fond" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" />
            <Navbar />

            <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
                <div className="flex flex-col items-center justify-center space-y-6 w-full sm:*:w-3/4">
                    <label htmlFor="name">
                        <h1 className="text-custom font-semibold text-center text-4xl capitalize">
                            {t('title')}
                        </h1>
                    </label>
                    
                    <label htmlFor="name">
                        <p className="text-center font-light !my-10 text-sm xs:text-base !mx-8 xs:mx-0">
                            {t('text')}
                        </p>
                    </label>
                </div>

                <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-[64%] sm:top-[15%] -translate-y-1/2 right-0 sm:right-[25%]">
                    <RenderModel>
                        <Chest />
                    </RenderModel>
                </div>

                <Form />
            </article>
        </>
    );
}
