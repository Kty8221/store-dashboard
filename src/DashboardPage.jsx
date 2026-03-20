import "./DashboardPage.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DashboardPage() {
  const summaryData = [
    { title: "오늘 매출", value: "₩458,000", desc: "어제 대비 +12%" },
    { title: "재고 부족", value: "8개", desc: "즉시 확인 필요" },
    { title: "폐기 임박", value: "5개", desc: "오늘 점검 권장" },
    { title: "발주 필요", value: "3건", desc: "우선 처리 필요" },
  ];

  const lowStockItems = [
    { name: "삼각김밥 참치마요", stock: 3 },
    { name: "컵라면 매운맛", stock: 4 },
    { name: "생수 2L", stock: 2 },
    { name: "초코우유", stock: 5 },
    { name: "에너지드링크", stock: 3 },
  ];

  const expiringItems = [
    { name: "도시락 불고기정식", remain: "오늘 마감" },
    { name: "샌드위치 햄치즈", remain: "1일 남음" },
    { name: "우유 500ml", remain: "1일 남음" },
    { name: "김밥 야채", remain: "오늘 마감" },
  ];

  const topProducts = [
    { name: "컵라면 매운맛", count: 42 },
    { name: "삼각김밥 참치마요", count: 37 },
    { name: "콜라 500ml", count: 31 },
    { name: "초코우유", count: 28 },
    { name: "아이스커피", count: 25 },
  ];

  const insights = [
    "중간고사 기간으로 야식류 수요 증가가 예상됩니다.",
    "음료 카테고리 판매량이 전일 대비 상승했습니다.",
    "저녁 시간대 방문 수가 가장 높아 추가 진열이 필요합니다.",
  ];

  const salesChartData = {
    labels: ["월", "화", "수", "목", "금", "토", "일"],
    datasets: [
      {
        label: "주간 매출",
        data: [320000, 410000, 390000, 460000, 520000, 610000, 480000],
        backgroundColor: "rgba(59, 130, 246, 0.7)",
        borderRadius: 8,
      },
    ],
  };

  const visitChartData = {
    labels: ["06시", "09시", "12시", "15시", "18시", "21시"],
    datasets: [
      {
        label: "시간대별 방문 추이",
        data: [12, 28, 41, 33, 49, 26],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 99, 235, 0.12)",
        tension: 0.35,
        fill: true,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-top">
          <div>
            <h2 className="logo">Store Dashboard</h2>
            <p className="sidebar-subtitle">편의점 운영 관리 시스템</p>
        </div>

        <ul className="menu">
         <li className="active">대시보드</li>
          <li>재고 관리</li>
          <li>발주 관리</li>
          <li>매출 분석</li>
          <li>알림</li>
          <li>설정</li>
          </ul>
        </div>

    <button className="logout-btn">로그아웃</button>
</aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <h1>조선대학교 IT융합대학 CoopsKet 운영 현황</h1>
            <p>오늘 매장의 핵심 데이터를 한눈에 확인하세요.</p>
          </div>
          <div className="admin-box">
            <span>관리자님</span>
            <p>2026.03.20</p>
          </div>
        </header>

        <section className="summary-section">
          {summaryData.map((item, index) => (
            <div className="summary-card" key={index}>
              <h3>{item.title}</h3>
              <strong>{item.value}</strong>
              <p>{item.desc}</p>
            </div>
          ))}
        </section>

        <section className="dashboard-grid">
          <div className="panel chart-panel">
            <h2>주간 매출 추이</h2>
            <div className="chart-wrap">
              <Bar data={salesChartData} options={barOptions} />
            </div>
          </div>

          <div className="panel chart-panel">
            <h2>시간대별 방문 추이</h2>
            <div className="chart-wrap">
              <Line data={visitChartData} options={lineOptions} />
            </div>
          </div>

          <div className="panel">
            <h2>재고 부족 상품</h2>
            <ul className="list-box">
              {lowStockItems.map((item, index) => (
                <li key={index}>
                  <div>
                    <p className="item-name">{item.name}</p>
                    <span className="item-sub">남은 수량 {item.stock}개</span>
                  </div>
                  <span className="status danger">부족</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel">
            <h2>폐기 임박 상품</h2>
            <ul className="list-box">
              {expiringItems.map((item, index) => (
                <li key={index}>
                  <div>
                    <p className="item-name">{item.name}</p>
                    <span className="item-sub">{item.remain}</span>
                  </div>
                  <span className="status warning">점검</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel">
            <h2>인기 상품 TOP 5</h2>
            <ul className="rank-box">
              {topProducts.map((item, index) => (
                <li key={index}>
                  <div className="rank-left">
                    <span className="rank-number">{index + 1}</span>
                    <span>{item.name}</span>
                  </div>
                  <strong>{item.count}개</strong>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel insight-panel">
            <h2>발주 추천 / 운영 인사이트</h2>
            <div className="insight-card">
              <h3>오늘의 추천</h3>
              <p>
                저녁 시간대 방문량 증가와 라면류 판매 상승이 보여,
                <strong> 컵라면·삼각김밥·음료 발주량을 소폭 늘리는 것</strong>이
                좋아 보입니다.
              </p>
            </div>

            <ul className="notice-box">
              {insights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DashboardPage;