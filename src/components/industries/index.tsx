export default function Industries() {
  return (
    <div className="mx-auto md:px-16 sm:px-10 max-w-screen-xl lg:py-0 lg:-mb-72">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 mb-8">
        <div className="sm:px-10 px-0">
          <p className="font-primary text-2xl lg:text-4xl text-primary">
            Increase Efficiency And Lower Overhead Costs!{' '}
          </p>
        </div>
        <div className="col-span-2 ">
          <p className="font-primary text-sm lg:text-base text-primary">
            Using the R-Monitor, businesses, project managers, and field
            engineers can understand where they’re overspending and where
            they’re underutilising their equipment and crew’s potential in
            industries such as Telecom, Oil & Gas, and Marine.
          </p>
          <p className="font-primary text-sm lg:text-base text-primary">
            This way, you can distribute your assets more effectively,
            anticipate problems before they become a threat, and ensure your
            projects are always monitored effectively, giving you the advantage
            of being proactive rather than reactive.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-3 ">
        <div className="max-w-full">
          <img
            className="w-100 h-100"
            src="/assets/landing/telecom.png"
            alt=""
          />
        </div>
        <div className="max-w-full hidden lg:block">
          <img
            className="w-100 h-100"
            src="/assets/landing/Oil&Gas.png"
            alt=""
          />
        </div>{' '}
        <div className="max-w-full hidden lg:block">
          <img
            className="w-100 h-100"
            src="/assets/landing/marine.png"
            alt=""
          />
        </div>{' '}
      </div>
    </div>
  )
}
