import Pizza from "./Pizza";
import pizzaData from "../data/pizzaData";

export default function Menu() {
  return (
    <>
      <h2 className="inline-block text-[2.4rem] mb-10 border-y-2 border-solid border-black">
        Our Menu
      </h2>
      <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 2xl:grid-cols-3 pl-10">
        {pizzaData.map((pizza) => (
          <Pizza {...pizza} key={pizza.name} />
        ))}
      </div>
    </>
  );
}
