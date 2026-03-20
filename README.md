# Store Dashboard

대학교 편의점 운영자를 위한 관리자용 대시보드 웹 프로젝트입니다.  
재고 부족, 폐기 임박 상품, 매출 현황, 시간대별 방문 추이 등을 한눈에 확인할 수 있는 대시보드를 목표로 제작하고 있습니다.

## 프로젝트 소개
이 프로젝트는 대학 캠퍼스 편의점 운영 데이터를 효율적으로 관리할 수 있도록 돕는 관리자용 웹 서비스입니다.  
현재는 로그인 페이지와 대시보드 목업 화면을 중심으로 프론트엔드를 구현한 상태입니다.

## 주요 화면
- 로그인 페이지
- 운영자 대시보드
- 요약 카드
  - 오늘 매출
  - 재고 부족
  - 폐기 임박
  - 발주 필요
- 차트 영역
  - 주간 매출 추이
  - 시간대별 방문 추이
- 리스트 영역
  - 재고 부족 상품
  - 폐기 임박 상품
  - 인기 상품 TOP 5
  - 발주 추천 / 운영 인사이트

## 사용 기술
- React
- CSS
- Chart.js
- react-chartjs-2
- Vite

## 실행 방법
```bash
npm install
npm run dev

---

# 11. README 수정 후 GitHub에 올리는 방법

README 수정까지 했으면 다시 아래 순서로 하면 됩니다.

```bash
git add .
git commit -m "Update README and dashboard UI"
git pull origin main --rebase
git push origin main
