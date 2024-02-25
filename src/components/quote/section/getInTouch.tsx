export default function GetInTouch({ setStage }: any) {
  return (
    <div
      onClick={() => setStage(0)}
      className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-in-out"
    >
      <div className="flex cursor-pointer flex-col text-center">
        <h2 className="text-white font-primary text-3xl">Enquiry received.</h2>
        <p className="text-primaryLight font-primary text-4xl">
          We wil be in touch soon !
        </p>
      </div>
    </div>
  )
}
