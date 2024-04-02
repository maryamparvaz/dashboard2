'use client'
import React, { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import useStore from './../../zustand/store';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const InnerForm = (props) => {
        const { touched, errors, isSubmitting } = props;
        const [data, setData] = useState([]);
        const [valE, setValE] = useState();
        const [valP, setValP] = useState();
        const [chec, setChec] = useState();
        const router = useRouter();
        const { updateUser1, updateUser3 } = useStore();
        const ref1 = useStore((state) => state.ref1)
        useEffect(() => {
                fetch('https://65f3fa83105614e654a19675.mockapi.io/users', {
                        method: 'GET',
                        headers: { 'content-type': 'application/json' },
                }).then(res => {
                        if (res.ok) {
                                return res.json();
                        }
                }).then(tasks => setData(tasks))
                        .catch(error => {
                        })
                        updateUser1(chec)
        }, [chec]);
        function check() {
                data && data.map((val) => {
                        if ((val.email == valE)) {
                                if (valP == val.password) {
                                        router.push('/adminPannel')
                                        setChec(true)
                                }
                        } else {
                                setChec(false)
                        }
                })
                ref1.style.display = 'flex'
                updateUser3(valE)
        }
        return (
                <Form >
                        <div className='w-full flex flex-wrap *:w-full'>
                                <label htmlFor="email">Email</label>
                                <input onChange={(e) => setValE(e.target.value)} value={valE} className='w-[400px] bg-inherit p-2 text-[18px] my-2 border border-gray-500 rounded-[5px] outline-bn3' type="email" name="email" />
                                {touched.email && errors.email && <div>{errors.email}</div>}
                                <label htmlFor="password">Password</label>
                                <input onChange={(e) => setValP(e.target.value)} value={valP} className='w-[400px] bg-inherit p-2 text-[18px] my-2 border border-gray-500 rounded-[5px] outline-bn3' type="password" name="password" />
                                {touched.password && errors.password && <div>{errors.password}</div>}
                                <button onClick={check} className="w-[400px] p-3 bg-violet-500 my-3 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" type="submit" disabled={isSubmitting}>
                                        Submit
                                </button>
                        </div>
                </Form>
        );
};

const MyForm = withFormik({
        mapPropsToValues: (props) => ({
                email: props.initialEmail || '',
                password: '',
        }),
        validate: (values) => {
                let errors = {};
                if (!values.email) {
                        errors.email = 'Required';
                } else if (!isValidEmail(values.email)) {
                        errors.email = 'Invalid email address';
                }
                return errors;
        },
        handleSubmit: (values) => { },
})(InnerForm);
function Basic() {
        const c =useRef(null)
        const chec = useStore((state) => state.chec)
        const { updateUser2 } = useStore();
        useEffect(() => {
                updateUser2(c.current)
        },[])
        return(
        <div className='w-full lg:w-[40%] flex flex-wrap content-center *:my-1 bg-rit p-5 pl-7'>
                        {chec ? <div ref={c} className='hidden w-[400px] rounded-[20px] bg-green-200 text-green-800 p-3 '>Log In Successful</div> : <div ref={c} className='hidden w-[400px] rounded-[20px] bg-red-200 text-red-800 p-3 '>Log In Failed</div> }
                <h1 className='w-full text-[25px] text-slate-300'>Welcome to Admin-Pannel!</h1>
                <p className='w-full text-[16px] text-slate-300 mb-3'>Please sign-in to your account and start the adventure</p>
                <div className='w-[400px] rounded-[20px] bg-bn2 text-bn3 p-3 '>Email: admin@materio.com / Pass: admin</div>
                        <MyForm message='' />
                        <div className='w-[400px] flex '><span className='text-slate-300'>New on our platform? </span><Link href={'./signup'}><span className='text-bn3 ml-1 cursor-pointer'> Create an account</span></Link></div>
        </div>)
        
}
function isValidEmail(email) {
        const emailSchema = Yup.string().email();
        return emailSchema.isValidSync(email);
}
export default Basic;
