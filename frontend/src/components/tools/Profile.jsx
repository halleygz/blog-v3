import React from 'react'
import { Link } from 'react-router-dom'

const Profile = ({letter}) => {
  return (
    <div className="flex items-center">
          <div className="bg-pink-300 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center">
            <Link to="/">

            {letter}
            </Link>
          </div>
        </div>
  )
}

export default Profile