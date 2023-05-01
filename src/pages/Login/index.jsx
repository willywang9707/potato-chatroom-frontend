import "./index.scss";
import { Form } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="login-page">
        <h1 className="login-page__title">Potato Chatroom</h1>

        <Form className="login-page__form">
          <label htmlFor="name" className="login-page__label">
            Name
          </label>
          <input type="text" id="name" className="login-page__input" />

          <label htmlFor="email" className="login-page__label">
            Email
          </label>
          <input type="email" id="email" className="login-page__input" />

          <label htmlFor="password" className="login-page__label">
            Password
          </label>
          <input type="password" id="password" className="login-page__input" />

          <button type="submit" className="login-page__button">
            Login
          </button>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
