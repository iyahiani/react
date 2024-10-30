import logo from '../images/one2Learn-Logo.png'
import MyPagination from "./pagination";

const MyNavBar = () => {
    return (
        <div>
            <div>
                <MyPagination></MyPagination>
            </div>
            <header className="navbar navbar-expand-lg navbar-light bg-light px-3">
                <a href="#" className=" navbar-brand">
                    <img className="img-fluid object-fit-contain h-50" src={logo} alt="LOGO"/>
                </a>

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <nav>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a href="#" target="_blank"
                                                        className="nav-link active"> Accueil</a>
                            </li>
                            <li className="nav-item"><a href="#" target="_blank" className="nav-link"> Blog </a></li>
                            <li className="nav-item dropdown"><a href="#" target="_blank"
                                                                 className="nav-link dropdown-toggle"
                                                                 data-bs-toggle="dropdown"> A propos</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a href="#" target="_blank"
                                                                className="dropdown-item"> Item1 </a>
                                    </li>
                                    <li className="nav-item"><a href="#" target="_blank"
                                                                className="dropdown-item"> Item2 </a>
                                    </li>
                                    <li className="nav-item"><a href="#" target="_blank"
                                                                className="dropdown-item"> Item3 </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="#" target="_blank" className="nav-link"> Contact</a></li>
                        </ul>
                    </nav>
                    <form action="" id="search" className="ms-auto">
                        <div className="input-group">
                            <input type="search" name="s" placeholder="rechercher" className="form-control"/>
                            <button type="submit" className="btn btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-search" viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>

            </header>
        </div>

    )
}
export default MyNavBar
