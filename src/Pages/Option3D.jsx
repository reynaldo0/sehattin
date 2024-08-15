import React, { useEffect } from "react";
import { Box } from "@react-three/drei";
import ModelCanvas from "../Components/ModelCanvas";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Option3d = () => {
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const audio1 = new Audio('/audio/welcome.mp3')

    audio1.play()
  }, [])

  return (
    <section className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/background/golongan.png')` }}
      ></div>

      <div className="relative z-10 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 bg-transparent">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" className="h-auto w-40" alt="Logo" />
        </a>
      </div>

      <div className="relative z-10 text-center bg-transparent">
        <h1 className="text-4xl font-bold text-secondary mb-2 py-10 md:py-0">Golongan</h1>
        <h2 className="text-xl text-primary">Pilihlah Kategory Usia Anda!</h2>
      </div>

      <div className="relative z-10 py-10 px-16 bg-transparent mx-auto max-w-screen-xl flex">
        <Swiper
          spaceBetween={16}
          slidesPerView={isMobile ? 1 : 3.4}
          centeredSlides={false}
          className="w-full flex items-end"
        >
          <SwiperSlide className="flex justify-center items-end">
            <ModelCanvas
              model={<Box />}
              title="Bayi"
              description="Deskripsi model 1."
              gradientColors={["#09409A", "#26A5C4"]}
              width="289px"
              height="241px"
              titleColor="#A3ECFF"
              descriptionColor="#FFF"
              canvasWidth="180px"
              canvasHeight="180px"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-end">
            <ModelCanvas
              model={<Box />}
              title="Anak - Anak"
              description="Deskripsi model 2."
              gradientColors={["#FFB145", "#9F5D00"]}
              width="289px"
              height="320px"
              titleColor="#A3ECFF"
              descriptionColor="#FFF"
              canvasWidth="200px"
              canvasHeight="200px"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-end">
            <ModelCanvas
              model={<Box />}
              title="Dewasa"
              description="Deskripsi model 3."
              gradientColors={["#1BB05C", "#004B2C"]}
              width="289px"
              height="288px"
              titleColor="#6FDB9F"
              descriptionColor="#FFF"
              canvasWidth="220px"
              canvasHeight="220px"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-end">
            <ModelCanvas
              model={<Box />}
              title="Lansia"
              description="Deskripsi model 4."
              gradientColors={["#760635", "#E21C34"]}
              width="289px"
              height="300px"
              titleColor="#FFC0CC"
              descriptionColor="#FFF"
              canvasWidth="240px"
              canvasHeight="240px"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Option3d;
