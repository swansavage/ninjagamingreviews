export async function load({ fetch }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  //   console.log(res);
  const guides = await res.json();
  //   console.log(guides);

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
