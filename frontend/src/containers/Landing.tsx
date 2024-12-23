import Header from "../components/Header";

const LandingPage = () => {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="min-h-screen w-full flex flex-col  items-center justify-center text-center   bg-gradient-to-b from-[#1A1F2C] to-[#221F26] text-white p-4">
        <h2 className="text-6xl font-bold leading-tight">
          Transform Your Images with AI!
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Professional image editing tools at your fingertips. Remove
          backgrounds, enhance quality, and more - no design skills required.
        </p>

        <div className="flex justify-center mt-8">
          <div className="bg-[#1A1F2C]/50 p-6 rounded-xl border border-gray-700 w-full max-w-xl">
            <div className="flex items-center gap-3 text-lg text-gray-300">
              <span>
                Transform your images instantly with our AI-powered tools.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
