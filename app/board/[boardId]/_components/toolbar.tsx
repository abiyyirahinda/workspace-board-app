
export const Toolbar = () => {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
            <div className="bg-white text-black rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
                <div>
                    Pencil
                </div>
                <div>
                    Sq
                </div>
                <div>
                    Ellipse
                </div>

            </div>
            <div className="bg-white text-black rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
                <div>
                    Undo
                </div>
                <div>
                    Redo
                </div>

            </div>
        </div>
    )
}

export const ToolbarSkeleton = () => {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px] rounded-md shadow-md"/>
            
        
    )
}