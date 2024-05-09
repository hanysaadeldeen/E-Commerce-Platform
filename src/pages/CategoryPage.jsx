import { Link } from "react-router-dom";
import CategoryHook from "../Hook/Category/CategoryHook"
import { SpinnerDiamond } from 'spinners-react';
const CategoryPage = () => {

    const [category, error, isloading] = CategoryHook()




    return (
        <>
            <div className="pt-20 Collection">
                <div className="container">
                </div>
            </div>
            <div className="container pb-10 ">
                {
                    error === null &&
                    <div className="py-8  max-sm:block   grid  grid-cols-4   max-lg:grid-cols-3    gap-2">
                        {
                            !isloading && category.map((item) => {
                                return (
                                    <Link to={`/Category/${item._id}`} key={item._id}>
                                        <div className="my-1 font-bold  relative cursor-pointer max-sm:hover:bg-slate-50 max-sm:p-3 ">

                                            <img src={item.image} className=" max-sm:hidden" alt="" />
                                            <div className="max-sm:relative w-full absolute bottom-2 left-2">
                                                <div className="relative w-fit">
                                                    <h1 className="text-4xl max-md:text-3xl max-sm:text-4xl max-sm:text-black  text-white">{item.name}</h1>
                                                    <div className="sm:hidden absolute top-[-10px] right-[-80px]   py-1 px-2"  >
                                                        <span className="text-red-600 text-sm uppercase ">{Math.floor(Math.random() * 11) + 1} added</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" max-sm:hidden absolute top-2 left-2    py-1 px-2"  >
                                                <span className="text-red-600 text-sm uppercase ">{Math.floor(Math.random() * 11) + 1} added</span>
                                            </div>
                                        </div>
                                    </Link>)
                            })
                        }
                    </div>
                }
                {
                    error === null && (
                        isloading &&
                        <div className="flex items-center justify-center w-full">
                            <SpinnerDiamond speed={150} secondaryColor={"#ddd"} />
                        </div>
                    )}
                {
                    (
                        !isloading && category.length === 0 &&
                        <div className="flex items-center justify-center w-full">
                            <h1 className="text-2xl my-10">{"you don't  have any categories"}</h1>
                        </div>
                    )}
            </div>
        </>
    )
}

export default CategoryPage