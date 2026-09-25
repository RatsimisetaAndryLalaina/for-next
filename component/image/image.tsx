'use client';

import Image, { StaticImageData } from "next/image";

export default function ImageComponent({ priority = true, src, alt, width = 50, height = 50 }: { priority: boolean; src: StaticImageData; alt: string; width: number; height: number }) {
  return (
    <Image priority={priority} src={src} alt={alt} width={width} height={height} />
  );
};