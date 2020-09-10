import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColumns } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

import FooterLink from './FooterLink';

const footerSocial = [
  {
    icon: faColumns,
    link: 'https://michaelihwang.com/'
  },
  {
    icon: faGithub,
    link: 'https://github.com/michaelihwang'
  },
  {
    icon: faLinkedinIn,
    link: 'https://www.linkedin.com/in/michaelihwang/'
  },
  {
    icon: faTwitter,
    link: 'https://twitter.com/michaelihwang'
  },
];

export default function Footer() {
  return (
    <footer className=" ">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center md:order-3">
          {footerSocial.map((social, index) => (
            <a
              key={index}
              className="
                text-gray-400 ml-6
                hover:text-dark
                transition duration-300 ease-in-out
              "
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={social.icon}
                size="lg"
              />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base leading-6 text-gray-400">
            OMDB:
            <FooterLink className="mx-6" link="https://www.omdbapi.com/apikey.aspx">
              API
            </FooterLink>
            <FooterLink link="https://www.omdbapi.com/">
              Docs
            </FooterLink>
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:order-2">
          <p className="text-center text-base leading-6 text-gray-400">
            &copy; 2020 Michael Hwang
          </p>
        </div>
      </div>
    </footer>
  );
}