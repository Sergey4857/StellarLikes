import css from './Customers.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { useRef, useState } from 'react';
import arrowLeft from '../../icons/arrow-left.svg';
import arrowRight from '../../icons/arrow-right.svg';
import flagBritain from '../../icons/flag-britain.svg';
import flagGermany from '../../icons/flag-germany.svg';
import flagCanada from '../../icons/customers-flag.svg';

import star from '../../icons/rating-star.svg';

import ReviewForm from 'components/ReviewForm/ReviewForm';

export default function Customers() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [showReviewForm, setShowReviewForm] = useState(false);

  return (
    <section className={css.customersSection}>
      <div className={css.customers}>
        <h2 className="section-title">Our customers really love us</h2>
        <p className={css.customersText}>
          Their only complaint? Not finding us sooner. See why our customers
          choose StellarLikes for all of their Instagram-related growth needs.
        </p>
        <div className={css.swiperContainer}>
          <div className={css.swiperWrapper}>
            <div className={css.swiperNavigation}>
              <button ref={prevRef} className={css.swiperButtonPrev}>
                <img src={arrowLeft} alt="arrowLeft" />
              </button>
              <button ref={nextRef} className={css.swiperButtonNext}>
                <img src={arrowRight} alt="arrowRight" />
              </button>
            </div>
            <button
              onClick={() => {
                setShowReviewForm(!showReviewForm);
              }}
              className={css.sliderLink}
            >
              Leave Review
            </button>
          </div>
          {showReviewForm && (
            <ReviewForm setShowReviewForm={setShowReviewForm} />
          )}
          <Swiper
            spaceBetween={10}
            watchSlidesProgress={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={swiper => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            modules={[Navigation]}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
              1280: {
                slidesPerView: 3,
                slidesPerGroup: 1,
              },
            }}
            className={css.mySwiper}
          >
            <SwiperSlide className={css.slide}>
              <div className={css.slideWrapper}>
                <div className={css.slideInfo}>
                  <div className={css.slideName}>
                    <img
                      src={flagCanada}
                      alt="flag"
                      className={css.slideFlag}
                    />
                    Jearnmi321
                  </div>
                  <div className={css.slideData}>June 23, 2024</div>
                </div>
                <div className={css.slideRating}>
                  <img src={star} alt="star" className={css.slideStars} />
                  <img src={star} alt="star" className={css.slideStars} />
                  <img src={star} alt="star" className={css.slideStars} />
                  <img src={star} alt="star" className={css.slideStars} />
                  <img src={star} alt="star" className={css.slideStars} />
                  <div className={css.slideStarsRating}>5.0</div>
                </div>
                <div className={css.slideDescription}>
                  A very honest review. I used the free trial and was impressed,
                  then I've been regularly purchasing their other instagram
                  services, and I did NOT EXPECT anything else more than
                  numbers. Imagine I'm getting organic followers and more
                  engagement on my posts. Thank you guys! ❤️
                </div>
                <div className={`${css.verificationBlock} ${css.orangeBlock}`}>
                  <div className={`${css.verificationTitle} ${css.orangeText}`}>
                    Verified Purchase
                  </div>
                  <div className={`${css.verificationText} ${css.orangeText}`}>
                    Customer bought 500 tiktok followers
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className={css.slide}>
              <div className={css.slideWrapper}>
                <div className={css.slideInfo}>
                  <div className={css.slideName}>
                    <img
                      src={flagGermany}
                      alt="flag"
                      className={css.slideFlag}
                    />
                    Finalorda
                  </div>
                  <div className={css.slideData}>Aug 15, 2024</div>
                </div>
                <div className={css.slideRating}>
                  <img src={star} alt="star" className={css.slideStars} />
                  <img src={star} alt="star" className={css.slideStars} />
                  <img src={star} alt="star" className={css.slideStars} />
                  <img src={star} alt="star" className={css.slideStars} />
                  <img src={star} alt="star" className={css.slideStars} />
                  <div className={css.slideStarsRating}>5.0</div>
                </div>
                <div className={css.slideDescription}>
                  THIS WORKS! I posted a video with me singing on Instagram and
                  purchased 50000 views + 5000 likes from Stormlikes... Guess
                  what? My video went VIRAL and has now over 600k views!! I'M SO
                  THANKFUL! 😍
                </div>
                <div className={`${css.verificationBlock} ${css.greenBlock}`}>
                  <div className={`${css.verificationTitle} ${css.greenText}`}>
                    Verified Purchase
                  </div>
                  <div className={`${css.verificationText} ${css.greenText}`}>
                    Customer bought 5000 tiktok followers
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className={css.slide}>
              <div className={css.slideWrapper}>
                <div className={css.slideInfo}>
                  <div className={css.slideName}>
                    <img
                      src={flagBritain}
                      alt="flag"
                      className={css.slideFlag}
                    />
                    Jearnmi321
                  </div>
                  <div className={css.slideData}>June 23, 2024</div>
                </div>
                <div className={css.slideRating}>
                  <img src={star} alt="star" className={css.slideStars} />
                  <img src={star} alt="star" className={css.slideStars} />
                  <img src={star} alt="star" className={css.slideStars} />
                  <img src={star} alt="star" className={css.slideStars} />
                  <img src={star} alt="star" className={css.slideStars} />
                  <div className={css.slideStarsRating}>5.0</div>
                </div>
                <div className={css.slideDescription}>
                  A very honest review. I used the free trial and was impressed,
                  then I've been regularly purchasing their other instagram
                  services, and I did NOT EXPECT anything else more than
                  numbers. Imagine I'm getting organic followers and more
                  engagement on my posts. Thank you guys! ❤️
                </div>
                <div className={`${css.verificationBlock} ${css.violetBlock}`}>
                  <div className={`${css.verificationTitle} ${css.violetText}`}>
                    Verified Purchase
                  </div>
                  <div className={`${css.verificationText} ${css.violetText}`}>
                    Customer bought 5000 tiktok followers
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className={css.slide}>
              <div className={css.slideWrapper}>
                <div className={css.slideInfo}>
                  <div className={css.slideName}>
                    <img
                      src={flagCanada}
                      alt="flag"
                      className={css.slideFlag}
                    />
                    Jearnmi321
                  </div>
                  <div className={css.slideData}>June 23, 2024</div>
                </div>
                <div className={css.slideRating}>
                  <img src={star} alt="star" className={css.slideStars} />
                  <img src={star} alt="star" className={css.slideStars} />
                  <img src={star} alt="star" className={css.slideStars} />
                  <img src={star} alt="star" className={css.slideStars} />
                  <img src={star} alt="star" className={css.slideStars} />
                  <div className={css.slideStarsRating}>5.0</div>
                </div>
                <div className={css.slideDescription}>
                  A very honest review. I used the free trial and was impressed,
                  then I've been regularly purchasing their other instagram
                  services, and I did NOT EXPECT anything else more than
                  numbers. Imagine I'm getting organic followers and more
                  engagement on my posts. Thank you guys! ❤️
                </div>
                <div className={css.verificationBlock}>
                  <div className={css.verificationTitle}>Verified Purchase</div>
                  <div className={css.verificationText}>
                    Customer bought 500 tiktok followers
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
