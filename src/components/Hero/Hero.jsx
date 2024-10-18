import './Hero.css'
import heroImg from '../../assets/hero.png'

const Hero = () => {
  return (
    <div className="hero">
        <h4>Hello Nike App</h4>
        <p>Download the app to access everything Nike. <a href="https://play.google.com/store/apps/details?id=com.nike.omega&hl=ru&pli=1" target="_blank">Get Your Great</a></p>
        <img src={heroImg} alt="" />
    </div>
  )
}

export default Hero