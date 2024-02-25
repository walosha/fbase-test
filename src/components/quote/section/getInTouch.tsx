export default function GetInTouch({ setStage }: any) {
  return (
    <div
      onClick={() => setStage(0)}
      className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-in-out   container bg-primary "
    >
      <hr className="h-5 bg-primaryLight w-[100%]" />{' '}
      <div className="flex  h-100 items-center justify-center flex-col cursor-pointer  text-center">
        <h2 className="text-white font-primary text-3xl">Enquiry received.</h2>
        <p className="text-primaryLight font-primary text-4xl">
          We wil be in touch soon !
        </p>
      </div>
    </div>
  )
}
