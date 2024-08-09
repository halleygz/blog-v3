import React from 'react'

const Profile = ({letter}) => {
  return (
    <div className="flex items-center">
          <div className="bg-pink-300 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center">
            {letter}
          </div>
        </div>
  )
}

export default Profile