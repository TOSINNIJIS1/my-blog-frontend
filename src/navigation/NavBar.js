import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>

                <li>
                    <Link to='/about'> About </Link>
                </li>

                <li>
                    <Link to='/articles'> Articles Page</Link>
                </li>

                <li>
                    <Link to='/articles_list'> Articles List </Link>
                </li>
                
            </ul>
        </nav>
    )
}
