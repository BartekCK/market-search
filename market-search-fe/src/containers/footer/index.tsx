import React from 'react';
import { FooterStyle } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterStyle>
      <div className="col">
        <span>Regulamin</span>
        <span>Kontakt</span>
        <span>Warunki korzystania</span>
      </div>
      <div className="col">
        <span>FAQ</span>
        <span>Współpraca</span>
        <span>Pomoc</span>
      </div>
    </FooterStyle>
  );
};

export default Footer;
