
function Mission() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <h3 className="text-5xl mb-8 font-bold">Our Mission</h3>
        <p className="text-2xl text-center text-neutral-400">SavorSpot is dedicated to creating unforgettable dining experiences by <br /> offering exquisite cuisine, exceptional service, and a welcoming atmosphere. <br /> We strive to be a place where culinary innovation meets heartfelt tradition, bringing <br /> joy to our guests through every meal.</p>
        <h3 className="text-3xl font-bold mt-32 mb-12">Core Values</h3>
        <ol className="text-xl flex flex-col items-center gap-4 lg:items-start lg:flex-row lg:gap-16 text-neutral-400 list-disc">
          <li>Quality</li>
          <li>Customer Satisfaction</li>
          <li>Innovation</li>
        </ol>
      </div>
  )
}

export default Mission
