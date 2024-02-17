import { SpinnerCircular } from "spinners-react"

const FullPageLoader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
          <SpinnerCircular size="80px" color="rgb(30, 39, 58)" />
        </div>
  )
}

export default FullPageLoader