
function Team() {
  return (
    <div className="flex flex-col lg:flex-row lg:min-h-screen gap-12 lg:gap-44 justify-center items-center py-20">
        <h3 className="text-5xl font-bold text-center mb-12 pt-12 lg:ml-8">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 max-w-[20rem] md:max-w-full md:px-12 gap-4">
            <img className="object-cover aspect-[1/1] w-full h-full border-2 border-white" src="/Team/member1.jpg" alt="" />
            <img className="object-cover border-2 w-full h-full aspect-[1/1] border-white" src="/Team/member2.jpg" alt="" />
            <img className="object-cover border-2 border-white" src="/Team/member3.jpg" alt="" />
            <img className="object-cover border-2 border-white aspect-[1/1] w-full h-full" src="/Team/member4.jpg" alt="" />
            <img className="object-cover aspect-[1/1] w-full h-full border-2 border-white" src="/Team/member5.jpg" alt="" />
            <img className="object-cover w-full h-full aspect-[1/1] border-2 border-white" src="/Team/member6.jpg" alt="" />
            <img className="object-cover border-2 border-white" src="/Team/member7.jpg" alt="" />
            <img className="object-cover aspect-[1/1] w-full h-full border-2 border-white" src="/Team/member8.jpg" alt="" />
          </div>
        </div>
  )
}

export default Team
