export async function mockLogin(email, password) {
  const res = await fetch("/data/users.json");
  const users = await res.json();

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) throw new Error("Invalid credentials");

  return { token: "mock-token", user };
}
