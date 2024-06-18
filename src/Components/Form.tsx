import 'bootstrap/dist/css/bootstrap.css';
import {  } from 'react';
import {  FieldValues, useForm } from 'react-hook-form'


type FormFields = {
    name: string,
    age : number
}

export const  Form =  () => {

const { register , handleSubmit, formState : {errors}}  = useForm<FormFields>()
const onSubmit = (data : FieldValues) => console.log(data)
   
    return (
       <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input id = 'name' {...register('name', {minLength : 5, required : true, })} className = 'form-control' type='text'/>
            </div>
            {errors.name?.type == 'required'&& <p className='text-danger'>This field is required</p>}
            {errors.name?.type == 'minLength'&& <p>The name must be atleast  character</p>}
            <div className="mb-3">
                <label htmlFor='age' className="form-label">Age</label>
                <input  id='age' {...register('age')} type="number" className="form-control" />
            </div>
            <button className="btn btn-primary" type='submit'>Submit</button>


       </form>
    );
    }