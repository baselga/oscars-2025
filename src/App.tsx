import { CategoryRow } from "./components/CategoryRow"
import { Header } from "./components/Header"
import { Winner } from "./components/Winner"
import { DATA } from "./data"

function App() {
  return (
    <div className="bg-black w-screen text-white flex flex-col justify-center items-center px-4 pb-4">
      <Header />
      <Winner />      
      <div className="grid-cols-1 lg:grid-cols-2 w-full grid gap-4 max-w-5xl">
        {DATA.map((category) => (
          <CategoryRow key={category.name} category={category} />
        ))}        
      </div>
    </div>
  )
}

export default App
