import tw from 'tailwind-styled-components';
import Slider from 'react-slick';
// import Image from 'next/image';

// import arRight from '../../../../Files/arrow-right.png';
// import arLeft from '../../../../Files/arrow-left.png';

// import JS from '../../../../Files/skillset/Js.png';
// import Next from '../../../../Files/skillset/nextjs.png';
// import Node from '../../../../Files/skillset/node.png';
// import ReactS from '../../../../Files/skillset/react.png';
// import Seo from '../../../../Files/skillset/seo.png';
// import Mysql from '../../../../Files/skillset/Mysql.png';

const arRight ='https://res.cloudinary.com/qoben354/image/upload/v1670152039/Files/arrow-right_xnvqmn.png';
const arLeft = "https://res.cloudinary.com/qoben354/image/upload/v1670152038/Files/arrow-left_gytdxn.png";

const JS = "https://res.cloudinary.com/qoben354/image/upload/v1670155226/Files/skilset/Js_mowi1f.png";
const Next = "https://res.cloudinary.com/qoben354/image/upload/v1670155227/Files/skilset/nextjs_acjs6f.png";
const Node = "https://res.cloudinary.com/qoben354/image/upload/v1670155227/Files/skilset/node_qdbwzb.png";
const ReactS = "https://res.cloudinary.com/qoben354/image/upload/v1670155228/Files/skilset/react_z3sttu.png";
const Seo = "https://res.cloudinary.com/qoben354/image/upload/v1670155228/Files/skilset/seo_v2rwm7.png";
const Mysql = "https://res.cloudinary.com/qoben354/image/upload/v1670155227/Files/skilset/Mysql_sexoqh.png"

const SkillsData = [
  {
    id: 0,
    image: JS,
  },
  {
    id: 1,
    image: Next,
  },
  {
    id: 2,
    image: Node,
  },
  {
    id: 3,
    image: ReactS,
  },
  {
    id: 4,
    image: Seo,
  },
  {
    id: 5,
    image: Mysql,
  },
];

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
        <img src={arRight} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div onClick={onClick} style={{ display: 'none' }}>
        <img src={arLeft} />
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
                  <img src={image} />
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
