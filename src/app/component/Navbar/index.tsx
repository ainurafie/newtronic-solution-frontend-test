import React from 'react';
import Logo from '../../../../public/assets/img/Main-Logo.png'
import Image from 'next/image';



const Navbar: React.FC = () => {
    const links = [
        { title: 'Beranda', href: 'https://newtronic-solution.com/' },
        { title: 'Tentang Kami', href: 'https://newtronic-solution.com/tentang-kami/' },
        { title: 'Blog', href: 'https://newtronic-solution.com/blog/' },
    ];

    return (
        <nav className='flex justify-between mx-auto p-4  items-center bg-[#1f479c]'>
            <a href="https://newtronic-solution.com/">
                <Image src={Logo} alt="Logo" width={100} height={100} />
            </a>
            <ul className='flex gap-3 items-center text-white'>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
