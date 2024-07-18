import { useLocation } from "react-router-dom";
export default function ProfilePage() {
  const path = useLocation();
  return <div>{path.pathname}</div>;
}
