interface LoginType {
  token: string;
}

interface AuthType {
  buttons: Array<any>;
  routes: Array<any>;
  role: string;
}

export const loadData = () => {
  return new Promise<LoginType>((resolve) => {
    setTimeout(() => {
      resolve({
        token: "1274001055",
      });
    }, 3000);
  });
};

export const loadInfo = () => {
  return new Promise<AuthType>((resolve) => {
    setTimeout(() => {
      resolve({
        buttons: [""],
        routes: ["/", "/auth"],
        role: "admin",
      });
    }, 2000);
  });
};
