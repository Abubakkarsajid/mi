import { NavLink } from "react-router-dom";
export function Signup() {
  return (
    <>
      <form className="w-full max-w-full h-5/6 text-center p-28">
        <div>
          {" "}
          <nav>
            <h1 className=" text-4xl ">Comming Soon</h1>
            <NavLink to="/" className="mt-2 text-red-500 text-3xl">
              <h1 className="mt-2 text-red-500 text-3xl"> Go Back</h1>
            </NavLink>
          </nav>
        </div>
      </form>
    </>
  );
}
