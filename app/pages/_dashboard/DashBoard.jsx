"use client";
import Header from "@/app/components/Header";
import Loading from "@/app/components/Loading";
import SideBar from "@/app/components/SideBar";
import Table from "@/app/components/Table";
import TableFooter from "@/app/components/TableFooter";
import { useEffect, useState } from "react";

const DashBoard = () => {
  const [isLoading, setIsLoading] = useState(true);

  const tableData = [
    {
      createOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Theodore T.C. Calvin",
      status: "Lead",
      email: "theodore@gmail.com",
      payerPhone: "+91 +966558441503",
      services: "Private Language Session",
      Scheduled: "Sun, 07 Jan 2024 7:42 PM",
    },
    {
      createOn: "Sat, 06 Jan 2024 :42 PM",
      payer: "Hannibal Smith",
      status: "Active",
      email: "hannibalsmith@gmail.com",
      payerPhone: "+91 +966578632254",
      services: "Arobics Session",
      Scheduled: "Wed, 28 Dec 2023 7:42 PM",
    },
    {
      createOn: "Sat, 06 Jan 2024 4:42 PM",
      payer: "Michael Knight",
      status: "Inactive",
      email: "theodore@gmail.com",
      payerPhone: "+91 +466558441203",
      services: "Fitness Session",
      Scheduled: "Sun, 07 Jan 2024 7:42 PM",
    },
    {
      createOn: "Tue, 07 Jan 2024 1:36 PM",
      payer: "Theodore T.C. Calvin",
      status: "Lead",
      email: "smith@gmail.com",
      payerPhone: "+91 +346558446722",
      services: "Boxing Session",
      Scheduled: "Thu, 04 Jan 2024 2:42 PM",
    },
    {
      createOn: "Sat, 06 Jan 2024 :42 PM",
      payer: "Hannibal Smith",
      status: "Active",
      email: "hannibalsmith@gmail.com",
      payerPhone: "+91 +966578632254",
      services: "Arobics Session",
      Scheduled: "Wed, 28 Dec 2023 7:42 PM",
    },
    {
      createOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Theodore T.C. Calvin",
      status: "Lead",
      email: "theodore@gmail.com",
      payerPhone: "+91 +966558441503",
      services: "Private Language Session",
      Scheduled: "Sun, 07 Jan 2024 7:42 PM",
    },
    {
      createOn: "Tue, 07 Jan 2024 1:36 PM",
      payer: "Theodore T.C. Calvin",
      status: "Lead",
      email: "smith@gmail.com",
      payerPhone: "+91 +346558446722",
      services: "Boxing Session",
      Scheduled: "Thu, 04 Jan 2024 2:42 PM",
    },
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timeoutId);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="h-screen w-full flex">
        <SideBar />
        <div className="h-auto w-[calc(100vw-3.3rem)] overflow-y-auto">
          <Header />
          <div className="w-full p-4 h-auto">
            <div className="w-full h-auto  overflow-x-auto">
              <Table tableData={tableData} />
            </div>
            <TableFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
