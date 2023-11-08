import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
const Comment = ({ comment, handleRemove }) => {
  const { _id, commentText, postID, userMail, userName, userPhoto } = comment;

  return (
    <div className="relative border-[1px] border-gray-300 mb-5 rounded-md">
      <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src={userPhoto}
                alt={userName}
              />
              {userName}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time dateTime="2022-02-08" title="February 8th, 2022">
                Feb. 8, 2022
              </time>
            </p>
          </div>
          <div className="flex items-center gap-5 text-2xl">
            <button>
              <AiOutlineEdit></AiOutlineEdit>
            </button>

            <button onClick = {()=>handleRemove(_id)}>
              <BsTrash3></BsTrash3>
            </button>
          </div>
        </footer>
        <p>{commentText}</p>
      </article>
    </div>
  );
};

export default Comment;
