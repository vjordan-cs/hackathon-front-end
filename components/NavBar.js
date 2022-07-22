import Image from "next/image";
import logo2 from "../public/logo2.png";

const Navbar = () => {
  return (
    <div className="relative">
      <div className="bg-[#0076ce] text-3xl font-roboto font-medium text-white text-center py-2 justify-center items-center">
        <div className="">ITDP Final Match Dashboard</div>
      </div>
      <div className="absolute -top-[4.5rem] left-6">
        <Image
          alt="logo"
          src={logo2}
          layout="intrinsic"
          objectFit="contain"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Navbar;
