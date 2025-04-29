import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">WisataBudaya</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Beranda</Link>
        </li>
        <li>
          <Link to="/destinasi">Destinasi</Link>
        </li>
        <li>
          <Link to="/budaya">Budaya</Link>
        </li>
        <li>
          <Link to="/galeri">Galeri</Link>
        </li>
        <li>
          <Link to="/kontak">Kontak</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
