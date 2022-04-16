import Logo from "../assets/ps5logo.png";
import "../styles.css";

export default function Navbar(){
    return (
        <div>
        <div className="navbar">
            <span ><img className="logo" src={Logo} alt="" srcset="" /></span>
            <ul>
                <li>PlayStation®5</li>
                <li>Games</li>
                <li>Accessories</li>
                <li>More features</li>
                <li>Entertainment</li>
            </ul>
        </div>
   
        </div>

    )
}