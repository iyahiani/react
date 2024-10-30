import MyPagination from "./pagination";

const MyModal = () => {
    return (
        <div>
            <MyPagination></MyPagination>
            <body>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal1">Click me</button>
            <div className="modal" id="modal1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="h4 modal-title">Lorem ipsum dolor sit ame
                                diam</h1>
                            <button className="btn-close" type="button" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        </div>
                    </div>
                </div>
            </div>
            </body>
        </div>
    )
}
export default MyModal;
