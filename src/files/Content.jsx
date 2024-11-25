export function Content() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4 hover:drop-shadow-2xl cursor-pointe">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full cursor-pointer"
                  src="https://firebasestorage.googleapis.com/v0/b/webdevelopement-ef497.appspot.com/o/react%20Imges%2Faltumcode-PNbDkQ2DDgM-unsplash.jpg?alt=media&token=6a593bb9-de9e-4094-9e7e-df8587423e45"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Web Developer
              </h2>
              <p className="leading-relaxed text-base">
                A web developer crafts engaging online experiences, blending
                creativity with code. They bring ideas to life through
                responsive design and seamless functionality.
              </p>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Read More
              </button>
            </div>
            <div className="sm:w-1/2 mb-10 px-4 hover:drop-shadow-2xl cursor-pointer">
              <div className="rounded-lg h-64 overflow-hidden hover:scale-100 cursor-pointer">
                <img
                  alt="content"
                  className="object-cover object-center h-fit w-full hover:scale-200 cursor-pointer"
                  src="https://firebasestorage.googleapis.com/v0/b/webdevelopement-ef497.appspot.com/o/react%20Imges%2Fdownload.jpeg?alt=media&token=490c6835-0cdc-4bdc-a3e9-d9d7454b7507"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Artificial intelligence
              </h2>
              <p className="leading-relaxed text-base">
                Artificial intelligence mimics human intelligence, enabling
                machines to analyze, learn, and make decisions. It
                revolutionizes industries by automating tasks and enhancing
                problem-solving capabilities.
              </p>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
