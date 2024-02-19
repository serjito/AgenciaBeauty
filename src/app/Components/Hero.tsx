'use client';
import Image from 'next/image';
import lourdes from '../../../public/lourdes1.png';
import { FaPlay } from 'react-icons/fa';
import Contact from './Contact';
import { useState } from 'react';
import Button from './Button';

function Hero() {
  const [showContact, setShowContact] = useState(false);

  const toggleContact = () => {
    setShowContact(!showContact);
  };
  return (
    <section className=" w-[96%] max-w-[1200px]  mx-auto my-3 flex flex-col items-center justify-center ">
      <div className="w-full flex flex-col justify-center items-center my-2 mx-4">
        <h1 className="text-center text-4xl px-2 text-black/90 text-pretty font-semibold">
          Aumenta la{' '}
          <strong className="text-[#d4a056]">
            rentabilidad y facturación de tu negocio de belleza
          </strong>{' '}
          con nuestro método
        </h1>
        <h3 className="text-center text-lg font-semibold my-3 px-2">
          &quot; Potencia tu presencia en línea y atrae a más clientes con la
          ayuda de una agencia de marketing especializada en belleza”.
        </h3>
        <Image
          onClick={toggleContact}
          src={lourdes}
          alt="Angencia Beauty"
          className="object-cover h-full w-[98%]"
        ></Image>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <Button onClick={toggleContact} />
        {showContact && <Contact onClose={toggleContact} />}
      </div>
    </section>
  );
}

export default Hero;
