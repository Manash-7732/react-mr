import UseContextProvider from "./context/UseContextProvider"
import Login from "./components/Login"
import Profiless from "./components/Profiless"
function App() {

  return (
    <UseContextProvider>

      <div>my name is manash raj</div>
       <Login />
      <Profiless />
    </UseContextProvider>
  )
}

export default App
