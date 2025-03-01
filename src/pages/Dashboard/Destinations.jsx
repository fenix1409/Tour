import { Avatar, Card } from 'antd'
import React from 'react'
import { UserOutlined } from "@ant-design/icons";
import getTours from '../../service/getTours';

const Destination = () => {
    const data = getTours()
    return (
        <div className='flex flex-wrap justify-start gap-[25px]'>
            {data.tours.map(item => (
                <Card
                    key={item.id}
                    hoverable
                    style={{ width: 300, margin: "20px auto", borderRadius: "10px" }}
                    cover={
                        <img alt={item.name_en} src={item.tour_images[0]?.image_src} style={{ height: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }} />
                    }
                >
                    <Card.Meta
                        avatar={<Avatar size={50} icon={<UserOutlined />} />}
                        title={item.name_en}
                        description={item.text_en}
                    />
                </Card>
            ))}
        </div>
    )
}

export default Destination