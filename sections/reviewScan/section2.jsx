import React,{useState} from "react";
import AvailCard from "../../components/cards/availCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const Section2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef,instanceRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 15,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    breakpoints: {
      "(max-width:500px)": {
        slides: {
          perView: 1.5,
        
          spacing: 10,
        },
      },
      "(min-width:768px)": {
        slides: {
          perView: 2.5,
          
          spacing: 15,
        },
      },
      "(min-width:1024px)": {
        slides: {
          perView: 3.5,
         
          spacing: 15,
        },
      },
      "(min-width:1439px)": {
        slides: {
          perView: 3.5,
         
          spacing: 15,
        },
      },
      "(min-width:1600px)": {
        slides: {
          perView: 4.5,
          spacing: 15,
        },
      },
    }
  });
  return (
    <>
      <main className="container my-12 mx-auto flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div className="text-lg md:text-3xl font-medium md:font-semibold">
            Recent matching availabilities
          </div>
          {loaded && instanceRef.current && (
          <div className="md:flex gap-2 hidden">
            <button className="bg-gray-200 p-2 w-8 justify-center items-center flex rounded-full h-8" onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }>
                <img src="/icons/left.svg" alt="" className="block" />
              </button>
             <button 
             className="bg-gray-200 p-2 w-8 justify-center items-center flex rounded-full h-8" 
             onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }>
                <img src="/icons/right.svg" alt="" className="block" />

              </button>
          </div>
        )}
        </div>
        <div className="flex gap-8">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">
              <AvailCard />
            </div>
            <div className="keen-slider__slide">
              <AvailCard />
            </div>{" "}
            <div className="keen-slider__slide">
              <AvailCard />
            </div>{" "}
            <div className="keen-slider__slide">
              <AvailCard />
            </div> <div className="keen-slider__slide">
              <AvailCard />
            </div>
            <div className="keen-slider__slide">
              <AvailCard />
            </div>

          </div>
          
        </div>
      </main>
    </>
  );
};

export default Section2;
