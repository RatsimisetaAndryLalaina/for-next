'use client';

import Image, { StaticImageData } from "next/image";

export default function ImageComponent({ src, alt, width = 50, height = 50 }: { src: StaticImageData; alt: string; width: number; height: number }) {
  return (
    <Image src={src} alt={alt} width={width} height={height} />
  );
};