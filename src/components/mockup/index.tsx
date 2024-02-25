export default function Mockup() {
  return (
    <div className="bg-primary lg:pt-80">
      <div className="mx-auto max-w-screen-xl lg:py-20">
        <div className="grid grid-cols-3 gap-4  mb-16">
          <div className="">
            <p className="font-primary text-2xl lg:text-4xl text-white">
              A comprehensive view of your operations
            </p>
          </div>
          <div className="">
            <p className="font-primary text-base text-white">
              Wether you are in the office or on the go, you can access your
              data from everywhere, via text messages, the R-Monitor mobile app
              or directly on your web browser.
            </p>
          </div>
          <div className="">
            <p className="font-primary text-base text-white">
              All performance, location, and video updates are uploaded in real
              time to your personal dashboard, giving you access to all the data
              you need to get a comprehensive view of your operations.
            </p>
          </div>
        </div>
        <div className="">
          <img src="/assets/landing/mockup.png" alt="" />
        </div>
      </div>
    </div>
  )
}
