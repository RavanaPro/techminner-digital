import NavigationDesktop from "../navigation/navigationDesktop";
import NavigationMobile from "../navigation/navigationMobile";

const Header = () => {
  return (
    <>
      <NavigationMobile />
      <NavigationDesktop />
    </>
  );
};

export default Header;
