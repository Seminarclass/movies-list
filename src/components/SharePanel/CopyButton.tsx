import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';

interface CopyButtonProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function CopyButton({ className, onClick }: CopyButtonProps) {
  return (
    <Button
      className={className}
      onClick={onClick}
    >
      <FontAwesomeIcon
        className="mr-2"
        icon={faLink}
        size="sm"
      />
      Copy
    </Button>
  );
}