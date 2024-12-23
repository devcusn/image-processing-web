import Header from "../components/Header";

const LandingPage = () => {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="min-h-screen w-full flex flex-col  items-center  text-center   bg-gradient-to-b from-[#151f37] to-[#3a373e] text-white p-4">
        <h2
          className="text-6xl font-bold leading-tight mt-24"
          style={{
            background:
              "linear-gradient(to right, #ff7eb3, #ff758c, #ff9d75, #ffd084, #fffb92)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Transform Your Images with AI!
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-4">
          Professional image editing tools at your fingertips. Remove
          backgrounds, enhance quality, and more - no design skills required.
        </p>
      </div>
    </div>
  );
};
export default LandingPage;
