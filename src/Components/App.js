import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomeComponent";
import NavBar from "./navbar/Navbar";
import About from "./pages/About";
import {AuthProvider} from "../context/AuthContext";
import DestinationDetails from "./pages/DestinationDetails";
import DestinationsBySeason from "./pages/Destinations/DestinationsBySeason";
import DestinationsByStars from "./pages/Destinations/DestinationsByStars";
import DestinationsByBudget from "./pages/Destinations/DestinationsByBudget";
import SignupComponent from "./pages/SignupComponent";
import LoginComponent from "./pages/LoginComponent";

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <NavBar/>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/destinationsBySeason" element={<DestinationsBySeason/>}/>
                    <Route path="/destinationsByStars" element={<DestinationsByStars/>}/>
                    <Route path="/destinationsByBudget" element={<DestinationsByBudget/>}/>
                    <Route path="/login" element={<LoginComponent/>}/>
                    <Route path="/register" element={<SignupComponent/>}/>
                    <Route path="/destination" element={<DestinationDetails/>}/>

                </Routes>
            </div>
        </AuthProvider>
    );
}

export default App;
