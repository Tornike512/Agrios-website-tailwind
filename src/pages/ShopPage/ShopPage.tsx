import { ShopPageHeader } from "./ShopPageHeader";
import { ShopSection } from "./ShopSection";

export function ShopPage() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <ShopPageHeader />
      <ShopSection />
    </main>
  );
}

export default ShopPage;
