const MyPagination = () => {
    return (
        <nav className="pt-2">
            <ul className="pagination justify-content-center">
                <li className="page-item disabled"><a className="page-link" href="/">&laquo;</a></li>
                <li className="page-item active"><a className="page-link" href="/">APP</a></li>
                <li className="page-item"><a className="page-link" href="/css">TEST CSS </a></li>
                <li className="page-item"><a className="page-link" href="/navbar">Navigation Bar </a></li>
                <li className="page-item"><a className="page-link" href="/ariane">Blog </a></li>
                <li className="page-item"><a className="page-link" href="/cards">Cartes </a></li>
                <li className="page-item"><a className="page-link" href="/forms">Formaulaire </a></li>
                <li className="page-item"><a className="page-link" href="/">&raquo;</a></li>
            </ul>
        </nav>
    )
}
export default MyPagination;
