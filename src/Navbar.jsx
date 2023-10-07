import { FaBars } from 'react-icons/fa';
import NavLinks from './NavLinks';

import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    // console.log(e.target);
    let timeoutId = null;
    if (!e.target.classList.contains('nav-link')) {
      // if (timeoutId) {
      //   clearTimeout(timeoutId);
      // }
      // timeoutId = setTimeout(() => setPageId(null), 500);
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <h3 className='logo'>strapi</h3>
        <button className='toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};
export default Navbar;
