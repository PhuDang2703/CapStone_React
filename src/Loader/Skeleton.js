import { Avatar, Card } from 'antd';
import { Col } from 'antd'
import { Alert, Space, Spin } from 'antd';

const { Meta } = Card;
export default function Skeleton() {
    return (
        <Col span={8} className='p-4'>
            <Card style={{ width: 300, marginTop: 16 }} loading={true}>
                <Meta
                    avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        </Col>
    )
}


export const Loader = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Space>
      <Spin style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 99, fontSize: 25 }} tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Space>
  </Space>
);
 