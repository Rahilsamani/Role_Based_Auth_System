import NotFound from "../assets/404-Page.png";

const Error = () => {
  return (
    <div className="flex font-medium justify-center mt-12 h-96 overflow-hidden">
      <img src={NotFound} alt="not_found" />
    </div>
  );
};

export default Error;
