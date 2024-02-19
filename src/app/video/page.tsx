import Image from 'next/image';
import bg from '../../../public/bg.webp';

function Intro() {
  return (
    <section className=" w-[95%] max-w-[1200px]  mx-auto my-3 flex flex-col items-center justify-center ">
      <div className="w-[95%] flex flex-col justify-center items-center my-2 mx-auto">
        <h3 className="text-center text-3xl px-1 text-black/90 text-pretty font-normal">
          - <strong> ¡Enhorabuena! </strong>Aquí tienes lo prometido. Asegúrate
          de terminar el vídeo…
        </h3>
        <h3 className="text-center">
          <strong>
            {' '}
            Supera tu récord de facturación en los próximos 4 meses{' '}
          </strong>
        </h3>

        <iframe
          src="videoIntro.mp4"
          className=" w-full h-[30vh] rounded-md "
        ></iframe>

        <h3 className="bg-gradient-to-t from-[#9958cc] to-[#6c71e5] text-transparent bg-clip-text text-center text-3xl px-1  text-pretty font-bold">
          IMPORTANTE MIRA EL VÍDEO HASTA EL FINAL
        </h3>
        <p className="text-center">
          *Al finalizar este vídeo,{' '}
          <strong>
            {' '}
            podrás acceder de forma GRATUITA a un plan personalizado{' '}
          </strong>
          para que puedas multiplicar tu facturación en 2024
        </p>
        <h4>
          <strong>¿Estás preparado para </strong>escalar tu negocio?
        </h4>
        <h2 className="text-4xl text-center text-pretty">
          Agenda tu sesión ahora y empieza 2024{' '}
          <strong> batiendo récords con tu negocio</strong>
        </h2>
        <h3 className="text-4xl text-center">
          Rompe el hielo <strong> en una primera sesión </strong> sin compromiso
        </h3>
        <ul className="mx-1">
          <li>
            <strong>
              ✅ Comprenderás a la perfección cuál es la situación actual de tu
              proyecto.
            </strong>{' '}
            Para llegar a un punto B (El éxito que buscamos) debemos saber
            nuestro punto A (Dónde nos encontramos actualmente). Solo de esa
            manera podemos determinar qué pasos debemos seguir para avanzar
            hacia nuestros objetivos.
          </li>
          <li>
            <strong>✅ Analizaremos en profundidad tu idea de negocio, </strong>{' '}
            para que puedas salir de la sesión teniendo una estrategia clara.
          </li>
          <li>
            <strong>✅ Detectarás donde está el cuello de botella</strong>
            que te está impidiendo escalar tu negocio como te gustaría.
          </li>
          <li>
            <strong>✅ Te explicaremos cuál es la estrategia</strong>
            que te va a ayudar a aumentar la rentabilidad y el flujo de clientes
            de tu negocio en 2024.
          </li>
          <li>
            <strong>✅ Te entregaremos un plan personalizado</strong>
            con los pasos que debes seguir para que puedas aplicarlo en tu
            negocio.
          </li>
        </ul>
        <h3 className="text-2xl text-center">
          <strong>
            Si eres apto/a, te abrimos la oportunidad de trabajar con nosotros
            para escalar tu negocio.
          </strong>
        </h3>
        <h3 className="text-xl">
          Si vemos que podemos ayudarte a aplicar toda esta estrategia dentro de
          tu empresa,
          <strong>
            {' '}
            te explicaremos cómo trabajamos con nuestros clientes
          </strong>{' '}
          para que puedas delegar toda la ejecución de la misma y puedas
          alcanzar tus objetivos de una forma mucho más rápida.
        </h3>
        <p>
          ¿Estás preparado para <strong> escalar tu negocio?</strong>
        </p>
        <a>
          Agenda tu sesión ahora y empieza 2024 batiendo récords con tu negocio
        </a>
        <h3 className="text-xl">Nuestro equipo</h3>
        <h3 className="bg-gradient-to-t from-[#9958cc] to-[#6c71e5] text-transparent bg-clip-text text-center text-4xl px-1  text-pretty font-bold">
          Agencia Beauty
        </h3>
        <Image
          src={bg}
          alt="Angencia Beauty"
          className="object-cover h-full w-full"
        ></Image>
        <h3>
          {' '}
          Agencia Beauty nació en el año 2022 a través del deseo ferviente de 2
          emprendedores entusiastas de cumplir su sueño. Conectar el
          conocimiento con las personas para mejorar el mundo.
        </h3>
        <h3>
          Nelson Mandela dijo:“La educación es el arma más poderosa que puedes
          usar para cambiar el mundo”
        </h3>
        <h3>
          Después de llevar más de 2 años trabajando en diferentes proyectos de
          marketing digital gracias al conocimiento acumulado durante todo este
          tiempo,sentimos la <strong> responsabilidad </strong> de utilizar todo
          ese conocimiento para ayudar a dueños de salones de belleza, a ser más
          visibles y a que puedan dejar una huella mucho más profunda en las
          vidas de las personas a las que impactan a través de sus técnicas y
          estrategias de trabajo.
        </h3>
      </div>
    </section>
  );
}

export default Intro;
