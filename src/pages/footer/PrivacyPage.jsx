import { useEffect } from "react";

const PrivacyPage = () => {
    const ScrollToTop = () => {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return null;
    };
    ScrollToTop()
    return (
        <div className="py-20">
            <div className="mx-auto w-full  max-w-[750px] max-md:px-4 mt-10">
                <h1 className="text-center max-sm:text-2xl text-3xl lg:text-4xl font-bold tracking-wide mb-8">Privacy-Policy</h1>
                <p className=" mb-8 text-base font-normal">Should you require information or help, please contact us by phone and we will be happy to assist you.
                </p>
                <h1 className="uppercase text-center font-bold text-lg mb-8">WELCOME TO Canva Store PRIVACY POLICY</h1>
                <ul className="ml-10 mb-8">
                    <li className="before:absolute relative mb-1 before:bg-black before:w-1.5 before:h-1.5 before:top-1/2 before:-translate-y-1/2 before:-left-4 before:rounded-full">
                        Complimentary ground shipping within 1 to 5 business days
                    </li>
                    <li className="before:absolute relative before:bg-black before:w-1.5 before:h-1.5 before:top-1/2 before:-translate-y-1/2 before:-left-4 before:rounded-full">
                        THE TYPE OF PERSONAL INFORMATION WE COLLECT
                    </li>
                </ul>
                <h1 className="mb-8 text-base font-bold">
                    canva store accepts the following payment methods:
                </h1>
                <ul className="ml-10 mb-8">
                    <li className="before:absolute relative mb-1 before:bg-black before:w-1.5 before:h-1.5 before:top-1/2 before:-translate-y-1/2 before:-left-4 before:rounded-full">
                        Credit Card: Visa, MasterCard
                    </li>
                    <li className="before:absolute relative before:bg-black before:w-1.5 before:h-1.5 before:top-2  before:-left-4 before:rounded-full">
                        Canva store features a Fast Checkout option, allowing you to securely save your credit card details so that you do not have to re-enter them for future purchases.
                    </li>
                </ul>
                <h1 className="uppercase text-center font-bold text-lg mb-8">HOW WE COLLECT PERSONAL INFORMATION</h1>
                <p>Items returned within 14 days of their original Invoice date in same as new condition will be eligible for a full refund or store credit. Refunds will be charged back to the original form of payment used for purchase. Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.</p>
            </div>

        </div>
    )
}

export default PrivacyPage