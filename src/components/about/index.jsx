"use client"
import React from 'react';
import ItemLayout from './ItemLayout';
import { Progress } from "flowbite-react";

const AboutDetails = () => {
    return (
        <section className="py-20 w-full">
            <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">

                <ItemLayout className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}>
                    <h2 className="text-xl md:text-2xl text-left w-full capitalize">
                        Travailleur de l'Enchantement
                    </h2>
                    <p className="font-light text-xs sm:text-sm md:text-base">
                        Une bonne journée dans l'univers du développement rime pas avec ennui ni avec facilité. Il y a tant de langages, de libraires et autres précieux outils à découvrir et à utiliser sans fin... Cet espace que vous découvrez est l'occasion pour moi de découvrir le monde de Next.js après avoir pratiquer React.js au preálable, j'espère que cela vous plaire autant qu'à moi. Il est important pour moi de savoir se réinventer en termes de connaissances et de réalisations, et repousser toujours plus loin ses propres limites pour donner une meilleur version de soi et de son travail.
                    </p>
                </ItemLayout>
                <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-custom"}>
                    <p className="font-semibold w-full text-left text-lg sm:text-2xl">
                        Formation Concepteur Développeur d'Applications <span className="font-semibold text-base text-foreground">Alt — mars 2024 - août 2024</span>
                    </p>
                </ItemLayout>
                <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-custom"}>
                    <p className="font-semibold w-full text-left text-lg sm:text-2xl">
                        Formation Développeur Intégrateur Web <span className="font-semibold text-base text-foreground">Ifocop Paris XI — juin 2020 - fév. 2021</span>
                    </p>
                </ItemLayout>

                <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
                    <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=0Memo&layout=compact&locale=fr&theme=transparent&hide_border=true&title_color=A537FD&text_color=FFFFFF&icon_color=A537FD&text_bold=false" alt="0Memo" loading="lazy" />
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
                    <div className='flex flex-col sm:flex-row justify-around gap-0 sm:gap-32'>
                        <div className='flex flex-col my-8'>
                            <div className="text-lg font-medium dark:text-white">
                                HTML / CSS / JS / JQUERY
                                <progress value={0.9} style={{ width: '100%', height: '1rem' }} />
                                <style jsx>{`
                                    progress[value]::-webkit-progress-value {
                                        background-color: #A537FD;
                                    }
                                `}</style>
                            </div>
                            <div className="text-lg font-medium dark:text-white">
                                BOOTSTRAP / SASS
                                <progress value={0.85} style={{ width: '100%', height: '1rem' }} />
                                <style jsx>{`
                                    progress[value]::-webkit-progress-value {
                                        background-color: #A537FD;
                                    }
                                `}</style>
                            </div>
                            <div className="text-lg font-medium dark:text-white">
                                REACT / PHP / MYSQL
                                <progress value={0.7} style={{ width: '100%', height: '1rem' }} />
                                <style jsx>{`
                                    progress[value]::-webkit-progress-value {
                                        background-color: #A537FD;
                                    }
                                `}</style>
                            </div>
                            <div className="text-lg font-medium dark:text-white">
                                C#/UNITY/NestJS/Typescript
                                <progress value={0.6} style={{ width: '100%', height: '1rem' }} />
                                <style jsx>{`
                                    progress[value]::-webkit-progress-value {
                                        background-color: #A537FD;
                                    }
                                `}</style>
                            </div>
                        </div>
                        <div className='flex flex-col -mt-8 mb-8 sm:mb-0 sm:my-8'>
                            <div className="text-lg font-medium dark:text-white">
                                FRANÇAIS/ESPAÑOL/ENGLISH
                                <progress value={1} style={{ width: '100%', height: '1rem' }} />
                                <style jsx>{`
                                    progress[value]::-webkit-progress-value {
                                        background-color: #A537FD;
                                    }
                                `}</style>
                            </div>
                            <div className="text-lg font-medium dark:text-white">
                                PORTUGUÊS/ITALIANO/ROMÂNĂ
                                <progress value={0.85} style={{ width: '100%', height: '1rem' }} />
                                <style jsx>{`
                                    progress[value]::-webkit-progress-value {
                                        background-color: #A537FD;
                                    }
                                `}</style>
                            </div>
                            <div className="text-lg font-medium dark:text-white">
                                עִבְרִית/SVENSKA
                                <progress value={0.7} style={{ width: '100%', height: '1rem' }} />
                                <style jsx>{`
                                    progress[value]::-webkit-progress-value {
                                        background-color: #A537FD;
                                    }
                                `}</style>
                            </div>
                            <div className="text-lg font-medium dark:text-white">
                                DEUTSCH/ՀԱՅԵՐԵՆ
                                <progress value={0.6} style={{ width: '100%', height: '1rem' }} />
                                <style jsx>{`
                                    progress[value]::-webkit-progress-value {
                                        background-color: #A537FD;
                                    }
                                `}</style>
                            </div>
                        </div>
                    </div>
                </ItemLayout>

                <ItemLayout className={"col-span-full"}>
                    <img className="w-full h-auto" src="https://skillicons.dev/icons?i=bash,bootstrap,codepen,cs,css,docker,figma,firebase,git,github,html,js,jquery,laravel,mongodb,mysql,nestjs,nextjs,nodejs,npm,php,react,sass,tailwind,threejs,unity,vite,vscode,vue,wordpress" alt="0Memo" loading="lazy" />
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <div className='flex flex-col sm:flex-row justify-around gap-0 sm:gap-32'>
                        <div className='flex flex-col mt-6 xs:mt-0 my-0 sm:my-5'>
                            <div className="text-md xs:text-2xl font-medium dark:text-white">
                                Langues étrangères
                            </div>
                            <div className="text-md xs:text-2xl font-medium dark:text-white">
                                Urbex
                            </div>
                            <div className="text-md xs:text-2xl font-medium dark:text-white">
                                Vide-greniers
                            </div>
                        </div>
                        <div className='flex flex-col mb-6 xs:mb-0 my-0 sm:my-5'>
                            <div className="text-md xs:text-2xl font-medium dark:text-white">
                                Détection de métaux
                            </div>
                            <div className="text-md xs:text-2xl font-medium dark:text-white">
                                Voyages
                            </div>
                            <div className="text-md xs:text-2xl font-medium dark:text-white">
                                Construction résine époxy
                            </div>
                        </div>
                    </div>
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=0Memo&repo=0Memo&locale=fr&theme=transparent&hide_border=true&title_color=A537FD&text_color=FFFFFF&icon_color=A537FD&text_bold=false" alt="0Memo" loading="lazy" />
                </ItemLayout>
                
            </div>
        </section>
    )
}

export default AboutDetails
