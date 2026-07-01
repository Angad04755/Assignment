export const GetUserById = async (id: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "appplication/json",
        }
    })
    if (res.status !== 200) {
        throw new Error("Something went Wrong")
    }
    return res.json();
}
