import SideBar from './components/SideBar'

function App() {
  return (
    <div className="grid-cols-2">
      <SideBar />
      <div className="flex h-screen items-center justify-center text-white">
        hello from TwoNote.
      </div>
    </div>
  )
}

export default App
