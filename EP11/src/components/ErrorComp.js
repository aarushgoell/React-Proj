import { useRouteError } from "react-router";

export const ErrorComp = () => {
  const err = useRouteError();

  // It will give us all the errors in our path. react router will catch and pass it onto a object

  return (
    <div>
      <h1>There is an error</h1>
      <h1>Input is not found</h1>

      <h1>
        {err.status} : {err.statusText}
      </h1>
    </div>
  );
};
