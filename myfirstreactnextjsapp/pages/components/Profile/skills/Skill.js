import tw from 'tailwind-styled-components';
import Slider from 'react-slick';
// import Image from 'next/image';
import SkillStyle from './skill.module.css';

// import JS from '../../../Files/skillset/Js.png';
// import Next from '../../../Files/skillset/nextjs.png';
// import Node from '../../../Files/skillset/node.png';
// import ReactS from '../../../Files/skillset/react.png';
// import Seo from '../../../Files/skillset/seo.png';
// import Mysql from '../../../Files/skillset/Mysql.png';


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
                <img src={image} />
              </div>
            );
          })}
        </Slider>
      </Container>
    </>
  );
};

export default Skill;
