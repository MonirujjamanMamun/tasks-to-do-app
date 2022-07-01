import React from 'react';
import { useForm } from 'react-hook-form';

const ToDo = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        console.log(data)
        reset()
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder='Type Your Tasks' className="input input-bordered w-full max-w-xs" />
      </form>
    );
};

export default ToDo;