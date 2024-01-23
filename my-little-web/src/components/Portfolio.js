// swiper test
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Portfolio() {
    return(
        <div id="portfolio" className="section">
                <div className="portfolio__title">
                    PORTFOLIO
                </div>
                <div className="portfolio__container">
                    <div className="portfolio__wrapper">
                        <div className="portfolio__wrapper__title">
                            MERN 스택의 포트폴리오
                        </div>
                        <div className="portfolio__wrapper__content">
                            <div className="portfolio__wrapper__content__photo">
                                <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        // observer="true"
        // observeParents="true"
      >
        {/* <img src="me1_half_trans.png"/> */}
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
                            </div>
                            <div className="portfolio__wrapper__content__text">

                            </div>
                        </div>
                    </div>
                    <div className="portfolio__wrapper">
                        <div className="portfolio__wrapper__title">
                            MERN 스택의 포트폴리오
                        </div>
                        <div className="portfolio__wrapper__content">
                            <div className="portfolio__wrapper__content__photo">
<Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        // observer="true"
        // observeParents="true"
      >
        {/* <img src="me1_half_trans.png"/> */}
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
                            </div>
                            <div className="portfolio__wrapper__content__text">
                                
                            </div>
                        </div>
                    </div>
                    <div className="portfolio__wrapper">
                        <div className="portfolio__wrapper__title">
                            MERN 스택의 포트폴리오
                        </div>
                        <div className="portfolio__wrapper__content">
                            <div className="portfolio__wrapper__content__photo">

                            </div>
                            <div className="portfolio__wrapper__content__text">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
