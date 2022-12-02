import tw from 'tailwind-styled-components';
import Slider from 'react-slick';
import Image from 'next/image';
import SkillStyle from './skill.module.css';

import { SkillsData } from '../../../../Files/js/SkillsData';

const Container = tw.div`
flex-col
justify-center
mt-[8rem]
font-["poppins"]
`;

const Title = tw.div`
font-medium
text-center
`;

const Skill = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <>
      <Container>
        <Title>
          <h1>Skills</h1>
        </Title>

        <Slider {...settings} className={SkillStyle.img}>
          {SkillsData.map((data) => {
            const { id, image } = data;
            return (
              <div key={id}>
                <Image src={image} />
              </div>
            );
          })}
        </Slider>
      </Container>
    </>
  );
};

export default Skill;
