import React from "react";
import AddToCard from "./AddToCard";
import Frame20 from "./Frame20";
import OurRecent from "./OurRecent";
import Explore from "./Explore";
import OurGrediants from "./OurGrediants";
import Whychoose from "./Whychoose";
import OurStory from "./OurStory";
import GroupPhoto from "./GroupPhoto";
import Auth from "./Auth";
import LinkImage from "./LinkImage";

function Main() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto pt-20 flex justify-around items-center px-4">
        <Auth />
      </div>
      <Explore data={"OUR BESTSELLERS"} />
        <AddToCard />

      <h1 className="text-2xl md:text-5xl my-10 md:my-16 text-center">
        Video Review Section pending
      </h1>
      
      <LinkImage />

      <Explore data={"EXPLORE MORE"} />

      <div className="max-w-7xl mx-auto flex justify-between flex-wrap items-center md:grid md:grid-cols-2 lg:grid-cols-4 md:px-4 lg:px-0 gap-4 mb-10 md:mb-20">
        <Frame20 />
      </div>

      <OurRecent />

      <Explore data={"OUR INGREDIENTS"} />

      <OurGrediants />

      <Explore data={"WHY CHOOSE US"} />
      <Whychoose />

      <div className="mt-14 -mb-5">
      <LinkImage/>
      </div>

      <Explore data={"CHECK OUT OUR TOP BLOGS"} />

      <OurStory />

      <Explore data={"OUR CERTIFICATIONS"} />

      <GroupPhoto />
    </div>
  );
}

export default Main;
