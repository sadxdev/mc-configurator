'use client';

import Image from 'next/image';

export default function BikeCanvas() {
  return (
    <div className="border rounded-xl p-4 flex items-center justify-center h-[400px] bg-gray-100">
      <div className="relative w-full h-full">
        <Image
          src="/bikes/hunter/base.png"
          alt="Royal Enfield Hunter 350"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
