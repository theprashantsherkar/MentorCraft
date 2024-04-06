/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function SignIn(props) {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html className="h-full bg-white">
          <body className="h-full">
          ```
        */}
        <div id= 'signin' className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className='text-white text-4xl font-bold text-center'>
                Mentor<i>Craft</i>
              </h1>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Log in to your {props.role} account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-indigo-700 placeholder:text-white focus:ring-indigo-700 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6 bg-gray-800"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-indigo-700 placeholder:text-white focus:ring-indigo-700 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6 bg-gray-800"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Log in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-white">
              Not a {props.role}?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign up
              </a>
            </p>
          </div>
        </div>

        
  	        
    
      </>
    )
  }
  