"use client";
import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import en from '../locales/en';
import fr from '../locales/fr';

const NavLink = motion(Link);

const HomeBtn = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;
    
    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale });
    };
    return (
        <NavLink
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
            href={"/"}
            target={'_self'}
            className="text-foreground rounded-full flex items-center justify-center custom-bg fixed top-4 left-4 w-fit self-start z-50"
            aria-label={"home"}
            name={"home"}
        >
            <span
                className="relative w-16 h-16 p-4 hover:text-custom"
            >
                <Home className="w-full h-auto" strokeWidth={1.5} />
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                    {t.welcomePage}
                </span>
                <select
                    onChange={changeLanguage}
                    defaultValue={locale}
                    className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
                  >
                    <option className="text-black" value="en">EN</option>
                    <option className="text-black" value="fr">FR</option>
                  </select>
            </span>                
        </NavLink>
    )
}

export default HomeBtn
