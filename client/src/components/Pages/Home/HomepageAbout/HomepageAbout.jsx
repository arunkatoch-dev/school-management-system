import { NavLink } from "react-router-dom";

const HomepageAbout = () => {
  return (
    <div className="w-[100%] md:w-[60%] h-full flex flex-col">
      <div className="w-full flex items-center">
        <span className="inline-block p-2 md:px-5 md:py-2 border-b capitalize  text-gray-700 border-b-primary text-2xl tracking-widest font-primaryFont">
          Model Public School
        </span>
      </div>
      <div className="w-full flex flex-col gap-5 justify-center p-2 md:p-5 overflow-y-auto scrollbar-thin">
        <p className="text-base md:text-lg text-gray-600 capitalize tracking-wide">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum sint
          temporibus obcaecati autem officia est error ab delectus iure enim
          ipsam nesciunt, consectetur fugit quaerat eaque voluptas assumenda
          minus? Delectus Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolorem recusandae, tempore adipisci sed sapiente aliquid nobis
          aut, odio voluptates, dolore distinctio repellendus nulla. Ut optio
          nobis iure aperiam laboriosam nihil quis nulla vero eaque nostrum
          quaerat tempore doloribus sequi temporibus accusamus asperiores
          adipisci quod, perferendis, sint laudantium ipsum officia ab suscipit.
          Exercitationem veniam eligendi provident, quia dicta voluptates est
          neque vel in sed rerum totam quas perferendis, veritatis non, ad nulla
          illo doloribus quo. 
        </p>
        <div className="w-full flex items-center justify-end">
          <NavLink
            to="/about"
            className="px-4 py-2 bg-secondary hover:bg-teal-600 text-white text-base"
          >
            read more
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomepageAbout;
