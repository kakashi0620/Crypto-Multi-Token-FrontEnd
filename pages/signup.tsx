import type { NextPage } from "next";
import { useRouter } from "next/router";
import NotFound from "./404";

const Signup: NextPage = () => {

  const router = useRouter();
  const { ref } = router.query;
  if (ref && ref !== "" && ref !== undefined) {
    localStorage.setItem("referred_by", JSON.stringify(ref));
    console.log("referred_by", ref)
    router.push('/')
  }

  return (
    <NotFound />
  );
};

export default Signup;
