export function ContactGrid() {
  return (
    <section className="mb-[120px] px-[40px] w-full max-w-[1200px] grid grid-cols-[1fr_1fr_1fr] gap-x-[30px] text-[#ffffff]">
      <div className="rounded-[10px] px-[50px] py-[40px] bg-[#4BAF47]">
        <h3 className="mb-[10px] font-bold text-[30px]">About</h3>
        <p className="leading-[30px]">
          Lorem ipsum is simply free text used by copytyping refreshing. Neque
          porro est qui.
        </p>
      </div>
      <div className="rounded-[10px] px-[50px] py-[40px] bg-[#C5CE38]">
        <h3 className="mb-[10px] font-bold text-[30px]">Contact</h3>
        <p className="leading-[30px]">
          +1- (246) 333-0079
          <br />
          support@agrios.com
          <br />
          Mon - Fri: 7:00 am - 6:00 pm
        </p>
      </div>
      <div className="rounded-[10px] px-[50px] py-[40px] bg-[#EEC044]">
        <h3 className="mb-[10px] font-bold text-[30px]">Address</h3>
        <p className="leading-[30px]">
          66 Brooklyn Road, Golden Street, New York, United States of America
        </p>
      </div>
    </section>
  );
}

export default ContactGrid;
