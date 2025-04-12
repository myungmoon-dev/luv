const popupKeys = {
  all: ["popup"],
  list: (isShow: boolean | null) => [...popupKeys.all, "list", isShow],
};

export default popupKeys;
