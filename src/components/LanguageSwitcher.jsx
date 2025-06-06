import { useState, useEffect, useRef} from 'react';

const LanguageSwitcher = () => {
  const [locale, setLocale]= useState("en");

  const onOptionSelect  = (newLocale) => {
    setLocale(newLocale);
    window.location.reload();
  };
  const options = ['pl', 'en']

 const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
     localStorage.setItem('locale',option);
     window.location.reload();
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    setLocale(localStorage.getItem('locale') || 'en');
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="dropdownToggle">
        {locale.toUpperCase()} <i className='arrow bx bx-chevron-down'></i>
      </button>
      {isOpen && (
        <ul className="dropdownMenu">
          {options.map((option) => (
            <li
              key={option}
              className="dropdownMenuItem"
              onClick={() => handleOptionClick(option)}
            >
              {option.toUpperCase()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;