const authKeys = {
  all: ["auth"],
  me: () => [...authKeys.all, "me"],
};

export default authKeys;
