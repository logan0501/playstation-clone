import Bg1 from "./assets/games1bg.webp";
import Girlbg from "./assets/gamesgirl.jpg"
import PsWhite from "./assets/pslogow.png";
import Yt1 from "./assets/yt1.jpg";
import Bg2 from "./assets/bg2.webp";
import CarImg from "./assets/carimg.jpg";
export default function Gamingbody(){
    return (
        <div>
                 <section>
            <div className="gameswatch">
                <img src={Bg1} alt="" className="gamesbg1"/>
                <div className="blkoverlay">
                    <img src={PsWhite} className="logo" />
                    <h2>PlayStation®5 games</h2>
                    <p>Discover the games you want, from exclusive blockbusters to innovative indies, all brought to life with the power of the PS5™ console.</p>
                    <button>
                    Watch Video
                    </button>
                </div>
          
            </div>
        </section>
        <div className="gamestext">
            Extraordinary exclusives from PlayStation Studios
        </div>
        <section className="exclusives">
            <div className="girlbg" >
                <img src={Girlbg} />
            </div>
            <div className="games-content-1">
                <div style={{margin:"90px"}}>
                <header style={{fontStyle:"oblique",fontSize:"24px",letterSpacing:"1.5px"}}>Horizon Forbidden West™</header>
                <p style={{marginTop:"30px",width:"700px",fontSize:"18px",color:"rgba(0,0,0,0.4)"}}>Explore distant lands, fight bigger and more awe-inspiring machines, and encounter astonishing new tribes as you return to the far-future, post-apocalyptic world of Horizon.</p>
                <button style={{backgroundColor:"#2D64E6",color:"white"}}>Find out more</button>
                </div>
               <div style={{position:"absolute",right:"120px",top:"-20px"}}>
                   <a href="https://www.youtube.com/watch?v=Lq594XmpPBg" target="__blank"><img style={{width:"500px",borderRadius:"15px"}} src={Yt1}/></a>
                
                </div>
            </div>
            
        </section>
        <div className="games-content-2">
            <img src={Bg2} style={{width:"100vw"}}  alt=""/>
            <div style={{position:"absolute",top:"50px",left:"50%",transform:"translate(-50%,0"}}><img src={CarImg} style={{width:"90vw",objectFit:"fill",height:"500px"}} alt="" /></div>
        </div>
        </div>
    )
}