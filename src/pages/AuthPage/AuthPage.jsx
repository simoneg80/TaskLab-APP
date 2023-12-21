

import NavBar from "../../components/NavBar/NavBar";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./AuthPage.css";

export default function AuthPage ({ setUser }) {

    return (
        <main className="">
            <NavBar />
            <div className="authpagediv">
                <h1 className="Logintitle">TaskLab.</h1>
                <h4 className="loginslogan">join the lab and start your tasks...</h4>
                <SignUpForm setUser={ setUser } />
                
            
            </div>
        </main>

    );
}