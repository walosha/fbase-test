export default function Hero() {
  return (
    <div className="w-full h-[80vh] bg-center bg-cover bg-[url('/assets/landing/hero.png')] bg-no-repeat">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="lg:col-span-5 lg:mx-60">
          <nav
            className="flex items-center justify-between p-5 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src="/assets/logo.svg" alt="" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm font-primary font-semibold leading-6 text-white"
              >
                Log in
              </a>
            </div>
          </nav>
        </div>
      </header>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="grid max-w-screen-xl px-0 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="animate-fade-up animate-once animate-duration-1000 animate-delay-0 animate-ease-in-out mr-auto place-self-center lg:col-span-5">
            <h1 className="text-3xl font-primary tracking-tight text-white sm:text-4xl">
              Optimise Machine Performance And Predict Problems Before They Turn
              Into Disasters
            </h1>
            <p className="mt-6 font-primary text-lg leading-8 text-white">
              R-Monitor is a best-in-class remote sensor monitoring system that
              allows you to keep an eye on your critical assets. You’ll be able
              to monitor their condition, predict problems, stay proactive, and
              reduce your operation costs.
            </p>
            <div className="mt-6 mb-30 gap-x-6">
              <button
                type="button"
                className="text-lg text-white bg-primaryLight hover:bg-primaryLight focus:ring-4 focus:outline-none focus:primaryLight/50 font-medium  px-5 py-3 font-primary text-center inline-flex items-center dark:focus:ring-primaryLight/55 me-2 mb-2"
              >
                Get A Quote
              </button>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  )
}
