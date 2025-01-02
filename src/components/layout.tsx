import { ReactNode } from "react";
import { Header } from "./header";

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
