import MainNav from "./Header/MainNav";
import MobileNav from "./Header/MobileNav";

const Header = () => {
  return (
    <header className="container mb-2 py-5">
      <MainNav />
      <MobileNav />
    </header>
  );
};

export default Header;
