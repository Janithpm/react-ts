import { ModeToggle } from './components/ModeToggle'
import { Button } from './components/ui/button'
function App() {
    return (
        <div className="h-screen flex flex-col gap-4 justify-center items-center">
            <h1 className="text-3xl dark:text-gray-100 light:text-gray-800">
                React + Ts template
            </h1>
            <ModeToggle />
            <div className="mt-10 grid gap-2 grid-cols-3">
                <Button>Test button 1</Button>
                <Button>Test button 2</Button>
                <Button>Test button 3</Button>
            </div>
        </div>
    )
}

export default App
