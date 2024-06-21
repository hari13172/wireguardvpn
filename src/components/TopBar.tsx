import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import img from "../../public/images/dofy.jpg";

interface TopBarProps {
  onMenuClick: () => void;
  isExpanded: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ onMenuClick, isExpanded }) => {
  return (
    <div
      className="absolute min-h-[100vh] bg-white transition-all duration-300"
      style={{ width: isExpanded ? '78%' : 'calc(100% - 80px)', left: isExpanded ? '300px' : '80px' }}
    >
      <div className="flex justify-between items-center p-4">
        <div className="w-[60px] h-[60px] relative flex justify-center items-center text-3xl cursor-pointer" onClick={onMenuClick}>
          <IoMenu />
        </div>
        <div className="w-[400px] relative">
          <input
            type="text"
            placeholder="Search Here"
            className="w-full px-10 h-[40px] rounded-full border-2 border-black"
          />
          <FaSearch className="absolute top-[10px] left-[10px] text-xl" />
        </div>
        <div>
          <img src={img} alt="Profile" className="w-[40px] h-[40px] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
