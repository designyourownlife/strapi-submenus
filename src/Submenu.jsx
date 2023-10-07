import { useRef } from 'react';
import { useGlobalContext } from './context';

import sublinks from './data';

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  const submenuContainer = useRef(null);
  let timeoutId = null;

  const handleMouseLeave = (e) => {
    const { clientX, clientY } = e;
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    timeoutId = null;
    if (clientX <= left || clientX >= right || clientY >= bottom) {
      timeoutId = setTimeout(() => {
        setPageId(null);
      }, 600);
    }
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
  };

  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu hide-submenu'}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon} {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
