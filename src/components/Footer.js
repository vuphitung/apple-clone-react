import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    if (window.innerWidth <= 768) {
      setActiveFaq(activeFaq === index ? null : index);
    }
  };

  return (
    <footer className="footer">
      <Container className='footer-container'>
        <div className="footer-sections">
          {[
            { title: 'Mua Sắm Và Tìm Hiểu', links: ['Cửa Hàng', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Nhà', 'AirTag', 'Phụ Kiện'] },
            { title: 'Ví Apple', links: ['Ví', 'Apple Pay'] },
            { title: 'Tài Khoản', links: ['Quản Lý ID Apple Của Bạn', 'Tài Khoản Apple Store', 'iCloud.com'] },
            { title: 'Giải Trí', links: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Podcasts', 'Apple Books'] },
            { title: 'Apple Store', links: ['Ứng Dụng Apple Store', 'Apple Trade In', 'Tài Chính', 'Tình Trạng Đơn Hàng', 'Hỗ Trợ Mua Hàng'] },
            { title: 'Dành Cho Doanh Nghiệp', links: ['Apple Và Doanh Nghiệp', 'Mua Hàng Cho Doanh Nghiệp'] },
            { title: 'Cho Giáo Dục', links: ['Apple Và Giáo Dục', 'Mua Hàng Cho Bậc Đại Học'] },
            { title: 'Cho Chăm Sóc Sức Khỏe', links: ['Apple Trong Chăm Sóc Sức Khỏe', 'Mac Trong Chăm Sóc Sức Khỏe', 'Sức Khỏe Trên Apple Watch'] },
            { title: 'Giá Trị Cốt Lõi Của Apple', links: ['Trợ Năng', 'Môi Trường', 'Quyền Riêng Tư', 'Chuỗi Cung Ứng'] },
            { title: 'Về Apple', links: ['Newsroom', 'Lãnh Đạo Của Apple', 'Nhà Đầu Tư', 'Đạo Đức & Quy Tắc', 'Sự Kiện', 'Liên Hệ Apple'] }
          ].map((faq, index) => (
            <div key={index} className={`faq ${activeFaq === index ? 'active' : ''}`} onClick={() => toggleFaq(index)}>
              <div className="question">
                <h3>{faq.title}</h3>
                <svg className="icon" width="15" height="10" viewBox="0 0 42 25">
                  <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round" />
                </svg>
              </div>
              <div className="answer">
                <ul>
                  {faq.links.map((link, i) => (
                    <li key={i}><a href="/" onClick={(e) => e.preventDefault()}>{link}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p className="footer-note">Có nhiều cách để mua. Gọi 1800.8118 hoặc <a href="/" onClick={(e) => e.preventDefault()}>tìm Apple Store hoặc đại lý</a> gần bạn.</p>
          <div className="footer-legal">
            <p>Copyright © 2025 Apple Inc. Bảo lưu mọi quyền.</p>
            <div className="footer-links">
              <a href="/" onClick={(e) => e.preventDefault()}>Chính sách bảo mật</a>
              <span>|</span>
              <a href="/" onClick={(e) => e.preventDefault()}>Điều khoản sử dụng</a>
              <span>|</span>
              <a href="/" onClick={(e) => e.preventDefault()}>Bản đồ trang</a>
              <span>|</span>
              <a href="/" onClick={(e) => e.preventDefault()}>Việt Nam</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;