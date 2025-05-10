import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* top strip */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-4">
        {/* column 1 */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Our Services
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Affiliate Program
              </a>
            </li>
          </ul>
        </div>

        {/* column 2 */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Get Help</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Shipping
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Returns
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Order Status
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Payment Options
              </a>
            </li>
          </ul>
        </div>

        {/* column 3 */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Online Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Watch
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Bags
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Shoes
              </a>
            </li>
            <li>
                <a href="/" className="hover:text-white">
                Dress
              </a>
            </li>
          </ul>
        </div>

        {/* column 4 */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://pinterest.com" className="hover:text-white">
              <FaPinterestP />
            </a>
            <a href="https://instagram.com" className="hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

    </footer>
  );
};

export default Footer;
