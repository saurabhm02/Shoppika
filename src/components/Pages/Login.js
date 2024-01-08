import React, { useState } from 'react';
import loginImg from "../../assets/pages/login.png";
import { FaGoogle } from "react-icons/fa";
import { auth } from '../../firebase/config';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { selectPreviousUrl } from '../redux/cartSlice';
import { useSelector } from 'react-redux';
import Loader from '../helpers/Loader';
import { motion } from 'framer-motion';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const previousUrl = useSelector(selectPreviousUrl);
    const navigate = useNavigate();

    const redirectUser = () => {
        if(previousUrl.includes("cart")){
            return navigate("/cart");
        }
        navigate("/");
    };

    const loginUser = (e) =>{
        e.preventDefault();
        console.log(email, password);
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) =>{
            toast.success("Login Successful!..", {
                position: "top-center",            
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            setIsLoading(false);
            navigate("/");
        })
        .catch((err) =>{
            setIsLoading(false);
            toast.error(err.message);
        });
    };


    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () =>{
        signInWithPopup(auth, provider)
      .then((result) =>{
         console.log(result);
         toast.success("Login Successful!..");
         redirectUser();
       }).catch((err) =>{
         toast.error(err.message);
      } );
    };



  return (
    <>
        { isLoading && <Loader/> }
        <div className="container mt-24 min-h-[80vh] flex justify-center items-center sm:mx-auto">
            <div className="img lg:flex sm:hidden">
                <motion.img
                    initial={{ y: -70, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                 src={loginImg} className="" width={500} alt="" />
            </div>
            <motion.div 
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }} 
                className="info w-[27rem] p-2 form  flex justify-center items-center shadow-2xl"
            >
                <div className="w-full mr-8 my-2">
                    <h2 className="text-orange-500 text-4xl  text-center">Login</h2>

                    <form 
                        className="flex flex-col"
                        onSubmit={loginUser}
                    >
                        <input 
                            type="email" 
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block text-xl font-light p-2 m-4 w-full border-2 border-[#777] rounded-md outline-none"
                            required
                        />

                        <input 
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block text-lg font-light p-2 m-4 w-full border-2 border-[#777] rounded-md outline-none"
                            required
                        />
                        <button type="submit" className="bg-blue-600 p-[5px] text-xl text-white text-center ml-4 mr-[-15px] rounded-md hover:bg-blue-700">
                            Login
                        </button>

                         <p className="text-center text-xl text-gray-600 m-2">-- or --</p>
                    </form>

                    <button className="google bg-orange-600 flex items-center justify-center gap-2 text-xl p-[5px] text-white m-2 rounded-md w-full ml-4 hover:bg-orange-700 "
                        onClick={signInWithGoogle}
                    >
                        <FaGoogle color="#fff" /> Login With Google
                    </button>
                    <span className="flex items-center justify-center text-lg gap-1 m-2">
                        <p className="text-gray-600">Don't have an account?</p>
                        <Link to="/register">Register</Link>
                    </span>

                </div>
            </motion.div>
        
        </div>
    </>
  )
}

export default Login