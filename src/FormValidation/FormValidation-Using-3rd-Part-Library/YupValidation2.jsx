import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver} from '@hookform/resolvers/yup'
import FormInput from './FormInput'
import { schema } from './YupSchema'
import './Style.css';


function YupValidation2() {

  let {register, handleSubmit, formState:{errors}} = useForm(
      {
          resolver:yupResolver(schema)
      }
  )
      console.log(errors);


  let sendData = (data) =>
  {
      console.log(data);
  }
  return <div className='main-div'>
        <form action="" onSubmit={handleSubmit(sendData)} className='my-form'>
            <FormInput register = {register} errors ={errors}/>
            <div className='form-div'>
                <button type='submit'>Login</button>
            </div>
        </form>
  </div>
}

export default YupValidation2