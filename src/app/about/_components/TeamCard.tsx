import Image from "next/image";
import React from "react";
import { User } from "../types/User";
import { getTeams } from "../_api/getTeams";

const TeamCardUser = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const user: User | null = await getTeams();
  if (!user) return null;
  return (
    <div className="grid md:grid-cols-2 px-8 md:px-16 pt-8">
      <div>
        <Image
          src={user.picture.large}
          alt={user.name.first}
          width={300}
          height={300}
          className="rounded-lg justify-self-center mr-4"
        />
        <br />
      </div>
      <div className="md:pr-16">
        <h4 className="font-bold text-xl pb-4 text-left">
          {user.name.first} {user.name.last} <br />
          {user.email} <br />
          <br />
          {title}
        </h4>
        <p className="text-[16px]">{description}</p>
        <br />
      </div>
    </div>
    // <div className="w-[342px] md:w-[380px] p-2 bg-[#66371d]/75 shadow-[0px_4px_4px_0px_rgba(255,242,242,0.25)] border-t-2 rounded-t-3xl border-[#fdefd7]/60 inline-flex justify-center items-start overflow-hidden">
    //    <div className="h-full w-1/3 grid justify-start items-center">
    //       <div className="rounded-full w-[80%] aspect-square relative  overflow-clip flex m-auto">
    //          <Image src={user.picture.large} alt="teamImg" fill />
    //       </div>

    //       <div className="  flex-wrap text-center justify-center text-[#f0e3d0]  text-[0.75rem] md:text-base  font-normal   text-bold capitalize ">
    //          {` ${user.name.first} ${user.name.last}`}
    //       </div>
    //    </div>

    //    <div className="grow  flex  flex-col justify-center items-center h-full text-center text-[#f0e3d0] ">
    //       <p className="text-xl">{title}</p>
    //       <p className="text-sm md:text-base">{user.email}</p>
    //       <p className="text-[0.75rem] md:text-base">{user.location.city}</p>
    //       <p className="text-[0.75rem] md:text-base">{user.phone}</p>
    //    </div>
    // </div>
  );
};

export default TeamCardUser;
