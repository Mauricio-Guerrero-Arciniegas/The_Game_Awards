import './Intro.scss'
import {Brilli} from './../common/Brilli/Brilli'

export const Intro = () => {
    return (
        <div className="Intro">
            <video 
            className="Intro-video" 
            src="/assets/public_assets_home-banne.webm" 
            loop 
            muted 
            autoPlay></video>
          <div className="Wrapper">
            <Vote />
          </div>

          <Marquee />
        </div>
    )
}

const Vote = () => {
    return (
        <div className="Intro-vote Vote">
            <h2 className="Vote-h2">
                <img className="Vote-img" src="/assets/logo-with-text.svg" alt="The Game Awards"  />
            </h2>
                <div className="Vote-date">
                    <span className="Vote-month">December</span>
                    <span className="Vote-day">8</span>
                </div>
                <Brilli nombre="Add Event to calendar" />
                <a href="#" className="Vote-now">Vote Now</a>
        </div>
    )
}

const Marquee = () => {
    return (
        <div className="Intro-marqee Marquee">
        <p className="Marquee-p Marquee-p--stroke">Global celebration of video games</p>
        <p className="Marquee-p Marquee-p--white">Streams live on all plataforms</p>
        </div>
    )
}