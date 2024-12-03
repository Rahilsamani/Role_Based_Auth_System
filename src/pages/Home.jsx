import Footer from "../components/common/Footer";
import Button from "../components/common/Button";
import { useSelector } from "react-redux";
import HeroImage from "../assets/Images/Home.png";

const Home = () => {
  const featuresDetails = [
    {
      heading: "Data Protection Services",
      description:
        "Safeguard sensitive information from breaches and unauthorized access.",
    },
    {
      heading: "Compliance Audits",
      description:
        "Ensure your operations align with industry standards and regulations.",
    },
    {
      heading: "Supply Chain Security Assessments",
      description:
        "Evaluate and secure the integrity of your supply chain networks.",
    },
    {
      heading: "ICS/SCADA Security Assessments",
      description:
        "Enhance the cybersecurity posture of industrial control systems.",
    },
    {
      heading: "Financial Data Protection",
      description:
        "Secure sensitive financial information with tailored solutions.",
    },
    {
      heading: "Cloud Security Solutions",
      description:
        "Safeguard your cloud environments against evolving cyber threats.",
    },
  ];

  const { token } = useSelector((state) => state.auth);

  return (
    <div>
      {/*Section1  */}
      <div className="flex justify-center items-center pt-24 pb-24">
        <div className="flex flex-col-reverse md:flex-row w-11/12 justify-between">
          <div className="w-full md:w-1/2 flex flex-col gap-2">
            <h2 className="text-5xl font-semibold text-blue-300 text-shadow-custom mb-3">
              Redefining Cybersecurity with AI-Powered Solutions
            </h2>
            <p className="text-pure-greys-300 text-lg pr-16">
              At <span className="font-medium">VRV Security</span>, we lead in
              cybersecurity, using AI and cloud technologies to protect digital
              infrastructures globally. Trusted by Fortune 500 companies and
              government organizations, we provide top-tier security to
              safeguard your digital assets.
            </p>
            {token ? (
              <div className="mt-5 mb-5">
                <Button text={"Let's Get Started"} link={"/dashboard/track"} />
              </div>
            ) : (
              <div className="flex gap-5 mt-5">
                <Button children={"Login"} linkto={"/login"} />
                <Button children={"SignUp"} linkto={"/signup"} />
              </div>
            )}
          </div>
          <div className="w-full md:w-[40%]">
            <img src={HeroImage} alt="homeImage1" />
          </div>
        </div>
      </div>

      {/*Section 2  */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center pt-10 pb-24 w-11/12">
          <h2 className="text-5xl font-semibold text-blue-300 text-shadow-custom leading-[1.8]">
            OUR FEATURES
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
            {featuresDetails.map((feature, index) => {
              return (
                <div className="w-[400px] md:w-[300px]" key={index}>
                  <div className="flex flex-col gap-5 bg-pure-greys-25 border-custom p-5 rounded-xl h-[220px] shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-2xl cursor-pointer">
                    <h3 className="text-blue text-3xl font-semibold">
                      {feature?.heading}
                    </h3>
                    <p className="text-grey">{feature?.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/*Footer */}
      <Footer />
    </div>
  );
};

export default Home;
