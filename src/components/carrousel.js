import coding from '../images/coding.jpg'
import mixing from '../images/mixing.jpg'
import video from '../images/video.jpg'
import teching from '../images/teaching.jpg'

const MyCarrousel = () => {
    return (
        <div>
            <body>
            <div className="container">
                <div className="col-8 offset-2">
                    <div className="carousel slide" id="carousel1" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={coding} alt="coding" className="d-block w-100"/>
                            </div>
                            <div className="carousel-item">
                                <img src={mixing} alt="mixing" className="d-block w-100"/>
                            </div>
                            <div className="carousel-item">
                                <img src={video} alt="video" className="d-block w-100"/>
                            </div>
                            <div className="carousel-item">
                                <img src={teching} alt="teching" className="d-block w-100"/>
                            </div>
                        </div>
                        <button type="button" className="carousel-control-prev" data-bs-slide="prev"
                                data-bs-target="#carousel1">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button type="button" className="carousel-control-next" data-bs-slide="next"
                                data-bs-target="#carousel1">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
            </div>
            </body>
        </div>
    )
}

export default MyCarrousel;
