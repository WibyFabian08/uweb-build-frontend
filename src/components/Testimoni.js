const Testimoni = () => {
  return (
    <div className="flex items-center px-20 py-12 bg-gray-100 shadow-md px rounded-xl md:px-44">
      <div className="hidden md:block">
        <img
          src="/images/blank.png"
          className="object-cover rounded-full "
          alt="client"
        />
      </div>
      <div className="ml-3 text-sm text-justify">
        <span className="font-italic">"</span>Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quasi a unde sapiente porro iste nobis
        blanditiis aliquid. Dolorum sint cupiditate animi reiciendis harum
        explicabo quam, temporibus doloremque, sequi, molestias alias?{" "}
        <span className="font-italic">"</span>
        <p className="mt-3 text-xs">William, CEO</p>
      </div>
    </div>
  );
};

export default Testimoni;
