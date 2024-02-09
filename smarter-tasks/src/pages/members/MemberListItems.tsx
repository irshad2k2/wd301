import { deleteMember } from "../../context/members/actions";
import {
  useMembersState,
  useMembersDispatch,
} from "../../context/members/context";

export default function MemberListItems() {
  let state: any = useMembersState();
  const { members, isLoading, isError, errorMessage } = state;
  console.log(members);

  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  const dispatch = useMembersDispatch();
  const handleDelete = async (id: number) => {
    const response = await deleteMember(dispatch, id);
    if (!response.ok) {
      console.log("Error deleting member:", response.error);
    }
  };

  return (
    <>
      {members.map((Member: any) => (
        <div
          key={Member.id}
          className="member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {Member.name}
          </h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {Member.email}
          </h5>
          <button
            onClick={() => handleDelete(Member.id)}
            className="bg-red-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
}
