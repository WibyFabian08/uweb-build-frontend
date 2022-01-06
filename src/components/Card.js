const HeroCard = ({ icon, title, text }) => {
  return (
    <div className="w-3/4 px-8 pt-5 pb-8 mx-5 mb-10 transition-all duration-300 shadow-lg md:w-1/4 hero-card">
      {icon}
      <h2 className="mt-3 text-lg font-bold">{title}</h2>
      <p className="mt-3 text-xs">{text}</p>
    </div>
  );
};

export default HeroCard;
