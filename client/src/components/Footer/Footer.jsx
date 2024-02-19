import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-primary p-4 flex flex-wrap">
      {/* school address */}
      <div className="w-[100%] px-3 sm:px-0 sm:w-[30%] flex flex-wrap flex-col sm:items-center ">
        <div>
          <span className="text-white font-bold">Model Public School</span>
          <div className="w-full flex flex-col gap-1 text-white">
            <span className="text-white font-bold">
              XYZ Town Near Sai Mandir
            </span>
            <span className="text-white font-bold">Phone: 98xxxxxx10</span>
            <span className="text-white font-bold">
              Email: model.school@gmail.com{" "}
            </span>
          </div>
        </div>
      </div>
      {/* overview */}
      <div className="w-[100%] gap-2 sm:gap-0 sm:w-[50%] flex flex-wrap flex-col items-center py-4 sm:py-0">
        <div>
          <span className="text-xl text-white font-bold tracking-wide">
            Overview
          </span>
        </div>
        <div className="w-full sm:w-[50%] flex gap-5 sm:gap-0 flex-wrap">
          <ul className="sm:w-[50%] flex flex-col">
            <li>
              <NavLink to="/" className="text-white font-bold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-white font-bold">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-white font-bold">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallary" className="text-white font-bold">
                Gallary
              </NavLink>
            </li>
            <li>
              <NavLink to="/admissions" className="text-white font-bold">
                Admissions
              </NavLink>
            </li>
          </ul>
          <ul className="sm:w-[50%] flex flex-col">
            <li>
              <NavLink to="#" className="text-white font-bold">
                Academic
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="text-white font-bold">
                School and Events
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="text-white font-bold">
                School Leaving Certificate
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="text-white font-bold">
                Pay Fee
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin"
                className="text-white font-bold hover:text-gray-200"
              >
                Admin
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
