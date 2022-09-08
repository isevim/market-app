// React
import React from "react";

// Enum
import SORTING_DATA from "../../../common/Enum";

// Style
import "../Sorting/Sorting.css";

// Components
import { Space, Radio, Typography } from "antd";

const { Text } = Typography;

export default function Sorting({ setSortingFilter }) {
  const StaticSortingData = [
    { id: SORTING_DATA.INCREASE, name: "Price low to high" },
    { id: SORTING_DATA.DECREASE, name: "Price high to low" },
    { id: SORTING_DATA.DESC, name: "New to old" },
    { id: SORTING_DATA.ASC, name: "Old to New" },
  ];

  const handleOnRadioChange = (e) => {
    e.stopPropagation();
    setSortingFilter(e.target.value);
  };

  return (
    <Space direction="vertical" size={12}>
      <Text className="sorting-header">Sorting</Text>
      <div className="sorting-box">
        <Radio.Group
          className="sorting-box-radio-group"
          defaultValue={SORTING_DATA.INCREASE}
          onChange={(e) => handleOnRadioChange(e)}
        >
          {StaticSortingData.map((element) => {
            return (
              <Radio className="sorting-box-radio" value={element.id}>
                {element.name}
              </Radio>
            );
          })}
        </Radio.Group>
      </div>
    </Space>
  );
}
