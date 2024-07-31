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

export const DynamicCSR = dynamic(() => import("./csr"), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
});

export const LoadingSkeleton = () => {
  return (
    <>
      <div className=" w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-[205px] bg-slate-200 rounded"></div>
            <div className="flex gap-2 flex-col">
              <div className="min-h-[28px] bg-slate-200 rounded"></div>
              <div className="min-h-[28px] bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-[205px] bg-slate-200 rounded"></div>
            <div className="flex gap-2 flex-col">
              <div className="min-h-[28px] bg-slate-200 rounded"></div>
              <div className="min-h-[28px] bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-[205px] bg-slate-200 rounded"></div>
            <div className="flex gap-2 flex-col">
              <div className="min-h-[28px] bg-slate-200 rounded"></div>
              <div className="min-h-[28px] bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
