import { services } from "../utils/service";

const Services = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center py-10">
        <p className="text-3xl font-bold text-yellow-400">Features</p>
        <h1 className="font-semibold text-3xl sm:text-5xl">
          Our Awesome Services
        </h1>
      </div>
      <div className="px-5 py-16 sm:grid items-center sm:grid-cols-3 sm:gap-20 space-y-10 sm:space-y-0 ">
        {services.map((serv) => (
          <div key={serv.id} className="flex flex-col items-center">
            <div>
              <img
                src={serv.images}
                alt="Logo"
                className="h-[100px] w-[100px]"
              />
            </div>
            <div className="flex flex-col justify-center items-center text-center mt-3">
              <h1 className="text-center text-base font-semibold lg:text-2xl">
                {serv.title}
              </h1>
              <p className="text-base px-5 pb-2 font-semibold">
                {serv.description}
              </p>
              <button className="flex items-center space-x-2 text-yellow-600 font-bold">
                {serv.text}{" "}
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
