import image from "../../Assets/images/mug-white.png";
const ProductCard = () => {
  return (
    <div className=" text-center space-x-4">
      <img src={image} alt="imagecup" className="min-w-full min-h-[100px]" />
      <p className="font-thin text-[#415161]">Mugs</p>
      <h4 class="font-bold text-base font-poppins leading-tight">
        Father’s Day Coffee Mug
      </h4>
      <p>$12.88</p>
    </div>
  );
};
export default ProductCard;
