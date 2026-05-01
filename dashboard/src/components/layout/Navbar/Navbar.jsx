import logo from '../../../assets/axis-logo.png'
import notification from '../../../assets/notification-logo.png'
import Style from './navbar.module.css'
export default function Navbar() {

    return (
        <>
            <nav className='d-flex justify-content-between align-items-center'>
                <div className='d-flex px-4'>
                    <img className={Style.navLogo} src={logo} alt="logo" />
                </div>
                
                    
                      <div>
                    <img src={notification} alt="notifiaction"  className={Style.notification}/>
             
                        
                     <select   className={Style.select} name="show" >
                        <option>Super Admin</option>

                            <option >Admin</option>
                            

                    </select>
 
                

                
            
              </div>
                

            </nav>
        </>
    );
}