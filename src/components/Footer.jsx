const Footer = ({ name }) => (
  <footer className="text-center py-4 border-t mt-8">
    <p className="text-sm text-gray-600">
      Submitted by <span className="font-bold">{name}</span>
    </p>
  </footer>
);

export default Footer;
