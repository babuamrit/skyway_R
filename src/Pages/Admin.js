import React from "react";
import { Form, Button } from "react-bootstrap";

import { useState } from "react";
import post from "../http/post";

const Admin = () => {
  const [passcode, setpasscode] = useState();
  return (
    <div className="admin_page">
      <div className="login_box">
        <h3>Enter Passcode</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            post(
              "http://localhost:9000/api/delete",
              JSON.stringify({ name: "amrit babu tiwari" })
            );
          }}
        >
          <input
            type="text"
            name="passcode"
            className="admin_passcode_input"
            onChange={(e) => {
              setpasscode(e.target.value);
            }}
          />
          <button type="submit" className="admin_submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
