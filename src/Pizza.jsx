import ProtoTypes from "prop-types";
import Button from "./Button";

export default function Pizza({
  photoName,
  name,
  ingredients,
  price,
  soldOut,
}) {
  return (
    <div className="w-[90%] pb-10 flex flex-col gap-[0.8rem] py-[0.4rem] text-center lg:flex-row">
      <img
        className={`${
          soldOut ? "grayscale opacity-80" : ""
        } mt-auto w-[22rem] aspect-[1] self-start`}
        src={photoName}
        alt={photoName}
      />
      <div className={`mt-auto text-left ${soldOut ? "opacity-50" : ""}`}>
        <h3 className="text-[1.7rem] font-bold">{name}</h3>
        <p className="text-[1.2rem] font-light italic mb-auto">{ingredients}</p>
        <p className="font-bold text-[1.5rem]">${price}</p>
        <Button soldOut={soldOut} />
      </div>
    </div>
  );
}

Pizza.propTypes = {
  photoName: ProtoTypes.string.isRequired,
  name: ProtoTypes.string.isRequired,
  ingredients: ProtoTypes.string.isRequired,
  price: ProtoTypes.number.isRequired,
  soldOut: ProtoTypes.bool.isRequired,
};
