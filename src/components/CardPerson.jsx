/* eslint-disable react/prop-types */
const CardPerson = ({ src, title, mount }) => {
  return (
    <article className="w-[155px] p-2 bg-cardBackground rounded-xl border-slate-300 border hover:scale-105">
      <img
        src={src}
        alt="#"
        className="w-14 h-14 mb-8 object-cover rounded-full"
      />
      <h1 className="font-semibold">{title}</h1>
      <h2 className="text-slate-400">${mount}</h2>
    </article>
  );
};

export default CardPerson;
