export default function ContactUs({ setStage }: any) {
  return (
    <form className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-in-out px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-xl  lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <div className="mt-2.5">
              <input
                type="text"
                id="first-name"
                autoComplete="given-name"
                className="block w-full  bg-primaryLight2 placeholder:text-white text-white rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="firstName"
              />
            </div>
          </div>
          <div>
            <div className="mt-2.5">
              <input
                type="text"
                id="last-name"
                autoComplete="family-name"
                className="block w-full  bg-primaryLight2 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="lastName"
              />
            </div>
          </div>
          <div>
            <div className="mt-2.5">
              <input
                type="text"
                id="first-name"
                autoComplete="given-name"
                className="block w-full  bg-primaryLight2 placeholder:text-white text-white rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="firstName"
              />
            </div>
          </div>
          <div>
            <div className="mt-2.5">
              <input
                type="text"
                id="last-name"
                autoComplete="family-name"
                className="block w-full  bg-primaryLight2 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="lastName"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <textarea
                id="message"
                rows={4}
                className="block bg-primaryLight2 placeholder:text-white text-white w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="message"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            onClick={() => setStage(7)}
            type="submit"
            className="w-max  rounded-2xl border-2 border-[#0057ff] bg-[#0057ff]  px-5 py-1.5 text-sm font-semibold text-white transition-colors duration-150 ease-in-out hover:border-blue-400 hover:bg-blue-400"
          >
            Send message
          </button>
        </div>
      </div>
    </form>
  )
}
