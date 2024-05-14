import { FC } from "react";
import { PaginationContainer, Pagination, LoadingText, LoadingInView } from "./DynamicPagination.styled";
import { CardUniversity } from "../CardUniversity/CardUnivesity";
import { useUniversitiesData } from "@/utils/Hooks/useUniversitiesData";

export const DynamicPagination: FC = () => {
  const { dataSource, loading, ref } = useUniversitiesData();
  return (
    <PaginationContainer>
      <Pagination>
        {dataSource.map((university) => (
          <CardUniversity data={university} key={university.name}></CardUniversity>
        ))}
      </Pagination>
      {loading && <LoadingText>Загрузка...</LoadingText>}
      <LoadingInView ref={ref}>Дождитесь загрузки...</LoadingInView>
    </PaginationContainer>
  );
};
