"use client";

export default function myImageLoader({ src, width, quality }: any) {
  if (!src.includes("https:")) return `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/${src}?w=${width}&q=${quality || 75}`;
  else return src;
}
