import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";

import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import useAdmin from "../../Hook/useAdmin";
import Loading from "../../Component/Loading";

const RequireAdmin = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();
  const [admin, adminLoading] = useAdmin(user);

  console.log("admin loading", adminLoading);
  if (loading || adminLoading) {
    return <Loading />;
  }

  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAdmin;
