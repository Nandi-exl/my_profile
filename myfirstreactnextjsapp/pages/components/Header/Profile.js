import React from 'react';
import tw from 'tailwind-styled-components';
// import ProfileImg from '../../Files/profileimg.png';
// import BgImage from '../../Files/background.PNG';
import Image from 'next/image';

import Card from './Card/Card';


const ProfileImg = "https://res.cloudinary.com/qoben354/image/upload/v1670152040/Files/profileimg_b2j3yx.png"
const BgImage = "https://res.cloudinary.com/qoben354/image/upload/v1670152040/Files/background_nwzav8.png"


const Container = tw.div`
flex
justify-center
relative
md:z-10 
md:top-3.5
md:absolute
md:ml-[4%]
xl:ml-[2%]
sticky
`;

const BackgroundImage = tw.div`
z-0
md:hidden
`;

const ProfileImage = tw.div`
bg-white
border-[5px]
border-white
rounded-full
mt-8
z-10
w-[70px]
h-[70px]
md:w-[100px]
md:h-[100px]
absolute
`;

const Profile = () => {
  return (
    <>
      <Container>
        <BackgroundImage>
          <img src={BgImage} />
        </BackgroundImage>
        <ProfileImage>
          <img className='rounded-full' src={ProfileImg} alt='profileimg' />
        </ProfileImage>
        <Card />
      </Container>
    </>
  );
};

export default Profile;
