export const getServerError = (res, error) => {
  res.status(500).json({
    message: "Server error, failed to create flower",
    error: error.message,
  });
};
