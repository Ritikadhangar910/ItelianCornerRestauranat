import { Navigate, Outlet } from "react-router-dom";
const PrivateComp = () => {
  const user = localStorage.getItem("user");
  return <>{user ? <Outlet /> : <Navigate to={"/signup"} />}</>;
};
export default PrivateComp;
