import React from 'react';

import '../styles/PageStyles.css';

const Page = ({ children }) => {
  return (
    <section className='page'>
      {children}
    </section>
  );
};

export default Page;
