import React from 'react'
import ChatBox from './ChatBox'

const Comments = () => {
  return (
    <>
        <ChatBox />

        <section className="mt-8 space-y-4">
          <div className="flex space-x-4 items-center">
            <div className="bg-orange-200 text-orange-600 font-bold p-4 rounded-full h-10 w-10 flex items-center justify-center text-lg">
              S
            </div>
            <p className="text-sm text-gray-700">
              enim. Quis varius quam quisque id diam vel quam. Duis at tellus at urna condimentum mattis
            </p>
          </div>
          <div className="flex space-x-4 items-center">
            <div className="bg-orange-200 text-orange-600 font-bold p-4 rounded-full h-10 w-10 flex items-center justify-center text-lg">
              H
            </div>
            <p className="text-sm text-gray-700">
              enim. Quis varius quam quisque id diam vel quam. Duis at tellus at urna condimentum mattis
            </p>
          </div>
        </section>
    </>
  )
}

export default Comments