import { FaRegEnvelope } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-10 my-10">
      <div className="col-span-1">
        <div className="flex flex-col items-center bg-[#F3F8FB] rounded-md  text-center py-10 space-y-4">
          <div className="p-5 rounded-full bg-[#C5015F]">
            <FaRegEnvelope className="text-5xl text-white" />
          </div>
          <p className="text-xl font-semibold">Email Address</p>
          <p className=" font-semibold">info@blogverse.com</p>
          <p className=" font-semibold">help@blogverse.com</p>
        </div>
        <div className="flex flex-col items-center bg-[#F3F8FB] rounded-md  text-center py-10 space-y-4 mt-8">
          <div className="p-5 rounded-full bg-[#C5015F]">
            <IoCallOutline className="text-5xl text-white" />
          </div>
          <p className="text-xl font-semibold">Phone</p>
          <p className=" font-semibold">+880282542556</p>
          <p className=" font-semibold">+8801780451245</p>
        </div>
      </div>
      <div className="col-span-2">
        <form
          action="https://fabform.io/f/{form-id}"
          method="post"
          className="md:col-span-8 p-10"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-[#F3F8FB] text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-[#F3F8FB] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-[#F3F8FB] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="********@*****.**"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Your Message
              </label>
              <textarea
                rows="10"
                className="appearance-none block w-full bg-[#F3F8FB] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></textarea>
            </div>
            <div className="flex justify-between w-full px-3">
              <div className="md:flex md:items-center">
                <label className="block text-gray-500 font-bold">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <span className="text-sm">Send me your newsletter!</span>
                </label>
              </div>
              <button
                className="shadow bg-[#C5015F] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
