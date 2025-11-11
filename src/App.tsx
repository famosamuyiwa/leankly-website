import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";
// import Blog from "./Blog";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Modal from "./Modal";
import LoaderModal from "./Loader";
import { apiService } from "./services/api";
import { ToastManager } from "./Toast";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!name.trim()) {
        window.showError("Please enter your name");
        setIsLoading(false);
        return;
      }

      if (!email.trim()) {
        window.showError("Please enter your email address");
        setIsLoading(false);
        return;
      }

      // Call the API service
      await apiService.joinWaitlist({
        name: name.trim(),
        email: email.trim(),
      });
      setIsModalOpen(true);
      setName(""); // Clear the name field
      setEmail(""); // Clear the email field
    } catch (error) {
      const errorMessage =
        (error as Error).message ||
        "Failed to join waitlist. Please try again.";
      window.showError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsLoading(false);
  };

  return (
    <>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-300 mb-6">
              Side Questing For The{" "}
              <span className="text-primary-300">Plot</span>
            </h1>
            <p className="text-xl text-black-100 mb-12 max-w-2xl mx-auto">
              Turn your everyday adventures into epic side quests. Connect with
              people who share your interests and create unforgettable
              experiences together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#waitlist">
                <button
                  className={`px-8 py-4 rounded-full inline-block font-medium transition-colors bg-primary-300 text-white hover:bg-primary-300/90"`}
                >
                  Join Our Waitlist
                </button>
              </a>
              <a
                href="#features"
                className="bg-primary-100 text-primary-300 px-8 py-4 rounded-full hover:bg-gray-50 inline-block"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary-300 mb-5">
            Why Choose Leankly? 🤔
          </h2>
          <p className=" text-center text-secondary-300 mb-16">
            Everything you need to turn spontaneous ideas into real adventures
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  explore
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Side Quests
              </h3>
              <p className="text-black-100">
                Turn any activity into a quest. Whether it's trying a new
                restaurant, exploring a park, or learning something new - make
                it an adventure.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  group
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Connect with Leankers
              </h3>
              <p className="text-black-100">
                Find people who share your interests and join their leanks, or
                invite others to join yours. Build meaningful connections
                through shared experiences.{" "}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  location_on
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Location-Based
              </h3>
              <p className="text-black-100">
                Discover leanks happening near you. Filter by location, time,
                and interests to find the perfect adventure for your schedule.{" "}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  chat
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Real-Time Chat
              </h3>
              <p className="text-black-100">
                Plan and coordinate with your leank party through integrated
                messaging. Share updates, make plans, and stay connected.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  event
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Schedule & Plan
              </h3>
              <p className="text-black-100">
                Set dates and times for your quests. Use the built-in calendar
                to keep track of all your upcoming adventures.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  auto_awesome
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Easy to Use
              </h3>
              <p className="text-black-100">
                Intuitive interface designed for spontaneity. Create a leank in
                seconds and start connecting with like-minded adventurers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Preview Section */}
      <section id="waitlist" className="py-20 bg-secondary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary-300 mb-6">
            Join Our Waitlist !
          </h2>
          <p className="text-lg text-black-100 mb-8 max-w-2xl mx-auto">
            Be the first to know when Leankly launches.
          </p>
          <form
            onSubmit={handleJoinWaitlist}
            className="flex flex-col gap-4 max-w-md mx-auto"
          >
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <button
              type="submit"
              disabled={!name.trim() || !email.trim() || isLoading}
              className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
                !name.trim() || !email.trim() || isLoading
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-primary-300 text-white hover:bg-primary-300/90"
              }`}
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary-300 mb-16">
            How Leankly Works
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-300 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-300 mb-2">
                      Create Your Leank
                    </h3>
                    <p className="text-black-100">
                      Think of something fun you want to do - a new restaurant,
                      a hiking trail, a workshop, anything! Add details, photos,
                      and set a time.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-300 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-300 mb-2">
                      Connect with Leankers
                    </h3>
                    <p className="text-black-100">
                      People nearby will see your leank and can request to join.
                      You can also browse and join leanks created by others in
                      your area.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-300 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-300 mb-2">
                      Embark on Adventure
                    </h3>
                    <p className="text-black-100">
                      Once you've found your leank party, chat to coordinate,
                      meet up, and enjoy your side quest together. Make
                      memories, make friends!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="relative">
            Add your app screenshot here
            <div className="aspect-[3/4] rounded-3xl bg-primary-200"></div>
          </div> */}
          </div>
        </div>
      </section>

      {/* Download Section */}
      {/* <section id="download" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary-300 mb-6">
            Ready to Find Your Perfect Space?
          </h2>
          <p className="text-xl text-black-100 mb-12 max-w-2xl mx-auto">
            Download Leankly today and start your journey to finding your dream
            rental perch.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="h-16 inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-black/90"
            >
              <img
                src="https://cdn.leankly.africa/apple-logo-white.png"
                width="50px"
              />
              <span>Download from App Store</span>
            </a>
            <a
              href="#"
              className="h-16 inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-black/90"
            >
              <img
                src="https://cdn.leankly.africa/google-play-logo-colored.png"
                width="30px"
              />
              <span>Download from Google Play</span>
            </a>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <Footer />

      {/* Success Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Successfully Joined!"
        message="Thank you for joining our waitlist! We'll notify you as soon as Leankly is available in your area."
        type="success"
      />

      {/* Loading Modal */}
      <LoaderModal isOpen={isLoading} />

      {/* Toast Manager */}
      <ToastManager />
    </>
  );
}

function App() {
  const location = useLocation();
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === "/about") return "about";
    if (path === "/contact") return "contact";
    if (path === "/privacy") return "privacy";
    if (path === "/terms") return "terms";
    return "home";
  };

  const navigateTo = (_page?: string) => {
    // This function is kept for backward compatibility with components
    // but navigation should use Link components
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navigation currentPage={getCurrentPage()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs onNavigate={navigateTo} />} />
        <Route path="/contact" element={<Contact onNavigate={navigateTo} />} />
        <Route
          path="/privacy"
          element={<PrivacyPolicy onNavigate={navigateTo} />}
        />
        <Route
          path="/terms"
          element={<TermsOfService onNavigate={navigateTo} />}
        />
      </Routes>
    </>
  );
}

export default App;
