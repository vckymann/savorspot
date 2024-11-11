import { ImagesSliderDemo } from "@/components/acternity/SlideShow"
import FooterComponent from "@/components/Footer"
import { Divider } from "@mui/material"
import Story from "./Story"
import Mission from "./Mission"
import Team from "./Team"
import Faq from "./Faq"

function About() {
  return (
    <div className="max-w-[110rem] mx-auto text-white">
      <div className="">
        <ImagesSliderDemo />
      </div>
      <Divider className="bg-white" />
        <Story />
      <Divider className="bg-white" />
        <Mission />
      <Divider className="bg-white" />
        <Team />
      <Divider className="bg-white" />
        <Faq />
      <Divider className="bg-white" />
        <FooterComponent />
    </div>
  )
}

export default About
