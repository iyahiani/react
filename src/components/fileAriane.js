import arbre from '../images/arbre.jpg'
import brouillard from '../images/brouillard.jpg'
import chalet from '../images/chalet.jpg'
import montagnes from '../images/montagnes.jpg'
import riviere from '../images/riviere.jpg'
import soiree from '../images/soiree.jpg'
const MyFileAriane = () => {
    return (
        <div className="container-fluid">
            <section className="row gy-3">
                <div className="col-12 col-md-9">
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Accueil</a></li>
                            <li className="breadcrumb-item">Blog</li>
                        </ol>
                    </nav>
                    <article>
                        <div className="row">
                            <figure className="col-12 col-md-4 d-none d-md-block">
                                <img src={arbre} alt="Arbre" className="img-fluid img-thumbnail"/>
                            </figure>
                            <div className="col-12 col-md-8">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a qui hic nostrum sequi. Nulla quia nesciunt adipisci autem eum. Omnis hic praesentium recusandae. Non saepe vero totam mollitia dicta.
                            </div>
                        </div>
                    </article>
                    <article>
                        <div className="row">
                            <figure className="col-12 col-md-4 d-none d-md-block">
                                <img src={brouillard} alt="Brouillard" className="img-fluid img-thumbnail"/>
                            </figure>
                            <div className="col-12 col-md-8">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a qui hic nostrum sequi. Nulla quia nesciunt adipisci autem eum. Omnis hic praesentium recusandae. Non saepe vero totam mollitia dicta.
                            </div>
                        </div>
                    </article>
                    <article>
                        <div className="row">
                            <figure className="col-12 col-md-4 d-none d-md-block">
                                <img src= {chalet} alt="Chalet" className="img-fluid img-thumbnail"/>
                            </figure>
                            <div className="col-12 col-md-8">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a qui hic nostrum sequi. Nulla quia nesciunt adipisci autem eum. Omnis hic praesentium recusandae. Non saepe vero totam mollitia dicta.
                            </div>
                        </div>
                    </article>
                    <article>
                        <div className="row">
                            <figure className="col-12 col-md-4 d-none d-md-block">
                                <img src={montagnes}  alt="Montagne" className="img-fluid img-thumbnail"/>
                            </figure>
                            <div className="col-12 col-md-8">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a qui hic nostrum sequi. Nulla quia nesciunt adipisci autem eum. Omnis hic praesentium recusandae. Non saepe vero totam mollitia dicta.
                            </div>
                        </div>
                    </article>
                    <article>
                        <div className="row">
                            <figure className="col-12 col-md-4 d-none d-md-block">
                                <img src={riviere} alt="Rivière" className="img-fluid img-thumbnail"/>
                            </figure>
                            <div className="col-12 col-md-8">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a qui hic nostrum sequi. Nulla quia nesciunt adipisci autem eum. Omnis hic praesentium recusandae. Non saepe vero totam mollitia dicta.
                            </div>
                        </div>
                    </article>
                    <article>
                        <div className="row">
                            <figure className="col-12 col-md-4 d-none d-md-block">
                                <img src={soiree} alt="Soirée" className="img-fluid img-thumbnail"/>
                            </figure>
                            <div className="col-12 col-md-8">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a qui hic nostrum sequi. Nulla quia nesciunt adipisci autem eum. Omnis hic praesentium recusandae. Non saepe vero totam mollitia dicta.
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-12 col-md-3">
                    Aliquam accusantium tempore odit cum nisi, amet quam, provident qui ratione fugit assumenda eos sunt, atque nulla porro et est neque obcaecati quae. Distinctio non commodi dolorum vitae. At, perspiciatis?
                </div>
            </section>
        </div>
    )
}

export default MyFileAriane ;
