import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { app } from "../lib/firebase";

export default function Dashboard() {
  const auth = getAuth(app);
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else router.push("/login");
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => router.push("/login"));
  };

  return (
    <div style={{ maxWidth: 500, margin: "50px auto" }}>
      <h2>Welcome to Cloudspot Dashboard</h2>
      {user && (
        <>
          <p>Logged in as: {use
                            
