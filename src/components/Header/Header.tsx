import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="container sticky top-0 z-50 h-16 py-5 backdrop-blur-sm">
      <MainNav />
      <MobileNav />
    </header>
  );
};

export default Header;
