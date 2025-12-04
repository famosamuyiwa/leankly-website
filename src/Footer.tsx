import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-secondary-300 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Leankly</h3>
            <p className="text-gray-300">Side quests unlocked.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/account-deletion"
                  className="text-gray-300 hover:text-white"
                >
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="#"
              target="_blank"
              className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <img
                src="/assets/logos/facebook.png"
                alt="Facebook"
                className="w-full h-full object-contain"
              />
            </a>
            <a
              href="https://x.com/leanklyapp"
              target="_blank"
              className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <img
                src="/assets/logos/twitter.png"
                alt="Twitter"
                className="w-full h-full object-contain"
              />
            </a>
            <a
              href="https://www.instagram.com/leanklyapp"
              target="_blank"
              className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <img
                src="/assets/logos/instagram.png"
                alt="Instagram"
                className="w-full h-full object-contain"
              />
            </a>
            <a
              href="https://www.tiktok.com/@leanklyapp"
              target="_blank"
              className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <img
                src="/assets/logos/tiktok.png"
                alt="TikTok"
                className="w-full h-full object-contain"
              />
            </a>
          </div>
          <p>&copy; 2025 Leankly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
