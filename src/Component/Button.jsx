function Button({ title }) {
  return (
    <div className='bg-sky-400 px-4 py-2 rounded-full cursor-pointer'>
      <h6 className='text-sm font-medium text-slate-50  hover:text-black text-center'>
        {title}
      </h6>
    </div>
  );
}

export default Button;
