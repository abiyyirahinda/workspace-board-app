import { List } from "./list"
import { NewButton } from "./new-button"

export const Sidebar = () => {
    return (
        <aside className="fixed text-white z-[1] left-0  border-r border-white/20 h-full w-[60px] flex p-3 flex-col gap-y-4">
            <NewButton />
            <List />
        </aside>
    )
}