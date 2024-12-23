import { Link } from "react-router-dom";
import { crop } from "@feathersjs/feathers";

const Header = () => {
  return (
    <header className="p-4 bg-[#1A1F2C] text-white">
      <div className="mx-auto px-4 py-4 flex items-center ">
        <Link to="/" className="flex items-center gap-2 border-r-2 p-2  ">
          <span className="text-xl font-semibold">Image Processing Tools</span>
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link to="/remove-background" className="p-1 hover:text-white">
            Remove Background
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
