export default function Features() {
  return (
    <div className="mx-auto max-w-screen-xl lg:py-20">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 sm:flex-col">
        <div className=" sm:col-span-1 md:col-span-1 sm:order-2">
          <div>
            <img src="/assets/landing/video.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-evenly sm:order-1">
          <div className="flex flex-col text-right sm:px-3">
            <div className="ml-auto">
              <img src="/assets/landing/rac.svg" alt="" />
            </div>
            <h3 className="text-primaryLight2 font-3xl font-primary">
              Remote access control
            </h3>
            <p className="font-primary">
              Maintain control over your equipment from miles away, and limit or
              allow access for your field crew based on your needs with only a
              few clicks.
            </p>
          </div>
          <div className="flex flex-col text-right sm:px-3">
            <div className="ml-auto">
              <img src="/assets/landing/rac.svg" alt="" />
            </div>
            <h3 className="text-primaryLight2 font-3xl font-primary">
              Performance Report
            </h3>
            <p className="font-primary">
              Get performance reports that show you exactly how your equipment
              is being used, where there’s room for improvement, and how you can
              increase operational efficiency.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-evenly sm:order-3">
          <div className="flex flex-col text-right sm:px-3">
            <div className="ml-auto">
              <img src="/assets/landing/rac.svg" alt="" />
            </div>
            <h3 className="text-primaryLight2 font-3xl font-primary">
              Video surveillance
            </h3>
            <p className="font-primary">
              Receive live feedback from your project location, helping you
              assess the situation accurately, and ensure that your teams are
              operating in a safe environment.{' '}
            </p>
          </div>
          <div className="flex flex-col text-right sm:px-3 mb-10">
            <div className="ml-auto">
              <img src="/assets/landing/rac.svg" alt="" />
            </div>
            <h3 className="text-primaryLight2 font-3xl font-primary">
              Location tracking
            </h3>
            <p className="font-primary">
              Locate exactly where your assets are. Even if they’re set on
              moving, you’ll know precisely where they are and where they are
              heading.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
