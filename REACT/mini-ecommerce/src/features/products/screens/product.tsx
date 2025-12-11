import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import type { Product } from "@/common/types";

export function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  console.log(product);

  return (
    <img className="w-2xs h-36" src={product?.image} alt={product?.title} />
  );
}
