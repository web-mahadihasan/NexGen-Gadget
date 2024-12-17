
const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="px-4">
        <div className="text-left md:text-center pt-24 pb-12 border-b-2 border-gray-100">
          <h3 className="text-3xl font-bold mb-3 text-primary-color">
            NexGen Gadgets
          </h3>
          <p className="font-medium">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 space-y-6 md:space-y-0 max-w-7xl mx-auto px-4 text-black/70 p-10">
          <nav className="flex flex-col md:items-center">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Gadget</a>
            <a className="link link-hover">Computers & Laptops</a>
            <a className="link link-hover">Mobile Phone</a>
            <a className="link link-hover">Accessories</a>
          </nav>
          <nav className="flex flex-col md:items-center">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Blogs</a>
          </nav>
          <nav className="flex flex-col md:items-center">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;