import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./components/Banner";
import Products from "./components/Products";

export default async function Home() {
  // Fetch the product data
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech", {
    // cache: "no-store", // Use this to avoid caching the result.
  });
  const productData = await res.json();

  console.log(`Data is ${JSON.stringify(productData)}`);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="max-w-screen-3xl mx-auto">
          <Banner />
          <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
            <Products productData={productData} />
          </div>
        </div>
      </main>
    </div>
  );
}

// Server side rendering for fetching products data
// export const getStaticProps = async () => {
//   const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
//   const productData = await res.json();
//   return productData;
// };
