import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
    return <main className="lg:max-w-7xl lg:mx-auto ">{children}</main>;
  };
  
  export default MainLayout;
  