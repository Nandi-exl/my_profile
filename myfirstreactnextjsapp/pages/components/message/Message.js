import tw from "tailwind-styled-components"

const Container = tw.div`
flex
justify-center
mt-[10rem]
`;

const Message = () => {
  return (
      <Container>
         <h1>Message</h1>
      </Container>
  )
}

export default Message