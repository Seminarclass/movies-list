import React from 'react';

interface FooterLinksProps {
  children: React.ReactNode;
  className?: string;
  link: string;
}

export default function FooterLink({ children, className, link }: FooterLinksProps) {
  return (
    <a
      className={`hover:text-dark transition duration-300 ease-in-out ${className}`}
      href={link}
    >
      {children}
    </a>
  );
}