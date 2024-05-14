import axios from "axios";
import react from "react";
import { useEffect, useState } from "react";
import { LIMIT_LIST_UNIVERSITY } from "@/utils/constants/Constants";
import { useInView } from "react-intersection-observer";

export interface ICardUniversity {
  country: string;
  name: string;
}

export const useUniversitiesData = () => {
  const [currentPage, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<ICardUniversity[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUniversities = async (currentPage: number, limit: number) => {
    try {
      setLoading(true);
      const offset = (currentPage - 1) * limit;
      const response = await axios.get(
        `http://universities.hipolabs.com/search?offset=${offset}&limit=${LIMIT_LIST_UNIVERSITY}`
      );

      setDataSource((prev) => [...prev, ...response.data]);
    } catch (error) {
      console.log("Error fetching universities:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUniversities(currentPage, LIMIT_LIST_UNIVERSITY);
  }, [currentPage]);

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    if (inView && !loading) {
      setPage((prev: number) => prev + 1);
    }
  }, [inView, loading]);

  return {
    dataSource,
    loading,
    ref,
  };
};
