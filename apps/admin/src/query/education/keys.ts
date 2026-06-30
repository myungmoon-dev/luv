const educationKeys = {
  all: ["education"] as const,
  list: () => [...educationKeys.all, "list"] as const,
  detail: (type: string) => [...educationKeys.all, "detail", type] as const,
};

export default educationKeys;
