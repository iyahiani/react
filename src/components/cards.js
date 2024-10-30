import coding from '../images/coding.jpg'
import mixing from '../images/mixing.jpg'
import video from '../images/video.jpg'
import teching from '../images/teaching.jpg'
import building from '../images/officeBuilding.jpg'

const MyCards = () => {
    return (
        <div className="container-fluid my-3">
            <section className="row mb-3">
                <div className="col-12 col-lg-8">
                    <img src={building} alt="offfice" className="img-fluid rounded"/>
                </div>

                <div className="col-12 col-lg-4 bg-light py-5 px-3">
                    <h1 className="display-4">Lorem ipsum dolor sit</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
                    <hr className="my-3"/>
                    <a href="#" className="btn btn-primary"> en savoir plus</a>
                </div>
            </section>
            <section className="row gy-3">
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card">
                        <img src={coding} alt='coding' className="card-img-top"/>
                        <div className="card-body">
                            <h1 className="h3 card-title"> Tite Carte</h1>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            </p>
                            <a href="#" className="btn btn-primary"> Lire </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 my-3">
                    <div className="card">
                        <img src={mixing} alt='mixing' className="card-img-top"/>
                        <div className="card-body">
                            <h1 className="h3 card-title"> Tite Carte</h1>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            </p>
                            <a href="#" className="btn btn-primary "> Lire </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 my-3">
                    <div className="card">
                        <img src={video} alt='video' className="card-img-top"/>
                        <div className="card-body">
                            <h1 className="h3 card-title"> Tite Carte</h1>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            </p>
                            <a href="#" className="btn btn-primary "> Lire </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 my-3">
                    <div className="card">
                        <img src={teching} alt='teching' className="card-img-top"/>
                        <div className="card-body">
                            <h1 className="h3 card-title"> Tite Carte</h1>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            </p>
                            <a href="#" className="btn btn-primary"> Lire </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default MyCards;
