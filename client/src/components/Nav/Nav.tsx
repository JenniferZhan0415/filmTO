import "./Nav.scss"
// import filmTOLogo from '../../assets/logo/filmTO_logo.png';

export default function Nav () {
  return(
    <>
    <header className="nav">
        <ul className="nav__list">
            <li className="nav__item">CINEMA</li>
            <li className="nav__item">FESTIVAL</li>
            <li className="nav__item">EVENT</li>
            <li className="nav__item">REPORT</li>
            <li className="nav__item">ABOUT</li>
            <li className="nav__item">LOG IN</li>
        </ul>
    </header>
    </>
  )
}