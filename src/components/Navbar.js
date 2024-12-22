import * as dotenv from 'dotenv';
import Link from 'next/link';
import React from 'react';

dotenv.config();

const vercelURL = process.env.VERCEL_APP;
const localhost = 'http://localhost:3000';

const Navbar = () => {
    return (
        <nav className='flex p-2 bg-purple-800 gap-2 z-20'>
            <Link href={`${vercelURL}/fr`}>FR</Link>
            <div>|</div>
            <Link href={`${vercelURL}/es`}>ES</Link>
            <div>|</div>
            <Link href={`${vercelURL}/en`}>EN</Link>
        </nav>
    );
}

export default Navbar;