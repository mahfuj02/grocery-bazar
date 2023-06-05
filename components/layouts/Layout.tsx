import { ReactNode } from "react";
import Navbar from "../navbar/Navbar";
import BaseLayout from "./BaseLayout";
import ProductDetailLayout from "./ProductDetailLayout";

interface Props {
  pageName?: string;
  children: ReactNode;
}

const Layout = ({ pageName, children }: Props) => {
  return (
    <>
      <Navbar />
      {pageName === "productDetailPage" ? (
        <ProductDetailLayout>{children}</ProductDetailLayout>
      ) : (
        <BaseLayout> {children} </BaseLayout>
      )}
    </>
  );
};

export default Layout;
