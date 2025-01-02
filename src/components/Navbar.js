"use client";
import * as dotenv from "dotenv";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import ReactCountryFlag from "react-country-flag";

dotenv.config();

const Navbar = () => {
    const pathname = usePathname();
    const currentLocale = pathname.split("/")[1];
    const pathWithoutLang = pathname.replace(`/${currentLocale}`, '');

    const locales = [
        { code: "fr", countryCode: "FR", label: "Français" },
        { code: "es", countryCode: "ES", label: "Español" },
        { code: "en", countryCode: "US", label: "English" },
        { code: "pt", countryCode: "BR", label: "Português" },
        { code: "it", countryCode: "IT", label: "Italiano" },
    ];

    return (
        <nav className="flex p-6 lg:p-2 gap-0 lg:gap-2 z-20">
            {locales.map(({ code, countryCode, label }) => (
                <Link href={`/${code}${pathWithoutLang}`} key={code}>
                    <ReactCountryFlag
                        countryCode={countryCode}
                        svg
                        style={{
                            width: "3.5em",
                            height: "1.5em",
                        }}
                        title={label}
                        className="mt-10 scale-50 xs:scale-100 mr-8 xs:mr-0"
                    />
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;