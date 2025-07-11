'use client'

import { DataTable } from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import { cn } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'
import { data } from '../../lib/data/orders-data'

type Props = {}
export type Payment = {
  order: string,
  status: string,
  lastorder: string,
  method: string
}

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