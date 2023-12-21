import LoginForm from "../../components/LoginForm/LoginForm";
import NavBar from "../../components/NavBar/NavBar";
import "./LoginPage.css";

export default function LoginPage ({ setUser }) {

    return (
        <main className="">
            <NavBar />
            <div className="authpagediv">
                <h1 className="Logintitle">TaskLab.</h1>
                <h4 className="loginslogan">Login here..</h4>
                <LoginForm  setUser={setUser}  />
            </div>
        </main>

    );
}