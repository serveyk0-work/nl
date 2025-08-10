import Head from "next/head";

type SeoProps = {
  title: string;
  description: string;
  keywords?: string;
};

export const Seo = ({ title, description, keywords }: SeoProps) => (
  <Head>
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords && <meta name="keywords" content={keywords} />}
  </Head>
);
