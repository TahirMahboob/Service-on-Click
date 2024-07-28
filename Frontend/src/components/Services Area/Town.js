import { Link } from "react-router-dom";
import Footer from '../../common/Footer';
import BlogImage from '../../assests/images/model.jpg';
import Hero from "../../common/Hero";


function Town() {

  return (
    <>
      <Hero text="Modal Town" text1="services" image={BlogImage} />


      {/* cleaning professions */}
      <div className="text-center mt-36">
        <p className="text-[#ED5521] text-4xl font-semibold"> Model Town</p>
        <h1 className="text-[30px] md:text-[50px] font-semibold text-neutral-800">
          Cleaning professionals team
        </h1>
        <p className="text-[16px] md:text-[20px] mt-4 text-neutral-500 leading-custom mb-2">
          The most skilled, dedicated and highly-rated cleaning professionals in your area. Guranteed.

        </p>
        <Link to="/book">
          <button className="bg-transparent text-[#ED5521] font-bold py-2 px-4 rounded mt-2 border">
            Book Now
          </button>
        </Link>

        <div className="mt-10 w-full px-4 mb-36">
          <div className="flex justify-center space-x-4">
            <div className="w-32 h-32 md:w-64 md:h-64 p-4">
              <div className="bg-white rounded-full border border-gray-200 shadow-md mx-auto flex flex-col h-full">
                <img
                  src="./images/Worker1.jpg"
                  className="w-full h-full object-cover rounded-full"
                  alt="Virginia"
                />
                <div className="text-center mt-2">
                  <h5 className="text-lg font-medium text-[1.4rem] text-neutral-800">
                    Virginia
                  </h5>
                </div>
              </div>
            </div>
            <div className="w-32 h-32 md:w-64 md:h-64 p-4">
              <div className="bg-white rounded-full border border-gray-200 shadow-md mx-auto flex flex-col h-full">
                <img
                  src="./images/Worker2.jpg"
                  className="w-full h-full object-cover rounded-full"
                  alt="Heydi"
                />
                <div className="text-center mt-2">
                  <h5 className="text-lg font-medium text-[1.4rem] text-neutral-800">
                    Heydi
                  </h5>
                </div>
              </div>
            </div>
            <div className="w-32 h-32 md:w-64 md:h-64 p-4">
              <div className="bg-white rounded-full border border-gray-200 shadow-md mx-auto flex flex-col h-full">
                <img
                  src="./images/Worker3.jpg"
                  className="w-full h-full object-cover rounded-full"
                  alt="Gloria"
                />
                <div className="text-center mt-2">
                  <h5 className="text-lg font-medium text-[1.4rem] text-neutral-800">
                    Gloria
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our cleaning packages */}
      <div>
        <div className="text-center lg:text-left lg:ml-60">
          <h1 className="text-2xl lg:text-4xl font-bold text-[#FF0000]">
            Our House Cleaning Packages.
          </h1>
        </div>
        <div className="text-center lg:text-left lg:ml-60  lg:mt-0">
          <h1 className="text-xl lg:text-2xl font-semibold  lg:mt-16">
            Basic House Cleaning Services in Model Town
          </h1>
        </div>
        <div className="text-center lg:text-left lg:ml-60 mt-4 lg:mt-6">
          <p className="text-[16px] md:text-[20px] mt-4 text-neutral-500">
            For basic house cleaning services or office cleaning services, choose the Basic Cleaning to
            <br className="hidden lg:block" /> shine up your:
          </p>
        </div>
        <div className="text-center lg:text-left lg:ml-60 mt-4 lg:mt-6 font-normal text-neutral-500">
          <ul className="list-disc list-inside text-base lg:text-[20px] space-y-2 lg:space-y-4">
            <li>Plumbing</li>
            <li>Paint</li>
            <li>Electrician</li>
            <li>AC/Fridge</li>
            <li>Carpet Clean</li>
          </ul>
        </div>
      </div>
      {/* service area */}
      <div className="text-center mt-20">
        <h1 className="text-[40px] md:text-[50px] font-semibold text-neutral-800">
          Model Town service areas
        </h1>
        <p className="text-[16px] md:text-[20px] mt-4 text-neutral-500 leading-custom mb-2">
          From the sprawling vineyards of Napa to the gleaming office
          <br className="hidden md:block" />
          buildings of Silicon Valley, and all the way to Sacramento.
        </p>
        <Link to="/book">
          <button className="bg-transparent text-[#ED5521]  font-bold py-2 px-4 rounded mt-2 border">
            Book Now
          </button>
        </Link>
        <div className="w-full mt-10 lg:w-2/3 mx-auto flex flex-col justify-center mb-32 text-[#9c9b9b]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <a
                href="#"
                className="block mt-2 font-medium text-2xl text-black underline"
              >
                Khreembad
              </a>
              <a href="#" className="block mt-2">
                Satluj-Block
              </a>
              <a href="#" className="block mt-2">
                Hajvery-Block
              </a>
              <a href="#" className="block mt-2">
                Sawan-Block
              </a>
              <a href="#" className="block mt-2">
                Indus-Block
              </a>
              <a href="#" className="block mt-2">
                Jhelum-Block
              </a>
            </div>
            <div>
              <a
                href="/request-a-quote"
                className="block mt-2 font-medium text-2xl text-black underline"
              >
                Jinnah Town
              </a>
              <a
                href="https://berryclean.launch27.com/login"
                target="_blank"
                className="block mt-2"
              >
                Dhully
              </a>
              <a href="#" className="block mt-2">
                College Road
              </a>
              <a href="/refer" className="block mt-2">
                Pizza Hut chownk
              </a>
              <a href="/members" className="block mt-2">
                C-Block
              </a>
              <a href="/cleaning-gift-card" className="block mt-2">
                Allah chownk
              </a>
            </div>
            <div className="mt-6 lg:mt-0">
              <a
                href="/request-a-quote"
                className="block mt-2 font-medium text-2xl text-black underline"
              >
                Chadar Town
              </a>
              <a
                href="https://berryclean.launch27.com/login"
                target="_blank"
                className="block mt-2"
              >
                Client portal
              </a>
              <a href="#" className="block mt-2">
                Book now
              </a>
              <a href="/refer" className="block mt-2">
                Refer a friend
              </a>
              <a href="/members" className="block mt-2">
                Memberships
              </a>
              <a href="/cleaning-gift-card" className="block mt-2">
                Gift cards
              </a>
            </div>
            <div className="mt-6 lg:mt-0">
              <a
                href="/request-a-quote"
                className="block mt-2 font-medium text-2xl text-black underline"
              >
                Sultan pura
              </a>
              <a
                href="https://berryclean.launch27.com/login"
                target="_blank"
                className="block mt-2"
              >
                Block A
              </a>
              <a href="#" className="block mt-2">
                Block B
              </a>
              <a href="/refer" className="block mt-2">
                Block C
              </a>
              <a href="/members" className="block mt-2">
                Block D
              </a>
              <a href="/cleaning-gift-card" className="block mt-2">
                Block E
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Town