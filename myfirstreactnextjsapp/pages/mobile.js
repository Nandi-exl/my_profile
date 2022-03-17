import tw from "tailwind-styled-components";
import IntroMobile from "./components/Profile/intro/mobile/introMobile";
import SosialMedia from "./components/sosialmedia/SosialMedia"
import MobileExp from "./components/Profile/Experience/mobile/MobileExp";
import MobileSkill from "./components/Profile/skills/mobile/MobileSkill";

const Mobile = () => {
  return (
    <>  
        <SosialMedia />
        <IntroMobile/>
        <MobileExp />
        <MobileSkill />
    </>
  )
}

export default Mobile