import React, { Component } from "react";
import { Skeleton, Card, Avatar, Tag, Input, Menu, Dropdown } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  MedicineBoxOutlined,
  FilterOutlined
} from "@ant-design/icons";
import data from "../../mock/provider";
import filterData from "../../mock/filter-data";
const { Meta } = Card;
const { Search } = Input;
const { SubMenu } = Menu;

class ProviderListing extends Component {
  render() {
    const menu = (
      <Menu>
        <SubMenu title="States">
          {filterData.states.map((state, index) => <Menu.Item key={index}>{state}</Menu.Item>)}
        </SubMenu>
        <SubMenu title="Profession">
          {filterData.professions.map((profession, index) => <Menu.Item key={index}>{profession}</Menu.Item>)}
        </SubMenu>
      </Menu>
    );
    return (
      <div>
        <Card className="flex items-center justify-between mx-auto" style={{ marginTop: 16, maxWidth: 600 }}>
          <Search
            placeholder="Search by name, profession and area"
            loading={false}
          />
          <Dropdown overlay={menu}>
            <FilterOutlined />
          </Dropdown>
        </Card>
        {data.map((item, index) => (
          <Card
            key={index}
            style={{ marginTop: 16, maxWidth: 600 }}
            actions={[
              <PhoneOutlined />,
              <MailOutlined />,
              <MedicineBoxOutlined />
            ]}
            className="mx-auto"
          >
            <Skeleton loading={false} avatar active>
              <Meta
                avatar={
                  <Avatar
                    style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
                  >{`${item.FirstName.split("")[0]} ${
                    item.LastName.split("")[0]
                  }`}</Avatar>
                }
                title={`${item.FirstName} ${item.LastName}`}
                description={
                  <div className="flex items-center">
                    <Tag color="blue">{item.ProfessionName}</Tag>
                    <Tag color="blue">{`${item.Addresses[0].City}, ${item.Addresses[0].State}`}</Tag>
                  </div>
                }
              />
            </Skeleton>
          </Card>
        ))}
      </div>
    );
  }
}
export default ProviderListing;
