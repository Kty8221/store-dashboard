import "./DashboardPage.css";

function DashboardPage({ onLogout }) {
  const inventoryList = [
    { name: "삼각김밥", stock: 4, status: "부족" },
    { name: "생수 500ml", stock: 7, status: "주의" },
    { name: "컵라면", stock: 3, status: "부족" },
    { name: "에너지바", stock: 10, status: "정상" },
  ];

  const forecastList = [
    { name: "바나나우유", forecast: "수요 증가 예상" },
    { name: "콜라 355ml", forecast: "오후 판매 상승 예상" },
    { name: "도시락", forecast: "점심 전 발주 추천" },
  ];

  const orderList = [
    { name: "삼각김밥", reason: "현재 재고 부족" },
    { name: "도시락", reason: "점심 시간 품절 위험" },
    { name: "콜라 355ml", reason: "기온 상승으로 수요 증가" },
  ];

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-top">
          <h2 className="logo">StoreDash</h2>
          <p className="sidebar-subtitle">Campus Store Admin</p>
        </div>

        <nav className="menu">
          <button className="menu-item active">대시보드</button>
          <button className="menu-item">재고 관리</button>
          <button className="menu-item">수요 예측</button>
          <button className="menu-item">발주 추천</button>
          <button className="menu-item">매출 분석</button>
          <button className="menu-item">설정</button>
        </nav>

        <button className="logout-btn" onClick={onLogout}>
          로그아웃
        </button>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>운영자 대시보드</h1>
            <p>재고, 수요 예측, 발주 추천 정보를 한눈에 확인합니다.</p>
          </div>
        </header>

        <section className="summary-grid">
          <div className="summary-card">
            <span className="card-label">전체 상품</span>
            <strong>8개</strong>
            <p>백엔드 mock 데이터 기준</p>
          </div>

          <div className="summary-card">
            <span className="card-label">재고 부족</span>
            <strong>2개</strong>
            <p>즉시 확인 필요</p>
          </div>

          <div className="summary-card">
            <span className="card-label">수요 예측</span>
            <strong>3건</strong>
            <p>판매 증가 예상</p>
          </div>

          <div className="summary-card">
            <span className="card-label">발주 추천</span>
            <strong>3건</strong>
            <p>예측 기반 추천</p>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel">
            <div className="panel-header">
              <h2>재고 현황</h2>
              <span>Inventory</span>
            </div>
            <ul className="item-list">
              {inventoryList.map((item) => (
                <li key={item.name}>
                  <div>
                    <strong>{item.name}</strong>
                    <p>현재 재고 {item.stock}개</p>
                  </div>
                  <span
                    className={`badge ${
                      item.status === "부족"
                        ? "danger"
                        : item.status === "주의"
                        ? "warn"
                        : "normal"
                    }`}
                  >
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2>수요 예측</h2>
              <span>Forecast</span>
            </div>
            <ul className="item-list">
              {forecastList.map((item) => (
                <li key={item.name}>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.forecast}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel full-width">
            <div className="panel-header">
              <h2>발주 추천</h2>
              <span>Order Recommendation</span>
            </div>
            <ul className="item-list">
              {orderList.map((item) => (
                <li key={item.name}>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.reason}</p>
                  </div>
                  <button className="mini-button">확인</button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DashboardPage;
import "./DashboardPage.css";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function DashboardPage({ onLogout }) {
  const inventoryList = [
    {name: "콜라", stock: 45, target: 20},
    {name: "삼각김밥", stock: 5, target: 20},
  ];
  const forecastList = [
    {day: "월", actual: 40, predicted: 42},
    {day: "화", actual: 30, predicted: 31},
    {day: "금", actual: 80, predicted: 75, event: "대학 축제"},
  ];
  const orderList = [
    { name: "참치마요 삼각김밥",
      current: 2,
      recommended: 15,
      reason: "오후 간식 수요 증가 예상",
    }
  ];
  const insights = [
    { type: "alert", 
      title: "수요 급증", 
      desc: "오늘 저녁 도시락 수요 40% 증가 예상"},
  ]


  const getInventoryStatus = (stock, target) => {
    if (stock < target) return "danger";
    if (stock <= target + 10) return "warn";
    return "normal";
  }
  const getInventoryLabel = (stock, target) => {
    if (stock < target) return "부족";
    if (stock <= target + 10) return "주의";
    return "정상";
  }

  // 차트 데이터
  const inventoryChartData = {
    labels: inventoryList.map((item) => item.name),
    datasets: [
      {
        label: "현재 재고",
        data: inventoryList.map((item) => item.stock),
        backgroundColor: inventoryList.map((item) =>
          item.stock < item.target ? "#ef4444" : "#3b82f6"),
        borderRadius: 6,
      },
      {
        label: "적정 재고선",
        data: inventoryList.map((item) => item.target),
        backgroundColor: "#dbeafe",
        borderRadius: 6,
      },
    ],
  }
  const forecastChartData = {
    labels: forecastList.map((item) => item.day),
    datasets: [
      {
        label: "실제 수요",
        data: forecastList.map((item) => item.actual),
        backgroundColor: "#cbd5e1",
        borderRadius: 6,
      },
      {
        label: "AI 예측",
        data: forecastList.map((item) => item.predicted),
        backgroundColor: "#3b82f6",
        borderRadius: 6,
      },
    ],
  }
  const chartOptions = {
    reponsive: true,
    maintainAspectRatio: false,
    plugins: {
      legned: {
        position: "bottom",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepsize: 10,
        },
      },
    },
  }

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className = "sidebar-top">
          <h2 className = "logo">Smart Shelf</h2>
          <p className = "sidebar-subtitle">Coopsket Admin(IT)</p>

          <nav className="top-menu">
              <button className="menu-item active">대시보드</button>
              <button className="menu-item">재고 관리</button>
              <button className="menu-item">수요 예측</button>
              <button className="menu-item">발주 추천</button>
              <button className="menu-item">설정</button>
            </nav>

            <button className="logout-btn" onClick={onLogout}>
              로그아웃
            </button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>운영자 대시보드</h1>
            <p>재고, 수요 예측, 발주 추천 정보를 한눈에 확인합니다.</p>
          </div>
        </header>

        <section className="content-grid">
          <div className="panel">
            <div className="panel-header">
              <h2>재고 현황</h2>
              <span>Inventory</span>
            </div>
            <div className="chart-box">
              <Bar data={inventoryChartData} options={chartOptions} />
            </div>
            <ul className="item-list">
              {inventoryList.map((item)=> (
                <li key={item.name}>
                  <div>
                    <strong>{item.name}</strong>
                    <p>현재 재고 {item.stock}개 / 적정 재고 {item.target}개</p>
                  </div>
                  <span className=
                    {`badge ${getInventoryStatus(item.stock, item.target)}`}>
                    {getInventoryLabel(item.stock, item.target)}
                    </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2> AI 수요 예측</h2>
              <span>Actual vs Prediction</span>
            </div>
            <div className="chart-box">
              <Bar data={forecastChartData} options={chartOptions} />
            </div>
            <ul className="item-list">
              {forecastList.map((item) => (
                <li key={item.day}>
                  <div>
                    <strong>{item.day}요일</strong>
                      <p>실제 수요 {item.actual} / AI 예측 {item.predicted}</p>
                      {item.event && <p>이벤트: {item.event}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2>발주 추천</h2>
              <span>Order Recommendation</span>
            </div>
            <ul className="item-list">
              {orderList.map((item) => (
                <li key={item.name}>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.reason}</p>
                  </div>
                  <button className="mini-button">확인</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2>오늘의 인사이트</h2>
              <span>Insights</span>
            </div>
            <ul className="item-list">
              {insights.map((item) =>  (
                <li key={item.title}>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                  <span className={`badge ${item.type}`}>
                    {item.type === "alert"
                    ? "급증"
                    : item.type === "warning"
                    ? "주의"
                    : item.type === "info"
                    ? "정보"
                    : "정상"
                  }
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );

}

export default DashboardPage;