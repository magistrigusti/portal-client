import React from 'react';

type Props = {
  children: React.ReactNode;
  icon?: JSX.Element;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<Props> = () => {
  return (
    <div>
      Button
    </div>
  )
}