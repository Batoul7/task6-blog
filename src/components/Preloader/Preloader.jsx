import React from 'react'

export default function Preloader() {
  return (
    <div className="flex items-center justify-center h-screen bg-myprimary">
    <div className="relative w-24 h-24">
      <div
        className="absolute w-full h-full border-4 border-transparent border-t-white rounded-full animate-swirl"
      ></div>
      <div
        className="absolute w-2/3 h-2/3 top-1/6 left-1/6 border-4 border-transparent border-t-white rounded-full animate-swirl"
        style={{ animationDuration: '1s' }}
      ></div>
    </div>
  </div>
  )
}
