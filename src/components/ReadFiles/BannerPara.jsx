import "./BannerPara.scss"
import BannerImg from '../../assets/bannerPara.jpg'

const BannerPara = () => {

    return (
        <div className="banner-section">
            <div className="banner-upper-content">
                <div className="info-section">
                    <h1>Online Product Sales Information</h1>
                    <p>You can call a timepiece a lifestyle accent or an attractive wristwear but it is an essential to almost everyone. Watches are handy devices which always keep you apprised of the time. Unlike smartphones, you don’t have to carry them but wear them. Unless you are wearing a highly expensive one, you don’t really get upset like you would on losing your smartphone.</p>
                </div>
                <div className="banner-img">
                    <img src={BannerImg} alt="" />
                </div>
            </div>
            <p className="summary"> You can find timepieces in an attractive assortment of colourful dials. They come in differently-shaped dials and are available with straps made of a host of different materials. Some of the most trending watches are the analog-digital variety. These come with arresting fitness features which detail your blood sugar levels, the distance you have walked as well as the number of steps you take.<br/><br/> Titan, Fastrack, TOMMY HILFIGER, VAN HEUSEN, and CASIO are some of the most trusted brands which engineer quality watches. The TraQ Pro (Model-75001PP02) from Titan comes with a black-coloured round dial protected with mineral glass. This features a heart rate monitor, stopwatch, timer, alarm music control and a transflective display. A lithium-ion battery, a sturdy TPU strap with a buckle clasp make this a wonderful activity tracker buddy for your everyday fitness activity</p>
        </div>)
}

export default BannerPara