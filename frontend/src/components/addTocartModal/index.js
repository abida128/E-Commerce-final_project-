import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import Button from "../button";
import { useDispatch } from "react-redux";
import { addToCartApi } from "../../redux/addToCart/api";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/addToCart/getUsercartData.action";

const AddToCart = ({ showModal, image, name, price, onClose, id }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  const { user } = useAuth();
  console.log(showModal);

  const handleAddTocart = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (user)
      dispatch(
        addToCart({ productId: id, quantity: quantity, userId: user?._id })
      );
  };

  return (
    <Dialog.Root open={showModal}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 pointer-events-none" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-center text-mauve12 m-0 text-[17px] font-medium">
            Add To Cart
          </Dialog.Title>
          <div className="bg-white p-5 gap-y-10">
            <div className="">
              <img
                src={"http://localhost:8080/uploads/" + image}
                alt=""
                className="max-w-full min-w-full max-h-[300px] object-cover"
              />
            </div>
            <div className="mt-10">
              <h1 className="text-415161 font-normal text-2xl">{name}</h1>
              <p className="text-415161 font-bold text-2xl mt-4">
                {price}${" "}
                <span className="font-light text-[14px]"> +Free shipping</span>
              </p>
              <p className="">
                Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
                consectetur adipisci velit, sed quia non incidunt lores ta porro
                ame. numquam eius modi tempora incidunt lores ta porro ame.
              </p>
              <div className="flex mt-[10px]">
                <input
                  type="number"
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  className="max-w-[70px] text-666 p-2 border-1 border-solid border-gray-500 rounded-2 bg-gray-200 box-border transition-all duration-200 focus:border-2 focus:border-solid focus:border-blue-500"
                />
                <div className="ml-[10px]">
                  <Button label="Add to cart" onClick={handleAddTocart} />
                </div>
              </div>
            </div>
          </div>

          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            onClick={onClose}
          >
            <Cross2Icon />
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddToCart;
