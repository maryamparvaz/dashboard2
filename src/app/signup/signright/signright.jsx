'use client'
import React, { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const InnerForm = (props) => {
        const { touched, errors, isSubmitting } = props;
        const [sign, setSign] = useState(true);
        const [valE, setValE] = useState();
        const [valP, setValP] = useState();
        const [valn, setValn] = useState();
        const d = useRef();

        const router = useRouter();

        function apiuse() {
                const newTask = {
                        password: valP,
                        email: valE,
                        name: valn,
                };
                if (valE !== undefined && valE.search(/@/) > 0) {
                        fetch('https://65f3fa83105614e654a19675.mockapi.io/users', {
                                method: 'POST',
                                headers: { 'content-type': 'application/json' },
                                body: JSON.stringify(newTask)
                        }).then(res => {
                                if (res.ok) {
                                        return res.json();
                                }
                        }).then(task => {
                        }).catch(error => {
                        })
                        setSign(false)
                        router.back()
                } else {
                        setSign(true)
                }
                d.current.style.display = 'flex'
                
        }
        return (
                <Form >
                        <div className='w-full flex flex-wrap *:w-full'>

                                {sign ? <div ref={d} className='hidden w-[400px] rounded-[20px] bg-red-200 text-red-800 p-3 '>Your account was not created</div> : <div ref={d} className='hidden w-[400px] rounded-[20px] bg-green-200 text-green-800 p-3 '>Your account has been created</div>}
                                <label htmlFor="text">User Name</label>
                                <input onChange={(e) => setValn(e.target.value)} value={valn} className='w-[400px] bg-inherit p-2 text-[18px] my-2 border border-gray-500 rounded-[5px] outline-bn3' type="text" name="text" />
                                <label htmlFor="email">Email</label>
                                <input onChange={(e) => setValE(e.target.value)} value={valE} className='w-[400px] bg-inherit p-2 text-[18px] my-2 border border-gray-500 rounded-[5px] outline-bn3' type="email" name="email" />
                                {touched.email && errors.email && <div>{errors.email}</div>}
                                <label htmlFor="password">Password</label>
                                <input onChange={(e) => setValP(e.target.value)} value={valP} className='w-[400px] bg-inherit p-2 text-[18px] my-2 border border-gray-500 rounded-[5px] outline-bn3' type="password" name="password" />
                                {touched.password && errors.password && <div>{errors.password}</div>}
                                <button onClick={apiuse} className="w-[400px] p-3 bg-violet-500 my-3 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" type="submit" disabled={isSubmitting}>
                                        Sign Up
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
function Signright() {
        return (
                <div className='w-full lg:w-[40%] flex flex-wrap content-center *:my-1 bg-rit p-5 pl-7'>
                        <h1 className='w-full text-[25px] text-slate-300'>Adventure starts here!</h1>
                        <p className='w-full text-[16px] text-slate-300 mb-3'>Make your app management easy and fun!</p>
                        <MyForm message='' />
                        <div className='w-[400px] flex '><span className='text-slate-300'>Already have an account? </span><Link href={'./..'}><span className='text-bn3 ml-1 cursor-pointer'> Sign in instead</span></Link></div>
                </div>)

}
function isValidEmail(email) {
        const emailSchema = Yup.string().email();
        return emailSchema.isValidSync(email);
}
export default Signright;
//.........................................................................
