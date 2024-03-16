import NavBar from "./Components/Header/NavBar";
import BannerHero from "./Components/Header/BannerHero";

const Header = () => {
    return (
        <div className="container mx-auto">
            <NavBar/>
            <BannerHero/>
        </div>
    );
};

export default Header;