export default function QuoteMain({ setStage }: any) {
  return (
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="animate-jump-in mr-auto place-self-center lg:col-span-5">
        <div className="react-reveal mb-5 mt-4 flex flex-row w-6/12 md:w-3/12 lg:w-auto">
          <div className="w-[7.5rem] bg-primaryLight pt-1 lg:pt-2"></div>
          <div className="w-[2.7rem] bg-white pt-1 lg:pt-2"></div>
          <div className="w-[4rem] bg-primaryLight pt-1 lg:pt-2"></div>
        </div>
        <p className="text-white mb-5 text-2xl lg:text-5xl font-primary">
          Get an instant quote for your business
        </p>
        <button
          onClick={() => setStage(1)}
          type="button"
          className="text-lg text-white bg-primaryLight hover:bg-primaryLight focus:ring-4 focus:outline-none focus:primaryLight/50 font-medium  px-5 py-3 font-primary text-center inline-flex items-center dark:focus:ring-primaryLight/55 me-2 mb-2"
        >
          Get A Quote
        </button>
      </div>
    </div>
  )
}
