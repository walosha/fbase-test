export default function UpdatePerDay({ setStage }: any) {
  return (
    <div className="container animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-in-out bg-primary">
      <div className="flex flex-col p-16">
        <div className="mb-10">
          <h5 className="text-white font-primary">Question 3/4</h5>
          <p className="text-white font-oswald text-3xl">
            How many updates do you need per day?{' '}
          </p>
        </div>
        <div className="">
          <div className="mb-10 pt-0">
            <input
              type="text"
              placeholder=""
              className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-primaryLight3 rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full h-20"
            />
          </div>
          <div className="flex items-center justify-end">
            <p className="text-lg font-primary text-white">Back</p>
            <button
              onClick={() => setStage(4)}
              type="button"
              className="text-lg ml-5 text-white bg-primaryLight hover:bg-primaryLight focus:ring-4 focus:outline-none focus:primaryLight/50 font-medium  px-5 py-3 font-primary text-center inline-flex items-center dark:focus:ring-primaryLight/55 me-2 mb-2"
            >
              Continue{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}