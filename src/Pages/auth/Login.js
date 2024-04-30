import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import LoadingSubmit from "../../Components/loading";

export default function Login() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  //const ref
  const focus = useRef("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  //handel with useref for focus
  useEffect(() => {
    focus.current.focus();
  }, []);

  ///this is to update state of user
  // const addUser = (newUser) => {
  //   setUsers([...users, newUser]);
  // };

  function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const { email, password } = form;

      // Check if the email exists in the users array
      const user = users.find((user) => user.email === email);

      if (user && user.password === password) {
        setLoading(true);
        setLoginError("");
        window.location.pathname = "/";
        //and this below to handle with the function above
        // addUser();
      } else {
        setLoading(false);
        setLoginError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      setLoginError("An error occurred while logging in");
    }
  }

  return (
    <>
      {loading && <LoadingSubmit />}
      <div className="container">
        <div className="row" style={{ height: "100vh" }}>
          <Form className="form" onSubmit={handleLogin}>
            <div className="C-form">
              <h1>Login</h1>
              <div>
                <>
                  <Form.Group
                    className="form-custom"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      ref={focus}
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email..."
                      required
                    />
                    <Form.Label>Email</Form.Label>
                  </Form.Group>

                  <Form.Group
                    className="form-custom"
                    controlId="exampleForm.ControlInput2"
                  >
                    <Form.Control
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="password..."
                      minLength={6}
                      required
                    />
                    <Form.Label>Password</Form.Label>
                  </Form.Group>

                  <button className="submit">Login</button>
                  {loginError !== "" && (
                    <span className="error">{loginError}</span>
                  )}
                </>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
