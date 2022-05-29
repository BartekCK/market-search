import React from 'react';
import { MarketProductContext } from '../../context';
import { EmptyBodyStyle } from './styles';
import { Avatar, Carousel, Comment, Tooltip } from 'antd';
import moment from 'moment';

const data = [
  {
    name: 'Han Solo',
    content: 'Najniższe ceny, najlepsze produkty.',
  },
  {
    name: 'Adam Nowak',
    content: 'Bardzo profesjonalnie, szybko, dobre ceny.',
  },
  {
    name: 'Krystyna Jantar',
    content: 'Najniższe ceny, najlepsze produkty.',
  },
  {
    name: 'Grzegorz Wrona',
    content: 'Od lat korzystamy z Państwa wyszukiwarki, jesteśmy bardzo zadowoleni!',
  },
  {
    name: 'Kacper Malarczyk',
    content:
      'Sprzęt ok, Szkoda tylko, że towar dotarł do sklepu dopiero po weekendzie - zamawiany w czwartek z opcją dostawa do 24 godzin - sklepy czynne są w każdą sobotę',
  },
  {
    name: 'Marta Michalak',
    content:
      'Szybka wysyłka, znakomite ceny. Ciężko cokolwiek więcej oceniać jeżeli dokonano tylko zakupu bez żadnej dodatkowej obsługi posprzedażowej na obecną chwilę',
  },
  {
    name: 'Michał Kos',
    content: 'Szybko bez wychodzenia z domu bezproblemowo',
  },
  {
    name: 'Katarzyna Mączkowska',
    content: 'Absolutnie wszystko o.k. szkoda tylko, że nie można zlecić dostawy w sobotę, nawet za dodatkową oplatą',
  },
  {
    name: 'Edyta Ewert',
    content: 'Wszystko zgodne z opisem. Szybka dostawa. Polecam',
  },
];

const EmptyBody = () => {
  const { state } = React.useContext(MarketProductContext);

  return !state.markets.length ? (
    <EmptyBodyStyle>
      <div className="empty-body-container">
        <h1 className="header">Zaufała nam cała Polska! 🇵🇱</h1>
        <div>⭐ ⭐ ⭐</div>
        <p className="description">Opinie naszych klientów</p>
      </div>
      <Carousel style={{ padding: '4rem' }} autoplay>
        {data.map((item) => (
          <div>
            <Comment
              author={<span>{item.name}</span>}
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt={item.name} />}
              content={<p>{item.content}</p>}
              datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                  <span>{moment().fromNow()}</span>
                </Tooltip>
              }
            />
          </div>
        ))}
      </Carousel>
    </EmptyBodyStyle>
  ) : null;
};

export default EmptyBody;
