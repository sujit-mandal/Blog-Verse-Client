import SeeAllCard from "../Components/BlogCard/SeeAllCard";

import Sidebar from "../Components/Sidebar/Sidebar";

const SeeAll = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-10 mt-20">
      <div className="col-span-2">
        <SeeAllCard />
      </div>
      <div className="col-span-1 mb-20">
        <Sidebar/>
      </div>
    </div>
  );
};

export default SeeAll;
