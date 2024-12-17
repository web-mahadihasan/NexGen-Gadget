import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate()
  const error = useRouteError();
  console.log(error)
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4">
        <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
          <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            <h3 className="text-2xl font-bold">Oops!😥</h3>
            <h1 className="my-4 text-2xl font-bold text-gray-800/80  md:text-5xl">
              {error.status}
            </h1>
            <h3 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">
              Page not found
            </h3>
            <p className=" text-gray-500 ">
              The page you are looking for does&apos;t exist. Here are some
              helpful links:
            </p>

            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100 "
              >
                <span>
                  <BsArrowLeft />
                </span>
                <span>Go back</span>
              </button>

              <button
                onClick={() => navigate("/")}
                className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-primary-color rounded-lg shrink-0 sm:w-auto hover:bg-purple-700 "
              >
                Take me home
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
