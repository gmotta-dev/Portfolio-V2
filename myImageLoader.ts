"use client";

export default function myImageLoader({ src, width, quality }: any) {
  if (!src.includes("https:")) return `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${src}?w=${width}&q=${quality || 75}`;
  else return src;
}
