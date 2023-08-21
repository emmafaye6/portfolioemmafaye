import { fetchHelper } from "../components/utils";

export const fetchProjects = async () => {
  try {
    const response = await fetchHelper.get();
    return response;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};
