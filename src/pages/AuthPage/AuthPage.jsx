import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./AuthPage.css";

export default function AuthPage ({ setUser }) {

    return (
        <main className="">
            <h1 className="Logintitle">TaskLab.</h1>
            <SignUpForm setUser={ setUser } />
            <LoginForm setUser={ setUser } />
        </main>

    );
}