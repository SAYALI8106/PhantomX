import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Home from "./pages/Home"
// import Login from "./pages/Login"
// import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        
        {/* Navbar */}
        <nav className="p-4 bg-black shadow-md">
          <h1 className="text-xl font-bold">PhantomX</h1>
        </nav>

        {/* Pages */}
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>

      </div>
    </Router>
  )
}

export default App
