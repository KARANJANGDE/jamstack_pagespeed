export const generateCouponCode = async (prefix?: string, length = 6) =>
  import("nanoid").then((res) =>
    ((prefix ?? "") + res.nanoid(length)).toUpperCase()
  );
