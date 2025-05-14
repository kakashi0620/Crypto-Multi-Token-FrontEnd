import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Signup: NextPage = () => {

  const router = useRouter();
  const { ref } = router.query;
  if (ref && ref !== "" && ref !== undefined) {
    localStorage.setItem("referred_by", JSON.stringify(ref));
    router.push('/')
  }

  return (
    <></>
  );
};

export default Signup;
