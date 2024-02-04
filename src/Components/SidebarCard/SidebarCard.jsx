import { TbClockHour4 } from "react-icons/tb";

const SidebarCard = ({post}) => {
  
  return (
    <div className="flex items-center gap-5 bg-white rounded-md my-3 px-5 py-2">
      <img
        src={post?.blogImage}
        alt=""
        className="h-28 w-24 object-cover"
      />
      <div className="space-y-2">
        <h5 className="text-xl font-medium">{post?.title}</h5>
        <div className="flex items-center gap-2">
              <TbClockHour4></TbClockHour4>
              <p className="">April 5, 2023</p>
            </div>
      </div>
    </div>
  );
};

export default SidebarCard;
