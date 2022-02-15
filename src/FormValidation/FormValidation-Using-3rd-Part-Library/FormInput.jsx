import React from 'react'
import formData from './FormData'

function FormInput(props) {
    let {register, errors} = props
  return  <div>
      {formData.map((input,ind)=>
      {
          return <div key={ind} className='form-div'>
              <input className={errors[input.name]?.message?"danger-border":"sucess-border"}
              {...input} {...register(input.name)} />

              <div className='danger'>{errors[input.name]?.message}</div>

          </div>
      })}
  </div>
}

export default FormInput