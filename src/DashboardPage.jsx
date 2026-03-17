import "./DashboardPage.css";
import InventoryCard from "./InventoryCard";
import ForecastCard from "./ForecastCard";
import OrderCard from "./OrderCard";

function DashboardPage() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">편의점 운영 대시보드</h1>
      <p className="dashboard-subtitle">
        재고 현황, AI 예측 수요, 발주 추천을 한눈에 확인할 수 있습니다.
      </p>

      <div className="dashboard-card-container">
        <InventoryCard />
        <ForecastCard />
        <OrderCard />
      </div>
    </div>
  );
}

export default DashboardPage;