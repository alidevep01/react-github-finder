// eslint-disable-next-line
function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-700 text-base-content footer-center ">
      <div>
        <a
          href="https://alidevep01.github.io/myPortfolio-/"
          alt="Mohammad Portfolio Website"
          className="link link-hover"
        >
          Copyright &copy; {footerYear} Mohammad Nandurbarwala
        </a>
      </div>
    </footer>
  );
}
export default Footer;
