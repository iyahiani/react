import {NavLink} from 'react-router-dom'

const MyPagination = () => {
    return (
        <nav className="pt-2">
            <ul className="pagination justify-content-center">
                <li className="page-item disabled"><a className="page-link" href="/">&laquo;</a></li>
                <li className="page-item"><NavLink to="/css"
                                                   className={({isActive}) => (isActive ? 'page-link active' : 'page-link')}>TEST
                    CSS </NavLink></li>
                <li className="page-item"><NavLink to="/navbar"
                                                   className={({isActive}) => (isActive ? 'page-link active' : 'page-link')}>Navigation
                    Bar </NavLink></li>
                <li className="page-item"><NavLink to="/ariane"
                                                   className={({isActive}) => (isActive ? 'page-link active' : 'page-link')}>Blog </NavLink>
                </li>
                <li className="page-item"><NavLink to="/cards"
                                                   className={({isActive}) => (isActive ? 'page-link active' : 'page-link')}>Cartes </NavLink>
                </li>
                <li className="page-item"><NavLink to="/forms"
                                                   className={({isActive}) => (isActive ? 'page-link active' : 'page-link')}>Formaulaire </NavLink>

                </li>
                <li className="page-item"><NavLink to="/modal"
                                                   className={({isActive}) => (isActive ? 'page-link active' : 'page-link')}>Modal </NavLink>

                </li>
                <li className="page-item"><NavLink to="/"
                                                   className={({isActive}) => (isActive ? 'page-link active' : 'page-link')}>&raquo;</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default MyPagination;
