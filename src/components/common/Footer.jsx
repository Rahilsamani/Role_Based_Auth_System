import { FaChevronRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Logo from "../../assets/VRV.png";

const quickLinks = [
  "About Us",
  "Services",
  "Careers",
  "Contact Us",
  "Privacy Policy",
  "Terms of Service",
];

const contactInfo = [
  "+91 8954984308",
  "+91 9984598549",
  "secureuser@vrvsecurity.com",
  "Chennai, Tamil Nadu",
];

const Footer = () => {
  return (
    <div className="flex bg-pure-greys-5 border border-t-[1px] border-pure-greys-50 justify-center items-center py-10">
      <div className="w-11/12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-start justify-items-center gap-y-5">
          {/* Logo */}
          <div className="flex flex-col gap-5 mt-12">
            <img src={Logo} alt="logo" width={150} />
            <div className="text-pure-greys-400 font-edu-sa text-md font-medium w-[200px]">
              Redefining cybersecurity through AI-driven innovation and
              excellence.
            </div>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-blue-200 text-2xl font-semibold w-[200px]">
              Quick Links
            </h3>
            <div className="text-pure-greys-400 flex flex-col gap-2">
              {quickLinks.map((link, index) => (
                <div
                  className="flex items-center gap-1 cursor-pointer group"
                  key={index}
                >
                  <FaChevronRight size={14} className="text-blue" />
                  <p className="group-hover:text-richblack-900 transition-colors duration-200">
                    {link}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Contact Info */}
          <div className="flex flex-col gap-5">
            <h3 className="text-blue-200 text-2xl font-semibold w-[200px]">
              Contact Info
            </h3>
            <div className="text-pure-greys-400 flex flex-col gap-2">
              {contactInfo.map((info, index) => (
                <div
                  className="flex items-center gap-1 cursor-pointer group"
                  key={index}
                >
                  <FaChevronRight size={14} className="text-blue" />
                  <p className="group-hover:text-richblack-900 transition-colors duration-200">
                    {info}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Follow Us */}
          <div className="flex flex-col gap-5">
            <h3 className="text-blue-200 text-2xl font-semibold w-[200px]">
              Follow Us
            </h3>
            <div className="text-pure-greys-400 flex flex-col gap-2">
              <div className="flex items-center group gap-1 cursor-pointer">
                <FaFacebookF size={16} className="text-blue" />
                <p className="group-hover:text-richblack-900 tansition-all duration-200">
                  Facebook
                </p>
              </div>
              <div className="flex items-center group gap-1 cursor-pointer">
                <FaTwitter size={16} className="text-blue" />
                <p className="group-hover:text-richblack-900 tansition-all duration-200">
                  Twitter
                </p>
              </div>
              <div className="flex items-center group gap-1 cursor-pointer">
                <FaInstagram size={16} className="text-blue" />
                <p className="group-hover:text-richblack-900 tansition-all duration-200">
                  Instagram
                </p>
              </div>
              <div className="flex items-center group gap-1 cursor-pointer">
                <FaLinkedinIn size={16} className="text-blue" />
                <p className="group-hover:text-richblack-900 tansition-all duration-200">
                  Linkedin
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-grey mt-10 w-11/12 mx-auto"></div>

        <p className="text-center text-md mt-5 text-pure-greys-200">
          2024 VRV Security. All Rights Reserved. | Protecting the future, one
          endpoint at a time.
        </p>
      </div>
    </div>
  );
};

export default Footer;
