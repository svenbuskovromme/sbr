import React from 'react';
import '../globals.css';

export const metadata = {
    title: 'Portfolio',
    description: 'Sven Buskov Romme',
};
  
const Component = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <html lang="en">
        <body style={{backgroundColor: 'rgb(200,200,200)'}} >
              {children}
        </body>
      </html>
    );
}

export default Component;