export default function Modal({
    id,
    children,
    position = 'center',
}: {
    id: string
    children: React.ReactNode
    position?: 'bottom' | 'center'
}) {
    return (
        <dialog id={id} className="modal z-2">
            <div
                className={`relative px-0 py-1 rounded-none bg-transparent sm:max-w-fit sm:max-h-fit modal-box ${
                    position == 'bottom' && 'mt-auto md:my-auto'
                }`}
            >
                <form method="dialog">
                    <button className="absolute color-white btn btn-sm btn-circle btn-ghost right-2 top-9">
                        ✕
                    </button>
                </form>
                {children}
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}
