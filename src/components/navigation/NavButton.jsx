import React from 'react';
import Link from 'next/link';
import { Home, FileCode2, Fingerprint, PencilLine, Github, Linkedin, FolderOpenDot, BookUser } from 'lucide-react';
import ResponsiveComponent from '../ResponsiveComponent';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useLocale } from "next-intl";

const getIcon = (icon) => {
    switch (icon) {
        case 'home':
            return <Home className="w-full h-auto" strokeWidth={1.5} />
            break;
        case 'about':
            return <Fingerprint className="w-full h-auto" strokeWidth={1.5} />
            break;
        case 'projects':
            return <FileCode2 className="w-full h-auto" strokeWidth={1.5} />
            break;
        case 'contact':
            return <PencilLine className="w-full h-auto" strokeWidth={1.5} />
            break;
        case 'github':
            return <Github className="w-full h-auto" strokeWidth={1.5} />
            break;
        case 'linkedin':
            return <Linkedin className="w-full h-auto" strokeWidth={1.5} />
            break;
        case 'portfolio':
            return <FolderOpenDot className="w-full h-auto" strokeWidth={1.5} />
            break;
        case 'resume':
            return <BookUser className="w-full h-auto" strokeWidth={1.5} />
            break;

        default:
            return <Home className="w-full h-auto" strokeWidth={1.5} />
    }
}

const item = {
    hidden: { scale: 0 },
    show: { scale: 1 },
}

const MotionLink = motion.create(Link);

const NavButton = ({ x, y, label, link, icon, newTab, labelDirection='right'}) => {
    const locale = useLocale();

    const isExternalOrStatic = link.startsWith("http") || link.endsWith(".pdf");
    const href = isExternalOrStatic ? link : `/${locale}${link}`;

    return (
        <ResponsiveComponent>
            {
                ({ size }) => {
                    return size && size >= 1024 ?
                        <div
                            className="absolute cursor-pointer z-50"
                            style={{transform: `translate(${x}, ${y})`}}
                        >
                            <MotionLink
                                variants={item}
                                href={href}
                                target={newTab ? '_blank' : '_self'}
                                className="text-foreground rounded-full flex items-center justify-center custom-bg"
                                aria-label={label}
                                name={label}
                            >
                                <span
                                    className="relative w-16 h-16 p-4 animate-spin-slow-reverse group-hover:pause hover:text-custom"
                                >
                                    { getIcon(icon) }
                                    <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                                    <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                                        { label }
                                    </span>
                                </span>
                                
                            </MotionLink>
                        </div>
                    :
                        <div
                            className="w-fit cursor-pointer z-50"
                        >
                            <MotionLink
                                variants={item}
                                href={href}
                                target={newTab ? '_blank' : '_self'}
                                className="text-foreground rounded-full flex items-center justify-center custom-bg"
                                aria-label={label}
                                name={label}
                            >
                                <span
                                    className="relative w-10 h-10 xs:w-16 xs:h-16 p-2.5 xs:p-4 hover:text-custom"
                                >
                                    { getIcon(icon) }
                                    <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                                    <span className={clsx('absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap', labelDirection === 'left' ? 'right-full left-auto' : '')}>
                                        { label }
                                    </span>
                                </span>
                                
                            </MotionLink>
                        </div>
                    }
            }            
        </ResponsiveComponent>
    )
}

export default NavButton