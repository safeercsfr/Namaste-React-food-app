import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="p-3 m-2 border border-black ">
      <h1 className="font-bold text-2xl text-center underline">{title}</h1>
      {isVisible && <p>{description}</p>}
      {isVisible && (
        <button
          onClick={() => setIsVisible(false)}
          className="bg-purple-600 rounded-lg p-2 m-2 text-white font-bold"
        >
          Hide
        </button>
      )}
      {!isVisible && (
        <button
          onClick={() => setIsVisible(true)}
          className="bg-red-600 rounded-lg p-2 m-2 text-white font-bold"
        >
          Show
        </button>
      )}
    </div>
  );
};

const InstaMart = ({}) => {
  const [visibleSelection, setVisibleSelection] = useState("about");
  const handleVisibilityChange = (selection) => {
    setVisibleSelection((prevSelection) =>
      prevSelection === selection ? "" : selection
    );
  };
  return (
    <div>
      <h1 className="text-3xl p-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
        isVisible={visibleSelection === "about"}
        setIsVisible={() => handleVisibilityChange("about")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
        isVisible={visibleSelection === "team" }
        setIsVisible={() => handleVisibilityChange("team" )}
      />
      <Section
        title={"Career Instamart"}
        description={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
        isVisible={visibleSelection === "career" }
        setIsVisible={() => handleVisibilityChange("career")}
      />
    </div>
  );
};
export default InstaMart;
