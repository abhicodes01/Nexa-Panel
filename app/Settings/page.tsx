'use client'

import { DataTable } from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import { ModeToggle } from '@/components/ui/toggle'
import { cn } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Props = {}
export type Payment = {
  category: string;
  value: string
}

export const data: Payment[] = [
  {
    category: "Account",
    value: "Active"
  },
  {
    category: "Notifications",
    value: "OFF"
  },
  {
    category: "Language",
    value: "English"
  },
  {
    category: "Theme",
    value: "Dark"
  },
]

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
]


function SettingsPage({}: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title='Settings'/>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default SettingsPage