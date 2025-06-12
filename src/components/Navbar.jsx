import bench from './bench_press.svg';

export default function Navbar() {
    return (
        <>
            <div className="flex flex-wrap items-center mx-auto justify-between sm:p-4 md:p-6 xl:p-6">
                <p className="text-2xl font-bold">
                    Stay Hard
                </p>
                <img src={bench} alt="Bench Press Icon" className="h-10 w-10" />
            </div>
        </>
    )
}