import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('sign up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>
          {state === 'sign up' ? 'Create Account' : 'Login'}
        </p>
        <p>Please {state === 'sign up' ? 'sign up' : 'log in'} to book an appointment</p>
        {state === 'sign up' && (
          <div className='w-full'>
            <p>Full Name</p>
            <input
              className='border border-zinc-300 rounded w-full p-2 mt-1'
              type='text'
              onChange={(e) => setName(e.target.value)} // Update with e.target.value
              value={name}
              required
            />
          </div>
        )}
        <div className='w-full'>
          <p>Email</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type='email'
            onChange={(e) => setEmail(e.target.value)} // Update with e.target.value
            value={email}
            required
          />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input
            className='w-full border border-zinc-300 rounded-md p-2 mt-1'
            type='password'
            onChange={(e) => setPassword(e.target.value)} // Update with e.target.value
            value={password}
            required
          />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>
          {state === 'sign up' ? 'Create Account' : 'Login'}
        </button>
        {state === 'sign up' ? (
          <p>
            Already have an account?{' '}
            <span onClick={() => setState('Login')} className='underline cursor-pointer text-primary'>
              Click here
            </span>
          </p>
        ) : (
          <p>
            Don't have an account?{' '}
            <span onClick={() => setState('sign up')} className='text-primary underline cursor-pointer'>
              Sign up here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;