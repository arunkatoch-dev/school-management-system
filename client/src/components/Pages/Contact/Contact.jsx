import Header from "../../Header/Header";
import { schoolName } from "../../constants";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col flex-wrap p-5">
        <div className="flex items-center justify-center py-4">
          <span className="text-xl font-bold tracking-widest text-blue-900">
            {schoolName}
          </span>
        </div>
        <div className="flex flex-col py-4 gap-3">
          <span className="text-lg text-gray-900 font-bold">Contact Us:</span>
          <span className="text-base text-gray-9700">
            Email: modelpublic.school@gmail.com
          </span>
          <span className="text-base text-gray-9700">Phone: 01792-27XXXX</span>
          <span>
            Our Address:
            <address>Model Town, Near Durga Mandir 172398</address>
          </span>
        </div>
      </div>
    </>
  );
};

export default Contact;
