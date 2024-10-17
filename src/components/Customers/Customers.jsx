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
        <h2 className="section-title">Our Customers Truly Appreciate Us</h2>
        <p className={css.customersText}>
          Their only regret? Not finding us sooner. Discover why people choose
          StellarLikes for all their TikTok growth needs.
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
                    Emma R.
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
                  I was skeptical at first, but StellarLikes made the process
                  easy and fast. My likes were delivered instantly, and my posts
                  got a real boost in engagement. I’ll definitely be back! ❤️
                </div>
                <div className={`${css.verificationBlock} ${css.violetBlock}`}>
                  <div className={`${css.verificationTitle} ${css.violetText}`}>
                    Verified Purchase
                  </div>
                  <div className={`${css.verificationText} ${css.violetText}`}>
                    Customer bought 500 tiktok likes
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
                    Lucas G.
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
                  High-quality views and very fast delivery. My content feels
                  more visible, and I’m connecting with a bigger audience.
                  StellarLikes made it all happen – highly recommended!
                </div>
                <div className={`${css.verificationBlock} ${css.greenBlock}`}>
                  <div className={`${css.verificationTitle} ${css.greenText}`}>
                    Verified Purchase
                  </div>
                  <div className={`${css.verificationText} ${css.greenText}`}>
                    Customer bought 600 tiktok views
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
                    Jack P.
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
                  StellarLikes offers incredible quality. The likes look
                  genuine, and my TikTok account has seen a noticeable increase
                  in reach. Great service at an unbeatable price! 😍
                </div>
                <div className={`${css.verificationBlock} ${css.violetBlock}`}>
                  <div className={`${css.verificationTitle} ${css.violetText}`}>
                    Verified Purchase
                  </div>
                  <div className={`${css.verificationText} ${css.violetText}`}>
                    Customer bought 5000 tiktok likes
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
                    Olivia S.
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
                  Fast, reliable, and authentic followers! I’ve gained real
                  engagement and visibility thanks to StellarLikes. Couldn't be
                  happier with the results.
                </div>
                <div className={css.verificationBlock}>
                  <div className={css.verificationTitle}>Verified Purchase</div>
                  <div className={css.verificationText}>
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
                      src={flagBritain}
                      alt="flag"
                      className={css.slideFlag}
                    />
                    Sophia L.
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
                  I’ve tried other services, but StellarLikes really stands out
                  for its quality. The likes were delivered quickly, and my
                  posts gained traction immediately. Highly recommend!❤️
                </div>
                <div className={`${css.verificationBlock} ${css.violetBlock}`}>
                  <div className={`${css.verificationTitle} ${css.violetText}`}>
                    Verified Purchase
                  </div>
                  <div className={`${css.verificationText} ${css.violetText}`}>
                    Customer bought 500 tiktok likes
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
                    Mia B.
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
                  Fantastic service with real results. The views were delivered
                  instantly, and I noticed an immediate uptick in organic
                  engagement. StellarLikes truly delivers!
                </div>
                <div className={`${css.verificationBlock} ${css.greenBlock}`}>
                  <div className={`${css.verificationTitle} ${css.greenText}`}>
                    Verified Purchase
                  </div>
                  <div className={`${css.verificationText} ${css.greenText}`}>
                    Customer bought 700 tiktok views
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
                    Leo M.
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
                  Instant delivery, and the followers look real. My profile
                  feels more credible, and I’m seeing more interaction from
                  actual TikTok users. Worth every penny!
                </div>
                <div className={css.verificationBlock}>
                  <div className={css.verificationTitle}>Verified Purchase</div>
                  <div className={css.verificationText}>
                    Customer bought 800 tiktok followers
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
                    Aiden H.
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
                  I purchased views for my recent video, and it took off!
                  StellarLikes’ service is quick and efficient, helping me reach
                  a much wider audience.
                </div>
                <div className={`${css.verificationBlock} ${css.greenBlock}`}>
                  <div className={`${css.verificationTitle} ${css.greenText}`}>
                    Verified Purchase
                  </div>
                  <div className={`${css.verificationText} ${css.greenText}`}>
                    Customer bought 400 tiktok views
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
                    Ella T.
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
                  The followers were delivered quickly, and the quality is
                  impressive. I’m genuinely surprised by the engagement boost!
                  StellarLikes is my go-to for TikTok growth.
                </div>
                <div className={css.verificationBlock}>
                  <div className={css.verificationTitle}>Verified Purchase</div>
                  <div className={css.verificationText}>
                    Customer bought 400 tiktok followers
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
