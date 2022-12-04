// import Image from 'next/image';
import React, { useState } from 'react';
import Slider from 'react-slick';

import ExpStyles from './SliderExp.module.css';

// import arRight from '../../../Files/arrow-right.png';
// import arLeft from '../../../Files/arrow-left.png';

// import Kompas from '../../../Files/experience/KompasG.png';
// import Rli from '../../../Files/experience/Rli.png';
// import Smt from '../../../Files/experience/smt.png';
// import Mfk from '../../../Files/experience/mfk.png';
// import Bumi from '../../../Files/experience/bumi.png';
// import Toffin from '../../../Files/experience/toffin.png';
// import Prosoulution from '../../../Files/experience/prosolution.png';

const arRight ='https://res.cloudinary.com/qoben354/image/upload/v1670152039/Files/arrow-right_xnvqmn.png';
const arLeft = "https://res.cloudinary.com/qoben354/image/upload/v1670152038/Files/arrow-left_gytdxn.png";


const Kompas = 'https://res.cloudinary.com/qoben354/image/upload/v1670154773/Files/experience/KompasG_iso63c.png';
const Rli = 'https://res.cloudinary.com/qoben354/image/upload/v1670154774/Files/experience/Rli_jzxc0s.png';
const Smt = 'https://res.cloudinary.com/qoben354/image/upload/v1670154774/Files/experience/smt_dp6ftp.png';
const Mfk = 'https://res.cloudinary.com/qoben354/image/upload/v1670154773/Files/experience/mfk_p80eww.png';
const Bumi = 'https://res.cloudinary.com/qoben354/image/upload/v1670154773/Files/experience/bumi_p5igt4.png';
const Toffin = 'https://res.cloudinary.com/qoben354/image/upload/v1670154774/Files/experience/toffin_usxqtf.png';
const Prosolution = 'https://res.cloudinary.com/qoben354/image/upload/v1670154773/Files/experience/prosolution_pv4yhe.png';

const Datas = [
  {
    id: 0,
    title: 'Kompas Gramedia',
    posisi: 'Digital Marketing',
    image: Kompas,
  },
  {
    id: 1,
    title: 'PT Rajalistrik Indonesia',
    posisi: 'Digital Marketing & Web Support',
    image: Rli,
  },
  {
    id: 2,
    title: 'PT Simenteknindo',
    posisi: 'Digital Marketing & Web Support',
    image: Smt,
  },
  {
    id: 3,
    title: 'PT Multiflashindo Karisma',
    posisi: 'Digital Strategist & Web Development',
    image: Mfk,
  },
  {
    id: 4,
    title: 'PT Bumi Teknik Utama',
    posisi: 'Digital Strategist',
    image: Bumi,
  },
  {
    id: 5,
    title: 'PT Toffin Indonesia',
    posisi: 'Digital Marketing',
    image: Toffin,
  },
  {
    id: 6,
    title: 'Prosolution AG',
    posisi: 'Software Engineer',
    image: Prosolution,
  },
];

const SliderExperience = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className={ExpStyles.arrowsR} onClick={onClick}>
        <img src={arRight} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className={ExpStyles.arrowsL} onClick={onClick}>
        <img src={arLeft} />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className={ExpStyles}>
      <Slider {...settings} className={ExpStyles.img}>
        {Datas.map((data, idx) => {
          const { id, title, posisi, image } = data;
          return (
            <div
              key={id}
              className={
                idx === imageIndex ? ExpStyles.activeSlide : ExpStyles.slide
              }
            >
              <img src={image} />
              <h2 className={ExpStyles.title}>{title}</h2>
              <p className={ExpStyles.posisi}>{posisi}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderExperience;
