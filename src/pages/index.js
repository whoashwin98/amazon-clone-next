import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
};
