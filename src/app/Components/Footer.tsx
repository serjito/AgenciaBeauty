function Footer() {
  return (
    <footer className="bottom-0 rounded-3xl shadow bg-gradient-to-t from-[#9958cc] to-[#6c71e5] backdrop-blur-lg w-[98%] mx-auto mb-10">
      <div className="w-full mx-autoflex flex-col rounded-3xl p-4 justify-center text-center text-xl bg-black/30">
        <span className="text-sm sm:text-xl sm:text-center text-yellow-800/90 dark:text-yellow-200/90">
          © 2024{' '}
          <a href="https://agenciabeauty.com/" className="hover:underline">
            Agencia Beauty.
          </a>
          <br />
          Todos los derechos reservados. <br />
          <span>
            <h3 className=" underline">
              E-mail:
              <a href="#">agenciabeauty@genciabeautycompany</a>
            </h3>
          </span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
