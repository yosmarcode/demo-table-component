import React from 'react'

const NavBar = () => {
  return (
    <div>
            <nav>
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Repositorio</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Documentación</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Video</a>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </nav>
    </div>
  )
}

export default NavBar