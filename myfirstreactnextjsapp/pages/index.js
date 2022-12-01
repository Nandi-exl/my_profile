import Head from 'next/head';
import Header from './components/Header/Header';
import Profile from './components/Header/Profile';
import tw from 'tailwind-styled-components';
import Aboutme from './components/Profile/Aboutme.js';
import Message from './components/message/Message';
import Mobile from './mobile';

import { useMediaQuery } from 'react-responsive';

const ProfileContainer = tw.div`
w-[11rem]
bg-[#d5e1f5]
t-0
r-0
z-2

`;

const Container = tw.div`
w-[600px]
bg-white
t-0
r-0
z-1
absolute
mt-[-0.35rem]
flex
`;

const AboutMeContainer = tw.div`
flex
w-[27rem]
justify-center
`;

export default function Home() {
  const isDekstop = useMediaQuery({
    query: '(min-width: 600px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 599px)',
  });

  return (
    <div>
      <Head>
        <title>My BIo Profile</title>
      </Head>

      <Header />
      <Profile />

      {isDekstop && (
        <Container>
          <ProfileContainer>
            <Message />
          </ProfileContainer>

          <AboutMeContainer>
            <Aboutme />
          </AboutMeContainer>
        </Container>
      )}

      {isMobile && <Mobile />}
    </div>
  );
}
