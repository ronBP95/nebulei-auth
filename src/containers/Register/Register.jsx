import React from 'react'
import { Link } from 'react-router-dom'


function Register() {
  return (
    <>
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className='nebulei-font'>
          <img className="mx-auto h-12 w-auto" src="https://storage.googleapis.com/nebulei-main-images/icons/nebulei-svg-logo" alt="Nebulei Logo"></img>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
            Join Nebulei
          </h2>
          <p className='mt-2 text-gray-600 text-center'>
            or
          </p>
          <p className="mt-2 text-center text-sm font-medium text-purple-600 hover:text-purple-500">
            <Link to="/login">
              Login into your account
            </Link>
          </p>
        </div>
    
        <form action="#" method="POST">
          <div className="shadow sm:overflow-hidden">
              <div className="px-9 py-8 bg-white space-y-6">

                <div className="col-span-6">
                    <label for="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input type="text" name="username" id="username" autocomplete="username" required className="mt-1 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm">

                    </input>
                </div>

                <div className="col-span-6">
                    <label for="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="name" id="name" autocomplete="name" required className="mt-1 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm">

                    </input>
                </div>

                <div className="col-span-6">
                    <label for="email" className="block text-sm font-medium text-gray-700">Email address</label>
                    <input type="text" name="email" id="email" autocomplete="email" required className="mt-1 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm">

                    </input>
                </div>

                <div class="col-span-6">
                    <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" name="password" id="password" required className="mt-1 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm">

                    </input>
                </div>
                
                <div>
                  <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <svg className="h-5 w-5 text-purple-500 group-hover:text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    Join
                  </button>
                </div>
              
                <div className="flex flex-row items-center justify-center">
                    <hr className="w-28 border-gray-300 block"></hr>
                    <label className="mx-2 text-sm text-gray-500">Or register with</label>
                    <hr className="w-28 border-gray-300 block"></hr>
                </div>
                <div className="flex items-center justify-center">
                  <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 text-sm font-medium rounded-md px-4 py-3 border border-gray-300">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                    </span>
                    Join with Google
                  </button>
                </div>
              
              </div>
          </div>
        </form>
        
      </div>
    </section>
    </>
  )
}

export default Register