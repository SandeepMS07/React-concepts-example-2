import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './Style.css';

function YupValidation() {

    let schema = yup.object({
        username:yup.string("Must Be String").required("Mandatory"),
        password:yup.string().required(),
        mobile:yup.number().required()
    })
 
    let {register, handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema)
    });
    // console.log(useForm());
    // console.log(register("sandy"));
    console.log(errors);

    let inpObj = 
    {
        type:'text',
        placeholder:"username"
    }

    let sendData = (data) =>
    {
        console.log(data);
    }

return <div className='main-div'>
        <form action="" className='my-form'  onSubmit={handleSubmit(sendData)}>
           
            <div className='form-div'>
            <input className={errors.username?.message?"danger-border":"sucess-border"}
                {...inpObj} {...register("username")} />
            </div>
            <div className='danger'><h6>{errors.username?.message}</h6></div>
        
            <div className='form-div'>
            <input className={errors.password?.message?"danger-border":"sucess-border"}
                 type="password" placeholder='password' {...register("password")} />
            </div>
            <div className='danger'><h6>{errors.password?.message}</h6></div>
 
            <div className='form-div'>
            <input className={errors.mobile?.message?"danger-border":"sucess-border"}
                type="tel" placeholder='mobile' 
                {...register("mobile")} />
            </div>
            <div className='danger'><h6>{errors.mobile?.message}</h6></div>

            <div className='form-div'>
            <button type='submit'>Login</button>
            </div>

        </form>
</div>;
}
export default YupValidation;
