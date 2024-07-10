import * as React from "react";
import { Geom, Montserrat } from '@/styles/fonts'
import Image from "next/image";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from '@rainbow-me/rainbowkit';
import { useAccount, useBalance, useChainId, useContractRead, useReadContract, useReadContracts, useWriteContract } from "wagmi";
import { formatCurrency, compactNumberFormatter } from "@/utils/helpers";
import { mayoV2Abi, theMigrationAbi } from "@/utils/abi/Mayov2";
import { wagmiConfig } from "@/utils/config";
import { CONTRACT_ADDRESS_V2 } from "@/consts";
import { MayoV1Abi } from "@/utils/abi/MayoV1";
import { ethers } from "ethers";
import { toast } from "react-toastify";

type InfoSectionProps = {
  title: string;
  balance: number;
  token: string;
  tokenAlt: string;
  tokenSrc: string;
  maxAction: string;
  showMax: boolean;
  onAmountChange: any;
  toAmount?: any
  ratio: number
};



const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  balance,
  token,
  tokenAlt,
  tokenSrc,
  maxAction,
  toAmount,
  showMax,
  onAmountChange,
  ratio
}) => {

  const [amount, setAmount] = React.useState(0)

  return (
    <section className="flex flex-col px-3 md:px-6 pt-4 rounded-xl shadow-md shadow-[#00000066] bg-[#101011]  border-t border-[#1C1C1E] h-[125px]">
      <header className="flex gap-3 leading-[90%] items-start">
        <div className="flex flex-col flex-1 gap-0">
          <div className={`${Montserrat.className}  justify-center self-start text-xs text-[#636366] mb-3`}>
            {title}
          </div>

          {showMax ?
            <input type="text" name="" onChange={(e: any) => { setAmount(e.target.value), onAmountChange(e.target.value) }}
              id="" placeholder="0" value={amount}
              className={`${Montserrat.className} h-10 bg-transparent border-none outline-none text-[#fff] text-2xl font-[500] w-full`} />
            :
            <input type="text" name="" disabled onChange={(e: any) => { setAmount(e.target.value), onAmountChange(e.target.value) }} id="" placeholder="0" value={toAmount} className={`${Montserrat.className} h-10 bg-transparent border-none outline-none text-[#fff] text-2xl font-[500] w-full`} />}
          <div className={`${Montserrat.className}  justify-center self-start text-xs text-[#636366] mt-1`}>

            {amount ? formatCurrency((amount * 0.0002), 'usd') : toAmount ? formatCurrency(((toAmount / ratio) * 0.0002), 'usd') : formatCurrency((amount), 'usd')}
          </div>
        </div>
        <div className="flex flex-col justify-center py-1.5">
          <div className="cursor-pointer flex gap-1.5 items-center py-1 pr-2 pl-1 text-base text-white whitespace-nowrap bg-black rounded-[9999.064px] w-fit ml-auto">
            <Image
              src={tokenSrc}
              width={140}
              height={81}
              alt="Mayo"
              className="hide-events w-8 h-8 cursor-pointer"
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
          {showMax && <div className="flex gap-2 mt-3 text-xs text-right justify-end">
            <div className="text-[#636366]">Balance: {compactNumberFormatter(Number(balance))}</div>
            <button
              className={`bg-red-500 ${Montserrat.className} bg-clip-text bg-[linear-gradient(180deg,#BF72FA_0%,#BF72FA_100%,#fff_100%)] leading-[22px]`}
              onClick={() => { setAmount(balance), onAmountChange(balance) }}
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
  )
}


const SwapLoading: React.FC<any> = ({
  progress,
  handleCLose,
  fromAmount,
  toAmount,
  hash,
  migrationRatio,
  oldToken
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

  const handleViewTransaction = () => {
    if (hash) {
      window.open(
        `https://sepolia.etherscan.io/tx/${hash}`,
        '_blank'
      )
    }
  }


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
        <div onClick={handleViewTransaction} className={`${Montserrat.className} cursor-pointer justify-center text-sm text-[#8000E4]`}>
          View on Explorer
        </div> : <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/icons/mayo-avatar.svg"
              width={140}
              height={81}
              alt="Mayo"
              className="hide-events w-6 h-6 cursor-pointer"
            />
            <div className={`${Montserrat.className} cursor-pointer justify-center text-sm text-[#fff]`}>
              {fromAmount} {oldToken?.symbol}
            </div>
          </div>
          <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3994 1.22461L16.0244 6.84959M16.0244 6.84959L10.3994 12.4746M16.0244 6.84959L1.17441 6.84959" stroke="white" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="flex items-center gap-4">
            <Image
              src="/icons/mayo-avatar-new.svg"
              width={140}
              height={81}
              alt="Mayo"
              className="hide-events w-6 h-6 cursor-pointer"
            />
            <div className={`${Montserrat.className} cursor-pointer justify-center text-sm text-[#fff]`}>
              {toAmount * Number(migrationRatio)} MAYO
            </div>
          </div>

        </div>}

      <button onClick={handleViewTransaction} className={`${Montserrat.className} cursor-pointer justify-center text-xs text-[#636366]`}>
        {completed ? 'Transaction Pending...' : 'Proceed in your wallet'}
      </button>

      <button className="absolute w-max top-4 right-6 cursor-pointer" onClick={() => {
        setActive(false),
          handleCLose()
      }}>
        <Image
          src="/icons/close.svg"
          width={140}
          height={81}
          alt="Mayo"
          className="hide-events w-3 h-3 cursor-pointer "
        />
      </button>
    </main>
  );
};


