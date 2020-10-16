import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-regular-svg-icons';

import Button from '../Button';

interface SaveButtonProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function SaveButton({ className, onClick }: SaveButtonProps) {
  return (
    <Button className={className} onClick={onClick}>
      <FontAwesomeIcon
        className="mr-2"
        icon={faSave}
        size="sm"
      />
      Save
    </Button>
  );
}