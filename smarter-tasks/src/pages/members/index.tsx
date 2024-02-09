import NewProject from "./NewMember";
import MemberList from "./MemberList";

const Members = () => {
  return (
    <>
      <h2 className="text-2xl font-medium tracking-tight">Members</h2>
      <NewProject></NewProject>
      <MemberList></MemberList>

    </>
  );
};
export default Members;
