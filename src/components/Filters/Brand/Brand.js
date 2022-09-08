// React
import React, { useEffect, useState } from "react";

// Component
import { Checkbox, Space, Typography, Input } from "antd";

// Redux
import { useSelector } from "react-redux";

//Style
import "../Brand/Brand.css";

const { Text } = Typography;

export default function Brand({
  setBrandFilter
}) {
  const companies = useSelector((state) => state.companies.companies);

  const [companiesNameStaticData, setCompaniesNameStaticData] = useState([]);
  const [companiesName, setCompaniesName] = useState([]);

  useEffect(() => {
    if (companies) {
      const companiesData = companies.map((element) => element.slug);

      setCompaniesNameStaticData(companiesData);
      setCompaniesName(companiesData);
    }
  }, [companies]);

  const handleOnChangeInput = (text) => {
    if (text !== "") {
      const filteredCompaniesName = [];

      companies.forEach((element) => {
        if (element?.slug.toUpperCase().includes(text)) {
          filteredCompaniesName.push(element.slug);
        }
      });

      setCompaniesName(filteredCompaniesName);
    } else {
      setCompaniesName(companiesNameStaticData);
    }
  };

  const handleOnChangeCheckbox = (checkedValues) => {
    setBrandFilter(checkedValues)
  };

  return (
    companiesName && (
      <Space direction="vertical" size={12} className="brand-space">
        <Text className="brand-text">Brand</Text>
        <div className="brand-box">
          <Input
            className="brand-search"
            placeholder="Search brand"
            onChange={(e) => handleOnChangeInput(e.target.value.toUpperCase())}
          />
          <div className="brand-checkbox-container">
            <Checkbox.Group
              options={companiesName}
              onChange={(checkedValues) => handleOnChangeCheckbox(checkedValues)}
            />
          </div>
        </div>
      </Space>
    )
  );
}
