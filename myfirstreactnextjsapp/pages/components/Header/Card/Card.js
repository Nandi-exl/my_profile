import tw from 'tailwind-styled-components'

const Cards = tw.div`
relative
z-0
hidden
md:block
w-[120px]
h-[400px]
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
      

     </Cards>
    </>
  )
}

export default Card