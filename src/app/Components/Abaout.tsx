'use client';
import React, { useState } from 'react';
import Button from './Button';
import Contact from './Contact';
import bg from '../../../public/bg.webp';
import Image from 'next/image';

function Abaout() {
  const [showContact, setShowContact] = useState(false);

  const toggleContact = () => {
    setShowContact(!showContact);
  };
  return (
    <section className=" w-[95%] max-w-[1200px]  mx-auto my-3 flex flex-col items-center justify-center ">
      <div className="flex flex-col">
        <h2 className="text-center text-4xl px-1  text-pretty font-bold">
          Somos Agencia Beauty
        </h2>
        <Image
          src={bg}
          alt="Angencia Beauty"
          className="object-cover h-full w-full cursor-pointer"
        ></Image>
        <p className="text-black font-bold text-center text-xl">
          Nuestra agencia nace de la fusión de emprendedores en el sector de la
          belleza, junto a un grupo de expertos en marketing y diseño de
          estrategias.
        </p>
        <p className="text-black font-bold text-center text-xl">
          En los últimos 2 años, hemos ayudado a salones a{' '}
          <strong> multiplicar x3 y x4 su facturación </strong>, gracias al
          servicio de coaching unido al marketing digital.
        </p>
        <p className="text-black font-bold text-center text-xl">
          A día de hoy nuestra misión es clara. Emplear todos nuestros
          conocimientos acumulados,
          <strong> para ayudar a que dueños de salones de belleza</strong>{' '}
          puedan seguir creciendo como se merecen.
        </p>
        <Button onClick={toggleContact} />
      </div>
      {showContact && <Contact onClose={toggleContact} />}
    </section>
  );
}

export default Abaout;
