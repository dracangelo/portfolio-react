import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> Hi, <br/> I'm
                <img src={LogoTitle} alt="developer" />
                lobodan
                <br/>
                web developer
                </h1>
                <h2>Frontend developer/ React Expert/ Python expert/ PPC</h2>
                <Link to="/contact" className="flat-button">HIT ME UP</Link>
            </div>

        </div>
    )
}
export default Home