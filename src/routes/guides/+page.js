import { browser } from "$app/environment";

export async function load({ fetch }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const guides = await res.json();
  console.log(guides);

  if (browser) {
    console.log(window);
  }

  if (res.ok) {
    // console.log("Sending!", guides);
    return {
      guides,
    };
  }

  return {
    status: res.status,
    error: new Error("could not fetch the guides"),
  };
}
