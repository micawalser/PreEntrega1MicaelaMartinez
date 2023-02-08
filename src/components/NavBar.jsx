
import CartWidget from "./CartWidget";

export const  NavBar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <a className="navbar-brand logo" title='Home' alt='Home' href="#"></a>
    <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
<CartWidget />
    <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">MENU</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PRODUCTOS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">NOSOTROS</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            CATEGORIAS
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Casio</a></li>
            <li><a className="dropdown-item" href="#">Citizen</a></li>
            <li><a className="dropdown-item" href="#">Seiko</a></li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</nav>

</>
  );
}
