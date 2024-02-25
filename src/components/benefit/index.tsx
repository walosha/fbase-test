export default function Benefits() {
  return (
    <div className="bg-primaryLight3 lg:w-5/6 sm:w-full py-4 lg:-mt-16 sm:mt-0 sm:relative">
      <div className="flex flex-col sm:flex-row">
        <div className="lg:px-16 px-4 lg:py-16 py-4">
          <div className="flex items-center mb-6 ">
            <img className="me-2" src="assets/landing/Dashboard.svg" />
            <p className="text-primaryLight font-primary ">Monitor assets</p>
          </div>
          <p className="text-white font-primary">
            Look over your personalised dashboard for trends, patterns and
            issues to make better-informed decisions that result in long-term
            efficiency and growth!
          </p>
        </div>
        <div className="lg:px-16 px-4 lg:py-16 py-4">
          <div className="flex items-center mb-6">
            <img className="me-2" src="assets/landing/online.svg" />
            <p className="text-primaryLight font-primary">
              Relaible Transmission{' '}
            </p>
          </div>
          <p className="text-white font-primary">
            No matter where you are, you’ll always be able to get information
            about the field situation from your sensors by using satellite and
            GSM networks.
          </p>
        </div>
        <div className="lg:px-16 px-4 lg:py-16 py-4">
          <div className="flex items-center mb-6">
            <img className="me-2" src="assets/landing/error.svg" />
            <p className="text-primaryLight font-primary">Thresholds Alerts</p>
          </div>
          <p className="text-white font-primary">
            Get threshold alerts via app notifications or text messages so you
            can always be aware of what happens and resolve the problems before
            they escalate into disasters.
          </p>
        </div>
      </div>
    </div>
  )
}
