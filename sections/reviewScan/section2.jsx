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
  });
  return (
    <>
      <main className="container mx-auto flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-semibold">
            Recent matching availabilities
          </div>
          {loaded && instanceRef.current && (
          <div className="flex gap-2">
            {/* <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />
            
            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            /> */}
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
