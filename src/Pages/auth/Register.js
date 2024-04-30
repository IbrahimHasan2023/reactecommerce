import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import LoadingSubmit from "../../Components/loading";

export default function Register() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  //loading
  const [loading, setLoading] = useState(false);

  //ref
  const focus = useRef("");

  function handleChange(e) {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  //handel with focus
  useEffect(() => {
    focus.current.focus();
  }, []);

  function handleRegister(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const newUser = {
        name: form.name,
        email: form.email,
        password: form.password,
      };

      // Check if the email is already registered
      const isEmailExists = users.some((user) => user.email === newUser.email);
      if (isEmailExists) {
        setLoading(false);
        setEmailError(
          "Email is already registered. Please use a different email."
        );
      } else {
        const updatedUsers = [...users, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
        setEmailError(""); // Clear any previous email error message
        window.location.pathname = "/dashboard";
      }
    } catch (error) {
      setEmailError("An error occurred while registering the user");
    }
  }

  //const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  // Use storedUsers as needed (e.g., to display a list of registered users)

  return (
    <>
      {loading && <LoadingSubmit />}
      <div className="container">
        <div className="row" style={{ height: "100vh" }}>
          <Form className="form" onSubmit={handleRegister}>
            <div className="C-form">
              <h1>Register</h1>
              <div>
                <>
                  <Form.Group
                    className="form-custom"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      ref={focus}
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="name..."
                      required
                    />
                    <Form.Label>Name</Form.Label>
                  </Form.Group>

                  <Form.Group
                    className="form-custom"
                    controlId="exampleForm.ControlInput2"
                  >
                    <Form.Control
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
                    controlId="exampleForm.ControlInput3"
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

                  <button className="submit">REGISTER </button>
                  {emailError !== "" && (
                    <span className="error">{emailError}</span>
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
