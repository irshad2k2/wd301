import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import NewMember from "./NewMember";
const MemberList = React.lazy(() => import("./MemberList"));
// import ErrorBoundary from "../../components/ErrorBoundary";

const Members = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">
          {t("membersTitle")}
        </h2>
        <NewMember />
      </div>
      {/* <ErrorBoundary> */}
        <Suspense
          fallback={<div className="suspense-loading">{t("loading")}</div>}
        >
          <MemberList />
        </Suspense>
      {/* </ErrorBoundary> */}
    </>
  );
};

export default Members;
