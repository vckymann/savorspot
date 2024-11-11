
function Chefs() {
  return (
    <div className="px-24 my-40">
        <h2 className="text-6xl font-bold text-white text-center">Our Special Chef's</h2>
        <p className="text-center text-zinc-400 py-8 mb-20">Meet the culinary artists behind our exquisite dishes. Their passion and expertise ensure every meal <br /> is a memorable experience. Discover the team that brings flavor to life at our restaurant.</p>
        <div className="grid place-content-center md:grid-cols-2 xl:grid-cols-3 gap-20">
          <img src="/chefs/chef1.jpg" className="rounded max-w-80 max-h-[427px]" alt="" />
          <img src="/chefs/chef2.jpg" className="rounded max-w-80 max-h-[427px]" alt="" />
          <img src="/chefs/chef3.jpg" className="rounded max-w-[284.66px] lg:max-w-80" alt="" />
        </div>
      </div>
  )
}

export default Chefs
