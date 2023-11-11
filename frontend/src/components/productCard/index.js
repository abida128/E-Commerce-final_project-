import { useState } from "react";

import AddToCart from "../addTocartModal";
const ProductCard = ({ name, image, price, selectedCat }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <div
      className="cursor-pointer text-center space-x-4"
      onClick={handleOpenDialog}
    >
      <AddToCart
        image={image}
        selectedCat={selectedCat}
        name={name}
        price={price}
        showModal={isDialogOpen}
        onClose={handleCloseDialog}
      />
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
