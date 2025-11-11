import Footer from "./Footer";
import Navigation from "./Navigation";

interface AboutUsProps {
  onNavigate: (page: string) => void;
}

function AboutUs({ onNavigate: _onNavigate }: AboutUsProps) {
  return (
    <>
      {/* Navigation */}
      <Navigation currentPage="about" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-300 mb-6">
              About <span className="text-primary-300">Leankly</span>
            </h1>
            <p className="text-xl text-black-100 mb-12 max-w-3xl mx-auto">
              We're revolutionizing how people connect and share adventures by
              turning everyday experiences into epic side quests. Join the
              community that's making life more interesting, one leank at a
              time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-300 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-black-100 mb-6">
                At Leankly, we believe that life is meant to be lived, not just
                experienced alone. We're on a mission to transform how people
                connect, explore, and create memories together.
              </p>
              <p className="text-lg text-black-100 mb-6">
                We're building the world's most trusted side questing platform
                by combining cutting-edge technology with human-centered design,
                ensuring that every leank is safe, fun, and meaningful. Whether
                you're trying a new restaurant, exploring a hiking trail, or
                learning something new, we make it easy to find your adventure
                party.
              </p>
              <p className="text-lg text-black-100 mb-6">
                Our goal is to connect 100,000+ leankers and create 50,000+
                unforgettable adventures by the end of 2026.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-300 mb-2">
                    100K+
                  </div>
                  <div className="text-black-100">Active Leankers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-300 mb-2">
                    50K+
                  </div>
                  <div className="text-black-100">Leanks Created</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square p-4 rounded-3xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <span className="material-symbols-rounded text-9xl text-primary-300">
                  travel_explore
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary-300 mb-16">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  verified
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Safety First
              </h3>
              <p className="text-black-100">
                Your safety is our top priority. Every user is verified, every
                leank is monitored, and we provide tools to help you connect
                safely with others.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  diversity_3
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Community First
              </h3>
              <p className="text-black-100">
                We're not just a platform; we're a community of adventurers. We
                listen to our leankers, adapt to their needs, and grow together
                through shared experiences.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  rocket_launch
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Adventure Awaits
              </h3>
              <p className="text-black-100">
                We believe every day holds the potential for adventure. We
                constantly innovate to make it easier to discover new
                experiences, meet new people, and create unforgettable memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-300 mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-black-100 max-w-4xl mx-auto">
              Leankly was born from a simple idea: life is your main story, and
              side quests make it more interesting. Our founders experienced
              firsthand how hard it can be to find people who share your
              interests or want to try new things. Our vision is to be the
              leading platform for spontaneous adventures and meaningful
              connections, making it easy for anyone to turn their ideas into
              shared experiences. We aim to make every day an opportunity for
              adventure, connection, and growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2025</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                The Beginning
              </h3>
              <p className="text-black-100">
                Leankly was founded with a vision to transform how people
                connect and share adventures, starting with building the
                foundation for side questing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2026</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Launch & Growth
              </h3>
              <p className="text-black-100">
                We're launching our mobile app and connecting thousands of
                leankers with amazing adventures and experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2027</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Global Expansion
              </h3>
              <p className="text-black-100">
                Expanding worldwide, bringing the joy of side questing to more
                communities and helping people everywhere turn their ideas into
                adventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-300 mb-6">
              Meet Our <span className="text-primary-300">Leankers</span>
            </h2>
            <p className="text-xl text-black-100 max-w-3xl mx-auto">
              Leading the side questing revolution with innovation, passion, and
              a commitment to making every day an adventure worth sharing.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 max-w-md transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-300 via-accent-300 to-secondary-300 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="material-symbols-rounded text-5xl text-white">
                    person
                  </span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-300 rounded-full flex items-center justify-center shadow-lg">
                  <span className="material-symbols-rounded text-white text-sm">
                    verified
                  </span>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-secondary-300 mb-2">
                  Olu Famosa
                </h3>
                <p className="text-primary-300 font-semibold mb-4 text-lg">
                  CEO & Founder
                </p>
                <p className="text-black-100 leading-relaxed mb-6">
                  A visionary entrepreneur passionate about connecting people
                  through shared experiences. With a deep understanding of how
                  technology can bring people together, Famosa is dedicated to
                  transforming how we discover adventures and build meaningful
                  connections in our daily lives.
                </p>

                <div className="flex justify-center space-x-4">
                  <div className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full">
                    <span className="material-symbols-rounded text-primary-300 text-sm">
                      lightbulb
                    </span>
                    <span className="text-sm font-medium text-primary-300">
                      Innovation
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-accent-50 px-4 py-2 rounded-full">
                    <span className="material-symbols-rounded text-accent-300 text-sm">
                      trending_up
                    </span>
                    <span className="text-sm font-medium text-accent-300">
                      Growth
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default AboutUs;
