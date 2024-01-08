import React, { useState } from 'react';
import registerImg from "../../assets/pages/register.png";
import { toast } from 'react-toastify';
import Loader from '../helpers/Loader';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const nagivate = useNavigate();

    const registerUser = (e) =>{
        e.preventDefault();
        console.log(email, password, cPassword);
        if(password !== cPassword){
            toast.error("Passwords do not match!");
        }
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setIsLoading(false);
                toast.success("Register Successful!..");
                nagivate("/login");
            })
            .catch((error) => {
                setIsLoading(false);
                toast.error(error.message);
            });
        };
  return (
    <>
        { isLoading && <Loader/> }
        <div
            className="container mt-24 min-h-[80vh] flex justify-center items-center sm:mx-auto">
            <motion.div 
                initial={{ x: -70, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }} className="info w-[27rem] p-2 form  flex justify-center items-center shadow-2xl">
                <div className="form w-full mr-8 my-2">
                    <h2 className="text-orange-500 text-4xl  text-center">Register</h2>

                    <form 
                        className="flex flex-col"
                        onSubmit={registerUser}
                    >
                        <input 
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="block text-xl font-light p-2 m-4 w-full border-2 border-[#777] rounded-md outline-none"
                        />

                        <input 
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="block text-xl font-light p-2 m-4 w-full border-2 border-[#777] rounded-md outline-none"
                        />

                        <input type="password"
                            placeholder="Confirm Password"
                            value={cPassword}
                            onChange={(e) => setCPassword(e.target.value)}
                            required
                            className="block text-xl font-light p-2 m-4 w-full border-2 border-[#777] rounded-md outline-none"
                        />

                        <button type="submit" className="bg-blue-600 p-[5px] text-xl text-white text-center ml-4 mr-[-15px] rounded-md hover:bg-blue-700">
                            Register
                        </button>
                    </form>

                    <span className="flex items-center justify-center gap-1 ">
                        <p className="text-gray-700">Already an account?</p>
                        <Link to="/login">Login</Link>
                    </span>
                </div>
            </motion.div>
            <div className="img lg:flex sm:hidden">
                <motion.img
                    initial={{ y: -70, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    src={registerImg} alt="register" width={450} />
            </div>
        </div>
    </>
    
  )
}

export default Register