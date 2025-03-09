import TeamCard from "@/app/about/_components/TeamCard";
import React, { Suspense } from "react";
const Teamspage = () => {
  return (
    <section className="container m-auto">
      <Suspense>
        <div className="flex flex-wrap justify-center md:w-[60%] m-auto gap-5 my-10 ">
          <TeamCard title="TopBrewer Handal" />
          <TeamCard title="Cashier TopBrew" />
          <TeamCard title="Tukang Parkir" />
        </div>
      </Suspense>
    </section>
  );
};

export default Teamspage;
