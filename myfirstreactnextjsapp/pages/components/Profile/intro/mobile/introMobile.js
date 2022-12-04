import tw from "tailwind-styled-components/dist/tailwind"

const Container = tw.div`
flex-col
justify-center
mt-[1rem]
font-["Poppins"]
`;

const IntroHead = tw.div`
text-center
font-medium
`;

const Text = tw.div`
text-center
font-light
mx-1.5
`;

const IntroMobile = () => {

  return (
    <>
      <Container>
        <IntroHead>
          <h3>Intro</h3>
        </IntroHead>
        <Text>
          <p>
             Adaptive, fleksible and strong interpersonal with good communication skill.
             Have high interest in technology specialize in software engineer and development,
             with supported marketing and digital marketing skill set.
          </p>
        </Text>
      </Container>
      </>
  )

}

export default IntroMobile