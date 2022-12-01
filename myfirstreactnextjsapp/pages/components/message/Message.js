import tw from 'tailwind-styled-components';

const Container = tw.div`
flex
flex-col
text-center
mt-[10rem]
`;

const Descrip = tw.div`
font-light
text-sm
mx-4
mt-2

`;

const Message = () => {
  return (
    <Container>
      <h1>Message</h1>
      <Descrip>
        <p>
          Willing to take offer for web-development or remote work for Digital
          Marketing
        </p>
      </Descrip>
    </Container>
  );
};

export default Message;
