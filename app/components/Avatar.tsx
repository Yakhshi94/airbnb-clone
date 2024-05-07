'use client'

import Image from 'next/image';
import placeholder from '@/public/images/placeholder.jpeg';

export const Avatar = () => {
  return (
    <Image className="rounded-full" height="25" width="30" alt="Avatar" src={placeholder} />
  )
}
