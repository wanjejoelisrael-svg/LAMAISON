import React from "react"

interface DropdownProps {
  label: string
  options: string[]
  value: string
  isOpen: boolean
  onToggle: () => void
  onSelect: (option: string) => void
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  isOpen,
  onToggle,
  onSelect
}) => {
      return (
    <div className="relative w-full">
     <label className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>

            <button
        type="button"
        onClick={onToggle}
        className="flex justify-between items-center w-full bg-white border border-gray-300 rounded-xl px-4 py-3 shadow-sm hover:border-amber-500 transition"
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {value || "Choisir"}
        </span>
                <span className="text-gray-500">▼</span>
      </button>
            {isOpen && (
        <ul className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">

         {options.map((option) => (
            <li
              key={option}
              onClick={() => onSelect(option)}
              className="px-4 py-3 hover:bg-amber-100 cursor-pointer transition"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown








