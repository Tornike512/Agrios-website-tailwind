import useGetProducts from "src/hooks/useGetProducts";

export function ShopSection() {
  const products = useGetProducts();

  return (
    <section className="w-full max-w-[1200px] mb-[120px] flex px-[40px]">
      <form className="mr-[30px]">
        <input
          className="bg-[#EEC044] mb-[30px] text-[18px] text-[#ffffff] font-bold placeholder-[#F3F3F3] p-[30px] rounded-[10px]"
          placeholder="Search products."
        />
        <div className="p-[30px] border-[2px] border-solid border-[#8E8E8E] rounded-[10px]">
          <label className="text-[20px] font-bold">Price</label>
          <input
            className="w-full h-[5px] appearance-none bg-[#EEC044] mb-[10px]"
            type="range"
          />
          <span className="flex items-center justify-between">
            <p className="text-[#878680] text-[12px]">$20 - $100</p>
            <button className="text-[14px] text-[#ffffff] font-bold rounded-[10px] py-[10px] px-[15px] bg-[#4BAF47] hover:bg-[#54c950]">
              Apply
            </button>
          </span>
        </div>
      </form>
      <div className="w-full">
        <section className="flex items-center justify-between mb-[50px]">
          <p className="text-[#878680] text-[18px]">
            Showing 1–9 of 10 results
          </p>
          <select className="border p-[30px] rounded-[10px] border-solid border-[#cecece] text-[#878680]">
            <option value="Default sorting">Default sorting</option>
            <option value="Price (High to Low)">Price (High to Low)</option>
            <option value="Price (Low to High)">Price (Low to High)</option>
          </select>
        </section>
        <section className="grid grid-cols-[1fr_1fr_1fr] gap-x-[30px] gap-y-[30px]">
          {products.products.map((product) => {
            return (
              <div key={product.id}>
                <figure className="w-[270px] h-fit bg-[#EFEFEF] rounded-[10px]">
                  <img
                    className="cursor-pointer"
                    src={product.image}
                    alt="Plant Image"
                  />
                </figure>
                <h3 className="font-bold text-[22px]">{product.title}</h3>
                <p className="text-[16px] text-[#4BAF47] font-bold">
                  {product.price}
                </p>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
}

export default ShopSection;
