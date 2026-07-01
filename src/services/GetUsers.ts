export const GetUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
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
