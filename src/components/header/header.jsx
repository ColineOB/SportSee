import './header.css'
import Logo from '../../assets/logo.png'

function Header() {
 
    return (
        <div className="header">
            <img className='header-logo' src={Logo} alt='Logo' />
                <p>Accueil</p>
                <p>Profil</p>
                <p>Réglage</p>
                <p>Communauté</p>
        </div>
    )
}

export default Header