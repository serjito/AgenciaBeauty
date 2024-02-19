import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Link from 'next/link';

function Nav() {
  return (
    <section className=" relative bg-gradient-to-t from-[#9958cc] to-[#6c71e5] w-full h-[8vh]">
      <nav className="relative w-full h-full flex justify-center items-center">
        <div className="absolute blur-3xl w-full h-[8vh]"></div>
        <Link href="/" className="h-full w-auto ">
          <Image
            src={Logo}
            alt="Agencia Beauty"
            className="relative object-cover h-full w-auto cursor-pointer"
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </Link>
      </nav>
    </section>
  );
}

export default Nav;
