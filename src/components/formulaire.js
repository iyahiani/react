const MyFormulaire = () => {
    return (
        <main className="container my-3">
            <section className="row">
                <nav className="col-12">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Accueil</a></li>
                        <li className="breadcrumb-item active">Contact</li>
                    </ol>
                </nav>
                <section className="col12 col-md-6 mb3">
                    <div className="alert alert-info alert-dismissible show fade">
                        <p className="h4">Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
                        <button className="btn-close" data-bs-dismiss="alert"></button>
                    </div>
                    <h1 className="h3">Nous contacter</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quos cumque ab labore nulla,
                        laborum perferendis incidunt minus, quam accusamus qui. Ipsum, rerum! Provident delectus velit
                        asperiores. Voluptas, harum tempore?</p>
                    <p>Sint deleniti laboriosam autem aperiam eos tenetur voluptatibus laudantium dolor dignissimos
                        perspiciatis iste ipsum maiores, asperiores corrupti necessitatibus distinctio? Mollitia maiores
                        quis consequatur quia architecto. Beatae debitis ad delectus neque!</p>
                    <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#panneau"> Panneau1
                    </button>
                    <div className="collapse border p-3" id="panneau">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    </div>
                    <div className="accordion pt-2">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button type="button" className="accordion-button" data-bs-toggle="collapse"
                                        data-bs-target="#section">Accordéon
                                </button>
                            </h2>
                            <section className="accordion-body collapse" id="section">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet.
                            </section>
                        </div>

                    </div>
                </section>
                <section className="col-12 col-md-6">
                    <form action="">
                        <h2 className="h3">Formulaire de contact</h2>
                        <fieldset>
                            <legend>Infos Personnelle</legend>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <div className="mb-3 form-floating">
                                        <input type="text" id="name" className="form-control" placeholder="Votre Nom"/>
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
                                    <div className="mb-3 form-floating">

                                        <select name="npays" id="pays" className="form-select">
                                            <option value> ---Choisir un pays---</option>
                                            <option value="FR"> France</option>
                                            <option value="BE">Belgique</option>
                                            <option value="SP">Espagne</option>
                                            <option value="IT">Italie</option>
                                        </select>
                                        <label htmlFor="npays"> Pays</label>
                                    </div>
                                </div>
                            </div>


                        </fieldset>
                        <fieldset>
                            <legend>Vos Préférences</legend>
                            <div className="mb-3">

                                <div className="form-check form-switch">
                                    <input type="checkbox" name="newsletter" value="true" id="newsletter"
                                           className="form-check-input"/>
                                    <label className="form-check-label" htmlFor="newsletter">
                                        Désirez-vous vous inscrire à notre newsletter ?
                                    </label>
                                </div>

                            </div>
                            <div className="mb-3">
                                <p className="h6"> Comment avez-vous entendu parler de ce site ?<span
                                    className="text-muted">(Plusieurs Réponses possible).</span></p>
                                <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                        <input type="checkbox" name="how" value="reseau"
                                               className="form-check-input"/> Réseaux sociaux
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                        <input type="checkbox" name="how" value="publicite"
                                               className="form-check-input"/> Publicité
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Votre Message</legend>
                            <div className="mb-3 form-floating">
                                <textarea name="message" id="message" className="form-control"
                                          placeholder="Votre message"></textarea>
                                <label htmlFor="message">Votre message</label>
                            </div>
                        </fieldset>
                        <button type="submit" className="btn btn-primary">Envoyer</button>
                    </form>
                </section>
            </section>
        </main>
    )
}
export default MyFormulaire;
