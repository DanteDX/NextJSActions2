import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Name = (): JSX.Element => {
  const router = useRouter();
  const name = router.query.name;
  console.log(router);
  let nameList;
  if (typeof name === "object") {
    nameList = name.map((eachName, index) => <li key={index}>{eachName}</li>);
  } else {
    nameList = <li>{name}</li>;
  }

  return (
    <>
      <ul>{nameList}</ul>
      <Link href="/">
        <a>Go To Home Page</a>
      </Link>
    </>
  );
};

export default Name;
