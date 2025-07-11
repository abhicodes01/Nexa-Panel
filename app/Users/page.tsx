'use client'

import { DataTable } from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Props = {}
export type Payment = {
  name: string,
  email: string,
  lastorder: string,
  method: string
}

export const data: Payment[] = [
  {
    name: "Olivia Martin",
    email: "olivia123@gmail.com",
    lastorder: "2024-06-15",
    method:"Credit Card"
  },
  {
    name: "Duke Cary",
    email: "duke123@gmail.com",
    lastorder: "2024-07-01",
    method:"Paypal"
  },
  {
    name: "Olivia Martin",
    email: "olivia123@gmail.com",
    lastorder: "2024-06-24",
    method:"Credit Card"
  },
  {
    name: "Jackson",
    email: "jack123@gmail.com",
    lastorder: "2024-06-05",
    method:"Credit Card"
  },
  {
    name: "Alex Wickson",
    email: "alex123@gmail.com",
    lastorder: "2024-07-15",
    method:"Debit Card"
  },
  {
    name: "Olivia Martin",
    email: "olivia123@gmail.com",
    lastorder: "2024-06-15",
    method:"Credit Card"
  },
  {
    name: "Duke Cary",
    email: "duke123@gmail.com",
    lastorder: "2024-07-01",
    method:"Paypal"
  },
  {
    name: "Olivia Martin",
    email: "olivia123@gmail.com",
    lastorder: "2024-06-24",
    method:"Credit Card"
  },
  {
    name: "Jackson",
    email: "jack123@gmail.com",
    lastorder: "2024-06-05",
    method:"Credit Card"
  },
  {
    name: "Alex Wickson",
    email: "alex123@gmail.com",
    lastorder: "2024-07-15",
    method:"Debit Card"
  },
  {
    name: "Olivia Martin",
    email: "olivia123@gmail.com",
    lastorder: "2024-06-15",
    method:"Credit Card"
  },
  {
    name: "Duke Cary",
    email: "duke123@gmail.com",
    lastorder: "2024-07-01",
    method:"Paypal"
  },
  {
    name: "Olivia Martin",
    email: "olivia123@gmail.com",
    lastorder: "2024-06-24",
    method:"Credit Card"
  },
  {
    name: "Jackson",
    email: "jack123@gmail.com",
    lastorder: "2024-06-05",
    method:"Credit Card"
  },
  {
    name: "Alex Wickson",
    email: "alex123@gmail.com",
    lastorder: "2024-07-15",
    method:"Debit Card"
  },
]

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell:({row}) =>{
      return (
        <div className='flex gap-2 items-center'>
          <img className='h-10 w-10' src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${row.getValue("name")}`} alt="" />
          <p>{row.getValue("name")}</p>
        </div>
      )
    }
  },
  {
    accessorKey: "email",
    header: "Email",
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


function UserPage({}: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title='Users'/>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default UserPage