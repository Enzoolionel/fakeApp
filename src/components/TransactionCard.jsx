import figmaLogo from "../../public/figmaLogo.png";

const TransactionCard = () => {
  return (
    <article className="masBack w-[95%] rounded-2xl m-auto mb-5 flex flex-col gap-3 p-3">
      <h1 className="font-semibold text-xl">Transactions</h1>
      <div className="bg-cardBackground border border-slate-300 rounded-2xl p-3 flex justify-between items-center">
        <img
          src={figmaLogo}
          alt="#"
          className="h-14 w-14 object-cover bg-slate-200 rounded-full p-2"
        />
        <div className="mr-14">
          <h1 className="font-semibold">Figma</h1>
          <h2 className="text-slate-400">02 Jul, 2024</h2>
        </div>
        <h2>$24.50</h2>
      </div>
    </article>
  );
};

export default TransactionCard;
