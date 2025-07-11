import React from "react";

export type SalesProps = {
  name: string;
  email: string;
  saleamount: string;
};

export default function SalesCard( props: SalesProps) {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex justify-between gap-3">
        <div className="w-12 h-12 rounded-full bg-white p-1">
            <img width={200} height={200} src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${props.name}`} alt="" />
        </div>
        <div className="text-sm">
            <p>{props.name}</p>
            <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-slate-400">
                {props.email}
            </div>
        </div>
      </section>
      <p>{props.saleamount}</p>
    </div>
  );
}
