import { ModeToggle } from "./components/ModeToggle"
function App() {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-3xl dark:text-gray-100 light:text-gray-800">React + Ts template</h1>
      <ModeToggle />
    </div>
  )
}

export default App
