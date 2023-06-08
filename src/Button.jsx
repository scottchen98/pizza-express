import ProtoTypes from "prop-types";

export default function Button({ soldOut }) {
  return (
    <button
      className={`${
        soldOut ? "bg-[#888] cursor-default" : "bg-[#edc84b] hover:bg-[#e9bb24]"
      } text-[1.3rem] font-medium py-[0.3rem] px-[1rem] rounded-lg`}
    >
      {soldOut ? "Sold Out" : "Add to Cart"}
    </button>
  );
}

Button.propTypes = {
  soldOut: ProtoTypes.bool.isRequired,
};
