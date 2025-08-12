import { useState } from "react";

function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form Data:", { name, email, password });
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",

            }}
        >
            <form onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    border: "2px solid black",
                    flexDirection: "column",
                    gap: "10px",
                    maxWidth: "300px",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px 20px",
                    borderRadius: "8px",
                    backgroundColor: "grey",
                }}>

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    style={{ display: "block", marginBottom: "10px", width: "200px", padding: "10px 10px" }}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    style={{ display: "block", marginBottom: "10px", width: "200px", padding: "10px 10px" }}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    value={password}
                    style={{ display: "block", marginBottom: "10px", width: "200px", padding: "10px 10px" }}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" style={{ display: "block", marginBottom: "10px", width: "200px", padding: "10px 10px" }}
                >Sign Up</button>
            </form>
        </div>
    );
}

export default SignupForm;
