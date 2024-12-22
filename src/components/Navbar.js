"use client";
import * as dotenv from 'dotenv';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

dotenv.config();

const Navbar = () => {
    const pathname = usePathname(); // Get the current path

    // Extract the current language prefix and remove it from the path
    const pathWithoutLang = pathname.replace(/^\/(fr|es|en)/, '');

    return (
        <nav className='flex p-2 bg-purple-800 gap-2 z-20'>
            <Link href={`/fr${pathWithoutLang}`}>FR</Link>
            <div>|</div>
            <Link href={`/es${pathWithoutLang}`}>ES</Link>
            <div>|</div>
            <Link href={`/en${pathWithoutLang}`}>EN</Link>
        </nav>
    );
}

export default Navbar;