import Header from "@/app/components/Header";
import SideBar from "@/app/components/SideBar";
import Table from "@/app/components/Table";

const DashBoard = () => {
  return (
    <>
      <div className="h-screen w-full flex">
        <SideBar />
        <div className="h-auto w-[calc(100vw-3.3rem)]  overflow-hidden">
          <Header />
         
        </div>
      </div>
    </>
  );
};

export default DashBoard;
