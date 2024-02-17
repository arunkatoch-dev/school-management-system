import { useSelector } from "react-redux";

const AdmissionsHomePage = () => {
  const adminData = useSelector((state) => state.adminHomepageSlice.adminData);
  const isAdminDataPending = useSelector(
    (state) => state.adminHomepageSlice.isAdminDataPending
  );
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col gap-2 py-2 sm:gap-5 items-center justify-center sm:py-5">
        <span className="tracking-widest text-base sm:text-4xl font-bold text-gray-800">
          Modern Public School, XYZ
        </span>
        <span className="text-sm sm:text-xl font-secondaryFont text-gray-700">
          Admissions Open for Session{" "}
          {isAdminDataPending ? "getting..." : ` ${adminData.currentSession}`}
        </span>
      </div>
      <div className="w-full flex flex-col justify-center gap-2 px-2 sm:gap-5 sm:px-5">
        <span className="text-xs sm:text-base font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ipsa
          iusto quidem in inventore, hic molestias itaque ad doloribus sequi
          dignissimos. Quaerat cupiditate atque quo commodi voluptas illum ut
          ratione, modi molestias? Deserunt, at nihil. Molestias quae laudantium
          rerum neque praesentium voluptatem, iure officia quaerat,
          exercitationem, perferendis impedit magnam autem? Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. A, minima molestiae? Distinctio
          amet repellendus libero quidem tenetur voluptatum sequi, sed
          voluptatem, reprehenderit aperiam soluta impedit quia nisi maxime
          aliquid quas doloribus aspernatur accusantium. Atque sapiente dolores,
          et saepe ad nulla quibusdam, sed necessitatibus animi aliquam
          assumenda iste rerum fugiat voluptates.
        </span>
        <div className="w-full flex flex-col gap-2 sm:gap-5">
          <span className="text-sm sm:text-lg font-semibold">
            Important Instructions:
          </span>

          <ul className="list-disc px-1 pb-2 sm:px-5 sm:pb-5">
            <li className="text-xs sm:textbase">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
              illum.
            </li>
            <li className="text-xs sm:textbase">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
              illum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Qui tempore, necessitatibus sed nam minima voluptate!
            </li>
            <li className="text-xs sm:textbase">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
              illum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Qui tempore, necessitatibus sed nam minima voluptate!
            </li>
            <li className="text-xs sm:textbase">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
              illum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Qui tempore, necessitatibus sed nam minima voluptate!
            </li>
            <li className="text-xs sm:textbase">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
              illum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Qui tempore, necessitatibus sed nam minima voluptate!
            </li>
            <li className="text-xs sm:textbase">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
              illum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Qui tempore, necessitatibus sed nam minima voluptate! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Dolor, omnis fuga ad
              nulla dolorem natus beatae itaque, saepe, error similique
              temporibus veniam veritatis soluta totam nostrum non eligendi vero
              recusandae!
            </li>
            <li className="text-xs sm:textbase">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
              illum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Qui tempore, necessitatibus sed nam minima voluptate! Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Voluptatibus
              doloribus reiciendis numquam, officiis fugiat sunt cum at eaque
              facere error dicta aliquid possimus cupiditate optio laboriosam
              iste explicabo in, ipsa voluptate perspiciatis. Eius vitae dolore
              quaerat at sit ea quisquam adipisci? Dolore eveniet ratione quam,
              est sequi veniam repudiandae asperiores.
            </li>
            <li className="text-xs sm:textbase">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
              illum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Qui tempore, necessitatibus sed nam minima voluptate! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Minus, error?
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsHomePage;
