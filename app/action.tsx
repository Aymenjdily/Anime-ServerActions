"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import axios from "axios";

export const fetchAnime = async (pageNumber: number) => {
  const response = await axios.get(
    `${process.env.API_URL}/api/animes?page=${pageNumber}&limit=8&order=popularity`
  );

  const data = response.data;

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
