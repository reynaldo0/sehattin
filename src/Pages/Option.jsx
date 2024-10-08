import React, { useEffect, useRef, useState } from "react";
import ModelCanvas from "../Components/ModelCanvas";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Dialog from "../Components/Dialog";
import { Bayi } from "../Components/Models/Bayi";
import { Anak } from "../Components/Models/Anak";
import { Dewasa } from "../Components/Models/Dewasa";
import { Kakek } from "../Components/Models/Kakek";
import 'swiper/css';
import { Teen } from "../Components/Models/Teen";

const Option3d = ({ onBack }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [cloudOffset, setCloudOffset] = useState(0);
  const isMobile = window.innerWidth <= 768;
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  useEffect(() => {
    setTimeout(() => {
      setShowDialog(true);
    }, 1000);

    const handleMouseMove = (e) => {
      const screenWidth = window.innerWidth;
      const mouseX = e.clientX;
      const offset = (mouseX / screenWidth - 0.5) * 100;
      console.log('Mouse X:', mouseX, 'Offset:', offset);
      setCloudOffset(offset);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cloud1Style = {
    transform: `translateX(${cloudOffset * (isMobile ? 0.5 : 0.8)}px)`,
    position: 'absolute',
    top: isMobile ? '0' : '-58px',
    right: isMobile ? '-28px' : '-128px',
    zIndex: 1,
    transition: 'transform 0.5s ease-out',
  };

  const cloud2Style = {
    transform: `translateX(${cloudOffset * (isMobile ? 0.8 : 1.2)}px)`,
    position: 'absolute',
    top: isMobile ? '0' : '-58px',
    left: isMobile ? '-28px' : '-208px',
    zIndex: 1,
    transition: 'transform 1s ease-out',
  };

  const handleModelCanvasClick = (href) => {
    const container = document.querySelector('.page-container');
    container.classList.add('fade-out');
    setTimeout(() => {
      navigate(href);
    }, 500);
  };

  return (
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-[url(/background/golongan.png)] overflow-hidden page-container">
      {showDialog && <Dialog />}

      {/* Awan-awan */}
      <img
        src="/background/awan-opsi-1.webp"
        alt="awan biruu"
        className="cloud cloud-slide-left"
        style={cloud1Style}
      />

      <img
        src="/background/awan-opsi-2.webp"
        alt="awan biruu lagi"
        className="cloud cloud-slide-right"
        style={cloud2Style}
      />

      <div className="relative z-10 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 bg-transparent">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" className="h-auto w-40" alt="Logo" />
        </a>
      </div>

      <div className="relative z-10 text-center bg-transparent">
        <h1 className="text-4xl font-bold text-secondary mb-2 pt-10 md:py-0">Golongan</h1>
        <h2 className="text-xl text-primary">Pilihlah Kategori Usia Anda!</h2>
      </div>

      <div className="relative z-10 px-16 bg-transparent mx-auto max-w-screen-xl flex">
        <Swiper
          ref={swiperRef}
          effect="coverflow"
          spaceBetween={16}
          slidesPerView={isMobile ? 1 : 3.3}
          centeredSlides={false}
          className="w-full flex items-end pt-10 pb-4 px-2 h-[65vh]"
        >
          {/* Swiper slides */}
          <SwiperSlide className="flex justify-center items-end">
            <ModelCanvas
              onClick={() => handleModelCanvasClick('/baby')}
              model={<Bayi />}
              title="Bayi"
              description="1-12 Bulan"
              bgColor={'#0D46A4'}
              width="289px"
              height="225px"
              titleColor="#A3ECFF"
              descriptionColor="#FFF"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-end">
            <ModelCanvas
              onClick={() => handleModelCanvasClick('/child')}
              model={<Anak />}
              title="Anak - Anak"
              description="3-12 Tahun"
              bgColor={'#E33B3B'}
              width="289px"
              height="300px"
              titleColor="#A3ECFF"
              descriptionColor="#FFF"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-end">
            <ModelCanvas
              onClick={() => handleModelCanvasClick('/teen')}
              model={<Teen />}
              title="Remaja"
              description="13-17 Tahun"
              bgColor={'#0E9D75'}
              width="289px"
              height="320px"
              titleColor="#A3ECFF"
              descriptionColor="#FFF"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-end">
            <ModelCanvas
              model={<Dewasa />}
              title="Dewasa"
              description="18-59 Tahun"
              bgColor={'#F36932'}
              width="289px"
              height="270px"
              titleColor="#6FDB9F"
              descriptionColor="#FFF"
              onClick={() => handleModelCanvasClick('/adult')}
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-end">
            <ModelCanvas
              model={<Kakek />}
              title="Lansia"
              description="60 tahun keatas"
              bgColor={'#16AE79'}
              width="289px"
              height="220px"
              titleColor="#FFC0CC"
              descriptionColor="#FFF"
              onClick={() => handleModelCanvasClick('/elderly')}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="container">
        <div className="flex justify-between w-full">
          <div className="left-0 transform flex items-center space-x-2">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.26659 6.64864L1.91956 7L2.2666 7.35136L7.29723 12.4447L6.46383 13.2885L0.673872 7.42635C0.673854 7.42633 0.673836 7.42632 0.673819 7.4263C0.563221 7.31426 0.5 7.16104 0.5 7C0.5 6.83896 0.563221 6.68574 0.673819 6.5737C0.673836 6.57368 0.673854 6.57367 0.673872 6.57365L6.46383 0.711526L7.29723 1.55531L2.26659 6.64864Z" fill="#909090" stroke="black" />
            </svg>

            <button
              onClick={onBack}
              className="text-black font-semibold opacity-50 hover:opacity-100"
            >
              Kembali
            </button>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="transform bg-transparent border-secondary border-2 text-white p-2 rounded-full shadow-lg button-animate-prev"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5001 12.9999H7.91406L12.4141 17.4999L11.0001 18.9139L4.08606 11.9999L11.0001 5.08594L12.4141 6.49994L7.91406 10.9999H19.5001V12.9999Z" fill="#FF682C" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="transform bg-transparent border-secondary border-2 text-white p-2 rounded-full shadow-lg button-animate-next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.49994 11.0001H16.0859L11.5859 6.50006L12.9999 5.08606L19.9139 12.0001L12.9999 18.9141L11.5859 17.5001L16.0859 13.0001H4.49994V11.0001Z" fill="#FF682C" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Option3d;
