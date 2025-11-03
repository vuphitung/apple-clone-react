import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4;
  const interval = 4000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideCount);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            obs.unobserve(entry.target); // chỉ animate 1 lần
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.hero-section, .grid-item');
    elements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const moveSlider = (index) => setCurrentIndex(index);

  return (
    <main className="content">
      {/* ===== iPhone 15 Pro ===== */}
      <section className="hero-section hero-iphone15pro">
        <picture>
          <source media="(max-width:734px)" srcSet={process.env.PUBLIC_URL + '/images/hinh1-mobile.jpeg'} />
          <img src={process.env.PUBLIC_URL + '/images/hinh1.jpg'} alt="iPhone 15 Pro" loading="lazy" />
        </picture>
        <div className="hero-content">
          <h2>iPhone 15 Pro</h2>
          <p>Titan. Thật bền chắc. Thật nhẹ. Thật Pro</p>
          <div className="hero-buttons">
            <button className="btn btn-secondary">Tìm hiểu thêm</button>
            <button className="btn btn-primary">Mua</button>
          </div>
        </div>
      </section>

      <div className="spacer"></div>

      {/* ===== iPhone 15 ===== */}
      <section className="hero-section hero-iphone15">
        <picture>
          <source media="(max-width:734px)" srcSet={process.env.PUBLIC_URL + '/images/hinh2-mobile.jpeg'} />
          <img src={process.env.PUBLIC_URL + '/images/hinh2.jpeg'} alt="iPhone 15" loading="lazy" />
        </picture>
        <div className="hero-content">
          <h2>iPhone 15</h2>
          <p>Camera mới. Thiết kế mới. Mới lịm tim.</p>
          <div className="hero-buttons">
            <button className="btn btn-secondary">Tìm hiểu thêm</button>
            <button className="btn btn-primary">Mua</button>
          </div>
        </div>
      </section>

      <div className="spacer"></div>

      {/* ===== iPad Pro ===== */}
      <section className="hero-section hero-ipadpro">
        <picture>
          <source media="(max-width:734px)" srcSet={process.env.PUBLIC_URL + '/images/hinh6-mobile.jpeg'} />
          <img src={process.env.PUBLIC_URL + '/images/hinh6.jpg'} alt="iPad Pro" loading="lazy" />
        </picture>
        <div className="hero-content">
          <h2>iPad Pro</h2>
          <p>Mỏng không tưởng. Mạnh không ngờ</p>
          <div className="hero-buttons">
            <button className="btn btn-secondary">Tìm hiểu thêm</button>
            <button className="btn btn-primary">Mua</button>
          </div>
        </div>
      </section>

      <div className="spacer"></div>

      {/* ===== GRID SECTIONS ===== */}
      <Container fluid>
        <Row className="grid-section">
          <Col md={6} className="grid-item grid-airpods">
            <img src={process.env.PUBLIC_URL + '/images/hinh3.jpg'} alt="AirPods" loading="lazy" />
            <div className="grid-content">
              <h2>AirPods</h2>
              <p>Âm Thanh Thích Ứng. Đang phát</p>
              <div className="grid-buttons">
                <button className="btn btn-primary">Mua</button>
                <button className="btn btn-secondary">Tìm hiểu thêm</button>
              </div>
            </div>
          </Col>

          <Col md={6} className="grid-item grid-macbook-air">
            <img src={process.env.PUBLIC_URL + '/images/hinh3-ph.jpg'} alt="MacBook Air" loading="lazy" />
            <div className="grid-content">
              <h2>MacBook Air</h2>
              <p>Cỗ máy M3. Gọn bâng. Cân mọi việc</p>
              <div className="grid-buttons">
                <button className="btn btn-primary">Mua</button>
                <button className="btn btn-secondary">Tìm hiểu thêm</button>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="grid-section">
          <Col md={6} className="grid-item grid-watch-series">
            <img src={process.env.PUBLIC_URL + '/images/tr-hinh4.jpg'} alt="Apple Watch Series 9" loading="lazy" />
            <div className="grid-content">
              <h2>APPLE WATCH</h2>
              <h3>SERIES 9</h3>
              <p>Thông minh hơn. Sáng hơn. Quyền năng hơn</p>
              <div className="grid-buttons">
                <button className="btn btn-primary">Mua</button>
                <button className="btn btn-secondary">Tìm hiểu thêm</button>
              </div>
            </div>
          </Col>

          <Col md={6} className="grid-item grid-watch-ultra">
            <img src={process.env.PUBLIC_URL + '/images/ph-hinh4.jpg'} alt="Apple Watch Ultra 2" loading="lazy" />
            <div className="grid-content">
              <h2>APPLE WATCH</h2>
              <h3>ULTRA 2</h3>
              <p>Một đẳng cấp phiêu lưu mới</p>
              <div className="grid-buttons">
                <button className="btn btn-primary">Mua</button>
                <button className="btn btn-secondary">Tìm hiểu thêm</button>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="grid-section">
          <Col md={6} className="grid-item grid-ipad-air">
            <img src={process.env.PUBLIC_URL + '/images/tr-hinh5.jpg'} alt="iPad Air" loading="lazy" />
            <div className="grid-content">
              <h2>
                iPad <span style={{ fontFamily: "'Brush Script MT', cursive", color: '#bf5af2' }}>air</span>
              </h2>
              <p>Hai kích cỡ. Chip nhanh hơn. Đa zi năng</p>
              <div className="grid-buttons">
                <button className="btn btn-primary">Mua</button>
                <button className="btn btn-secondary">Tìm hiểu thêm</button>
              </div>
            </div>
          </Col>

          <Col md={6} className="grid-item grid-macbook-pro">
            <picture>
              <source media="(max-width:734px)" srcSet={process.env.PUBLIC_URL + '/images/ph-hinh5-mobile.jpeg'} />
              <img src={process.env.PUBLIC_URL + '/images/ph-hinh5.jpeg'} alt="MacBook Pro" loading="lazy" />
            </picture>
            <div className="grid-content">
              <h2>MacBook Pro</h2>
              <p>Chấn động. Ấn tượng</p>
              <div className="grid-buttons">
                <button className="btn btn-primary">Mua</button>
                <button className="btn btn-secondary">Tìm hiểu thêm</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* ===== SLIDER ===== */}
      <section className="slider-container">
        <div className="slider">
          <div
            className="list"
            style={{ transform: `translateX(-${100 * currentIndex}%)`, transition: 'transform 0.6s ease-out' }}
          >
            {[1, 2, 3, 4].map((num, i) => (
              <div className="item" key={i}>
                <picture>
                  <source media="(max-width:1000px)" srcSet={process.env.PUBLIC_URL + `/images/sile${num}-mobe.jpeg`} />
                  <img src={process.env.PUBLIC_URL + `/images/slide-${num}.jpg`} alt={`Slide ${num}`} loading="lazy" />
                </picture>
                <div className="slide-content">
                  <p>
                    {[
                      'Phiêu lưu. Có những bí mật không thể bị chôn vùi.',
                      'Tâm lý. Từ Steven Spielberg, Tom Hanks và Gary Goetzman.',
                      'Hình sự. Series mới.',
                      'Giải trí mới. Hứa hẹn gây sốc.'
                    ][i]}
                  </p>
                  <button className="btn">Xem Ngay</button>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <ul className="dots">
            {[0, 1, 2, 3].map((i) => (
              <li
                key={i}
                className={i === currentIndex ? 'active' : ''}
                onClick={() => moveSlider(i)}
              ></li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Home;
