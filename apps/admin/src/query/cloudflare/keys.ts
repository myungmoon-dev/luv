const cloudflareKeys = {
  all: ["cloudflare"],
  connectInfo: () => [...cloudflareKeys.all, "connectInfo"],
  uploadInfo: () => [...cloudflareKeys.all, "uploadInfo"],
};

export default cloudflareKeys;
