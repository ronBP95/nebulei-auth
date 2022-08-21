import React from 'react'

function Register() {
  return (
    <>
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src="https://storage.googleapis.com/nebulei-main-images/gifs/nebulei-gif-8" alt="Nebulei-Login-GIF" className="w-full h-full object-cover"></img>
      </div>
      <div className="bg-white w-full md:max-w-md lg:max-w-full md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100">
          <div className="flex">
            <img src="https://storage.googleapis.com/nebulei-main-images/icons/nebulei-svg-logo" height="100" width="100" alt="Nebulei-Logo" ></img>
          </div>
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Make your account
          </h1>
          <form className="mt-6" action="#" method="POST">
            <div>
              <label className="block text-gray-700">
                Full Name
              </label>
              <input type="name" name="name" id="name" placeholder="Enter Full Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none" autofocus autocomplete required>

              </input>
            </div>
            <div className='mt-5'>
              <label className="block text-gray-700">
                Specialty
              </label>
              <input type="occupation" name="occupation" id="occupation" placeholder="Enter Specialty" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none" autofocus autocomplete required>

              </input>
            </div>
            <div className='mt-4'>
              <label className="block text-gray-700">
                Email Address
              </label>
              <input type="email" name="email" id="email" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none" autofocus autocomplete required>

              </input>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">
                Password
              </label>
              <input type="password" name="password" id="password" placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none" required>

              </input>
            </div>
            <button type="submit" className="w-full block bg-purple-500 hover:bg-purple-400 focus:bg-purple-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">
              Join
            </button>
          </form>
          <hr className="my-6 border-gray-300 w-full"></hr>
          <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div className="flex items-center justify-center">
              
              <span className="ml-4">Join in with Google</span>
            </div>
          </button>
          <p className="mt-8">Already have an account? <a href="/login" className="text-purple-500 hover:text-purple-700 font-semibold">Login</a></p>
          <p className="text-sm text-gray-500 mt-12 nebulei-font">&copy; 2022 Nebulei - All Rights Reserved.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Register