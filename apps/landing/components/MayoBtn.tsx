import Image from 'next/image'
import { toast } from 'react-toastify'

const CONTRACT_ADDRESS = '0x4D5892624FeD9074AC8e54aC9E332c9F0a79d330'

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
            className="relative w-full h-[109px] flex items-center"
        >
            <div className="cursor-pointer z-10 align-middle px-[24px] py-[12px] md:text-center justify-start items-center h-[50px] rounded-[60px] bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] flex gap-[10px]">
                <div className="hidden md:flex text-[16px] font-[400] text-white">
                    {CONTRACT_ADDRESS}
                </div>
                <div className="md:hidden text-[16px] font-[400] text-white w-full">
                    0x4D5892624FeD9074AC8
                    <br className="md:hidden" />
                    e54aC9E332c9F0a79d330
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
            <div className="absolute top-0 z-0 pointer-events-none">
                <Image
                    src="/imgs/mayo-4.png"
                    width={127}
                    height={32}
                    alt="Mayo"
                />
            </div>
            <div className="absolute bottom-[20px] left-[-10px] z-10 pointer-events-none">
                <Image
                    src="/imgs/mayo-3.png"
                    width={35}
                    height={37}
                    alt="Mayo"
                />
            </div>
            <div className="absolute bottom-[12px] left-[32px] z-10 pointer-events-none">
                <Image
                    src="/imgs/mayo-1.png"
                    width={37}
                    height={41}
                    alt="Mayo"
                />
            </div>
            <div className="absolute bottom-0 left-[132px] z-10 pointer-events-none">
                <Image
                    src="/imgs/mayo-5.png"
                    width={205}
                    height={32}
                    alt="Mayo"
                />
            </div>
            <div className="absolute right-0 top-[5px] z-10 pointer-events-none">
                <Image
                    src="/imgs/mayo-2.png"
                    width={25}
                    height={27}
                    alt="Mayo"
                />
            </div>
            <div className="z-20"></div>
        </div>
    )
}
