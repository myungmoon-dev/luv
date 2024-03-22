const cloudflareKeys = {
  all: ["cloudflare"],
  connectInfo: () => [...cloudflareKeys.all, "connectInfo"],
};

export default cloudflareKeys;
