import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import footerData from '../../api/footerData.json';
import { NavLink } from "react-router-dom";
import'./Footer.css';

export  const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };
  const name= ' Vishalsingh';

  return (
    <footer className="footer-section">
      <div className="flex  center contactsection">
        <div className="flex wrap  w70 contactbox">
        {footerData.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="flex  footer-contact " key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="flex colomn footer-contact-text">
                <p>{title}</p>
                <p className="spn">{details}</p>
              </div>
            </div>
          );
        })}
        </div>
        
      </div>

      <div className=" flex wrap copyright-area">
        <div className=" flex wrap copyrigthcontainer">
          <div className="flex  wrap w70 copyright">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved 
                <NavLink className='decorationNone spn' to="#" target="_blank">
                  {name}
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul className="flex wrap">
                <li>
                  <NavLink className='decorationNone spn' to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink
                  className='decorationNone spn'
                    to="https://www.instagram.com/vishal_singh.bikku/"
                    target="_blank"
                  >
                    Social
                  </NavLink>
                </li>
                <li>
                  <NavLink className='decorationNone spn' to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};