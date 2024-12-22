"use client";
import * as dotenv from 'dotenv';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import ReactCountryFlag from "react-country-flag";

dotenv.config();

const Navbar = () => {
    const pathname = usePathname(); // Get the current path

    // Extract the current language prefix and remove it from the path
    const pathWithoutLang = pathname.replace(/^\/(fr|es|en|pt|it)/, '');

    return (
        <nav className='flex p-2 gap-2 z-20'>
            <Link href={`/fr${pathWithoutLang}`}>
                <ReactCountryFlag
                    countryCode="FR"
                    svg
                    style={{
                        width: "3.5em",
                        height: "1.5em",
                    }}
                    title="Français"
                    className="mt-10 scale-50 xs:scale-100 mr-8 xs:mr-0"
                />
            </Link>
            <Link href={`/es${pathWithoutLang}`}>
                <ReactCountryFlag
                    countryCode="ES"
                    svg
                    style={{
                        width: "3.5em",
                        height: "1.5em",
                    }}
                    title="Español"
                    className="mt-10 scale-50 xs:scale-100 mr-8 xs:mr-0"
                />
            </Link>
            <Link href={`/en${pathWithoutLang}`}>
                <ReactCountryFlag
                    countryCode="US"
                    svg
                    style={{
                        width: "3.5em",
                        height: "1.5em",
                    }}
                    title="English"
                    className="mt-10 scale-50 xs:scale-100 mr-8 xs:mr-0"
                />
            </Link>
            <Link href={`/pt${pathWithoutLang}`}>
                <ReactCountryFlag
                    countryCode="BR"
                    svg
                    style={{
                        width: "3.5em",
                        height: "1.5em",
                    }}
                    title="Português"
                    className="mt-10 scale-50 xs:scale-100 mr-8 xs:mr-0"
                />
            </Link>
            <Link href={`/it${pathWithoutLang}`}>
                <ReactCountryFlag
                    countryCode="IT"
                    svg
                    style={{
                        width: "3.5em",
                        height: "1.5em",
                    }}
                    title="Italiano"
                    className="mt-10 scale-50 xs:scale-100 mr-8 xs:mr-0"
                />
            </Link>
        </nav>
    );
}

export default Navbar;