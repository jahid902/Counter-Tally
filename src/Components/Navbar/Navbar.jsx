import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav>
    <div className="navbar">
      <div className="logo">
        <a href="#">Riverr</a>
      </div>
      <div className="navlinks">
        <button type="button">Sign In</button>
        <button type="button">Sign Out</button>
      </div>
    </div>
  </nav>
    </div>
  );
};

export default Navbar;
