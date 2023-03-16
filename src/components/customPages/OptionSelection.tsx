import { ArrayItems } from "@/AIOptions"
import Link from "next/link"

const OptionSelection = () => {
    return (
        <div className="grid gap-5 z-0">
            <div className="text-center py-5">
                <div className="text-2xl font-bold"><span className="text-sm font-light">Welcome to&nbsp;</span>i-GPT AI Hub</div>
            </div>
            <div className="grid grid-cols-2 px-5 md:w-1/2 mx-auto gap-6">
                {
                    ArrayItems.map((val, key)=>{
                        return (
                            <Link href={val.href} key={key} className="duration-300 transition-all hover:bg-white hover:text-slate-900 cursor-pointer select-none border border-current/20 rounded-xl p-7 text-center grid gap-2">
                                <div id={val.id} className="text-sm">{val.name}</div>
                                <div className="text-xs opacity-70">{val.description}</div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OptionSelection