import { Button, Col, Row } from 'antd';

export const Inquire = () => (
  <section
    style={{
      backgroundImage: 'url(https://via.placeholder.com/1980x618)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div style={{ width: '100%' }}>
      <div
        style={{
          width: '500px',
          marginRight: '70px',
          marginLeft: 'auto'
        }}
      >
        <div style={{ maxWidth: 600, zIndex: 1 }}>
          <p style={{ textAlign: 'end' }}>Providing Full Range Of Transportation Worldwide.</p>
          <h5 style={{ fontSize: 45, textAlign: 'end' }}>
            Global Logistics Partner To World's Famous Brands For Over 25 Years!
          </h5>
        </div>
        <div style={{ height: 377 }}>
          <Row>
            <Col xs={24} style={{ height: 54 }}>
              <Row>
                <Col xs={12} style={{ textAlign: 'center' }}>
                  Request a Quote
                </Col>
                <Col
                  xs={12}
                  style={{
                    backgroundColor: '#f50e0e52',
                    height: 54,
                    textAlign: 'center'
                  }}
                >
                  Track & Trace
                </Col>
              </Row>
            </Col>
            <Col
              xs={24}
              style={{
                backgroundColor: 'white'
              }}
            >
              <div style={{ height: 317 }}>[ Form ]</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
    <div style={{ backgroundColor: 'white' }}>
      <Row>
        <Col md={12}>
          <p style={{ color: 'red' }}> Dedicated Customer Team & An Agile Services </p>
          <p style={{ fontSize: 45 }}>Global Logistics Partner To World's Famous Brands!! </p>
        </Col>
        <Col md={12}>
          <Row>
            <Col xs={24}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium accusamus est, voluptate
              similique exercitationem? Nisi corrupti nam velit. Provident pariatur cumque natus dolores eligendi hic
              commodi. Consequuntur, corporis eaque?
            </Col>

            <Col xs={24}>
              <Row>
                <Col xs={24} sm={4}>
                  <Button title="Pricing & Plans">ssw</Button>
                </Col>

                <Col xs={24} sm={4} style={{ textAlign: 'center' }}>
                  <div style={{ width: 50, height: 50, backgroundColor: 'green', display: 'inline-block' }} />
                </Col>
                <Col xs={12} sm={8}>
                  <p>Sales representative </p>
                  <p>+1-987 (454) 987</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <div style={{ textAlign: 'center' }}>
        {Array.from({ length: 5 }).map((value, key) => (
          <div
            key={key}
            style={{ backgroundColor: 'blue', height: 60, width: 100, display: 'inline-block', margin: 3 }}
          />
        ))}
      </div>
    </div>
  </section>
);
