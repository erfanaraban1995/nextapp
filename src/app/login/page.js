"use client"
import {useState} from "react";
import { Formik, Form, Field } from 'formik';
import {isEmpty, errorInputClass} from "@/lib/utils";
import {Yup} from '@/lib/schema'

const SignupSchema = Yup.object().shape({
  username: Yup.mixed().maxLength('حداکثر 10 کاراکتر').minimumLength('حداقل سه کاراکتر').required('اجباری است'),
  password: Yup.string()
    .required('الزامی است')
});
export default function Login() {
  const [loading, setLoading] = useState(false)
  const submitForm = (validateForm, payload) => {
    return validateForm().then((proceed) => {
      if (isEmpty(proceed)) {
        console.log(payload)
        console.log('send')
      }
    })
  }
  return <main className='w-full px-5 flex justify-center mt-16'>
    <div className='grid grid-cols-1 gap-5 bg-gray-100 w-full md:w-1/2 lg:w-1/3 p-5'>
      <Formik initialValues={{password: '', username: ''}} validationSchema={SignupSchema}>
        {({ errors, touched, values, validateForm }) => (
          <Form className='grid gap-4'>
            <div className='flex flex-col'>
              <label htmlFor="username" className='mb-2'>نام کاربری</label>
              <Field
                className={errorInputClass(errors.username)}
                name="username"
                />
              {errors.username && touched.username && <div className='text-red-500'>{errors.username}</div>}
            </div>
            <div className='flex flex-col'>
              <label htmlFor="password" className='mb-2'>کلمه عبور</label>
              <Field
                className={errorInputClass(errors.password)}
                name="password"
                type='password'
              />
              {errors.password && touched.password && <div className='text-red-500'>{errors.password}</div>}
            </div>
            <div className='w-full'>
              <button
                disabled={loading}
                className='border border-blue-500 hover:bg-blue-500 hover:text-white rounded-lg p-2 w-full'
                type='submit'
                onClick={() => submitForm(validateForm, values)}
                >
                {loading ? 'در حال ورود ...' : 'ورود'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </main>
}
