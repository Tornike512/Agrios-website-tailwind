export function ShopSection() {
  return (
    <section className="mb-[120px]">
      <div>
        <section>
          <p>Showing 1–9 of 10 results</p>
          <select>
            <option value="Default sorting">Default sorting</option>
            <option value="Price (High to Low)">Price (High to Low)</option>
            <option value="Price (Low to High)">Price (Low to High)</option>
          </select>
        </section>
        <section>
          <div>
            <img src="" alt="Plant Image" />
            <h3>Apple</h3>
            <p>$50.00</p>
          </div>
          <div>
            <img src="" alt="Plant Image" />
            <h3>Apple</h3>
            <p>$50.00</p>
          </div>
          <div>
            <img src="" alt="Plant Image" />
            <h3>Apple</h3>
            <p>$50.00</p>
          </div>
          <div>
            <img src="" alt="Plant Image" />
            <h3>Apple</h3>
            <p>$50.00</p>
          </div>
          <div>
            <img src="" alt="Plant Image" />
            <h3>Apple</h3>
            <p>$50.00</p>
          </div>
          <div>
            <img src="" alt="Plant Image" />
            <h3>Apple</h3>
            <p>$50.00</p>
          </div>
          <div>
            <img src="" alt="Plant Image" />
            <h3>Apple</h3>
            <p>$50.00</p>
          </div>
          <div>
            <img src="" alt="Plant Image" />
            <h3>Apple</h3>
            <p>$50.00</p>
          </div>
          <div>
            <img src="" alt="Plant Image" />
            <h3>Apple</h3>
            <p>$50.00</p>
          </div>
        </section>
      </div>
      <form>
        <input type="text" placeholder="Search products." />
        <div>
          <strong>Price</strong>
          <input type="range" />
          <span>
            <p>$20 - $100</p>
            <button>Apply</button>
          </span>
        </div>
      </form>
    </section>
  );
}

export default ShopSection;
