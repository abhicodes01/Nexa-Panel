import { cn } from '@/lib/utils';
import { title } from 'process';
import React from 'react'

type Props = {
    title: string;
    classname?: string
}

function PageTitle({title, classname}: Props) {
  return (
    
    <h1 className={cn('text-2xl font-semibold' ,classname)}>
        {title}
    </h1>
  )
}

export default PageTitle