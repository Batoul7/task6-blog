import React from 'react'

export default function Pagination({handle,currentPage ,totalPages}) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center 
       px-5 lg:px-28 mt-5 gap-5">
        <button
          onClick={() => handle(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="flex items-center text-mygray font-medium gap-2"
          >
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="stroke-mygray dark:stroke-white">
            <path d="M15.8334 10.4998H4.16675M4.16675 10.4998L10.0001 16.3332M4.16675 10.4998L10.0001 4.6665" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Previous
        </button>
        <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handle(index + 1)}
            className={`w-10 h-10 rounded-lg text-mygray ${currentPage === index + 1 ? 'bg-myback text-[#7F56D9]' : ''} rounded`}
          >
            {index + 1}
          </button>
        ))}
        </div>
        <button
          onClick={() => handle(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="flex items-center text-mygray font-medium gap-2"
        >
          Next
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"
           className="stroke-mygray dark:stroke-white">
          <path d="M4.16663 10.4998H15.8333M15.8333 10.4998L9.99996 4.6665M15.8333 10.4998L9.99996 16.3332" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
  )
}
