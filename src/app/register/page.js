'use client';
import { useFormik } from "formik";
import { Yup } from '@/lib/schema'
import MultiSelect from "@/app/login/multiSelect";
import { useRouter } from 'next/navigation'

const SignupSchema = Yup.object().shape({
  firstName: Yup.mixed().maxLength('حداکثر 10 کاراکتر').minimumLength('حداقل سه کاراکتر').required('اجباری است'),
  lastName: Yup.string()
    .required('الزامی است'),
  evidences: Yup.array().min(1, 'حداقل یک ایتم انتخاب شود')
});
export default function Register () {
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      evidences: [],
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      const response = await fetch('http://localhost:3000/api/login')
    },
  })
  const evidences = [
    {text: 'دیپلم', value: 1},
    {text: 'لیسانس', value: 2},
    {text: 'فوق لیسانس', value: 3},
    {text: 'دکتری', value: 4}
  ]
  const {errors, touched} = formik
  const addValueMulti = (item) => {
    formik.setFieldValue('evidences', [...formik.values.evidences, item], true)
  }
  return <main className='w-full px-5 flex justify-center mt-16'>
    
    <form onSubmit={formik.handleSubmit} className='grid grid-cols-1 gap-5 bg-gray-100 w-full md:w-1/2 lg:w-1/3 p-5'>
      <div className='flex flex-col'>
        <label htmlFor="firstName" className='mb-2'>نام کاربری</label>
        <input
          className='border border-gray-300 outline-0 rounded-lg p-2'
          name="firstName"
          id='firstName'
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {errors.firstName && touched.firstName && <div className='text-red-500'>{errors.firstName}</div>}
      </div>
      <div className='flex flex-col'>
        <label htmlFor="firstName" className='mb-2'>نام خانوادگی</label>
        <input
          className='border border-gray-300 outline-0 rounded-lg p-2'
          name="lastName"
          id='lastName'
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {errors.lastName && touched.lastName && <div className='text-red-500'>{errors.lastName}</div>}
      </div>
      
      <div className='flex flex-col'>
        <label htmlFor="firstName" className='mb-2'>مدارک</label>
        <MultiSelect
          id='evidences'
          name="evidences"
          items={evidences}
          value={formik.values.evidences}
          addvalue={addValueMulti}
        />
        {errors.evidences && touched.evidences && <div className='text-red-500'>{errors.evidences}</div>}
      </div>
      
      <div className='flex flex-col'>
        <button
          className='border border-blue-500 hover:bg-blue-500 hover:text-white rounded-lg p-2 w-full'
          type='submit'
        >
          ثبت نام
        </button>
      </div>
    </form>
  </main>
}
