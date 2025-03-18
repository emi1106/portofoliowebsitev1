
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const SwitchTheme = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <label className="switch text-base relative inline-block w-16 h-[2.2em] rounded-[30px] shadow-lg">
      <input 
        type="checkbox"
        className="opacity-0 w-0 h-0"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <span className="slider absolute cursor-pointer inset-0 bg-[#2a2a2a] transition-all duration-400 rounded-[30px] overflow-hidden before:absolute before:content-[''] before:h-[1.2em] before:w-[1.2em] before:rounded-[20px] before:left-2 before:bottom-2 before:transition-all before:duration-400 before:ease-[cubic-bezier(0.81,-0.04,0.38,1.5)] before:shadow-[inset_8px_-4px_0px_0px_#fff] data-[checked=true]:bg-[#00a6ff] data-[checked=true]:before:translate-x-[1.8em] data-[checked=true]:before:shadow-[inset_15px_-4px_0px_15px_#ffcf48]" data-checked={theme === 'dark'}>
        <div className="star star_1 bg-white rounded-full absolute w-[5px] h-[5px] transition-all duration-400 left-10 top-2 opacity-100 data-[checked=true]:opacity-0" data-checked={theme === 'dark'} />
        <div className="star star_2 bg-white rounded-full absolute w-[5px] h-[5px] transition-all duration-400 left-[2.2em] top-[1.2em] opacity-100 data-[checked=true]:opacity-0" data-checked={theme === 'dark'} />
        <div className="star star_3 bg-white rounded-full absolute w-[5px] h-[5px] transition-all duration-400 left-[3em] top-[0.9em] opacity-100 data-[checked=true]:opacity-0" data-checked={theme === 'dark'} />
        <svg viewBox="0 0 16 16" className="cloud w-[3.5em] absolute -bottom-[1.4em] -left-[1.1em] opacity-0 transition-all duration-400 data-[checked=true]:opacity-100" data-checked={theme === 'dark'}>
          <path transform="matrix(.77976 0 0 .78395-299.99-418.63)" fill="#fff" d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925" />
        </svg>
      </span>
    </label>
  );
}

export default SwitchTheme;
