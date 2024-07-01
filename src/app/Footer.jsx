// import Logo from "../../assets/image 10.png";
// import { facebookIcon, instagramIcon, linkedinIcon, twitterIcon } from "..";

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] h-auto md:h-[232px] py-10 md:py-0">
      <div className="flex flex-col md:flex-row justify-center items-center h-full">
        <div className="w-full md:w-[1200px] h-auto md:h-[155px] border-y-[1px] border-y-[#ffffff20] flex flex-col md:flex-row items-center justify-between px-5 md:px-10 py-5 md:py-0">
          <div className="flex flex-col items-center md:items-start ">
            {/* <img
              src=""
              alt="Logo"
              className="h-10 w-auto md:h-auto md:w-auto"
            /> */}
            <span className="font-bold text-white text-3xl" >ShopZy</span>
            <div className="text-[#FFFFFF] text-[14px] md:text-[16px] font-light mt-4 md:mt-6">
              © R Singhania
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 mt-5 md:mt-0 text-center md:text-left">
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold text-[15.13px] text-[#FFFFFF]">
                Company
              </h5>
              <ul className="mb-0 list-none">
                <li className="mb-1">
                  <a href="#" className="text-[#FFFFFF] text-[14px] font-light">
                    About
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-[#FFFFFF] text-[14px] font-light">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold text-[15.13px] text-[#FFFFFF]">
                Terms
              </h5>
              <ul className="list-none">
                <li className="mb-1">
                  <a href="#" className="text-[#FFFFFF] text-[14px] font-light">
                    Data privacy
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-[#FFFFFF] text-[14px] font-light">
                    Terms
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-[#FFFFFF] text-[14px] font-light">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold text-[15.13px] text-[#FFFFFF]">
                Related
              </h5>
              <ul className="mb-0 list-none">
                <li className="mb-1">
                  <a href="#" className="text-[#FFFFFF] text-[14px] font-light">
                    Find Buyer
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-[#FFFFFF] text-[14px] font-light">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-4 mt-5 md:mt-0">
            {/* <img src={linkedinIcon} alt="LinkedIn Icon" className="h-6 w-6 md:h-8 md:w-8" />
            <img src={twitterIcon} alt="Twitter Icon" className="h-6 w-6 md:h-8 md:w-8" />
            <img src={facebookIcon} alt="Facebook Icon" className="h-6 w-6 md:h-8 md:w-8" />
            <img src={instagramIcon} alt="Instagram Icon" className="h-6 w-6 md:h-8 md:w-8" /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
