import ProductComponent from "./components/Product.component";
import products from "./products";
import HeaderComponent from "./components/Header.component";
import EffectiveComponent from "./components/Effective.component";
import NoticeComponent from "./components/Notice.component";
import FirstSection from "./animated/FirstSection.component";
import useLangText from "./hooks/lang.hook";

export default async function Home() {
  const { code, langText } = await useLangText();

  return (
    <main className="flex flex-col items-center gap-5">
      <EffectiveComponent />
      <HeaderComponent langText={langText} />
      {code != "ru" && <NoticeComponent />}
      <FirstSection langText={langText} />
      <section
        id="Projects"
        className="flex flex-col gap-12 max-2xl:px-1 px-16 py-24 items-center text-center scroll-m-20"
      >
        <div className="flex flex-col gap-2">
          <h1 className="font-bold max-md:text-3xl text-4xl dark:text-white text-black">
            {langText.DevelopedText}
          </h1>
          <p className="font-semibold max-md:text-sm text-base dark:text-label-2 text-label-2-w">
            {langText.DevelopedDescription}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {products.map((product, key) => (
            <ProductComponent
              key={key}
              time={code == "ru" ? product.time : product.timeEn}
              title={code == "ru" ? product.title : product.titleEn}
              description={
                code == "ru" ? product.description : product.descriptionEn
              }
              icons={product.icons}
              image={product.image}
              links={product.links}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
