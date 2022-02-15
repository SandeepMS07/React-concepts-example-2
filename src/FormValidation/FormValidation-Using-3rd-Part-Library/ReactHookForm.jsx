import React from 'react'; 
import { useForm } from 'react-hook-form';
import './Style.css'


function ReactHookForm() {

    let {register, handleSubmit,formState:{errors}}=useForm();
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
                {...inpObj} {...register("username",{required:"*Username is mandatory",
                                minLength:{value:6,message:"*Minimum 6 characters"},
                                maxLength:{value:10,message:"*Maximum 10 characters"},
                                pattern:{value:/^[A-Za-z]+$/,message:"*Only Alphabets"}})} />
            </div>
            <div className='danger'><h6>{errors.username?.message}</h6></div>
        
            <div className='form-div'>
            <input className={errors.password?.message?"danger-border":"sucess-border"}
                 type="password" placeholder='password' {...register("password",{required:"*Password is mandatory"})} />
            </div>
            <div className='danger'><h6>{errors.password?.message}</h6></div>
 
            <div className='form-div'>
            <input className={errors.mobile?.message?"danger-border":"sucess-border"}
                type="tel" placeholder='mobile' 
                {...register("mobile",{required:"*Mobile is mandatory",
                pattern:{value:/^[6-9][0-9]{9}$/g,message:"*Enter valid indian mobile number"}})} />
            </div>
            <div className='danger'><h6>{errors.mobile?.message}</h6></div>

            <div className='form-div'>
            <button type='submit'>Login</button>
            </div>

            

        </form>
</div>;
}

export default ReactHookForm;
