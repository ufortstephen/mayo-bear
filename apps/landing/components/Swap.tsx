import * as React from "react";
import { Geom, Montserrat } from '@/styles/fonts'
import Image from "next/image";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from '@rainbow-me/rainbowkit';
import { useAccount } from "wagmi";

type InfoSectionProps = {
  title: string;
  balance: string;
  token: string;
  tokenAlt: string;
  tokenSrc: string;
  maxAction: string;
  showMax: boolean
};



const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  balance,
  token,
  tokenAlt,
  tokenSrc,
  maxAction,
  showMax
}) => (

  <section className="flex flex-col px-3 md:px-6 pt-4 rounded-xl shadow-md shadow-[#00000066] bg-[#101011]  border-t border-[#1C1C1E] h-[110px]">
    <header className="flex gap-3 leading-[90%] items-start">
      <div className="flex flex-col flex-1 gap-0">
        <div className={`${Montserrat.className}  justify-center self-start text-xs text-[#636366]`}>
          {title}
        </div>
        <input type="text" name="" id="" placeholder="0" className={`${Montserrat.className} h-10 bg-transparent border-none outline-none text-[#fff] text-2xl font-[500] w-full`} />
        <div className={`${Montserrat.className}  justify-center self-start text-xs text-[#636366]`}>
          $4,093.06
        </div>
      </div>
      <div className="flex flex-col justify-center py-1.5">
        <div className="cursor-pointer flex gap-1.5 items-center py-1 pr-2 pl-1 text-base text-white whitespace-nowrap bg-black rounded-[9999.064px] w-fit ml-auto">
          <Image
            src="/icons/mayo-avatar.svg"
            width={140}
            height={81}
            alt="Mayo"
            className="w-8 h-8 cursor-pointer"
          />
          <div className="self-stretch my-auto text-sm">{token}</div>
          <Image
            src="/icons/caret-down.svg"
            width={140}
            height={81}
            alt="Mayo"
            className="w-4 h-4 cursor-pointer"
          />
        </div>
        {showMax && <div className="flex gap-2 mt-3 text-xs text-right">
          <div className="text-[#636366]">Balance: {balance}</div>
          <button
            className={`bg-red-500 ${Montserrat.className} bg-clip-text bg-[linear-gradient(180deg,#BF72FA_0%,#BF72FA_100%,#fff_100%)] leading-[22px]`}
            onClick={() => null}
          >
            <Image
              src="/imgs/max.svg"
              width={140}
              height={81}
              alt="Mayo"
              className="w-6"
            />
          </button>

        </div>
        }
      </div>
    </header>
  </section>
);


const SwapLoading: React.FC<any> = ({
  progress,
  handleCLose
}) => {
  const { address, chain, isConnected } = useAccount();
  const [active, setActive] = React.useState(true);
  const [completed, setCompleted] = React.useState(false);

  const { openConnectModal } = useConnectModal();

  const [count, setCount] = React.useState(1);

  const progressWidth = 251.2 - (count / 100) * 100


  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (active) {
      interval = setInterval(() => {
        setCount(prevCount => {
          if (prevCount < 252) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            setActive(false);
            setCompleted(true)
            return prevCount;
          }
        });
      }, 10);
    }

    return () => clearInterval(interval);
  }, [active]);


  return (
    <main className="flex flex-col items-center gap-8 justify-center p-3 bg-[#101011] rounded-3xl border border-10 shadow-md  border-[#1C1C1E] absolute w-full top-0 left-0 h-[100%]">

      <div className="relative w-24 h-24 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-[#1C1C1E] stroke-current"
            strokeWidth="6"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          ></circle>
          <circle
            className="text-[#8000E4]  progress-ring__circle stroke-current"
            strokeWidth="4"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            strokeDasharray="251.2"
            strokeDashoffset={progressWidth}
          ></circle>


        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#8000E4"
          className={`absolute  left-[20%] w-[60px] h-[100%]  transition duration-150 ease-in-out  motion-reduce:transition-none motion-reduce:hover:top ${completed ? 'top-[1%]' : 'top-[100%]'}`}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
      </div>

      <button
        className={`${Geom.className} justify-center items-center  text-md md:text-md leading-5 text-[#FFF8E5]`}
        tabIndex={0}
        onClick={() => null}
      >
        {completed ? 'Exchange Submitted' : 'Confirm Exchange'}
      </button>



      {completed ?
        <div className={`${Montserrat.className} cursor-pointer justify-center text-sm text-[#8000E4]`}>
          View on Explorer
        </div> : <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/icons/mayo-avatar.svg"
              width={140}
              height={81}
              alt="Mayo"
              className="w-6 h-6 cursor-pointer"
            />
            <div className={`${Montserrat.className} cursor-pointer justify-center text-sm text-[#fff]`}>
              200k MAYO
            </div>
          </div>
          <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3994 1.22461L16.0244 6.84959M16.0244 6.84959L10.3994 12.4746M16.0244 6.84959L1.17441 6.84959" stroke="white" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="flex items-center gap-4">
            <Image
              src="/icons/mayo-avatar.svg"
              width={140}
              height={81}
              alt="Mayo"
              className="w-6 h-6 cursor-pointer"
            />
            <div className={`${Montserrat.className} cursor-pointer justify-center text-sm text-[#fff]`}>
              2M MAYO
            </div>
          </div>

        </div>}

      <div className={`${Montserrat.className} cursor-pointer justify-center text-xs text-[#636366]`}>
        {completed ? 'Transaction Pending...' : 'Proceed in your wallet'}
      </div>

      <button className="absolute w-max top-4 right-6" onClick={() => {
        setActive(false),
          handleCLose()
      }}>
        <Image
          src="/icons/close.svg"
          width={140}
          height={81}
          alt="Mayo"
          className="w-3 h-3 cursor-pointer "
        />
      </button>
    </main>
  );
};


