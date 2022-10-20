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
      <div className="flex flex-col justify-between h-screen w-screen font-press-start bg-[url('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg')]">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
