import tw from 'tailwind-styled-components';
import Image from 'next/image';
import Link from 'next/link';

// import GithubImg from '../../../FIles/github-sign.png';
// import Linkedin from '../../../Files/linkedin.png';
// import EmailImg from '../../../Files/email.png';

const GithubImg =
  'https://res.cloudinary.com/qoben354/image/upload/v1670152039/Files/github-sign_synrdz.png';
const Linkedin =
  'https://res.cloudinary.com/qoben354/image/upload/v1670152039/Files/linkedin_rmyy61.png';
const EmailImg =
  'https://res.cloudinary.com/qoben354/image/upload/v1670152039/Files/email_rvgyub.png';

const Cards = tw.div`
relative
z-0
hidden
md:block
w-[120px]
h-[170px]
border-4
border-white
rounded-lg
bg-white
fixed
top-[5rem]
drop-shadow-lg
`;

const Name = tw.div`
flex
text-center
hidden
md:block
font-["Poppins"]
font-medium
mt-14
`;

const JobTittle = tw.div`
hidden
md:block
text-center
font-["Poppins"]
italic
font-light
text-[10px]
`;

const SocialAndContact = tw.div`
flex
text-center
justify-center
items-center
mt-[5px]
space-x-4
`;

const SocialContactImage = tw.div`
flex
w-[20px]
mt-[10px]
cursor-pointer
`;

const Card = () => {
  return (
    <>
      <Cards>
        <Name>
          <p> Nandi.n </p>
        </Name>

        <JobTittle>
          <p> Software Engineer & Digital Marketing </p>
        </JobTittle>

        <SocialAndContact>
          <SocialContactImage>
            <a href='https://github.com/Nandi-exl'>
              <img src={GithubImg} />
            </a>
          </SocialContactImage>
          <SocialContactImage>
            <a href='https://www.linkedin.com/in/nandi-naulfaldy-6b0a20143/'>
              <img src={Linkedin} />
            </a>
          </SocialContactImage>
          <SocialContactImage>
            <a href='mailto:nandinaufaldi@gmail.com'>
              <img src={EmailImg} />
            </a>
          </SocialContactImage>
        </SocialAndContact>
      </Cards>
    </>
  );
};

export default Card;
