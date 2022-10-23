import { useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { UserContext } from "./context/userContext";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [address, setAddress] = useState(null);

  const user = {
    address,
    setAddress,
    isAdmin,
    setIsAdmin,
    isLogged,
    setIsLogged,
  };

  return (
    <UserContext.Provider value={user}>
      <div className="flex flex-col justify-between h-screen w-screen text-slate-100 font-press-start bg-[url('https://www.exascaleproject.org/wp-content/uploads/2019/11/PathForward-scaled.jpg')]">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
