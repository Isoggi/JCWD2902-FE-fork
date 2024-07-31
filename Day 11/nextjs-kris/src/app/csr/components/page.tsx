"use client";
import { api } from "@/config/axios.config";
import { IProduct } from "@/interfaces/product.interface";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

type Props = {};

export default function CSRPage({}: Props) {
  const [product, setProduct] = React.useState<IProduct[]>([]);
  React.useEffect(() => {
    const fecth = async () => {
      //    await axios.get
      const res = await api.get("/products");
      setProduct(res.data);
    };
    fecth();
  }, []);
  return product.map((data, key) => (
    <div key={key}>
      <Image
        src={data.img_url ?? ""}
        alt=""
        width={640}
        height={640}
        className="w-full aspect-square object-cover"
      />
      <div className="text-xl">{data.product_name}</div>
      <div className="text-lg font-bold">
        {data.price.toLocaleString("id-ID")}
      </div>
    </div>
  ));
}

export const DynamicCSR = dynamic(() => import("./page"), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
});

export const LoadingSkeleton = () => {
  return [...Array(3)].map((_, i) => (
    <div key={i}>
      <p>Loading...</p>
    </div>
  ));
};
