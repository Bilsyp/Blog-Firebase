import { Link } from "react-router-dom";
const HomeScreen = () => {
  return (
    <section className="screen ">
      <div className="text-center">
        <h1 class="heading">Apply Hour</h1>
        <p>Your Ultimate Guide to the Digital World</p>
        <div className="btn-group mt-10">
          <Link to={"/signIn"} className="btn bg-blue-500">
            Sign In
          </Link>
          <Link to={"/signUp"} className="btn bg-slate-500">
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeScreen;
