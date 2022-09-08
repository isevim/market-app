// React
import React, { useEffect, useState } from "react";

// Redux
import { useSelector } from "react-redux";

// Components
import { Checkbox, Space, Typography, Input } from "antd";

//Style
import "../Tags/Tags.css";

const { Text } = Typography;

export default function Tags({
  setTagFilter
}) {

  const tagsData = useSelector((state) => state.tags.tags);
  const [tags, setTags] = useState(null)

  useEffect(() => {
    if (tagsData) {
      setTags(tagsData)
    }
  }, [tagsData])

  const handleOnChangeInput = (element) => {

    if (element !== "") {
      const newTags = tagsData.filter(tags => tags.toUpperCase().includes(element))
      setTags(newTags)
    } else {
      setTags(tagsData)
    }
  }

  const handleOnChangeCheckbox = (checkedValues) => {
    setTagFilter(checkedValues)
  };

  return (
    tags &&
    <Space direction="vertical" size={12} className="tags-space">
      <Text className="tags-text">Tags</Text>
      <div className="tags-box">
        <Input className="tags-search"
          placeholder="Search tags"
          onChange={(e) => handleOnChangeInput(e.target.value.toUpperCase())}
        />
        <div className="tags-checkbox-container">
          <Checkbox.Group
            options={tags}
            onChange={(checkedValues) => handleOnChangeCheckbox(checkedValues)}
          />
        </div>
      </div>
    </Space>
  );
}
