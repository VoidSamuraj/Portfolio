import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, asPath } = router;
  const [selectedLocale, setSelectedLocale] = useState(locale);

  const onOptionSelect  = (newLocale) => {
    setSelectedLocale(newLocale);
    router.push(asPath, asPath, { locale: newLocale });
    window.location.reload();
  };
  const options = ['pl', 'en']

 const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="dropdownToggle">
        {selectedLocale.toUpperCase()} <i className='arrow bx bx-chevron-down'></i>
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