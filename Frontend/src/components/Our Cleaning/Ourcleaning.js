import { Link } from "react-router-dom";
import Hero from '../../common/Hero';
import BlogImage from '../../assests/images/headerimg.jpg'
import Footer from '../../common/Footer';

function Ourcleaning() {
  return (
    <>
      <Hero text="Home Services in" text1="Gujranwala" image={BlogImage} />



      {/* services */}
      <div className="bg-[#F8F8F8] min-h-screen flex flex-col items-center ">
        <div className="text-center mt-32">
          <h1 className="text-[40px] md:text-[50px] font-bold text-neutral-800">
            Our Cleaning Service
          </h1>
          <p className="text-[16px] md:text-[20px] mt-4 text-neutral-500 leading-custom mb-2">
            Whether you're moving to a new place, need help with your
            <br className="hidden md:block" /> vacation rental, or are someone
            who just needs a clean place to
            <br className="hidden md:block" /> call home, we've got you covered.
          </p>
        </div>



        <div className="mt-10 w-full px-4">
          <div className="flex flex-wrap justify-center">
            {[
              {
                img: "./images/Card1.jpg",
                title: "House Cleaning Service",
                description:
                  "Weekly, Bi-weekly, monthly professional house cleaning service for your house or apartment.",
              },
              {
                img: "./images/Card2.jpg",
                title: "Electrician Service",
                description:
                  "Our deep cleaning service is a great place to start before opting for a cleaning service.",
              },
              {
                img: "./images/Card3.jpg",
                title: "Paint Services",
                description:
                  "Whether you're moving into a new place or moving out of one, we'll be there to clean your space.",
              },
              {
                img: "./images/Card4.jpg",
                title: "Plumber Services",
                description:
                  "Let's make sure vacation rental guests are always greeted with a fresh clean home.",
              },
              {
                img: "./images/Card5.jpg",
                title: "AC/Fridge Services",
                description:
                  "Let's make your office clean and inviting for your hard-working employees.",
              },
              {
                img: "./images/Card6.jpg",
                title: "Carpet Cleaning Services",
                description:
                  "Top-notch professional commercial cleaning services in & around the Bay Area.",
              },
            ].map((card, index) => (
              <div className="w-full md:w-1/3 p-4" key={index}>
                <div className="flex flex-col h-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mx-auto">
                  <img src={card.img} className="w-full rounded-t-lg" alt="Card" />
                  <div className="p-4 flex flex-col flex-grow">
                    <h5 className="text-lg font-medium text-[1.4rem] text-neutral-800">
                      {card.title}
                    </h5>
                    <p className="text-neutral-400 leading-custom mt-4 mb-2 flex-grow">
                      {card.description}
                    </p>
                    <Link to="/book">
                      <button className="bg-transparent text-[#ED5521] font-bold py-2 px-4 rounded mt-2 border">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*  Cleaning professionals */}
        <div>
          <div className="text-center mt-36">
            <p className="text-[#ED5521]">FEATURED</p>
            <h1 className="text-[40px] md:text-[50px] font-bold text-neutral-800">
              Cleaning professionals
            </h1>
            <p className="text-[16px] md:text-[20px] mt-4 text-neutral-500 leading-custom mb-2">
              Our cleaning professionals are meticulously trained, background
              <br className="hidden md:block" /> checked, and have passed
              multiple interviews and training
              <br className="hidden md:block" /> sessions.
            </p>
            <Link to="/book">
              <button className="bg-transparent text-[#ED5521]  font-bold py-2 px-4 rounded mt-2 border">
                Book Now
              </button>
            </Link>

            <div className="mt-10 w-full px-4 mb-36">
              <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-1/4 p-4">

                  <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mx-auto flex flex-col h-full">
                    <img
                      src="./images/Worker1.jpg"
                      className="w-full rounded-t-lg"
                      alt="Card"
                    />
                    <div className="p-4 flex-grow">
                      <h5 className="text-lg font-medium text-[1.4rem] text-neutral-800">
                        Virginia
                      </h5>
                      <p className="text-neutral-500 leading-custom mt-4 mb-2">
                        Virginia is a meticulous professional known for her
                        exceptional pozole and attention to detail. Deeply
                        experienced in the craft of cleaning, she imparts
                        invaluable skills to the team.
                      </p>
                    </div>
                  </div>

                </div>
                <div className="w-full md:w-1/4 p-4">
                  <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mx-auto flex flex-col h-full">
                    <img
                      src="./images/Worker2.jpg"
                      className="w-full rounded-t-lg"
                      alt="Card"
                    />
                    <div className="p-4 flex-grow">
                      <h5 className="text-lg font-medium text-[1.4rem] text-neutral-800">
                        Heydi
                      </h5>
                      <p className="text-neutral-500 leading-custom mt-4 mb-2">
                        Heydi takes great pride in maintaining cleanliness and
                        order which are both essential values in her life. When
                        she's not delighting customers, she enjoys taking
                        strolls through her neighborhood parks.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/4 p-4">
                  <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mx-auto flex flex-col h-full">
                    <img
                      src="./images/Worker3.jpg"
                      className="w-full rounded-t-lg"
                      alt="Card"
                    />
                    <div className="p-4 flex-grow">
                      <h5 className="text-lg font-medium text-[1.4rem] text-neutral-800">
                        Gloria
                      </h5>
                      <p className="text-neutral-500  leading-custom mt-4 mb-2">
                        Originally from El Salvador and now a respected cleaning
                        leader in Oakland, Gloria is the longest-tenured
                        employee of BerryClean. She is a proud mother and a
                        dedicated professional.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/4 p-4">
                  <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mx-auto flex flex-col h-full">
                    <img
                      src="./images/Worker4.jpg"
                      className="w-full rounded-t-lg"
                      alt="Card"
                    />
                    <div className="p-4 flex-grow">
                      <h5 className="text-lg font-medium text-[1.4rem] text-neutral-800">
                        Fabian
                      </h5>
                      <p className="text-neutral-500 leading-custom mt-4 mb-2">
                        Fabian is passionate about farming and animals,
                        especially horses and dogs. He hails from Chiapas,
                        Mexico, and loves agriculture and horticulture. But most
                        of all he loves Barry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* our services area */}
      <div className="text-center mt-20">
        <h1 className="text-[40px] md:text-[50px] font-bold text-neutral-800">
          Our service areas
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
              <p

                className="block mt-2 font-medium text-2xl text-black underline"
              >
                Dc-Colony
              </p>
              <p className="block mt-2">
                Indus Block
              </p>
              <p className="block mt-2">
                Jhelum Block
              </p>
              <p className="block mt-2">
                Ravi Block
              </p>

            </div>

            <div>
              <p

                className="block mt-2 font-medium text-2xl text-black underline"
              >
                Model-Town
              </p>
              <p

                target="_blank"
                className="block mt-2"
              >
                Dhully
              </p>
              <p className="block mt-2">
                College Road
              </p>
              <p className="block mt-2">
                HFC   Model Town
              </p>
              <p className="block mt-2">
                The Educator Campus
              </p>

            </div>

            <div className="mt-6 lg:mt-0">
              <p

                className="block mt-2 font-medium text-2xl text-black underline"
              >
                Ghakhar
              </p>
              <p

                target="_blank"
                className="block mt-2"
              >
                Khreembad
              </p>
              <p className="block mt-2">
                Sardar Town
              </p>
              <p className="block mt-2">
                Jinnah Town
              </p>
              <p className="block mt-2">
                Chadar Town
              </p>
              <p className="block mt-2">
                Sultan Pura
              </p>
            </div>

            <div className="mt-6 lg:mt-0">
              <p

                className="block mt-2 font-medium text-2xl text-black underline"
              >
                Satellite-Town
              </p>
              <p

                target="_blank"
                className="block mt-2"
              >
                Police LInes
              </p>
              <p className="block mt-2">
                Town Market
              </p>
              <p className="block mt-2">
                Wahdat Colony
              </p>
              <p className="block mt-2">
                Rasheed Colony
              </p>
              <p className="block mt-2">
                Abdullah Colony
              </p>
            </div>

          </div>
        </div>
      </div>


      <Footer />

    </>
  );
}

export default Ourcleaning;

