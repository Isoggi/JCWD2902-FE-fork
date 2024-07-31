import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { api } from "@/config/axios.config";
import { IProduct } from "@/interfaces/product.interface";

type Props = {
  params: {
    id: number;
  };
};
async function getProduct(id: number) {
  const res = await api.get(`/products/${id}`);
  return res.data;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data: IProduct = await getProduct(params.id);
  return {
    title: data.product_name,
    icons: "@/app/icon.ico",
    openGraph: {
      images: [data.img_url ?? ""],
    },
    description: `Rp. ${data.price.toLocaleString("id-ID")}`,
  };
}

export default async function DetailPage({ params }: Props) {
  const data: IProduct = await getProduct(params.id);
  return (
    <center>
      <div className="max-w-72">
        <Image
          src={data.img_url ?? ""}
          alt=""
          width={640}
          height={640}
          className="w-full aspect-square object-cover"
        />
        <div className="text-xl">{data.product_name}</div>
        <div className="text-lg font-bold">
          Rp. {data.price.toLocaleString("id-ID")}
        </div>
      </div>
    </center>
  );
}
