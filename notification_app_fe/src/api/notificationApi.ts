import axios from "axios";

const API =
  "http://4.224.186.213/evaluation-service/notifications";

export const getNotifications = async (
  page = 1,
  limit = 20,
  type = ""
) => {
  const params: Record<string, string | number>  = {
    page,
    limit,
  };

  if (type) {
    params.notification_type = type;
  }

  return axios.get(API, { params });
};