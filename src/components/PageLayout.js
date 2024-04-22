import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const PageLayout = ({ children }) => {
  
  return (
    <>
    <Navbar />

    <main>
        {children}
    </main>

    <Footer/>
    </>
  )
}

export default PageLayout

  // const [isOpen, setIsOpen] = useState(false);
  // const mainContentRef = React.useRef(null);


  // React.useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (isOpen && mainContentRef.current && !mainContentRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //     setIsOpen(false);
  //   };

  //   document.addEventListener('click', handleClickOutside);
  //   return () => document.removeEventListener('click', handleClickOutside);
  // }, [isOpen, mainContentRef]);