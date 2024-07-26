"use client";
import { useState, useEffect } from "react";
import { superheroes } from "@/../data/db.json";

export default function Home() {
  const [data, setData] = useState<typeof superheroes>([]);
  const fetchSuperheroes = async () => {
    const res = await fetch("http://localhost:2000/superheroes");
    const result = await res.json();
    setData(result);
  };
  useEffect(() => {
    fetchSuperheroes();
  }, []);
  return (
    <>
      {data.map((_, key) => (
        <div key={key}>{_.name}</div>
      ))}
    </>
  );
}
