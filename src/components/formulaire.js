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
                    <h1 className="h3">Nous contacter</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quos cumque ab labore nulla,
                        laborum perferendis incidunt minus, quam accusamus qui. Ipsum, rerum! Provident delectus velit
                        asperiores. Voluptas, harum tempore?</p>
                    <p>Sint deleniti laboriosam autem aperiam eos tenetur voluptatibus laudantium dolor dignissimos
                        perspiciatis iste ipsum maiores, asperiores corrupti necessitatibus distinctio? Mollitia maiores
                        quis consequatur quia architecto. Beatae debitis ad delectus neque!</p>
                </section>
                <section className="col-12 col-md-6">
                    <form action="">
                        <h2 className="h3">Formulaire de contact</h2>
                        <fieldset>
                            <legend>Infos Personnelle</legend>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label"> Nom</label>
                                <input type="text" id="name" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="prenom" className="form-label"> Prénom</label>
                                <input type="text" id="prenom" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mail" className="form-label"> Email</label>
                                <input type="email" id="mail" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="npays" className="form-label"> Pays</label>
                                <select name="npays" id="pays" className="form-select">
                                    <option selected> ---Choisir un pays---</option>
                                    <option value="FR"> France</option>
                                    <option value="BE">Belgique</option>
                                    <option value="SP">Espagne</option>
                                    <option value="IT">Italie</option>
                                </select>
                            </div>
                        </fieldset>
                    </form>
                </section>
            </section>
        </main>
    )
}
export default MyFormulaire;
