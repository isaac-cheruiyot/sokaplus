import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdClose, MdMenu, MdSearch } from 'react-icons/md';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation();

  const menuitems = [
    { path: '/', link: 'Home' },
    { path: '/about', link: 'About Us' },
    {
      path: '',
      link: 'Trainings',
      dropdown: [
        { path: '/trainings', link: 'Holiday Trainings' },
        { path: '/trainings', link: 'One On One' },
        { path: '/trainings', link: 'Teams & Games' },
        { path: '/trainings', link: 'About Us' },
      ],
    },
    { path: '/lineup', link: 'Lineup Builder' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < window.innerHeight * 0.4;
      if (isTop !== scrolled) {
        setScrolled(isTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === '/lineup' || scrolled) {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = '';
    }
  }, [location.pathname, scrolled]);

  const handleClick = (link) => {
    setSelectedItem(link);
    setDropdownOpen(false)
  };
  const openDropdown=(link)=>{
    setSelectedItem(link)
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <div className={` bg-white shadow-md w-full md:fixed z-50 top-0 relative  ${location.pathname === '/lineup' || scrolled ? '' : 'shadow-lg md:bg-white'}`}>
      <div className='py-2 px-4 md:px-8 flex justify-between items-center md:grid md:grid-cols-4'>
        <Link to={'/'}>
          <img src="/Images/logo.webp" alt="" className=' md:h-20 h-12' />
        </Link>

        {menuOpen ? <MdClose size={28} onClick={()=>setMenuOpen(false)} className='md:hidden block text-black'/> : <MdMenu size={28} onClick={()=>setMenuOpen(!menuOpen)} className='md:hidden block text-black'/>}

        <div className='hidden md:col-span-2 md:flex justify-between items-center'>
          {menuitems.map((item, index) => (
            <div className='relative'>
            <Link to={item.path}  onClick={item.link ==="Trainings" ?()=>openDropdown(item.link):() => handleClick(item.link)} 
            className={` ${scrolled ? selectedItem === item.link ? 'text-black underline underline-offset-4 decoration-4' : 'text-gray-400'            :  ''} 
            ${ selectedItem === item.link ? 'text-black underline underline-offset-4 decoration-4' : 'text-gray-400'} font-mono text-xl font-semibold`} key={index}>
              <p>{item.link}</p>
              
            </Link>
            {dropdownOpen &&(
              <div className=' absolute w-64 bg-white rounded-md shadow -left-8 px-4 grid  top-16'>
                {item.link === "Trainings" && item.dropdown.map((subitem, index)=>(
                  <Link to={subitem.path} onClick={()=>setDropdownOpen(false)} className='py-2'>{subitem.link}</Link>
                ))}
              </div>
              )}
            </div>
          ))}
        </div>
        
        <div className='hidden md:flex justify-end items-center gap-8'>
          <div className='h-12 w-[2px] bg-gray-200'></div>
          <div className='bg-black p-2 bg-opacity-10 rounded-full'>
          <MdSearch size={24} className='text-black block ' />
          </div>
          <Link to={'/contact'}>
          <button className={`bg-white  py-2 px-8 border-2 border-black text-black  font-mono font-semibold`}>Contact</button>
            </Link>
        </div>
      </div>

      <div className='w-full h-[1px] bg-gray-400 '></div>

      {/* mobile menu */}
      {menuOpen && (
      <div className=' bg-white grid gap-2 px-4 py-4'>
      {menuitems.map((item, index) => (
           <div className=''>
           <Link to={item.path}  onClick={item.link ==="Trainings" ?()=>openDropdown(item.link):() => handleClick(item.link)} 
           className={` ${scrolled ? selectedItem === item.link ? 'text-black underline underline-offset-4 decoration-4' : 'text-gray-400'            :  ''} 
           ${ selectedItem === item.link ? 'text-black underline underline-offset-4 decoration-4' : 'text-gray-400'} font-mono text-xl font-semibold`} key={index}>
             <p>{item.link}</p>
             
           </Link>
           {dropdownOpen &&(
             <div className='  px-4 grid md:hidden '>
               {item.link === "Trainings" && item.dropdown.map((subitem, index)=>(
                 <Link to={subitem.path} onClick={()=>setDropdownOpen(false)} className='py-2'>{subitem.link}</Link>
               ))}
             </div>
             )}
           </div>
      ))}
    </div>
      )}
    </div>
  );
};

export default Navbar;
