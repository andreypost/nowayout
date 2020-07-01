import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Header from './components/Header';
import cardData from './cardData';
import { GameCards } from './components/GameCards';

export default class Main extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    const getAllCountersDownTimer = (elems) => {
      for (let elem of elems) {
        let time = new Date(elem.dataset.counter),
          countDownDate = time.getTime(),
          distance = 0
        const timer = () => {
          let now = new Date().getTime()
          distance = countDownDate - now
          if (distance < 0) return
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds = Math.floor((distance % (1000 * 60)) / 1000)
          if (hours < 10) hours = '0' + hours
          if (minutes < 10) minutes = '0' + minutes
          if (seconds < 10) seconds = '0' + seconds
          elem.innerHTML = hours + ' : ' + minutes + ' : ' + seconds
        }
        timer()
        let x = setInterval(() => {
          timer()
          if (distance < 0) clearInterval(x)
        }, 1000)
      }
    }
    getAllCountersDownTimer(document.querySelectorAll('#counterStock'))
  }
  componentWillUnmount() {
    // clearInterval(x)
  }
  render() {
    return (
      <>
        <Header />
        <main>
          <section className="section">
            <OwlCarousel className="owl-carousel owl-theme" loop={true} rewind={true} margin={10} nav={true} dots={false} autoplay={true} navText={false}
              responsive={{ 0: { items: 2 }, 580: { items: 3 }, 1024: { items: 4 }, 1360: { items: 5 } }}>
              <GameCards datos={cardData[0]}>
              <div className="flexcentaround card__discount white">
                  <h2 className="morganiteBold">20% off</h2>
                  <div>
                    <h4 className="sansThin px14">Limited-time Deal</h4>
                    <p className="sansBlack px18" id="counterStock" data-counter={cardData[0].timeout}>00 : 00 : 00 : 00</p>
                  </div>
                </div>
              </GameCards>
              <GameCards datos={cardData[1]} />
              <GameCards datos={cardData[2]}>
                <div className="flexcentaround card__discount white">
                  <h2 className="morganiteBold">20% off</h2>
                  <div>
                    <h4 className="sansThin px14">Limited-time Deal</h4>
                    <p className="sansBlack px18" id="counterStock" data-counter={cardData[2].timeout}>00 : 00 : 00 : 00</p>
                  </div>
                </div>
              </GameCards>
              <GameCards datos={cardData[3]} />
              <GameCards datos={cardData[4]} />
              <GameCards datos={cardData[0]} />
              <GameCards datos={cardData[1]} />
              <GameCards datos={cardData[2]} />
              <GameCards datos={cardData[3]} />
              <GameCards datos={cardData[4]} />
            </OwlCarousel>
          </section>
        </main>
      </>
    );
  }
}
