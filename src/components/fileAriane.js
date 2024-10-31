import arbre from '../images/arbre.jpg'
import brouillard from '../images/brouillard.jpg'
import chalet from '../images/chalet.jpg'
import montagnes from '../images/montagnes.jpg'
import riviere from '../images/riviere.jpg'
import soiree from '../images/soiree.jpg'
import MyNavBar from './NavBar';

const MyFileAriane = () => {
    return (
        <div>
            <MyNavBar></MyNavBar>
            <div className="container-fluid">
                <section className="row gy-3">
                    <div className="col-12 col-md-9">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Accueil</a></li>
                                <li className="breadcrumb-item">Blog</li>
                            </ol>
                        </nav>
                        <div className="list-group list-group-flush my-3">
                            <article className="list-group-item">
                                <div className="row">
                                    <figure className="col-12 col-md-4 d-none d-md-block">
                                        <img src={arbre} alt="Arbre" className="img-fluid img-thumbnail"/>
                                    </figure>
                                    <div className="col-12 col-md-8">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a qui hic
                                        nostrum
                                        sequi.
                                        Nulla quia nesciunt adipisci autem eum. Omnis hic praesentium recusandae. Non
                                        saepe
                                        vero
                                        totam mollitia dicta.
                                        <p>
                                            <a className="btn btn-primary ">
                                                lire la suite
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </article>
                            <article className="list-group-item">
                                <div className="row">
                                    <figure className="col-12 col-md-4 d-none d-md-block">
                                        <img src={brouillard} alt="Brouillard" className="img-fluid img-thumbnail"/>
                                    </figure>
                                    <div className="col-12 col-md-8">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a qui hic
                                        nostrum
                                        sequi.
                                        Nulla quia nesciunt adipisci autem eum. Omnis hic praesentium recusandae. Non
                                        saepe
                                        vero
                                        totam mollitia dicta.
                                    </div>
                                </div>
                            </article>
                            <article className="list-group-item">
                                <div className="row">
                                    <figure className="col-12 col-md-4 d-none d-md-block">
                                        <img src={chalet} alt="Chalet" className="img-fluid img-thumbnail"/>
                                    </figure>
                                    <div className="col-12 col-md-8">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a qui hic
                                        nostrum
                                        sequi.
                                        Nulla quia nesciunt adipisci autem eum. Omnis hic praesentium recusandae. Non
                                        saepe
                                        vero
                                        totam mollitia dicta.
                                    </div>
                                </div>
                            </article>
                            <article className="list-group-item">
                                <div className="row">
                                    <figure className="col-12 col-md-4 d-none d-md-block">
                                        <img src={montagnes} alt="Montagne" className="img-fluid img-thumbnail"/>
                                    </figure>
                                    <div className="col-12 col-md-8">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a qui hic
                                        nostrum
                                        sequi.
                                        Nulla quia nesciunt adipisci autem eum. Omnis hic praesentium recusandae. Non
                                        saepe
                                        vero
                                        totam mollitia dicta.
                                    </div>
                                </div>
                            </article>
                            <article className="list-group-item">
                                <div className="row">
                                    <figure className="col-12 col-md-4 d-none d-md-block">
                                        <img src={riviere} alt="Rivière" className="img-fluid img-thumbnail"/>
                                    </figure>
                                    <div className="col-12 col-md-8">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a qui hic
                                        nostrum
                                        sequi.
                                        Nulla quia nesciunt adipisci autem eum. Omnis hic praesentium recusandae. Non
                                        saepe
                                        vero
                                        totam mollitia dicta.
                                    </div>
                                </div>
                            </article>
                            <article className="list-group-item">
                                <div className="row">
                                    <figure className="col-12 col-md-4 d-none d-md-block">
                                        <img src={soiree} alt="Soirée" className="img-fluid img-thumbnail"/>
                                    </figure>
                                    <div className="col-12 col-md-8">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a qui hic
                                        nostrum
                                        sequi.
                                        Nulla quia nesciunt adipisci autem eum. Omnis hic praesentium recusandae. Non
                                        saepe
                                        vero
                                        totam mollitia dicta.
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 p-5">
                        <section className="card">
                            <div className="card-header bg-primary text-white">
                                <h1 className="h5"> Catégorie</h1>
                            </div>
                            <ul className="list-group my-3 ">
                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0">
                                    <a
                                        href="#"> Catégorie 1 </a>
                                    <span className="badge bg-primary rounded-pill">10</span>
                                </li>
                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0">
                                    <a
                                        href="#"> Catégorie 2 </a>
                                    <span className="badge bg-primary rounded-pill">5</span>
                                </li>
                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0">
                                    <a
                                        href="#"> Catégorie 3 </a>
                                    <span className="badge bg-primary rounded-pill">12</span>
                                </li>
                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0">
                                    <a
                                        href="#"> Catégorie 4 </a>
                                    <span className="badge bg-primary rounded-pill">1</span>
                                </li>
                            </ul>
                        </section>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default MyFileAriane;
