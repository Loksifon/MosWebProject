import { Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useSchoolData } from '@/utils/Hooks/useSchoolData';

export interface ISchoolDataType {
  country: string;
  name: string;
}

export const SchoolTable = () => {
	const { dataSource, loading, page, setPage } = useSchoolData();
	const columns: ColumnsType<ISchoolDataType> = [
		{
			title: 'Страна',
			dataIndex: 'country',
		},
		{
			title: 'Название школы',
			dataIndex: 'name',
		},
	]
	return (
		<>
			<Table columns={columns} dataSource={dataSource} pagination={false} />
			<Button onClick={() => setPage(page - 1)} disabled={page === 1 || loading}>Prev</Button>
			<Button onClick={() => setPage(page + 1)} disabled={loading}>Next</Button>
		</>
	)
}