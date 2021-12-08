import { ReactNode } from 'react';

interface IconButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const IconButton = ({ children, onClick }: IconButtonProps) => (
  <button onClick={onClick}>{children}</button>
);

export default IconButton;
