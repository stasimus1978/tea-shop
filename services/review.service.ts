import { axiosWithAuth } from "@/api/api.interceptors";

import { API_URL } from "@/config/api.config";

import type { ReviewInputProps, ReviewItem } from "@/shared/types/review.type";

class ReviewService {
  async getByStoreId(id: string) {
    const { data } = await axiosWithAuth<ReviewItem[]>({
      url: API_URL.reviews(`/by-storeId/${id}`),
      method: "GET"
    });

    return data;
  }

  async create(data: ReviewInputProps, productId: string, storeId: string) {
    const { data: createdReview } = await axiosWithAuth<ReviewItem>({
      url: API_URL.reviews(`/${productId}/${storeId}`),
      method: "POST",
      data
    });

    return createdReview;
  }

  async update(data: ReviewInputProps, id: string) {
    const { data: updatedReview } = await axiosWithAuth<ReviewItem>({
      url: API_URL.reviews(`/${id}`),
      method: "PUT",
      data
    });

    return updatedReview;
  }

  async delete(id: string) {
    const { data: deletedReview } = await axiosWithAuth<ReviewItem>({
      url: API_URL.reviews(`/${id}`),
      method: "DELETE"
    });

    return deletedReview;
  }
}

export const reviewService = new ReviewService();
