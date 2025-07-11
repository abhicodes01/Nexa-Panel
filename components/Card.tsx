import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import React from 'react'

export type CardProps = {
    label: string;
    icon: LucideIcon;
    amount: string;
    description: string;
}

export default function Card(props: CardProps) {
  return <CardContent>
    <section className='flex justify-between gap-2'>
        {/* label */}
        <p className='text-sm'>{props.label}</p>
        {/* icon */}
        <props.icon className='w-4 h-4 text-slate-400'/>
    </section>

    <section className='flex flex-col gap-1'>
        <h2 className='text-2xl font-semibold'>{props.amount}</h2>
        <p className='text-xs text-slate-500'>{props.description}</p>
    </section>

  </CardContent>
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>){
    return(
        <div
        {...props}
        className={cn('flex flex-col w-full gap-3 rounded-xl bg-slate-900 border text-white p-5 shadow', props.className)}/>
    )
}