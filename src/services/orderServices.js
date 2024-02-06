import apiClient from "../utils/api-client";

export function checkoutAPI() {
  return apiClient.post("/order/checkout")
}

export function myOrdersAPI() {
  return apiClient.post("/api/order")
}