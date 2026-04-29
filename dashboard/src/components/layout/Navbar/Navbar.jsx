import logo from '../../../assets/axis-logo.png'
import flag from '../../../assets/flag.png'
import Style from './navbar.module.css'
export default function Navbar() {

    return (
        <>
            <nav className='d-flex justify-content-between align-items-center'>
                <div className='d-flex px-4'>
                    <img className={Style.navLogo} src={logo} alt="logo" />
                </div>
                
                    <ul className={`d-flex align-items-center m-0 ${Style.navlinks}`}>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">Developers</a></li>

                        <li><a href="#">Projects</a></li>

                        <li><a href="#">Project Compare</a></li>

                        <li><a href="#">Wishlists</a></li> 

                        <li><select   className={Style.select} name="show" >
                        <option>Show More</option>

                            <option >item1</option>
                            <option >item1</option>

                            </select></li>
 
                    </ul>
                  

                <div className={Style.lang}>
            <img src={flag} alt="flag"  className={Style.flag} />
             <span>EN / AR</span>
              </div>
                

            </nav>
        </>
    );
}