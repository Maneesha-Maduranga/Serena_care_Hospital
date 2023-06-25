function Button({ children, onClick }) {
  return (
    <div
      className='bg-sky-400 px-4 py-2 rounded-full cursor-pointer'
      onClick={onClick}
    >
      <h6 className='text-sm font-medium text-slate-50  hover:text-black text-center'>
        {children}
      </h6>
    </div>
  );
}

export default Button;
