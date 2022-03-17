import GithubImg from "../FIles/github-sign.png"
import Linkedin from "../Files/linkedin.png"
import EmailImg from "../Files/email.png"

import Image from "next/image"
import tw from "tailwind-styled-components/dist/tailwind"

const Container = tw.div`
flex
items-center
space-x-2
ml-[1rem]
`;

const ImgContainer = tw.div`
flex
w-[30px]
cursor-pointer
`;


const Images = [{
  image : GithubImg,
  link : "https://github.com/Nandi-exl"
},{
  image : Linkedin,
  link : "https://www.linkedin.com/in/nandi-naulfaldy-6b0a20143/"
},{
  image : EmailImg,
  link : "mailto:nandinaufaldi@gmail.com"
}]
const SosialMedia = () => {
  return (
    <>
     <Container>
        {Images.map((i) => {
         const {image, link} = i;
          return (
            <ImgContainer>
              <a href={link}  target="_blank">
                <Image src={image}/>
              </a>
          </ImgContainer>
            ) 
         })}
     </Container>
    </>
  )
}

export default SosialMedia