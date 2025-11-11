import Footer from "./Footer";
import Navigation from "./Navigation";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Tips for First-Time Renters in Lagos",
      excerpt:
        "Navigating the rental market in Lagos can be overwhelming for first-time renters. Here are five essential tips to help you find your perfect home.",
      author: "Leankly Team",
      date: "January 15, 2025",
      category: "Rental Tips",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "The Future of Rental Markets in Nigeria",
      excerpt:
        "Discover the latest trends shaping the rental market in Nigeria and what to expect in the coming years.",
      author: "Market Analyst",
      date: "January 12, 2025",
      category: "Market Insights",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "How to Spot Rental Scams and Protect Yourself",
      excerpt:
        "Learn the red flags to watch out for and how to protect yourself from common rental scams in Nigeria.",
      author: "Security Expert",
      date: "January 10, 2025",
      category: "Safety & Security",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
    },
    {
      id: 4,
      title: "Leankly's New Features: What's Coming in 2025",
      excerpt:
        "Get an exclusive look at the exciting new features we're launching to make your rental journey even better.",
      author: "Leankly Team",
      date: "January 8, 2025",
      category: "Company Updates",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    },
    {
      id: 5,
      title: "Budget-Friendly Neighborhoods in Abuja",
      excerpt:
        "Explore affordable yet desirable neighborhoods in Abuja that offer great value for money.",
      author: "Local Expert",
      date: "January 5, 2025",
      category: "Location Guide",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop",
    },
    {
      id: 6,
      title: "Understanding Your Rental Agreement: A Complete Guide",
      excerpt:
        "Everything you need to know about rental agreements, from terms to conditions and your rights as a tenant.",
      author: "Legal Expert",
      date: "January 3, 2025",
      category: "Legal Guide",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
    },
  ];

  const categories = [
    "All Posts",
    "Rental Tips",
    "Market Insights",
    "Safety & Security",
    "Company Updates",
    "Location Guide",
    "Legal Guide",
  ];

  return (
    <>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-300 mb-6">
              Leankly <span className="text-primary-300">Blog</span>
            </h1>
            <p className="text-xl text-black-100 mb-12 max-w-3xl mx-auto">
              Stay updated with the latest rental tips, market insights, and
              everything you need to know about finding your perfect space.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-primary-300 text-white"
                    : "bg-gray-100 text-black-200 hover:bg-primary-100 hover:text-primary-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-300 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-black-100 mb-4">
                  <span>{blogPosts[0].author}</span>
                  <span>•</span>
                  <span>{blogPosts[0].date}</span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-3xl font-bold text-secondary-300 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-black-100 mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <button className="bg-primary-300 text-white px-6 py-3 rounded-lg hover:bg-primary-300/90 font-medium w-fit">
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary-300 mb-16">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-300 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-black-100 mb-3">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-300 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-black-100 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="text-primary-300 font-medium hover:text-primary-300/80 transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary-300 mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-black-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest rental tips, market
            updates, and exclusive content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <button className="bg-primary-300 text-white px-6 py-3 rounded-lg hover:bg-primary-300/90 font-medium">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-black-100 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary-300 mb-16">
            Popular Topics
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span
                  className="material-symbols-rounded text-3xl"
                  style={{ color: "#ff7f50" }}
                >
                  home
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Rental Tips
              </h3>
              <p className="text-black-100">
                Expert advice on finding, securing, and maintaining your rental
                property.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span
                  className="material-symbols-rounded text-3xl"
                  style={{ color: "#ff7f50" }}
                >
                  trending_up
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Market Insights
              </h3>
              <p className="text-black-100">
                Stay informed about rental market trends and property values.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span
                  className="material-symbols-rounded text-3xl"
                  style={{ color: "#ff7f50" }}
                >
                  security
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Safety & Security
              </h3>
              <p className="text-black-100">
                Learn how to protect yourself from scams and ensure safe
                rentals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Blog;
