
const ProductDescription = (desctiption) => {
    return (
        <div className="mb-5 mt-10 grid lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-1  gap-5 description">
            <div>
                <h1 className="uppercase font-bold mb-2">Main desctiption</h1>
                <p className="text-[#6F6F6F]">
                    {desctiption.desctiption.description}
                </p>
            </div>

            {/* <div>
                <h1 className="uppercase font-bold  mb-2">features:</h1>
                <div className="text-[#6F6F6F] ml-2 ">
                    <h2>Made through sustainable practices</h2>
                    <h2>Five-pocket styling</h2>
                    <h2>Zip fly</h2>
                </div>
            </div>

            <div>
                <h1 className="uppercase font-bold  mb-2">Material & Care</h1>
                <div className="text-[#6F6F6F] ml-2">
                    <h2>Made through sustainable practices </h2>
                    <h2>Five-pocket styling</h2>
                    <h2>Zip fly</h2>
                </div>
            </div>

            <div>
                <h1 className="uppercase font-bold  mb-2">Material & Care</h1>
                <div className="text-[#6F6F6F] ml-2">
                    <h2>Designer Wash Name: Black Eyeliner </h2>
                    <h2> Content: 71% organic cotton, 23% modal, 4% elastomultiester, 2% elastane</h2>
                    <h2>Care: Machine wash </h2>
                    <h2>Imported</h2>
                </div>
            </div> */}

        </div>
    )
}

export default ProductDescription