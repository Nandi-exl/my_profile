import Head from 'next/head'
import Header from './components/Header/Header'
import Profile from './components/Header/Profile'
import tw from 'tailwind-styled-components';
import Aboutme from "./components/Profile/Aboutme.js"

const ProfileContainer = tw.div`
w-[11rem]
bg-[#d5e1f5]
t-0
r-0
z-2
`;

const Container = tw.div`
flex
w-[600px]
h-[76.5%]
bg-white
t-0
r-0
z-1
absolute
mt-[-0.35rem]
`;

const AboutMeContainer = tw.div`
flex
w-[27rem]
justify-center
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>My BIo Profile</title>
      </Head>
   
        <Header  />
        <Profile />
      
        <Container>
          <ProfileContainer />
          <AboutMeContainer>
            <Aboutme />
          </AboutMeContainer>
        </Container>
    </div>
  )
}
