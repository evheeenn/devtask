export const API = {

  getUsers: async () => {
    return await fetch(
      "https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/devTaskUsers"
    ).then((res) => res.json());
  },

  registration: async (newUser) => {
    const resPost = await fetch(
      "https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/devTaskUsers",
      {
        method: "POST",
        headers: { "content-type": "application/json; charset=utf-8" },
        body: JSON.stringify(newUser),
      }
    );
    const resGet = await resPost.json();
    localStorage.setItem("user", JSON.stringify(resGet.id));

    return resGet;
  },

};
