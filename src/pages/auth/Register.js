import { Link } from "react-router-dom";
import { TextInput, Button } from "../../elements";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("submit");
  };

  return (
    <div className="flex flex-wrap items-center h-screen">
      <div className="w-full mx-auto text-center md:w-1/2">
        <div className="mb-5 text-2xl font-bold text-blue-500">
          <Link to="/">Uwebs Build</Link>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <TextInput
            name="username"
            placeholder="Username"
            type="text"
          ></TextInput>
          <TextInput
            name="email"
            placeholder="Email Address"
            type="email"
          ></TextInput>
          <TextInput
            name="password"
            placeholder="Password"
            type="password"
          ></TextInput>
          <Button type="submit" btnLogin>
            Register
          </Button>
        </form>
        <div className="flex justify-center">
          <Button toAuth path="/login">
            Login
          </Button>
        </div>
      </div>
      <div
        className="flex-col items-center justify-center hidden w-0 h-screen text-center md:flex md:w-1/2"
        style={{ backgroundColor: "#23A6F0" }}
      >
        <img
          src="/images/register.jpg"
          width="70%"
          className="rounded-3xl"
          alt=""
        />
        <p className="mt-5 text-xl font-bold text-white">
          Win the battle. <br />
          Be the Champion.
        </p>
        <p className="mt-5 text-xs text-gray-200">
          Kami menyediakan jutaan cara untuk <br /> membantu players menjadi{" "}
          <br /> pemenang sejati
        </p>
      </div>
    </div>
  );
};

export default Register;
