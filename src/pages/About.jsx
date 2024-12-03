import Mission from "../assets/mission.png";
import Vision from "../assets/vision.png";
import WhyUs from "../assets/whyUs.png";
import Footer from "../components/common/Footer";

const About = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-[#F5F5F5] pt-16 pb-24">
        <h2 className="text-5xl mb-8 font-semibold text-blue text-shadow-custom w-[70%] text-center">
          Empowering the World with AI-Driven Cybersecurity Solutions
        </h2>
        <p className="w-[75%] text-center tex ">
          Founded in 2020 in Chennai, Tamil Nadu,
          <span className="font-medium"> VRV Security</span> is a global leader
          in delivering advanced cybersecurity solutions powered by artificial
          intelligence and cloud technologies. With a steadfast commitment to
          innovation, we protect Fortune 500 companies, government
          organizations, and enterprises of all sizes across 12+ countries.
        </p>
        {/* section 1 */}
        <div className="flex justify-center items-center bg-[#F5F5F5] pt-10 mt-16 pb-24">
          <div className="flex flex-col-reverse md:flex-row w-11/12 justify-between">
            <div className="w-full md:w-[40%] flex items-center justify-center">
              <img src={Mission} alt="mission" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-2 mt-5">
              <h2 className="text-5xl font-semibold text-blue text-shadow-custom leading-[1.3] mb-3">
                Our Mission
              </h2>
              <p className="text-grey text-lg pr-16">
                At VRV Security, our mission is to redefine cybersecurity by
                delivering adaptive, AI-driven solutions that proactively
                anticipate and mitigate threats. We are committed to creating a
                secure and resilient digital ecosystem where businesses can
                operate with confidence. By combining cutting-edge technology,
                innovation, and unparalleled expertise, we aim to set the gold
                standard in cybersecurity excellence while empowering our
                clients to thrive in an ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="flex justify-center items-center bg-[#F5F5F5] pt-10 pb-24">
          <div className="flex flex-col-reverse md:flex-row w-11/12 justify-between">
            <div className="w-full md:w-1/2 flex flex-col gap-2 mt-5">
              <h2 className="text-5xl font-semibold text-blue text-shadow-custom leading-[1.3] mb-3">
                Our Vision
              </h2>
              <p className="text-grey text-lg pr-16">
                Our vision is to become the global leader in cybersecurity,
                recognized for our relentless dedication to innovation, trust,
                and excellence. We aspire to build a world where digital
                transformation is secure, seamless, and empowering, enabling
                organizations of all sizes to harness the full potential of
                technology without compromise. Through our forward-thinking
                approach and unwavering commitment to quality, we strive to lead
                the charge in shaping a safer digital future for all.
              </p>
            </div>

            <div className="w-full md:w-[40%] flex items-center justify-center">
              <img src={Vision} alt="vision" />
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div className="flex justify-center items-center bg-[#F5F5F5] pt-2 mt-16">
          <div className="flex flex-col-reverse md:flex-row w-11/12 justify-between">
            <div className="w-full md:w-[50%] flex items-center justify-center">
              <img src={WhyUs} alt="WhyUs" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-2 mt-5">
              <h2 className="text-5xl font-semibold text-blue text-shadow-custom leading-[1.3] mb-3">
                Why Choose VRV Security?
              </h2>
              <p className="text-grey text-lg pr-16">
                VRV Security is your trusted partner in safeguarding digital
                assets with expertise. We use AI-powered tools and
                industry-leading methods to deliver tailored cybersecurity
                solutions. With a global presence, 500,000+ hours of annual
                threat monitoring, and a 95% client retention rate, we provide
                reliable, innovative services. Whether protecting cloud
                environments or enterprise infrastructure, we ensure 24/7
                monitoring to strengthen your resilience against evolving cyber
                threats. Choose VRV Security for unparalleled protection and
                confidence in the digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default About;
