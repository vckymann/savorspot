function Story() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-12 min-h-screen p-4 pt-20">
        <img className="rounded-md" width={350} src="/extras/ceo.jpg" alt="" />
        <div className="flex flex-col items-center lg:items-start min-h-[525px] gap-12 px-8 pb-4">
            <h3 className="text-5xl font-bold text-neutral-50">Our Story</h3>
            <p className="text-xl lg:text-2xl max-w-[35rem] text-neutral-400">SavorSpot was established in 1968 with a passion for exceptional cuisine and memorable dining experiences. Inspired by their global travels and love for diverse cultures, our founders envisioned a place where tradition meets innovation. At SavorSpot, we offer meticulously crafted dishes made from the freshest ingredients, reflecting both time-honored recipes and modern flavors. Our warm atmosphere and attentive service make every visit special. Join us at SavorSpot, where every bite tells a story and every meal is a celebration of taste and togetherness.</p>
        </div>
      </div>
  )
}

export default Story
