export default function GetInTouch({ setStage }: any) {
  return (
    <div className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-in-out">
      <h1 onClick={() => setStage(0)}>getInTouch</h1>
    </div>
  )
}
