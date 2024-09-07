import React from 'react'
import Explore from './Explore'
import Order from './Order'
import Clinically from './Clinically'
import LinkImage from './LinkImage'
import Ingredients from './Ingredients'
import Benefit from './Benefit'
import GroupPhoto from './GroupPhoto'
import AddToCard from './AddToCard'
import Review from './Review'
import Question from './Question'

function Bringraj() {
  return (
    <div>
      <Explore data={"Hair Care"} />
      <Order/>
      <Clinically style={"mt-0"} name={"CLINICALLY TESTED"} para1={"100% noticed youthful revitalized skin"} para2={"-20 % reduction in dark spots & blemishes"} para3={"+27% improvement in moisturisation."} para4={"97% noticed enhanced skin brightness"} />
      <Clinically style={"mb-16"}  name={"HOW TO USE"} para1={"Moisten & regenerate skin with Pure Rosewater or a natural water-based toner. Apply appropriate amount on face and neck and massage with upward strokes (avoiding the eye area), until absorbed"} para2={"Youth Revitalising Ritual"} para3={"Regenerate skin by applying a few drops of Kumkumadi Facial Oil."} para4={"Moisturise with Kumkumadi Rejuvenating & Brightening Night Cream​."} />
      <Clinically style={"bg-[#00AB551A] p-4"} expstyle={"mt-1"} name={"OFFERS"} para1={"100% noticed youthful revitalized skin"} para2={"-20 % reduction in dark spots & blemishes ​"} para3={"+27% improvement in moisturisation."} para4={"97% noticed enhanced skin brightness "} />

      <div className='my-16'>
          <LinkImage />
      </div>

      <Ingredients />

      <h1 className="text-2xl md:text-5xl my-10 md:my-16 text-center">
        Video Review Section pending hai abhi
      </h1>

      <Benefit />
      <Explore data={"OUR CERTIFICATIONS"} />
      <GroupPhoto />
      <Explore data={"YOU MAY ALSO LIKE"} />

        <AddToCard />
      <Explore data={"REVIEW"} />

      <Review />

      <Explore data={"FREQUENTLY ASKED QUESTION"} />

      <Question />

    </div>
  )
}

export default Bringraj
