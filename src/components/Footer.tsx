'use client';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-[#404040] py-8 mt-auto">
      <div className="container mx-auto flex justify-center">
        <Link href="/">
          <Image src="/Logo.png" alt="Apply Digital Logo" width={140} height={20} />
        </Link>
      </div>
    </footer>
  );
};