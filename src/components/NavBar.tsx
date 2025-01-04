

const NavBar = () => {
  return (
    <div>
            <nav>
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="https://github.com/yosmarcode/demo-table-component/tree/dev" target="_blank">Repositorio</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="https://www.npmjs.com/package/table-component-mui-lib" target='_blank'>Documentación</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="https://www.youtube.com/watch?v=Rb5vrl19yPc" target='_blank'>Video</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="https://www.youtube.com/channel/UCSGaGrG-RpavXaJhJJQ_ktQ/?sub_confirmation=1" target='_blank'>suscribete @yosmarcode</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
    </div>
  )
}

export default NavBar