const SwapComponent: React.FC = () => {
  const [progressCount, setProgressCount] = React.useState(0)
  const [showoader, setShowLoader] = React.useState(false)
  const { address, chain, isConnected } = useAccount();

  const { openConnectModal } = useConnectModal();

  const handleExchange = () => {

    // setProgressCount(10)

    if (progressCount < 100) {
      const timer = setTimeout(() => {
        setProgressCount(prevCount => prevCount + 20);
      }, 1000);

      // Clean up the timer when the component unmounts or when the effect is re-run
      // return () => clearTimeout(timer);
    }
  }

  return (
    <main className="flex flex-col p-3 bg-[#101011] rounded-3xl border border-10 shadow-md  border-[#1C1C1E] h-max">

      <div className="absolute -bottom-[38px] -right-[15px] z-10 pointer-events-none">
        <Image
          src="/imgs/mayo-5.png"
          width={205}
          height={32}
          alt="Mayo"
        />

      </div>
      <div className="absolute -top-[14px] left-[105px] z-10 pointer-events-none -rotate-[150deg]">
         <Image
          src="/imgs/mayo-1.png"
          width={16}
          height={41}
          alt="Mayo"
        />
      </div>
      <div className="absolute top-[29px] right-[-6px] z-10 pointer-events-none -rotate-[150deg]">
         <Image
          src="/imgs/mayo-1.png"
          width={12}
          height={41}
          alt="Mayo"
        />
      </div>
      <div className="absolute -bottom-[10px] -left-[25px] z-10 pointer-events-none rotate-[45deg]">
        <Image
          src="/imgs/mayo-1.png"
          width={60}
          height={41}
          alt="Mayo"
        />
      </div>
      <div className="absolute -bottom-[22px] left-[25px] z-10 pointer-events-none rotate-[deg]">
        <Image
          src="/imgs/mayo-1.png"
          width={60}
          height={41}
          alt="Mayo"
        />
      </div>
      <div className="absolute -bottom-[3px] left-[80px] z-10 pointer-events-none -rotate-[150deg]">
         <Image
          src="/imgs/mayo-1.png"
          width={22}
          height={41}
          alt="Mayo"
        />
      </div>
      <div className="absolute -top-[20px] right-[-20px] z-10 pointer-events-none -rotate-[10deg]	">
        <Image
          src="/imgs/mayo-2.png"
          width={60}
          height={27}
          alt="Mayo"
        />
      </div>
      <div className="absolute -top-[28px] left-[-20px] pointer-events-none z-[-1]">
        <Image
          src="/imgs/mayo-4.png"
          width={130}
          height={32}
          alt="Mayo"
        />
      </div>

      <header className="flex flex-col justify-center pr-2 pl-3 text-lg leading-5 text-white">
        <div className="flex gap-5 justify-between py-2">
          <h1 className={`${Geom.className} my-auto text-md`}>Migrate to New Contract</h1>
          <Image
            src={'/icons/settings.svg'}
            width={20}
            height={80}
            alt={''}
            className="cursor-pointer hover:opacity-80"
            onClick={() => window.open('https://t.me/+dMO2LwWwM1NmMzk1', '_blank')}

          />
        </div>
      </header>
      <section className="flex flex-col mt-3 gap-[2px] relative">
        <InfoSection
          title="You Send"
          balance="200k"
          token="MAYO"
          tokenAlt="Mayo Token"
          tokenSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/35db83c596a302921ace7fc6c3d8d27064394e50eb10b649853c0a5eb9ddfd1d?apiKey=1dbd2bf751084e5a93c28132f8007052&"
          maxAction="Max"
          showMax={true}
        />
        <div className="absolute top-[43%] left-[45%] z-0 cursor-pointer">
          <Image
            src="/icons/swap.svg"
            width={140}
            height={81}
            alt="Mayo"
            className="w-8 h-8 cursor-pointer"
          />
        </div>
        <InfoSection
          title="You Receive"
          balance=""
          token="MAYO"
          tokenAlt="Mayo Token"
          tokenSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e0b569413fc27b192d727f8cdf2cb0a5695d3e90486203aec466c643ec3c2c17?apiKey=1dbd2bf751084e5a93c28132f8007052&"
          maxAction=""
          showMax={false}
        />
      </section>
      {!isConnected ? <button
        className={`${Geom.className} justify-center items-center p-2.5 mt-3 text-md leading-5 text-[#8000E4] rounded-lg bg-stone-950`}
        tabIndex={0}
        onClick={openConnectModal}
      >
        Connect Wallet
      </button> : <button
        className={`${Geom.className} justify-center items-center p-2.5 py-3 mt-3 text-md md:text-md leading-5 text-[#FFF8E5] rounded-lg bg-[#8000E4]`}
        tabIndex={0}
        onClick={() => {
          setShowLoader(true)
        }}
      >
        Exchange
      </button>}

      {/*  */}
      {showoader && <SwapLoading progress={progressCount} handleCLose={() => setShowLoader(false)} />}
    </main>
  );
};

export default SwapComponent;