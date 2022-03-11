import tw from "tailwind-styled-components"

const Container = tw.div`
flex-col
justify-center
text-center
font-["Poppins"]
h-[7rem]
w-[21rem]
mt-[1rem]
mb-[0]
`;

const IntroText = tw.div`
font-medium
`;

const Text = tw.div`
text-center
font-light
text-[10px]
`;

const Intro = () => {
  return (
    <Container>
        <IntroText>
            <div>Intro</div>
        </IntroText>
        <Text>
            <p>
                Adaptive, fleksible and strong interpersonal with good communication skill.
                Have high interest in technology specialize in software engineer and development,
                with supported marketing and digital marketing skill set.
            </p>
        </Text>
    </Container>
  )
}

export default Intro