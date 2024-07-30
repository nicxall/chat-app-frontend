import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useSignin from '../hooks/signinHook.jsx'

function Signin() {
    const { username, setUsername, password, setPassword, handleSubmit } = useSignin();
    return (
        <div className="bg-gray-900 rounded-lg py-5">
            <div className="container flex flex-col mx-auto bg-gray-900 rounded-lg pt-12 my-5">
                <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                    <div className="flex items-center justify-center w-full lg:p-12">
                        <div className="flex items-center xl:p-10">
                            <form className="flex flex-col w-full h-full pb-6 text-center bg-gray-900 rounded-3xl" onSubmit={handleSubmit}>
                                <h3 className="mb-3 text-4xl font-extrabold text-white">Sign In</h3>
                                <p className="mb-4 text-gray-400">Enter your username and password</p>
                                <a
                                    
                                    className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300"
                                >
                                    <img
                                        className="h-5 mr-2"
                                        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                                        alt=""
                                    />
                                    Sign in with Google
                                </a>
                                <div className="flex items-center mb-3">
                                    <hr className="h-0 border-b border-solid border-gray-500 grow" />
                                    <p className="mx-4 text-gray-400">or</p>
                                    <hr className="h-0 border-b border-solid border-gray-500 grow" />
                                </div>
                                <label htmlFor="username" className="mb-2 text-sm text-start text-gray-400">
                                    Username*
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    name="username"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-600 mb-7 placeholder:text-gray-400 bg-gray-800 text-white rounded-2xl"
                                />
                                <label htmlFor="password" className="mb-2 text-sm text-start text-gray-400">
                                    Password*
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-gray-600 placeholder:text-gray-400 bg-gray-800 text-white rounded-2xl"
                                />
                                <div className="flex flex-row justify-between mb-8">
                                    <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-5 h-5 bg-white border-2 rounded-sm border-gray-500 peer peer-checked:border-0 peer-checked:bg-blue-500">
                                            <img
                                                src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
                                                alt="tick"
                                            />
                                        </div>
                                        <span className="ml-3 text-sm font-normal text-gray-400">Keep me logged in</span>
                                    </label>
                                    <a  className="mr-4 text-sm font-medium text-blue-500">
                                        Forget password?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 bg-blue-500"
                                >
                                    Sign In
                                </button>
                                <p className="text-sm leading-relaxed text-gray-400">
                                    Not registered yet?
                                    <NavLink to='/signup' className='font-bold text-gray-300'>
                                        Create an Account
                                    </NavLink>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Signin;