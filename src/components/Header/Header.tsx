import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="container fixed top-0 mb-2 py-5">
      <MainNav />
      <MobileNav />
    </header>
  );
};

export default Header;
