export default function UserCountInput({ setStage }: any) {
  return (
    <div className="container animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-in-out bg-primary">
      <hr className="h-5 bg-primaryLight w-[50%]" />{' '}
      <div className="flex flex-col p-16">
        <div className="mb-10">
          <h5 className="text-white font-primary">Question 2/4</h5>
          <p className="text-white font-primary text-3xl">
            What kind of connection do you need?
          </p>
        </div>
        <div className="">
          <div className="mb-10 pt-0">
            <input
              type="text"
              placeholder=""
              className="px-3 py-4 text-3xl text-white font-primary focus:border-primaryLight placeholder-blueGray-300 text-blueGray-600 relative bg-primaryLight3 rounded  border-0 shadow outline-none focus:outline-none focus:ring w-full h-16"
            />
          </div>
          <div className="flex items-center justify-end">
            <p
              className="text-lg font-primary text-white cursor-pointer"
              onClick={() => setStage(1)}
            >
              Back
            </p>
            <button
              onClick={() => setStage(3)}
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
