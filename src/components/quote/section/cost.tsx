import React from 'react'

export default function Cost({ setStage }: any) {
  return (
    <div className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-in-out  container bg-primary px-20 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="p-5">
          <h5 className="font-primary text-4xl text-white">
            Subscription cost
          </h5>
          <ul>
            <li className="flex text-xl mb-2 items-center mr-5">
              <div className="mr-1">
                <img src="/assets/landing/checkmark.svg" alt="" />
              </div>
              <p className="font-primary text-white ">
                GSM + Satellite Connection
              </p>{' '}
            </li>
            <li className="flex text-xl mb-2 items-center mr-5">
              <div className="mr-1">
                <img src="/assets/landing/checkmark.svg" alt="" />
              </div>
              <p className="font-primary text-white ">30 updates/hour </p>{' '}
            </li>
            <li className="flex text-xl mb-2 items-center mr-5">
              <div className="mr-1">
                <img src="/assets/landing/checkmark.svg" alt="" />
              </div>
              <p className="font-primary text-white ">24 users </p>{' '}
            </li>
            <li className="flex text-xl mb-2 items-center mr-5">
              <div className="mr-1">
                <img src="/assets/landing/checkmark.svg" alt="" />
              </div>
              <p className="font-primary text-white ">12 sensors </p>{' '}
            </li>
            <li className="flex text-xl mb-2 items-center mr-5">
              <div className="mr-1">
                <img src="/assets/landing/checkmark.svg" alt="" />
              </div>
              <p className="font-primary text-white ">Performance reports </p>{' '}
            </li>
            <li className="flex text-xl mb-2 items-center mr-5">
              <div className="mr-1">
                <img src="/assets/landing/checkmark.svg" alt="" />
              </div>
              <p className="font-primary text-white ">Video surveillance </p>{' '}
            </li>
            <li className="flex text-xl mb-2 items-center mr-5">
              <div className="mr-1">
                <img src="/assets/landing/checkmark.svg" alt="" />
              </div>
              <p className="font-primary text-white ">Location tracking </p>{' '}
            </li>
          </ul>
          <hr className="h-px my-8 bg-white border-0 dark:bg-gray-700" />
          <p className="text-white font-primary text-4xl">$200/month</p>
        </div>
        <div className="p-5 lg:w-3/5">
          <h5 className="font-primary text-4xl text-white">
            Installation cost
          </h5>
          <p className="text-white text-xl  font-primary mb-4">
            {' '}
            Your installation cost is calculated based on your location and the
            type of sensors you need. To find out the exact price send us an
            enquiry and we will be in touch soon.
          </p>
          <button
            onClick={() => setStage(6)}
            type="button"
            className="text-lg  text-white bg-primaryLight hover:bg-primaryLight focus:ring-4 focus:outline-none focus:primaryLight/50 font-medium  px-5 py-3 font-primary text-center inline-flex items-center dark:focus:ring-primaryLight/55 me-2 mb-2"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}
