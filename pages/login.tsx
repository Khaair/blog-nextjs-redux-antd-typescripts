import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const sendDatatoApp = async () => {
    try {
      let res = await axios.post("http://localhost:8080/api/auth/signin", {
        username,
        password,
      });

      if (res?.status === 200) {
        localStorage.setItem("userId", JSON.stringify(res?.data?.id));
        localStorage.setItem(
          "accessToken",
          JSON.stringify(res?.data?.accessToken)
        );
        router.push("/");
      }
      console.log(res?.data?.accessToken, "success data");
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <div className="container">
      <form action="">
        <div className="form-group mt-3">
          <label htmlFor="">Enter User Name</label>
          <input
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ margin: "12px" }}
            placeholder="Enter username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Enter Password</label>
          <input
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ margin: "12px" }}
            placeholder="Enter password"
            required
          />
        </div>
        <div className="save-btn-area">
          <button
            className="btn btn-primary mt-3"
            type="button"
            onClick={sendDatatoApp}
          >
            Login{" "}
          </button>
          <Link href="/signup">
            <button
              className="btn btn-primary mt-3 mx-2"
              type="button"
              onClick={sendDatatoApp}
            >
              Sign Up{" "}
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
