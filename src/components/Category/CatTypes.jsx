
const CatTypes = () => {
    return (
        <>
            <div className="pt-20 mb-16">
                <div className="container">
                    <div className="flex  items-center pb-3  gap-1">
                        <span className="uppercase text-xl sm:text-2xl text-slate-400 font-semibold w-fit font-serif tracking-wide">Clothings</span>
                    </div>
                    <div className=" my-10 grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                        <a href="/Category/Types/choose">
                            <div className="cursor-pointer flex items-start gap-4  pr-4 hover:bg-slate-50 duration-200 ease-in-out ">
                                <img src="/src/assets/image/category/1.png" className="max-md:w-1/5   w-1/2" alt="All Clothes" />
                                <div className="pt-2">
                                    <h2 className="font-bold">all category</h2>
                                    <h2>900 items</h2>
                                </div>
                            </div>
                        </a>
                        <div className="cursor-pointer flex items-start gap-4  pr-4 hover:bg-slate-50 duration-200 ease-in-out ">
                            <img src="/src/assets/image/category/2.png" className="max-md:w-1/5   w-1/2" alt="All Clothes" />
                            <div className="pt-2">
                                <h2 className="font-bold">t-shirt</h2>
                                <h2>10 items</h2>
                            </div>
                        </div>
                        <div className="cursor-pointer flex items-start gap-4  pr-4 hover:bg-slate-50 duration-200 ease-in-out ">
                            <img src="/src/assets/image/category/3.jpeg" className="max-md:w-1/5   w-1/2" alt="All Clothes" />
                            <div className="pt-2">
                                <h2 className="font-bold">Denim</h2>
                                <h2>30 items</h2>
                            </div>
                        </div>
                        <div className="cursor-pointer flex items-start gap-4  pr-4 hover:bg-slate-50 duration-200 ease-in-out ">
                            <img src="/src/assets/image/category/4.png" className="max-md:w-1/5   w-1/2" alt="All Clothes" />
                            <div className="pt-2">
                                <h2 className="font-bold">Skirts</h2>
                                <h2>25 items</h2>
                            </div>
                        </div>
                        <div className="cursor-pointer flex items-start gap-4  pr-4 hover:bg-slate-50 duration-200 ease-in-out ">
                            <img src="/src/assets/image/category/5.png" className="max-md:w-1/5   w-1/2" alt="All Clothes" />
                            <div className="pt-2">
                                <h2 className="font-bold">Shorts</h2>
                                <h2>25 items</h2>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default CatTypes