import React from "react";
import { Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import getTours from "../../../service/getTours";

const TourCard = () => {
    const tour = getTours()
    console.log(tour.tours)
    return (
        <Card
            hoverable
            style={{ width: 300, margin: "20px auto", borderRadius: "10px" }}
            cover={
                <img alt={tour.name_en} src={tour.tour_images[0]?.image_src} style={{ height: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }} />
            }
            >
            <Card.Meta
                avatar={<Avatar size={50} icon={<UserOutlined />} />}
                title={tour.tours.name_en}
                description={tour.tours.text_en}
            />
        </Card>
    );
};

export default TourCard