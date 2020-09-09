import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColumns } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


const social = [
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
        <div className="flex justify-center md:order-2">
          {social.map((social, index) => (
            <a
              key={index}
              className="text-gray-400 ml-6"
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
            &copy; 2020 Michael Hwang
          </p>
        </div>
      </div>
    </footer>
  );
}