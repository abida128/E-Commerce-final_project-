import { useState } from "react";
import AddToCart from "../addTocartModal";

const ProductCard = ({ name, image, price, selectedCat, _id }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  console.log(isDialogOpen, "is");
  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = (e) => {
    e.stopPropagation();

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
        id={_id}
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
