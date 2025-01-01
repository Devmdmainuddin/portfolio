import React, {ReactNode} from "react";
import Sidebar from "./components/Sidebar";


const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div className="bg-[#D0EBEB] dark:bg-[#738188]">
  
        <main className="flex max-w-[1200px]">
            <div className="">
            <Sidebar />
            </div>
         
          <div className="flex-1">{children}</div>
        </main>
     
    </div>
  );
};

export default Layout;
