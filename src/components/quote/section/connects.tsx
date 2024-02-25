export default function Connects({ setStage }: any) {
  return (
    <div className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-in-out  container bg-primary">
      <hr className="h-5 bg-primaryLight w-[25%]" />{' '}
      <div className="flex flex-col p-16">
        <div className="mb-10">
          <h5 className="text-white font-primary">Question 1/4</h5>
          <p className="text-white font-primary">
            What kind of connection do you need?
          </p>
        </div>
        <div className="">
          {' '}
          <div className="border-2 border-solid border-white cursor-pointer py-4 px-6 mb-7">
            <h5 className="text-white text-2xl font-primary">GSM</h5>
            <p className="text-white font-primary">Recomended for sites</p>
          </div>
          <div className="border-2 border-solid border-white cursor-pointer py-4 px-6 mb-7">
            <h5 className="text-white text-2xl font-primary">Satelite</h5>
            <p className="text-white font-primary">Recomended for ships</p>
          </div>{' '}
          <div className="border-2 border-solid border-white cursor-pointer py-4 px-6 mb-7">
            <h5 className="text-white text-2xl font-primary">
              GSM + Sattelite
            </h5>
            <p className="text-white font-primary">Recomended for ships</p>
          </div>
          <div className="text-right">
            {' '}
            <button
              onClick={() => setStage(2)}
              type="button"
              className="text-lg text-white bg-primaryLight hover:bg-primaryLight focus:ring-4 focus:outline-none focus:primaryLight/50 font-medium  px-5 py-3 font-primary text-center inline-flex items-center dark:focus:ring-primaryLight/55 me-2 mb-2"
            >
              Continue{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
