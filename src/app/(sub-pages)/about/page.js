import Image from "next/image";
import bg from '../../../../public/background/about.png';
import RenderModel from "@/components/RenderModel";
// import Hat from "@/components/models/Hat";
import AboutDetails from "@/components/about";
import ReactCountryFlag from "react-country-flag";
import dynamic from "next/dynamic";

const Hat = dynamic(() => import('@/components/models/WizardHat'), {ssr: false});

export default function About() {
    return (
        <>
            <Image priority sizes="100vw" src={bg} alt="image de fond" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" />



            <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
                <RenderModel>
                    <Hat />
                </RenderModel>
            </div>

            <div className="relative w-full h-screen flex flex-col items-center justify-center">
                <div className="absolute flex flex-col items-center text-center top-[55%] sm:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex justify-center items-center">
                        <h1 className="font-semibold xs:font-bold text-5xl xs:text-7xl sm:text-8xl lg:text-9xl text-custom mt-[15%] xs:mt-[1.8%]">
                            Gu!llermo
                        </h1>
                        <ReactCountryFlag
                            countryCode="CO"
                            svg
                            style={{
                                width: "8em",
                                height: "4em",
                            }}
                            title="Colombia"
                            className="mt-10 scale-50 xs:scale-100 mr-8 xs:mr-0"
                        />
                    </div>
                    <p className="font-light text-foreground text-xl xs:text-ls mt-6 xs:mt-0">Venez rencontrer l'homme qui se tient sous le chapeau..</p>
                </div>
            </div>

            <AboutDetails />
        </>
    );
}
