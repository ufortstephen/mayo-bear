import { CONTRACT_ADDRESS } from '@/consts'
import Image from 'next/image'
import { toast } from 'react-toastify'

export default function MayoBtn() {
    return (
        <div
            onClick={() => {
                navigator.clipboard.writeText(CONTRACT_ADDRESS)
                toast.success('Copied to clipboard', {
                    autoClose: 1000,
                    hideProgressBar: true,
                    progress: undefined,
                })
            }}
            className="relative w-full h-[109px] flex items-center justify-center"
        >
            <div className="cursor-pointer z-10 align-middle px-[24px] py-[12px] md:text-center justify-start items-center h-[50px] rounded-[60px] bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] flex gap-[10px]">
                <div className="hidden md:flex text-[16px] font-[400] text-white">
                    {CONTRACT_ADDRESS}
                </div>
                <div className="md:hidden text-[16px] font-[400] text-white w-full">
                    {CONTRACT_ADDRESS.slice(0, CONTRACT_ADDRESS.length / 2)}
                    <br className="md:hidden" />
                    {CONTRACT_ADDRESS.slice(CONTRACT_ADDRESS.length / 2)}
                </div>
                <div>
                    <Image
                        src="/icons/copy.svg"
                        width={24}
                        height={24}
                        alt="Mayo"
                    />
                </div>
            </div>
            <div className="absolute top-[2px] left-0 z-0 pointer-events-none">
                <Image
                    src="/imgs/mayo-4.png"
                    width={127}
                    height={32}
                    alt="Mayo"
                />
            </div>
            <div className="absolute bottom-[20px] left-[-0px] z-10 pointer-events-none">
                <Image
                    src="/imgs/mayo-3.png"
                    width={45}
                    height={37}
                    alt="Mayo"
                />
            </div>
            <div className="absolute bottom-[1px] left-[32px] z-10 pointer-events-none">
                <Image
                    src="/imgs/mayo-1.png"
                    width={55}
                    height={41}
                    alt="Mayo"
                />
            </div>
            <div className="absolute bottom-0 left-[92px] md:left-[142px] z-10 pointer-events-none">
                <Image
                    src="/imgs/mayo-5.png"
                    width={205}
                    height={32}
                    alt="Mayo"
                />
            </div>
            <div className="absolute right-0 top-[15px] z-10 pointer-events-none">
                <Image
                    src="/imgs/mayo-2.png"
                    width={45}
                    height={27}
                    alt="Mayo"
                />
            </div>
            <div className="z-20"></div>
        </div>
    )
}
