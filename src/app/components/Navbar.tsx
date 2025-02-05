import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header className="text-pink-400 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-pink-600 mb-4 md:mb-0">
    
      <span className="ml-3 text-xl">Hashmi Events</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-pink-400">Home</a>
      <a className="mr-5 hover:text-pink-400">About</a>
      <a className="mr-5 hover:text-pink-400">Blog</a>
    </nav>

  </div>
</header>

    </div>
  )
}

export default Navbar