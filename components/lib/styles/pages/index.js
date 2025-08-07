import { useEffect } from "react";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { app } from "../lib/firebase";

export default function Home() {
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) router.push("/dashboard");
      else router.push("/login");
    });

    return () => unsubscribe();
  }, []);

  return <p>Redirecting...</p>;
}

