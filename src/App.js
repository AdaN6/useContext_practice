import React from "react"
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";
import {UserProvider} from "./components/context/UserContext"

function App() {
  return (
    <UserProvider value="Admin">
      <main>
        <Header />
        <Content />
        <Footer />
      </main>
    </UserProvider>
  );
}

export default App;
