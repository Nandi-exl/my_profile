import tw from 'tailwind-styled-components';
import Slider from 'react-slick';
import Image from 'next/image';

import arRight from '../../../../../Files/arrow-right.png';
import arLeft from '../../../../../Files/arrow-left.png';

import { SkillsData } from '../../../../../Files/js/SkillsData';

const Container = tw.div`
flex-col
justify-center
items-center
mt-[1rem]
font-["Poppins"]
`;

const Title = tw.div`
text-center
font-medium
`;

const ImageContainer = tw.div`
w-[25rem auto]
m-auto
mt-[1rem]
`;

const MobileSkill = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div onClick={onClick} style={{ display: 'none' }}>
        <Image src={arRight} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div onClick={onClick} style={{ display: 'none' }}>
        <Image src={arLeft} />
      </div>
    );
  };
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    cssEase: 'linear',
  };

  return (
    <>
      <Container>
        <Title>
          <h3>Skills</h3>
        </Title>

        <ImageContainer>
          <Slider {...settings}>
            {SkillsData.map((data) => {
              const { id, image } = data;
              return (
                <div key={id}>
                  <Image src={image} />
                </div>
              );
            })}
          </Slider>
        </ImageContainer>
      </Container>
    </>
  );
};

export default MobileSkill;
