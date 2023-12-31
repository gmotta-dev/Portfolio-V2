import { Metadata } from "next";

export const buildMetadata = (props: UtilProps) => {

  const chosenImg = props.ogImage || 'SEO-portfolio.webp'
  const loader = process.env.NEXT_PUBLIC_CLOUDFRONT_URL

  const images = [{ url: `${loader}/${chosenImg}`, width: 1000, height: 800 }]
  const description = props.description

  const metadata: Metadata = {
    title: props.title,
    description,
    openGraph: { images, description, },
    twitter: { images, description },
  };

  return metadata
}

interface UtilProps {
  title: string,
  description: string,
  ogImage?: string
}