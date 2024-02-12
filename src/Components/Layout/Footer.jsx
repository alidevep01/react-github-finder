// eslint-disable-next-line
function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <div>
        <a
          href="https://alidevep01.github.io/myPortfolio-/"
          alt="Mohammad Portfolio Website"
          className="text-blue-600 visited:text-purple-600 "
        >
          Copyright &copy; {footerYear} Mohammad Nandurbarwala
        </a>
        <a
          href="https://www.udemy.com/course/react-front-to-back-2022/"
          alt="Udemy/React-Front-to-back-2022"
          className="btn"
        >
          React Front to Back Udemy Course by Brad Traversy
        </a>
      </div>
    </footer>
  );
}
export default Footer;
