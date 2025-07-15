import ProductComponent from "./components/Product.component";
import products from "./products";
import HeaderComponent from "./components/Header.component";
import EffectiveComponent from "./components/Effective.component";
import NoticeComponent from "./components/Notice.component";
import FirstSection from "./animated/FirstSection.component";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-5">
      <EffectiveComponent/>
      <HeaderComponent/>
      <NoticeComponent/>
      <FirstSection/>
      <section id="Projects" className="flex flex-col gap-12 max-2xl:px-1 px-16 py-24 items-center text-center">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-4xl dark:text-white text-black">Developed products</h1>
          <p className="font-semibold text-base dark:text-label-2 text-label-2-w">This section presents the projects that I have been working on.</p>
        </div>
        <div className="flex flex-col gap-4">
          {products.map((product, key) => <ProductComponent key={key} time={product.time} title={product.title}
          description={product.description} icons={product.icons} image={product.image} links={product.links} /> )}
        </div>
      </section>
    </main>
  );
}
