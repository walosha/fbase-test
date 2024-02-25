import { useState } from 'react'
import Connects from './section/connects'
import SensorNeeded from './section/sensorNeeded'
import UpdatePerDay from './section/updatePerDay'
import UserCountInput from './section/userCountInput'
import QuoteMain from './section/quoteMain'
import ContactUs from './section/contactUs'
import GetInTouch from './section/getInTouch'
import Cost from './section/cost'

export default function Quote() {
  const [stage, setStage] = useState(0)
  return (
    <div className="w-full h-full py-16 bg-center bg-cover bg-[url('/assets/landing/quote.png')] bg-no-repeat">
      <div className="relative flex justify-center isolate px-6 pt-14 lg:px-8">
        {stage == 0 && <QuoteMain setStage={setStage} />}
        {stage == 1 && <Connects setStage={setStage} />}
        {stage == 2 && <UserCountInput setStage={setStage} />}
        {stage == 3 && <UpdatePerDay setStage={setStage} />}
        {stage == 4 && <SensorNeeded setStage={setStage} />}
        {stage == 5 && <Cost setStage={setStage} />}
        {stage == 6 && <ContactUs setStage={setStage} />}
        {stage == 7 && <GetInTouch setStage={setStage} />}
      </div>
    </div>
  )
}
