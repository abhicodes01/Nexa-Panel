'use client'

import Barcharts from "@/components/Barcharts";
import Card, { CardContent, CardProps } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const cardData : CardProps[] = [
    {
      label: "Total Revenue",
      icon: DollarSign,
      amount: "+45,231.92",
      description:"+20.1% from last month"
    },
    {
      label: "Subscription",
      icon: Users,
      amount: "+2543",
      description:"+180.1% from last month"
    },
    {
      label: "Sales",
      icon: CreditCard,
      amount: "+12,354",
      description:"+19% from last month"
    },
    {
      label: "Active Now",
      icon: Activity,
      amount: "+573",
      description:"+20.1% from last hour"
    }
  ]
  const usersaledata : SalesProps[] = [
    {
      name: "Olivia Martin",
      email: "olivia123@gmail.com",
      saleamount:"+$1999.23"
    },
    {
      name: "Jackson",
      email: "jack123@gmail.com",
      saleamount:"+$199.23"
    },
    {
      name: "Mary Jane",
      email: "mary123@gmail.com",
      saleamount:"+$589.23"
    },
    {
      name: "Duke Cary",
      email: "duke23@gmail.com",
      saleamount:"+$2009.23"
    },
    {
      name: "Alex Wickson",
      email: "alex123@gmail.com",
      saleamount:"+$499.23"
    },
  ]
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard"/>
      
      <section className="grid grid-cols-1 w-full gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
          {cardData.map((item,index)=>(
            <Card key={index}
               label={item.label}
               icon={item.icon}
               amount={item.amount}
               description={item.description}
            />
          ))}
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 transition-all">
          <CardContent>
            <p className="p-4 font-semibold">Overview</p>
            <Barcharts/>
          </CardContent>
          <CardContent className="flex justify-between gap-3">
            <p>Sales Overview</p>
            <p className="text-xs text-slate-400">You made 265 sales a month</p>
             
             {usersaledata.map((item,index)=>(
              <SalesCard key={index}
              name={item.name}
              email={item.email}
              saleamount={item.saleamount}
              />
             ))}
          </CardContent>
      </section>
    </div>
  );
}
