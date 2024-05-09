import axiosInstance from "@/lib/axiosAPI";

export const GetBrandsData = async () => {
  try {
    const response = await axiosInstance.get("/brands");
    return response.data;
  } catch (error) {
    throw new Error("브랜드 데이터를 불러오는데 실패했습니다.");
  }
};
