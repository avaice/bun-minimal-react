import { useState } from "react"

export const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex w-[400px] flex-col text-center">
        <img src="logo.svg" width={400} />
        <p className="text-4xl font-bold my-4">Hello, minimal React!</p>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="border border-gray-900 p-2 my-4"
        >
          Count: {count}
        </button>
      </div>
    </div>
  )
}
