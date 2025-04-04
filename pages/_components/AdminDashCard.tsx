import { useRouter } from "next/router"

const AdminDashCard = ({ title, num, detail, target }) => {

    const router = useRouter()
    const onTarget = () => {
        router.push(target)
    }

    return (
        <div className="min-w-[280px] min-h-60 md:w-[350px] md:h-[200px] flex flex-col bg-white border border-gray shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="flex flex-auto flex-col gap-5 justify-center items-center p-4 md:p-5">
                <p className="text-2xl font-bold text-black dark:text-neutral-300">
                    {title}
                </p>
                <p className="text-xl text-black dark:text-neutral-300">
                    {num}
                </p>
                <p className="cursor-pointer text-xl text-black dark:text-neutral-300" onClick={() => onTarget()}>
                    {detail}
                </p>
            </div>
        </div>
    )
}

export default AdminDashCard;