interface Text {
  text: string;
}

const Header = ({ text }: Text) => (
  <div className='content-wrapper'>
    <span className="heading">{text}</span>
  </div>
);

export default Header;
