import React from 'react';
import Logo from '../../../../public/assets/img/Main-Logo.png'
import Image from 'next/image';
const Footer: React.FC = () => {
  return (
    <footer className='bg-[#1f479c] shadow'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <a href='https://newtronic-solution.com/' className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'>
          <Image src={Logo} alt="Logo" width={100} height={100} />
          </a>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0'>
            <li>
              <a href='https://newtronic-solution.com' className='hover:underline me-4 md:me-6'>Beranda</a>
            </li>
            <li>
              <a href='https://newtronic-solution.com/tentang-kami/' className='hover:underline me-4 md:me-6'>Tentang Kami</a>
            </li>

            <li>
              <a href='https://newtronic-solution.com/blog/' className='hover:underline'>Blog</a>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
        <span className='block text-sm text-white sm:text-center'>© 2024 <a href='https://newtronic-solution.com/' className='hover:underline'>Newtronic Solution™</a>. All Rights Reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
