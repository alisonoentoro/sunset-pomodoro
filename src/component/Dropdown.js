import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

export default function Dropdown({
  options = [],
  value = null,            
  onChange = () => {},     
  placeholder = "Select City",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handler = (event) => {
      if (divEl.current && !divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, false);
    return () => {
      document.removeEventListener("click", handler, true);
    };
  }, []); 
  const handleToggle = () => setIsOpen((s) => !s);

  const handleOptionClick = (opt) => {
    setIsOpen(false);
    onChange(opt); 
  };

  const renderedOptions =
    options.length === 0 ? (
      <div className="p-2 text-gray-500">No options</div>
    ) : (
      options.map((opt) => {
        const selected = value?.value === opt.value;
        return (
          <div
            key={opt.value}
            onClick={() => handleOptionClick(opt)}
            className={`p-2 rounded cursor-pointer hover:bg-sky-100 ${
              selected ? "bg-sky-200" : ""
            }`}
          >
            {opt.label}
          </div>
        );
      })
    );

  return (
    <div ref={divEl} className="relative w-56">
      {/* Header */}
      <Panel
        onClick={handleToggle}
        className="flex justify-between items-center cursor-pointer"
      >
        <span>{value ? value.label : placeholder}</span>
        <GoChevronDown />
      </Panel>

      {/* Menu */}
      {isOpen && (
        <Panel className="absolute top-full left-0 mt-1 w-full z-50 bg-white shadow-lg rounded">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

