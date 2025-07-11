'use client'

import { DataTable } from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import { cn } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Props = {}
export type Payment = {
  order: string,
  status: string,
  lastorder: string,
  method: string
}

export const data: Payment[] = [
  {
    order: "ORD001",
    status: "Pending",
    lastorder: "2024-06-15",
    method:"Credit Card"
  },
  {
    order: "ORD002",
    status: "Processing",
    lastorder: "2024-07-01",
    method:"Paypal"
  },
  {
    order: "ORD003",
    status: "Pending",
    lastorder: "2024-06-24",
    method:"Credit Card"
  },
  {
    order: "ORD004",
    status: "Completed",
    lastorder: "2024-06-05",
    method:"Credit Card"
  },
  {
    order: "ORD005",
    status: "Processing",
    lastorder: "2024-07-15",
    method:"Debit Card"
  },
  {
    order: "ORD006",
    status: "Completed",
    lastorder: "2024-06-15",
    method:"Credit Card"
  },
  {
    order: "ORD007",
    status: "Pending",
    lastorder: "2024-07-01",
    method:"Paypal"
  },
  {
    order: "ORD008",
    status: "Pending",
    lastorder: "2024-06-24",
    method:"Credit Card"
  },
  {
    order: "ORD009",
    status: "Completed",
    lastorder: "2024-06-05",
    method:"Credit Card"
  },
  {
    order: "ORD0010",
    status: "Processing",
    lastorder: "2024-07-15",
    method:"Debit Card"
  },
  {
    order: "ORD0011",
    status: "Processing",
    lastorder: "2024-06-15",
    method:"Credit Card"
  },
  {
    order: "ORD0012",
    status: "Completed",
    lastorder: "2024-07-01",
    method:"Paypal"
  },
  {
    order: "ORD0013",
    status: "Pending",
    lastorder: "2024-06-24",
    method:"Credit Card"
  },
  {
    order: "ORD0014",
    status: "Completed",
    lastorder: "2024-06-05",
    method:"Credit Card"
  },
  {
    order: "ORD0015",
    status: "Processing",
    lastorder: "2024-07-15",
    method:"Debit Card"
  },
]

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
    header: "Order",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell:({row})=>{
      return (
        <div className={cn("font-medium w-fit text-black px-4 py-2 rounded-lg",
          {"bg-red-200": row.getValue("status") === "Pending"},
          {"bg-yellow-200": row.getValue("status") === "Processing"},
          {"bg-green-200": row.getValue("status") === "Completed"}
        )}>
           {row.getValue("status")}
        </div>
      )
    }
  },
  {
    accessorKey: "lastorder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
]


function OrdersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title='Orders'/>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default OrdersPage