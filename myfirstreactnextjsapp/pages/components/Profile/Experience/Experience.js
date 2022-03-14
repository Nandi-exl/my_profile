import SliderExperience from "./SliderExperience";
import tw from "tailwind-styled-components";


const Container = tw.div`
flex=column
h-[100px]
justify-center
font-["poppins"]
`;

const Title = tw.div`
font-medium
`;

const Experience = () => {
  return (
    <Container>
        <Title>
            <div>Experience</div>
        </Title>
        <SliderExperience />
    </Container>
  )
}

export default Experience