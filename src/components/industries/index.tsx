export default function Industries() {
  return (
    <div className="mx-auto max-w-screen-xl lg:py-0 lg:-mb-72">
      <div className="grid grid-cols-3 gap-4 ">
        <div className="">
          <p className="font-primary  lg:text-4xl text-primary">
            Increase Efficiency And Lower Overhead Costs!{' '}
          </p>
        </div>
        <div className="col-span-2 ">
          <p>
            Using the R-Monitor, businesses, project managers, and field
            engineers can understand where they’re overspending and where
            they’re underutilising their equipment and crew’s potential in
            industries such as Telecom, Oil & Gas, and Marine.
          </p>
          <p>
            This way, you can distribute your assets more effectively,
            anticipate problems before they become a threat, and ensure your
            projects are always monitored effectively, giving you the advantage
            of being proactive rather than reactive.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 ">
        <div className="max-w-full">
          <img
            className="w-100 h-100"
            src="/assets/landing/telecom.png"
            alt=""
          />
        </div>
        <div className="max-w-full">
          <img
            className="w-100 h-100"
            src="/assets/landing/Oil&Gas.png"
            alt=""
          />
        </div>{' '}
        <div className="max-w-full">
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
