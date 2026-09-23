import { ReactNode } from "react";
import { useRouter } from "next/router";
import Navbar from "../navbar/Navbar";
import BaseLayout from "./BaseLayout";
import ProductDetailLayout from "./ProductDetailLayout";

interface Props {
  pageName?: string;
  children: ReactNode;
}

const Layout = ({ pageName, children }: Props) => {
  const router = useRouter();
  const isProductDetail = pageName === "productDetailPage" || router.pathname.startsWith("/product/");

  if (router.pathname === "/maintenance") return <>{children}</>;

  return (
    <>
      <Navbar />
      {isProductDetail ? (
        <ProductDetailLayout>{children}</ProductDetailLayout>
      ) : (
        <BaseLayout> {children} </BaseLayout>
      )}
    </>
  );
};

export default Layout;
