import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';

interface ShareButtonProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function ShareButton({ className, onClick }: ShareButtonProps) {
  return (
    <Button
      className={className}
      onClick={onClick}
    >
      <FontAwesomeIcon
        className="mr-2"
        icon={faShareAlt}
        size="sm"
      />
      Share
    </Button>
  );
}