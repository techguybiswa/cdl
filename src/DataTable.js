import React from "react";
import data from "./data.json"
import { Table, Tag , Button } from 'antd';

const { Column, ColumnGroup } = Table;
class DataTable extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      data: [],
      filteredInfo: null,
      sortedInfo: null,
    };
    console.log(data)
  }



componentDidMount = () => {
  let count = 0
  let { sortedInfo, filteredInfo } = this.state;
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};
  const columns = [

    {
      title: 'Ministries/Departments',
      dataIndex: 'Ministries/Departments',
      key: 'Ministries/Departments',
    },
    {
      title: 'Detailed Head of Expenditure',
      dataIndex: 'Detailed Head of Expenditure',
      key: 'Detailed Head of Expenditure',
    },
    {
      title: 'Actual 2018-2019 Total',
      key: 'Actual 2018-2019 Total',
      dataIndex: 'Actual 2018-2019 Total',
      sorter: {
        compare: (a, b) => a["Actual 2018-2019 Total"] - b["Actual 2018-2019 Total"],
        multiple: 3,
      },
    },
    {
      title: 'Budget Estimates 2019-2020 Total',
      key: 'Budget Estimates 2019-2020 Total',
      dataIndex: 'Budget Estimates 2019-2020 Total',
      sorter: {
        compare: (a, b) => a["Budget Estimates 2019-2020 Total"] - b["Budget Estimates 2019-2020 Total"],
        multiple: 2,
      },
    },
    {
      title: 'Revised Estimates 2019-2020 Total',
      dataIndex: 'Revised Estimates 2019-2020 Total',
      key: 'Revised Estimates 2019-2020 Total',
      sorter: {
        compare: (a, b) => a["Revised Estimates 2019-2020 Total"] - b["Revised Estimates 2019-2020 Total"],
        multiple: 1,
      },
    },
    {
      title: 'Budget Estimates 2020-2021 Total',
      dataIndex: 'Budget Estimates 2020-2021 Total',
      key: 'Budget Estimates 2020-2021 Total',
      sorter: {
        compare: (a, b) => a["Budget Estimates 2020-2021 Total"] - b["Budget Estimates 2020-2021 Total"],
        multiple: 0,
      },
    },
    {
      title: 'Budget Increase/Decrease Percentage',
      key: 'Budget Estimates 2020-2021 Total',
      render: () => {
        count = count + 1;
        return count
      },
      ellipsis: true,
    },
    
  ];
  
  this.setState({
    columns
  })

}

  render() {
    return (
      <div>
        <div>
        <Table columns={this.state.columns} dataSource={data}  />
        </div>
      </div>
    );
  }
}

export default DataTable;
