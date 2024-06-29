import logoPokedex from "../assets/pokedex.png";

function Navbar() {
  return (
    <nav>
      <img src={logoPokedex} alt="logo-pokedex" className="navbar-img" />
    </nav>
  );
}

export default Navbar;
