import { Divider } from "@mui/material";
import FooterComponent from "../../components/Footer/index";
import Hero from "./Hero";
import Specials from "./Specials";
import WhyUs from "./Why choose us";
import SpecialMenu from "./Menu";
import Chefs from "./Chef's";
function Home() {

  return (

    <>
    <div className="max-w-[110rem] mx-auto">
        <Hero />
      <Divider className="bg-white" />
        <Specials />
      <Divider className="bg-white" />
        <WhyUs /> 
      <Divider className="bg-white" />
        <SpecialMenu />
      <Divider className="bg-white" />
         <Chefs  />
      <Divider className="bg-white" />
        <FooterComponent />
    </div>
    </>

  )

}

export default Home;
