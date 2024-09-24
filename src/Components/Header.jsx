import logo from '../assets/logo.png'

const Logo=(props)=>{
    return(
    <>
        <img src={logo} alt="Logo de la aplicacion" />
        <p className="logo-text">{props.logoText}</p>
    </>
)
}

const Header=(props)=>{
  return(  
    <>
        
        <header>
            <Logo logoText={props.logoText}/>
            <Nav className={props.linkClass}/>
        </header>
    
    
    </>
  )
};

export const Nav=(props)=>{
   return( 
   <>
        <nav>
            <ul>
                <li>
                    <a href="#Home" >Home</a>
                </li>

                <li>
                    <a href="#Profile" >Profile</a>
                </li>
                
                <li>
                    <a href="#Contact" >Contact</a>
                </li>
            </ul>
        </nav>
    </>
    )
}

export default Header