import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer
      id="footer"
      className="bd-footer py-4 py-md-5 bg-body-tertiary footer-bg "
    >
      <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
        <div className="row">
          <div className="col-lg-3 mb-3 text-white">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3 mb-8"
            >
              <img
                src={logo}
                alt="logo"
                className=" w-10 inline-block items-center"
              />
              <span className="text-white">Nexcent</span>
            </a>
            <ul className="list-unstyled small">
              <li className="mb-2">
                Copyright @ 2023 Nexcent Ltd. All rights reserved
              </li>
              <li className="mb-2">
                Code licensed{" "}
                <a
                  href="https://github.com/twbs/bootstrap/blob/main/LICENSE"
                  target="_blank"
                  rel="license noopener"
                >
                  MIT
                </a>
                , docs{" "}
                <a
                  href="https://creativecommons.org/licenses/by/3.0/"
                  target="_blank"
                  rel="license noopener"
                >
                  CC BY 3.0
                </a>
                .
              </li>
              <li className="mb-2">Currently v5.3.2.</li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 offset-lg-1 mb-3 text-white">
            <h5 className="font-semibold mb-7">COMPANY</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/">Home</a>
              </li>
              <li className="mb-2">
                <a href="/docs/5.3/">About us</a>
              </li>
              <li className="mb-2">
                <a href="/docs/5.3/examples/">Blog</a>
              </li>
              <li className="mb-2">
                <a href="https://icons.getbootstrap.com/">Contact us</a>
              </li>
              <li className="mb-2">
                <a href="https://themes.getbootstrap.com/">Pricing</a>
              </li>
              <li className="mb-2">
                <a href="https://blog.getbootstrap.com/">Testimonials</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3 text-white">
            <h5 className="font-semibold mb-7">SUPPORT</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/docs/5.3/getting-started/">Getting started</a>
              </li>
              <li className="mb-2">
                <a href="/docs/5.3/examples/starter-template/">
                  Starter template
                </a>
              </li>
              <li className="mb-2">
                <a href="/docs/5.3/getting-started/webpack/">Legal</a>
              </li>
              <li className="mb-2">
                <a href="/docs/5.3/getting-started/parcel/">Privacy policy</a>
              </li>
              <li className="mb-2">
                <a href="/docs/5.3/getting-started/vite/">Status</a>
              </li>
            </ul>
          </div>
          <div className="col-8 col-lg-2 mb-3 ml-auto w-72 text-white">
            <h5 className="font-semibold mb-7">STAY UP TO DATE</h5>
            <input
              type="email"
              placeholder="name@flowbite.com"
              className="h-12 p-3 rounded-lg text-sm shadow-sm"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
