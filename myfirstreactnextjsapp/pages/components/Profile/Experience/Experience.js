import SliderExperience from "./SliderExperience";
import tw from "tailwind-styled-components";


const Container = tw.div`
flex=column
h-[40px]
justify-center
font-["poppins"]
`;

const Title = tw.div`
font-medium
text-center
mb-[1rem]
`;

const Experience = () => {
  return (
    <>
    <Container>
        <Title>
            <div>Experience</div>
        </Title>
        <SliderExperience />
    </Container>
    </>
  )
}

export default Experience