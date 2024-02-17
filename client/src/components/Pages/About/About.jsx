import Header from "../../Header/Header";
import { schoolName } from "../../constants";

const About = () => {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col flex-wrap p-5">
        <div className="flex items-center justify-center py-4">
          <span className="text-xl font-bold tracking-widest text-blue-900">
            {schoolName}
          </span>
        </div>
        <div className="flex flex-col py-4">
          <span className="text-lg text-gray-900 font-bold">About Us:</span>
          <span className="text-base text-gray-9700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae quis dolore excepturi optio ab natus numquam, minus rerum quidem ex repellendus vel. Deserunt alias quos veniam, voluptate laborum obcaecati ullam pariatur aut rem autem saepe. Rerum eveniet laboriosam, sunt, explicabo incidunt voluptas soluta qui deleniti eligendi id aspernatur a, nam magnam distinctio cum? Ratione corrupti sapiente beatae deleniti reiciendis! Consectetur reprehenderit itaque, excepturi nulla tempore nesciunt natus consequuntur qui adipisci nostrum veniam perferendis, expedita nam fugit. Facere quis officiis recusandae distinctio odio sint quaerat non ad expedita adipisci. Velit culpa repellendus facere perspiciatis rerum. Tempore facilis adipisci voluptates ipsum dolor et vitae, in laborum iste doloremque veniam repudiandae eos, iusto, commodi libero debitis amet rem perferendis ipsa ut quod delectus id assumenda fugiat? Amet voluptatum illo, alias delectus numquam dolores non ut reprehenderit! Officia accusamus debitis temporibus porro impedit, dolorum, veniam praesentium omnis nihil reprehenderit dignissimos. Earum assumenda et debitis ratione sequi quaerat quisquam, aperiam quos consequatur, quis eaque ipsum dolorum! Unde eum ipsum, harum nobis aut nostrum nisi impedit dolorum vel delectus facilis magnam dicta repellat nulla adipisci deserunt sed. Ratione ad vero doloremque, cupiditate praesentium at, eum culpa eaque iure animi ducimus ullam repudiandae aliquid temporibus enim tenetur molestias, delectus libero explicabo doloribus molestiae. Placeat, velit iure? Facilis provident quidem consequuntur, consectetur vero explicabo fuga? Minus veniam ad voluptas est, similique vero asperiores at tempora dolorum exercitationem non dolore cum optio fugit explicabo quae! Quasi repellat culpa dolorum repudiandae, consectetur accusantium, deleniti tempora vel facere, error sint sequi.</span>
        </div>
      </div>
    </>
  );
};

export default About;
