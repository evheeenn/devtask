export const API = {

  getUser: async (id) => {
    return await fetch(
      `https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/devTaskUsers/${id}`
    ).then((res) => res.json());
  },

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

  updateUser: async(newUser) => {
    const response = await fetch(
      `https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/devTaskUsers/${newUser.id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json; charset=utf-8" },
        body: JSON.stringify(newUser),
      }
    ).then(res => res.json())

    return response
  }

};
