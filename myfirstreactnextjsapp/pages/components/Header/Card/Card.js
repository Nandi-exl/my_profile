import tw from 'tailwind-styled-components'
import Image from "next/image"
import GithubImg from "../../FIles/github-sign.png"
import Linkedin from "../../Files/linkedin.png"

const Cards = tw.div`
relative
z-0
hidden
md:block
w-[120px]
h-[200px]
absolute
border-4
border-white
rounded-lg
bg-white
mt-[5rem]
drop-shadow-lg
`;

const Name = tw.div`
flex
text-center
hidden
md:block
font-["Poppins"]
font-medium
mt-14
`;

const JobTittle = tw.div`
hidden
md:block
text-center
font-["Poppins"]
italic
font-light
text-[10px]
`;

const SocialAndContact = tw.div`
flex
text-center
justify-center
items-center
mt-[1px]
cursor-pointer
space-x-2
`;

const SocialContactImage = tw.div`
flex
w-[20px]
mt-[10px]
`;

const Card = () => {
  return (
    <>
     <Cards >
       <Name>
         <p> Nandi.n </p>
       </Name>

       <JobTittle>
         <p> Programer & Digital Marketing </p> 
       </JobTittle>

      <SocialAndContact>
        <SocialContactImage>
          <Image src={GithubImg} />
          
        </SocialContactImage>
        <SocialContactImage>
          <Image src={Linkedin} />
        </SocialContactImage>
        {/* <Image src={} /> */}
      </SocialAndContact>    

     </Cards>
    </>
  )
}

export default Card