// "use client";
// import { api } from "@/config/axios.config";
// import { IProduct } from "@/interfaces/product.interface";
// import Image from "next/image";
import React from "react";
import { DynamicCSR } from "./components/page";

type Props = {};

export default function CSRPage({}: Props) {
  //   const [product, setProduct] = React.useState<IProduct[]>([]);
  //   React.useEffect(() => {
  //     const fecth = async () => {
  //       const res = await api.get("/products");
  //       setProduct(res.data);
  //     };
  //     fecth();
  //   }, []);
  //   return (
  //     <center>
  //       <div className="max-w-screen-sm grid grid-cols-3 gap-3">
  //         {product.map((data, key) => (
  //           <div key={key}>
  //             <Image
  //               src={data.img_url ?? ""}
  //               alt=""
  //               width={640}
  //               height={640}
  //               className="w-full aspect-square object-cover"
  //             />
  //             <div className="text-xl">{data.product_name}</div>
  //             <div className="text-lg font-bold">
  //               {data.price.toLocaleString("id-ID")}
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </center>
  //   );
  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <CSRPage />
      </Suspense> */}
      <center>
        <div className="max-w-screen-sm grid grid-cols-3 gap-3">
          <DynamicCSR />
        </div>
      </center>
    </>
  );
}
