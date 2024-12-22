"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { createPortal } from 'react-dom';

const Modal = ({ onClose, toggle }) => {
    return createPortal(
        <div className='fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center'>
            <div className='bg-background/20 border border-custom border-solid backdrop-blur-[6px] py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8'>
                <p className='font-light'>Voulez-vous jouer une musique de fond?</p>
                <div className='flex items-center justify-center space-x-4'>
                    <button
                        onClick={toggle}
                        className='px-4 py-2 border border-custom border-solid hover:shadow-glass-sm rounded mr-2'>oui</button>
                    <button
                        onClick={onClose}
                        className='px-4 py-2 border border-custom border-solid hover:shadow-glass-sm rounded'>non</button>
                </div>
            </div>
        </div>,

        document.getElementById('my-modal')
    )
}

const Sound = () => {

    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const handleFirstUserInteraction = () => {
        const musicConsent = localStorage.getItem('musicConsent');
        if (musicConsent === "true" && !isPlaying) {
            audioRef.current.play();
            setIsPlaying(true);
        }

        ['click', 'keydown', 'touchStart'].forEach((event) => {
            document.removeEventListener(event, handleFirstUserInteraction);
        })
    }

    useEffect(() => {
        const consent = localStorage.getItem('musicConsent');
        const consentTime = localStorage.getItem('consentTime');

        if (consent && consentTime && new Date(consentTime).getTime() + 3*24*60*60*1000 > new Date()) {
            setIsPlaying(consent === "true")

            if (consent === "true") {
                ['click', 'keydown', 'touchStart'].forEach((event) => {
                    document.addEventListener(event, handleFirstUserInteraction);
                })
            }
        } else {
            setShowModal(true)
        }
    }, [])

    const toggle = () => {
        const newState = !isPlaying;
        setIsPlaying(!isPlaying);
        newState ? audioRef.current.play() : audioRef.current.pause();
        localStorage.setItem('musicConsent', String(newState));
        localStorage.setItem('consentTime', new Date().toISOString())
        setShowModal(false);
    }


    return (
        <div className='fixed top-24 lg:top-4 right-4 xs:right-8 z-50 group'>

        {
            showModal && <Modal onClose={() => setShowModal(false)} toggle={toggle} />
        }
            <audio ref={audioRef} controls loop>
                {/* <source src={"/audio/its-time-for-an-adventure.wav"} type="audio/mpeg" /> */}
                <source src={"/audio/milton__mini-christmas-song.mp3"} type="audio/mp3" />
                votre navigateur ne prend pas en charge les éléments audios
            </audio>

            <motion.button
                onClick={ toggle }
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
                className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg"
                aria-label={"home"}
                name={"home"}
            >
                {
                    isPlaying ?
                    <Volume2 className="w-full h-full text-foreground group-hover:text-custom" strokeWidth={1.5} />
                    :
                    <VolumeX className="w-full h-full text-foreground group-hover:text-custom" strokeWidth={1.5} />
                }
            </motion.button>
        </div>
    )
}

export default Sound