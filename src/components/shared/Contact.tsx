import { MailPlus, MapPinPlus, PhoneCall} from "lucide-react";
import { Magnetic } from "../ui/magnetic";

const Contact = () => {
    const springOptions = {bounce: 0.1};
  return (
    <div className="max-w-screen-xl mx-auto my-7 lg:px-20" id="contact">
      <form action="" method="post">
        <div className="w-full p-8 my-4 mr-auto shadow-2xl md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 rounded-2xl">
          <div className="flex">
            <h1 className="text-5xl text-[#282828] font-bold ">Hire Me</h1>
          </div>
          <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2">
            <input
              className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:border-outline"
              type="text"
              placeholder="First Name"
              name="firstName"
              autoComplete="name"
            />
            <input
              className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name"
              name="lastName"
              autoComplete="family-name"
            />
            <input
              className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
              autoComplete="email"
            />
            <input
              className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
              type="tel"
              placeholder="Phone"
              name="phone"
              autoComplete="tel"
            />
          </div>
          <div className="my-4">
            <textarea
              placeholder="Message"
              className="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline resize-none"
              name="message"
              autoComplete="message"
            ></textarea>
          </div>
          <div className="w-1/2 my-2 lg:w-1/4 ">
            
            <Magnetic
                            intensity={0.2}
                            springOptions={springOptions}
                            actionArea="global"
                            range={200}
                          >
                            <button
                              type="submit"
                              className="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-green-600 rounded  hover:bg-blue-700-lg focus:outline-none focus:shadow-outline"
                             
                            >
                              <Magnetic
                                intensity={0.1}
                                springOptions={springOptions}
                                actionArea="global"
                                range={200}
                              >
                                <span>Send Message</span>
                              </Magnetic>
                            </button>
                          </Magnetic>
          </div>
        </div>
      </form>
      <div className="w-full h-[426px] px-8 py-12 ml-auto bg-[url('/contact.jpg')] bg-cover bg-top bg-no-repeat lg:-mt-96 lg:w-2/6 rounded-sm">
        <div className="flex flex-col text-white">
            <div className="my-4">
              <h2 className="text-2xl flex gap-2">
                {" "}
                <PhoneCall /> Call
              </h2>
              <p className="text-gray-200">Tel:+801759483544</p>
            </div>
            <div className="my-4">
              <h2 className="text-2xl flex gap-2">
                {" "}
                <MailPlus /> Email
              </h2>
              <p className="text-gray-200">mail: devmdmainuddin@gmail.com</p>
            </div>
            <div className="my-4">
              <h2 className="text-2xl flex gap-2">
                {" "}
                <MapPinPlus /> Location
              </h2>
              <p className="text-gray-200">27B Grassfield, Lumely</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
