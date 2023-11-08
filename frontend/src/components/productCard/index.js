import image from "../../Assets/images/mug-white.png";
const ProductCard = ({ name, image, price, selectedCat }) => {
  return (
    <div className=" text-center space-x-4">
      <img
        src={"http://localhost:8080/uploads/" + image}
        alt="imagecup"
        className="w-full h-[240px] object-cover"
      />
      <p className="font-thin text-[#415161]">{selectedCat}</p>
      <h4 className="font-bold text-base font-poppins leading-tight overflow-hidden overflow-ellipsis whitespace-nowrap">
        {name}
      </h4>

      <p>${price}</p>
    </div>
  );
};
export default ProductCard;
