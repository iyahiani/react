
import logo from '../images/one2Learn-Logo.png'
const MyNavBar = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light px-3">
            <a href="#" className=" navbar-brand">
                <img className="img-fluid object-fit-contain h-50" src={logo} alt="LOGO"/>
            </a>
            <span className="navbar-text">lorem ipsum</span>
            <button  className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <nav className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item" ><a href="#" target="_blank" className="nav-link active"> Accueil</a></li>
                    <li className="nav-item"><a href="#"  target="_blank" className="nav-link"> Blog </a></li>
                    <li className="nav-item"><a href="#"  target="_blank" className="nav-link"> A propos</a></li>
                    <li className="nav-item"><a href="#" target="_blank" className="nav-link"> Contact</a></li>
                </ul>
            </nav>

        </header>


    )
}
export default MyNavBar
