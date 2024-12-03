import Footer from "../components/common/Footer";
import ContactDetails from "../components/core/ContactDetails";
import ContactUsForm from "../components/core/ContactUsForm";

const Contact = () => {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 lg:flex-row mb-20">
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>
        <div className="lg:w-[60%]">
          <div className="border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
            <h1 className="text-4xl leading-10 font-semibold text-blue">
              We're Here to Secure Your Digital Future
            </h1>
            <p className="font-sans">
              At VRV Security, your cybersecurity needs are our priority.
              Whether you're looking to inquire about our services, seek
              technical assistance, or explore partnership opportunities, our
              team is ready to assist you.
            </p>
            <div className="mt-7">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
