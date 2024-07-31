"use client";

import { api } from "@/config/axios.config";
import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailPage() {
  const [product, setProduct] = useState<IProduct>();
  const params = useParams();

  useEffect(() => {
    const fetch = async () => {
      const res = await api.get("/products", { params: { slug: params.slug } });
      //   const res = await api.get(`/products/${params.slug}`);
      setProduct(res.data[0]);
    };
    fetch();
  }, [params.slug]);

  return (
    <center>
      <div className="max-w-72">
        <Image
          src={product?.img_url ?? ""}
          alt=""
          width={640}
          height={640}
          className="w-full aspect-square object-cover"
        />
        <div className="text-xl">{product?.product_name}</div>
        <div className="text-lg font-bold">
          Rp. {product?.price.toLocaleString("id-ID")}
        </div>
      </div>
    </center>
  );
}
