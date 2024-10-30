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
                <button type="button" className="btn btn-primary ms-3" data-bs-toggle="offcanvas"
                        data-bs-target="#user">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path fillRule="evenodd"
                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                    </svg>
                </button>
            </header>
            <section className="offcanvas offcanvas-end" id="user">
                <div className="offcanvas-header">
                    <h2 className="offcanvas-title">Se connecter</h2>
                    <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="col-12 col-lg-6">
                        <div className="mb-3 form-floating">
                            <input type="text" id="name" className="form-control"
                                   placeholder="Votre Nom"/>
                            <label htmlFor="name"> Nom</label>

                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="mb-3 form-floating">
                            <input type="text" id="prenom" className="form-control"
                                   placeholder="Votre Prénom"/>
                            <label htmlFor="prenom"> Prénom</label>

                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="mb-3 form-floating">
                            <input type="email" id="mail" className="form-control"
                                   placeholder="Votre Email"/>
                            <label htmlFor="mail"> Email</label>

                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="form-check form-switch">
                            <input type="checkbox" name="newsletter" value="true" id="newsletter"
                                   className="form-check-input"/>
                            <label className="form-check-label" htmlFor="newsletter">
                                Se souvenir de moi
                            </label>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <button className="btn btn-primary pt-2">Se connecter</button>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default MyNavBar
