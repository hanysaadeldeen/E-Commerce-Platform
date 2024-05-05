import { useEffect } from "react";



const ReturnProductPage = () => {
    const ScrollToTop = () => {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return null;
    };
    ScrollToTop()
    return (
        <div className="py-20 text-right">
            <div className="mx-auto w-full  max-w-[750px] max-md:px-4  mt-10 ">
                <h1 className="text-center max-sm:text-2xl text-3xl lg:text-4xl font-bold tracking-wide mb-8">شروط الاسترجاع</h1>
                <p className=" mb-8 text-base font-bold">شروط الاسترجاع؟
                </p>
                <h1 className="mb-2 text-base font-normal">
                    <span className="font-bold">  الامر بسيط </span>  يمكنك التوجة الي اقرب فرع بالقطع المطلوب استرجاعها بشرط ان تكون بنفس الحالة المستلمة عليها, واصل الفاتورة في خلال 14 يوم من تاريخ الشراء
                </h1>
                <h1 className="mb-8 text-base font-normal">
                    بعض المنتجات لا يمكن استبدالها أو إعادتها لأسباب تتعلق بالاستخدام وطبيعة المنتج مثل, الملابس الداخلية والجوارب والعطور.
                </h1>
                <p className=" mb-8 text-base font-bold">شروط الاستبدال؟</p>
                <h1 className="mb-8 text-base font-normal">
                    <span className="font-bold"> الاستبدال عن طريق الفرع </span> : يمكنك التوجة الي اقرب فرع معك اصل الفاتورة والقطع المطلوب استبدالها بشرط ان تكون بحالتها الاصلية المستلمة عليها في خلال 14 يوم من تاريخ الشراء
                </h1>
                <h1 className="mb-8 text-base font-normal">
                    <span className="font-bold"> الاستبدال عن طريق الفرع </span> : يمكنك التحدث الي خدمة العملاء وسيتم المساعدة في عمل الاستبدال
                </h1>
                <h1 className="mb-8 text-base font-normal">
                    <span className="font-bold"> ملحوظة </span> : عند الاستبدال من الموقع يوجد رسوم شحن اضافية تتغير حسب سعر المحافظة المطلوب الوصول لها.
                </h1>
            </div>
        </div>
    )
}

export default ReturnProductPage