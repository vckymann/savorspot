import { useNavigate } from "react-router-dom";

function Hero() {

    const navigate = useNavigate();

  return (
    <div className="Hero flex px-24 flex-col gap-12 justify-center items-center lg:items-start min-h-screen text-white">
        <h2 className="text-6xl font-bold mt-4 lg:mt-0 text-center lg:text-left">Explore the world of <br/> tastes and Aromas</h2>
        <button onClick={() => navigate("/menu")} className="rounded-md py-4 bg-[#c4c2c275] hover:bg-[#c4c2c2] w-32 outline-none font-bold" >Explore Now</button>                
        <div className="flex gap-16">
          <p className="text-3xl font-bold">100+<br/><span className="text-xl font-normal">Dishes</span></p>
          <p className="text-3xl font-bold">40+<br/><span className="text-xl font-normal">ingredients</span></p>
          <p className="text-3xl font-bold">10+<br/> <span className="text-xl font-normal"> cuisines</span></p>
        </div>        
      </div>
  )
}

export default Hero
