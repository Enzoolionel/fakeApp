import imgProfileUser from "../../public/pexels-olly-3763188.jpg";
import userOne from "../../public/userOne.png";
import userTwo from "../../public/userTwo.jpg";
import userTree from "../../public/userTree.jpg";
import userFour from "../../public/userFour.jpg";
import Button from "./Button.jsx";
import CardPerson from "./CardPerson.jsx";
import TransactionCard from "./TransactionCard.jsx";

const Home = () => {
  return (
    <section>
      <header className="w-screen h-24 flex justify-between items-center px-3">
        <a href="/profile">
          <img
            src={imgProfileUser}
            alt="#"
            className="w-20 h-20 object-cover rounded-full"
          />
        </a>
        <button className="py-6 px-7 text-slate-700 font-semibold bg-slate-200 rounded-full">
          October
        </button>
      </header>
      <article className="w-[95%] m-auto mt-4 px-5 py-5 rounded-2xl bg-cardMountBackground flex justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg text-slate-400 font-semibold">
            Total Account Balance
          </h2>
          <h1 className="text-5xl font-semibold">$25.8K</h1>
        </div>
        <a
          href="/convert"
          className="w-14 h-14 bg-black rounded-full flex justify-center items-center text-slate-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
            />
          </svg>
        </a>
      </article>
      <article className="h-20 w-[95%] gap-2 m-auto flex items-center text-slate-700">
        <Button className="bg-[#D2DDCC]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
            />
          </svg>
          <h2>Sent</h2>
        </Button>
        <Button className="bg-[#EFF0AC]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
            />
          </svg>

          <h2>Sent</h2>
        </Button>
        <Button className="bg-[#D7E1ED]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>

          <h2>Sent</h2>
        </Button>
      </article>
      <article className="w-[95%] mb-3 m-auto py-5 px-3 rounded-2xl masBack">
        <h1 className="mb-3 font-semibold text-xl text-slate-700">
          Recipients
        </h1>
        <div className=" flex flex-wrap gap-2 justify-between items-center">
          <CardPerson src={userOne} title="Jane Cooper" mount="185" />
          <CardPerson src={userTwo} title="Marvin McKinney" mount="762" />
          <CardPerson src={userTree} title="Dianne Russell" mount="57" />
          <CardPerson src={userFour} title="Cody Fisher" mount="248" />
        </div>
      </article>
      <TransactionCard />
    </section>
  );
};

export default Home;
