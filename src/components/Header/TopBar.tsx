import MenuIcon from "@/assets/icons/MenuIcon";
import UserIcon from "@/assets/logo/user.png";
import Image from "next/image";
const TopBar = () => {
  return (
    <div className="flex h-14 items-center justify-between bg-black px-10 text-sm font-bold text-white">
      {/* right side buttons */}
      <div className="flex gap-2 ">
        <button className="h-14 px-12 hover:bg-secondary">
          Vendre une voiture
        </button>
        <button className="h-14 px-12 hover:bg-secondary">
          Acheter une voiture
        </button>
        <button className="h-14 px-12 hover:bg-secondary">
          Conseils{" "}
          <span className="uppercase">
            <span className="text-primary">o</span>
            <span>car</span>
            <span className="text-primary">z</span>
          </span>
        </button>
      </div>
      <div className="flex h-14">
        <button className="border-x-2 border-secondary px-12 text-white hover:bg-secondary">
          <div className="capitalize">contactez-nous <br /> <span className="xl:text-[12pt] 2xl:text-[14pt] md:text-[12px] text-yellow">0522 983 283</span></div>
        </button>
        <button className="border-r-2 border-secondary px-12 hover:bg-secondary">
          <div className="flex items-center gap-4">
            <span>
            <Image src={UserIcon} alt="advBar" width={19} height={20} />
            </span>{" "}
            <span className="capitalize">Me connecter</span>
          </div>
        </button>
        <button className="ps-8 hover:bg-secondary text-center">
          {/* <MenuIcon /> */}
          <img src="./iconeMenu.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
export default TopBar;
