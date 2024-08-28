import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="container sticky top-0 mb-2 w-screen py-5 backdrop-blur-sm">
      <MainNav />
      <MobileNav />
    </header>
  );
};

export default Header;
