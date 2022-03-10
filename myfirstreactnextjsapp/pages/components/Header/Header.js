import React from 'react'
import tw from 'tailwind-styled-components';
import Image from 'next/image'
import bgImage from '../Files/background.PNG'

const Container = tw.div`
flex
justify-center
mx-auto
relative
`;

const BackgroundImage = tw.div`
z-0
mx-auto
hidden
md:block
`;

const Menu = tw.div`
bg-white
flex
z-10
mt-0
hidden
md:block
absolute
`;

const Header = () => {
  return (
    <>
        <Container>    
        <Menu>Test</Menu>
        <BackgroundImage>
           <Image src={bgImage} alt="backgroundImage"/>
        </BackgroundImage> 
        </Container>
    </>
  )
}

export default Header