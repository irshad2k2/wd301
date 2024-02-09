import React, { useEffect } from "react";
import { fetchMembers } from "../../context/members/actions";
import { useMembersDispatch } from "../../context/members/context";
import MemberListItems from "./MemberListItems";

const MemberList: React.FC = () => {
  const dispatchMembers = useMembersDispatch();

  useEffect(() => {
    fetchMembers(dispatchMembers);
  }, [dispatchMembers]);

  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      {/*To keep this file clean, I'll move all the logic to access the Members 
       from our app-state, to a new component MemberListItems */}
      <MemberListItems />
    </div>
  );
};
export default MemberList;
