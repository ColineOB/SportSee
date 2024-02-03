import './menu.css'
import yoga from '../../assets/icons/yoga.png'
import swim from '../../assets/icons/swim.png'
import bike from '../../assets/icons/bike.png'
import bodybuilding from '../../assets/icons/bodybuilding.png'

function Menu() {
 
    return (
        <div className="menu">
            <div className='menu-list'>
                <img className='menu-list_icons' src={yoga} alt='yoga' />
                <img className='menu-list_icons' src={swim} alt='swim' />
                <img className='menu-list_icons' src={bike} alt='bike' />
                <img className='menu-list_icons' src={bodybuilding} alt='bodybuilding' />
            </div>
            <p>Copiryght, SportSee 2020</p>
        </div>
    )
}

export default Menu