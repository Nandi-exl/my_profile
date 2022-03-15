import Image from "next/image"
import React, {useState} from "react";
import Slider  from "react-slick";

import ExpStyles from "./SliderExp.module.css"

import arRight from "../../Files/arrow-right.png";
import arLeft from "../../Files/arrow-left.png"

import Kompas from "../../Files/experience/KompasG.png";
import Rli from "../../Files/experience/Rli.png";
import Smt from "../../Files/experience/smt.png";
import Mfk from "../../Files/experience/mfk.png";
import Bumi from "../../Files/experience/bumi.png";
import Toffin from "../../Files/experience/toffin.png";




const ExpImages = [Kompas, Rli, Smt, Mfk, Bumi, Toffin];
const SliderExperience = () => {

  
  const NextArrow = ({onClick}) => {
    return (
      <div className={ExpStyles.arrowsR} onClick={onClick}>
         <Image src={arRight} />
      </div>
    )
  }
  
  const PrevArrow = ({onClick}) => {
    return (
      <div className={ExpStyles.arrowsL} onClick={onClick}>
         <Image src={arLeft} />
      </div>
    )
  }

  const [imageIndex, setImageIndex] = useState(0)
  
  const settings = {
    infinite : true,
    lazyLoad : true,
    speed : 300,
    slidesToShow : 3,
    centerMode : true,
    centerPadding : 0,
    nextArrow : <NextArrow />,
    prevArrow : <PrevArrow />,
    beforeChange : (current, next) => setImageIndex(next)
  }
  

  
  
    return (
    <div className={ExpStyles}>
      <Slider {...settings} className={ExpStyles.img}>
        {ExpImages.map((image, idx) => (
          <div className={idx === imageIndex ? ExpStyles.activeSlide : ExpStyles.slide}>
            <Image src={image} />
          </div>    
        ))}
      </Slider>
    </div>
  )

}

export default SliderExperience;