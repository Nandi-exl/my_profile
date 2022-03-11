import Intro from "./intro/Intro";
import Experience from "./Experience/Experience";
import tw from "tailwind-styled-components";

const Container = tw.div`
flex-col
`;

const aboutme = () => {
  return (
    <>
    <Container>
      <Intro />
      <Experience />
    </Container>
    </>
  )
}

export default aboutme