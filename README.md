# 스마트 편의점 운영 대시보드
대학교 내 편의점 운영자 및 관리자를 위한 웹 기반 대시보드 프로젝트입니다.  
재고 현황, AI 예측 수요, 발주 추천 정보를 한눈에 확인할 수 있도록 구성하는 것을 목표로 합니다.

## 프로젝트 소개
기존 편의점 운영에서는 시간대별 수요 변화를 정확히 반영하지 못해  
품절, 과잉 재고, 비효율적인 발주 문제가 발생할 수 있습니다.

이 프로젝트는 대학교 캠퍼스 내 편의점을 대상으로,  
운영자와 관리자가 보다 효율적으로 재고를 관리하고 발주 결정을 내릴 수 있도록 돕는  
대시보드형 웹 서비스를 구현하는 것을 목표로 합니다.

## 주요 기능
- 운영자 로그인 화면
- 재고 현황 패널
- AI 예측 수요 리포트
- 발주 추천 카드

## 기술 스택
- React
- Vite
- CSS
- 추후 적용 예정
  - Tailwind CSS
  - Chart.js 또는 Recharts

## 현재 구현 내용
- React 프로젝트 생성
- 로그인 페이지 분리
- 대시보드 페이지 분리
- CSS 파일 분리
- 대시보드 카드 3개 컴포넌트 분리
  - 재고 현황 카드
  - AI 예측 수요 카드
  - 발주 추천 카드

## 폴더 구조
```bash
src/
 ┣ LoginPage.jsx
 ┣ LoginPage.css
 ┣ DashboardPage.jsx
 ┣ DashboardPage.css
 ┣ InventoryCard.jsx
 ┣ ForecastCard.jsx
 ┣ OrderCard.jsx
 ┣ App.jsx
 ┣ App.css
 ┣ index.css
 ┗ main.jsx
