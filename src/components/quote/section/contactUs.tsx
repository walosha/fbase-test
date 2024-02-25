import { Fragment } from 'react'

export default function ContactUs({ setStage }: any) {
  return (
    <Fragment>
      <form className="container animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-in-out bg-primary">
        <hr className="h-5 bg-primaryLight" />{' '}
        <div className="mx-auto  p-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="first-name"
                  placeholder="Full Name"
                  autoComplete="given-name"
                  className="px-3 py-4 text-3xl text-white placeholder:text-white focus:border-primaryLight placeholder-blueGray-300 text-blueGray-600 relative bg-primaryLight3 rounded  border-0 shadow outline-none focus:outline-none focus:ring w-100 h-16"
                  name="firstName"
                />
              </div>
            </div>
            <div>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="last-name"
                  placeholder="Company"
                  autoComplete="family-name"
                  className="px-3 py-4 text-3xl text-white placeholder:text-white focus:border-primaryLight placeholder-blueGray-300 text-blueGray-600 relative bg-primaryLight3 rounded  border-0 shadow outline-none focus:outline-none focus:ring w-100 h-16"
                  name="lastName"
                />
              </div>
            </div>
            <div>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="first-name"
                  placeholder="Email Address"
                  autoComplete="given-name"
                  className="px-3 py-4 text-3xl text-white font-primary placeholder:text-white focus:border-primaryLight placeholder-blueGray-300 text-blueGray-600 relative bg-primaryLight3 rounded  border-0 shadow outline-none focus:outline-none focus:ring w-100 h-16"
                  name="firstName"
                />
              </div>
            </div>
            <div>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="last-name"
                  placeholder="Phone Number"
                  autoComplete="family-name"
                  className="px-3 py-4 text-3xl text-white font-primary placeholder:text-white focus:border-primaryLight placeholder-blueGray-300 text-blueGray-600 relative bg-primaryLight3 rounded  border-0 shadow outline-none focus:outline-none focus:ring w-100 h-16"
                  name="lastName"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <textarea
                  id="message"
                  rows={12}
                  placeholder="Any special considerations for the location?"
                  className="block text-3xl  bg-primaryLight2 placeholder:text-white font-primary text-white w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                  name="message"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => setStage(7)}
              type="button"
              className="text-lg  text-white bg-primaryLight  hover:bg-primaryLight focus:ring-4 focus:outline-none focus:border-primaryLight font-medium  px-5 py-3 font-primary text-center inline-flex items-center dark:focus:ring-primaryLight/55 me-2 mb-2"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  )
}
