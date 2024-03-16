import logo from '../../assets/lws-logo-en.svg'

const NavBar = () => {
  return (
    <nav className="py-6 px-20 md:py-8  top-0 w-full !bg-[#191D26] z-50">
      <div className=" mx-auto flex items-center justify-between gap-x-6">
        <a href="/">
          <img className="h-[45px]" src={logo} alt="Lws" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
