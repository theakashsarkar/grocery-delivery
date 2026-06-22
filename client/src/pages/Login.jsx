import {
  UserIcon,
  LockIcon,
  MailIcon,
  BikeIcon,
  Loader2Icon,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/ui/InputField";
const Login = () => {
  const [isLoginState, setIsLoginState] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <>
      <div className="min-h-screen flex">
        <div className=" lg:flex lg:w-1/2 bg-green-300 relative items-center justify-center">
          <img
            src="/hero_bg-iD2fuyEl.jpeg"
            alt=""
            className="absolute inset-0 object-cover h-full w-full bg-center opacity-10"
          />
          <div className="relative text-center px-12">
            <h2 className="text-4xl font-semibold text-white mb-4">
              Welcome back to Instacart
            </h2>
            <p className="text-white/60 font-serif text-xl max-w-sm mx-auto">
              Fresh groceries and organic produce, delivered to your doorstep.
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center px-4 py-12 bg-app-cream">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center gap-2 mb-6">
                <BikeIcon className="size-8 text-green-500" />
                <span className="text-2xl font-semibold text-app-green">
                  Instacart
                </span>
              </Link>
              <h1 className="text-2xl font-semibold text-app-green mb-2">
                {isLoginState
                  ? "Sign in to you account"
                  : "Sign up for an account"}
              </h1>
              <p className="text-sm text-app-text-light">
                {isLoginState
                  ? "Don't have an account"
                  : "Already have an account"}{" "}
                ?
                <button
                  onClick={() => setIsLoginState(!isLoginState)}
                  className="text-orange-500 ml-1 font-semibold hover:text-orange-600 transition-colors"
                >
                  {isLoginState ? "Create One" : "Sign in"}
                </button>
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLoginState && (
                <InputField
                  label="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="your Name"
                  Icon={UserIcon}
                />
              )}
              <InputField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                Icon={MailIcon}
              />
              <InputField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="***********"
                Icon={LockIcon}
              />
              <button
                type="submit"
                disabled={loading}
                className="flex-center w-full py-3 bg-green-950 text-white font-semibold rounded-xl hover:bg-green-900 transition-colors disabled:opacity-50"
              >
                {loading ? (
                  <Loader2Icon className="animate-spin" />
                ) : isLoginState ? (
                  "Sign In"
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
