// import GithubImg from '../../FIles/github-sign.png';
// import Linkedin from '../../Files/linkedin.png';
// import EmailImg from '../../Files/email.png';

// import Image from 'next/image';
import tw from 'tailwind-styled-components/dist/tailwind';


const GithubImg =
  'https://res.cloudinary.com/qoben354/image/upload/v1670152039/Files/github-sign_synrdz.png';
const Linkedin =
  'https://res.cloudinary.com/qoben354/image/upload/v1670152039/Files/linkedin_rmyy61.png';
const EmailImg =
  'https://res.cloudinary.com/qoben354/image/upload/v1670152039/Files/email_rvgyub.png';




const Container = tw.div`
flex
items-center
space-x-2
ml-[1rem]
`;

const ImgContainer = tw.div`
flex
w-[30px]
cursor-pointer
`;

const Images = [
  {
    id: 0,
    image: GithubImg,
    link: 'https://github.com/Nandi-exl',
  },
  {
    id: 1,
    image: Linkedin,
    link: 'https://www.linkedin.com/in/nandi-naulfaldy-6b0a20143/',
  },
  {
    id: 2,
    image: EmailImg,
    link: 'mailto:nandinaufaldi@gmail.com',
  },
];
const SosialMedia = () => {
  return (
    <>
      <Container>
        {Images.map((i) => {
          const { image, link, id } = i;
          return (
            <ImgContainer key={id}>
              <a href={link}>
                <img src={image} />
              </a>
            </ImgContainer>
          );
        })}
      </Container>
    </>
  );
};

export default SosialMedia;
