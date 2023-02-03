import React from 'react'

const FormField = ({labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>

        <label 
        htmlFor={name}
        className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
          type='button'
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
          >
            Surprise Me
          </button>
        )}
      </div>

      <input type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      className="px-2 py-2 border bg-[#ECECF1] text-sm rounded-lg w-full  text-gray-900 focus:ring-[#4649ff] focus:border-[#4649ff] focus:shadow-[#4649ff] mb-1"



      />
    </div>
  )
}

export default FormField