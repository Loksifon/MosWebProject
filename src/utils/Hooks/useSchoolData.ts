import { useState, useEffect } from 'react';
import axios from 'axios';
import { LIMIT_LIST_SCHOOL } from '@/utils/constants/Constants';
import { ISchoolDataType } from '@/components/SchoolTable/SchoolTable';
export const useSchoolData = () => {
	const [dataSource, setDataSource] = useState<ISchoolDataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
	
	const getSchool = async (page: number, limit: number) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://universities.hipolabs.com/search?limit=${limit}&offset=${(page - 1) * limit}`);
			console.log(response.data)
      setDataSource(response.data);
    } catch (error) {
      console.error('Ошибка при получении информации:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSchool(page, LIMIT_LIST_SCHOOL);
  }, [page]);

  return {
    dataSource,
    loading,
    page,
    setPage,
  };
};