const SwapComponent: React.FC = () => {
  const [progressCount, setProgressCount] = React.useState(0)
  const [showoader, setShowLoader] = React.useState(false)
  const [isWalletConnected, setIsConnected] = React.useState(false)
  const [isExchangeBtnDisabled, setIsExchangeBtnDisabled] = React.useState(false)
  const [buttonMessage, setButtonMessage] = React.useState('Exchange')
  const [hash, setHash] = React.useState('')
  const [amount, setAmount] = React.useState(0)
  const [toAmount, setToAmount] = React.useState(0)
  const { address, chain, isConnected } = useAccount();
  const chainId = useChainId();
  const { openConnectModal } = useConnectModal();



  const {
    data,
    error,
    isPending
  } = useReadContracts({
    contracts: [{
      address: "0xB06965Ad2724536aF15193dDA4324cEeDd098474",
      functionName: 'isPaused',
      abi: theMigrationAbi
    }, {
      address: "0xB06965Ad2724536aF15193dDA4324cEeDd098474",
      functionName: 'isBlackListed',
      abi: theMigrationAbi,
      args: [address]
    }, {
      address: "0xB06965Ad2724536aF15193dDA4324cEeDd098474",
      functionName: 'newToken',
      abi: theMigrationAbi,
    },
    {
      address: "0xB06965Ad2724536aF15193dDA4324cEeDd098474",
      functionName: 'oldToken',
      abi: theMigrationAbi
    },
    {
      address: "0xB06965Ad2724536aF15193dDA4324cEeDd098474",
      functionName: 'newTokenRatio',
      abi: theMigrationAbi
    },
    {
      address: "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8",
      functionName: 'allowance',
      abi: MayoV1Abi,
      args: [address, "0xB06965Ad2724536aF15193dDA4324cEeDd098474"]
    },
    {
      address: CONTRACT_ADDRESS_V2,
      functionName: 'balanceOf',
      abi: mayoV2Abi,
      args: [address]
    }
    ]
  })

  

  const [isPaused, isBlackListed, newToken, oldToken, newTokenRatio, allowance, balanceOf] = data || []  
  
  const isMigrationPaused = isPaused?.result
  const isUserBlacklisted = isBlackListed?.result
  const oldTokenAddress = newToken?.result
  const newTokenAddress = oldToken?.result
  const migrationRatio = newTokenRatio?.result
  const migrationAllowance = allowance?.result
  const newTokenBalance = balanceOf?.result  

  const { data: oldTokenDetails } = useBalance({
    address: address,
    token: '0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8',
    unit: 'ether',
  })



  const { writeContractAsync } = useWriteContract()


  const handleTokenMigration = async () => {

    if (Number(migrationAllowance) < (Number(toAmount))) {
      setIsExchangeBtnDisabled(true)
      setButtonMessage('Approve Spending Cap')
      // const ethValue = ethers.formatEther(String(migrationAllowance));
      // const ethValue = ethers.formatEther(String(migrationAllowance));
      // console.log(ethValue);
      try {
        const data = await writeContractAsync({
          address: '0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8', // contract token address
          functionName: 'approve',
          abi: MayoV1Abi,
          args: [
            '0xB06965Ad2724536aF15193dDA4324cEeDd098474', // contract wallet address
            Number(toAmount) * (Math.pow(10, 6))
          ]
        })

        if (data) {
          setIsExchangeBtnDisabled(false)
          setButtonMessage('Exchange')
          // setTimeout(async() => {
          //   try {
          //     const data = await writeContractAsync({
          //       address: '0xB06965Ad2724536aF15193dDA4324cEeDd098474', // contract token address
          //       functionName: 'migrateToMayoV2',
          //       abi: theMigrationAbi,
          //       args: [toAmount * (Math.pow(10, 6))]
          //     })

          //     if (data) {
          //       setHash(data)
          //       setShowLoader(true)
          //     }
          //   } catch (error) {
          //     handleTransactionError(error)
          //   }
          // }, 4000);
        }
      } catch (error: any) {
        handleTransactionError(error)
      }


    }
    else {

      setIsExchangeBtnDisabled(true)
      try {
        const data = await writeContractAsync({
          address: '0xB06965Ad2724536aF15193dDA4324cEeDd098474', // contract token address
          functionName: 'migrateToMayoV2',
          abi: theMigrationAbi,
          args: [toAmount * (Math.pow(10, 6))]
        })

        if (data) {
          setHash(data)
          setShowLoader(true)
        }
      } catch (error) {
        handleTransactionError(error)
      }
    }

  }

  const handleTransactionError = (error: any) => {
    if (error && error?.message) {
      let errorMsg = ''
      if (error.message.includes("User denied transaction")) {
        errorMsg = "User denied transaction request.";
      } else {
        errorMsg = (`An error occurred while processing the transaction:, ${error.message}`);
      }

      if (errorMsg) {
        toast.success(errorMsg, {
          autoClose: 5000,
          hideProgressBar: true,
          progress: undefined,
        })
      }
      setIsExchangeBtnDisabled(false)
      setButtonMessage('Exchange')
    }
  }

  const onClose = () => {
    setButtonMessage('Exchange')
    setAmount(0)
    setToAmount(0)
    setShowLoader(false)
  }  

  React.useEffect(() => {

    if (!isConnected) {
      setIsExchangeBtnDisabled(true)
      return
    }
    else {
      if (!Number(oldTokenDetails?.formatted)) {
        setButtonMessage('Insufficient balance')
        setIsExchangeBtnDisabled(true)
        return
      } else {
        setButtonMessage('Exchamge')
      }

      if (isMigrationPaused) {
        setIsExchangeBtnDisabled(true)
        setButtonMessage('Migration is currently paused')
        return
      }
      if (isUserBlacklisted) {
        setIsExchangeBtnDisabled(true)
        setButtonMessage('Wallet is blicklisted')
        return
      }
      if (Number(oldTokenDetails?.formatted) <= 0 || (Number(oldTokenDetails?.formatted) && Number(toAmount) > Number(oldTokenDetails?.formatted))) {
        setIsExchangeBtnDisabled(true)
        setButtonMessage('Insufficient token balance')
        return
      }
      if (Number(oldTokenDetails?.formatted) && Number(toAmount) < Number(oldTokenDetails?.formatted)) {
        setIsExchangeBtnDisabled(false)
        setButtonMessage('Exchange')
      }

      if (Number(toAmount)) {
        if (Number(toAmount) > Number(oldTokenDetails?.formatted)) {
          setIsExchangeBtnDisabled(true)
        }
        else {
          setIsExchangeBtnDisabled(false)
        }
      }
      else {
        setIsExchangeBtnDisabled(true)
      }

    }
  }, [isConnected, amount, toAmount, address])
  React.useEffect(() => {

    if (!isConnected) {
      setToAmount(0)
      setAmount(0)
    }

  }, [isConnected])  

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

      <header className="flex flex-col justify-center pr-2 pl-3 text-lg leading-5 text-white mb-3">
        <div className="flex gap-5 justify-between py-2">
          <h1 className={`${Geom.className} my-auto text-lg`}>Migrate to New Contract</h1>
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
          balance={Number(oldTokenDetails?.formatted) || 0}
          token={oldTokenDetails?.symbol || "MAYO"}
          tokenAlt="Mayo Token"
          tokenSrc="/icons/mayo-avatar.svg"
          maxAction="Max"
          showMax={true}
          ratio={1}
          onAmountChange={(amount: any) => {
            setAmount(amount)
            setToAmount(amount)
          }}
        />
        <div className="absolute top-[43%] left-[45%] z-0 cursor-pointer">
          <Image
            src="/icons/swap.svg"
            width={140}
            height={81}
            alt="Mayo"
            className="hide-events  w-8 h-8 cursor-pointer"
          />
        </div>
        <InfoSection
          title="You Receive"
          balance={0}
          toAmount={toAmount * Number(migrationRatio) || 0}
          token="MAYO"
          tokenAlt="Mayo Token"
          tokenSrc="/icons/mayo-avatar-new.svg"
          maxAction=""
          ratio={Number(migrationRatio) || 0}
          showMax={false}
          onAmountChange={(amount: any) => setToAmount(amount)}
        />
      </section>
      {
        isConnected ? <>
          <button
            className={`${Geom.className} disabled:opacity-[0.4] justify-center items-center p-2.5 py-3 mt-4 text-md md:text-md leading-5 text-[#FFF8E5] rounded-lg bg-[#8000E4]`}
            tabIndex={0}
            disabled={isExchangeBtnDisabled}
            onClick={handleTokenMigration}
          >
            {buttonMessage}
          </button>
        </> : <>
          <button
            className={`${Geom.className} justify-center items-center p-2.5 mt-4 text-md leading-5 text-[#8000E4] rounded-lg bg-stone-950`}
            tabIndex={0}
            onClick={openConnectModal}
          >
            Connect Wallet
          </button>
        </>
      }


      {/*  */}
      {showoader && <SwapLoading progress={progressCount} hash={hash} handleCLose={onClose} fromAmount={toAmount} toAmount={toAmount} migrationRatio={migrationRatio} oldToken={oldTokenDetails} />}
    </main>
  );
};

export default SwapComponent;