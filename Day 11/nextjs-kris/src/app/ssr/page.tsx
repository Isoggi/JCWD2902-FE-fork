import { api } from "@/config/axios.config";
import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default async function SSRPage({}: Props) {
  const product: IProduct[] = (await api.get("/products")).data;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?slug`);
  return (
    <center>
      <div className="max-w-screen-sm grid grid-cols-3 gap-3">
        {product.map((data, key) => (
          <Link href={`/ssr/detail/${data.id}`} key={key}>
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
          </Link>
        ))}
      </div>
    </center>
  );
}
