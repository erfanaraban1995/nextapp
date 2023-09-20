"use client";
import {useState} from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import {Yup} from '@/lib/schema'

export default function ComplexForm() {
  
  const schema = Yup.object().shape({
    users: Yup.array().of(Yup.object().shape({
      name: Yup.string().required('الزامی است'),
      family: Yup.string().required('الزامی است')
    }))
  })
  
  const validateMyForm = (payload) => {
    console.log(payload)
  }
  return <main>
    <Formik initialValues={{ users: [{ name: "", family: "" }] }} validationSchema={schema}>
      {({values, errors, touched}) => (
        <Form className='bg-gray-100 w-full md:w-1/2 lg:w-1/3 p-5'>
          <FieldArray name="users"
            render={(array) => (
              <div className='grid gap-4'>
                {values.users.map((user, index) => (
                  <div key={index}>
                    <div className='flex flex-col'>
                      <label htmlFor="username" className='mb-2'>نام</label>
                      <Field
                        className='border border-gray-300 outline-0 rounded-lg p-2'
                        name={`users.${index}.name`}
                      />
                      {`${touched}.${index}.name` && <div className='text-red-500'>
                        <ErrorMessage
                          name={`users.${index}.name`}
                        />
                      </div>}
                 
                    </div>
                    <div className='flex flex-col'>
                      <label htmlFor="username" className='mb-2'>نام خانوادگی</label>
                      <Field
                        className='border border-gray-300 outline-0 rounded-lg p-2'
                        name={`users.${index}.family`}
                      />
                      {`${touched}.${index}.family` && <div className='text-red-500'>
                        <ErrorMessage
                          name={`users.${index}.family`}
                        />
                      </div>}
                    </div>
                  </div>
                ))}
                <div className='w-full'>
                  <button
                    className='border border-blue-500 hover:bg-blue-500 hover:text-white rounded-lg p-2 w-1/4'
                    onClick={() =>
                      array.insert(values.users.length, {
                        name: "",
                        family: ""
                      })
                    }
                  >افزودن</button>
                </div>
                <div className='w-full'>
                  <button
                    type='submit'
                    className='border border-green-500 hover:bg-green-500 hover:text-white rounded-lg p-2 w-full'
                    onClick={() => validateMyForm(values)}
                  >ارسال</button>
                </div>
              </div>
            )}
          />
          
        </Form>
      )}
    </Formik>
  </main>
}
