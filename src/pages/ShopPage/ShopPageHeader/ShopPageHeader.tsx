import shopHeaderImage from "/src/assets/shop-header.svg";

export function ShopPageHeader() {
  return (
    <figure className="mb-[120px]">
      <img
        className="w-full lg:h-[400px] lg:object-cover"
        src={shopHeaderImage}
        alt="Shop Header Image"
      />
    </figure>
  );
}

export default ShopPageHeader;
