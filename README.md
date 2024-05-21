<!-- 프로젝트명 -->
# SuperMall 프로젝트 (MLB 사이트 Clone Coding)


<!-- 프로젝트 요약 설명 -->
`MLB 쇼핑몰 사이트를 프론트와 백엔드가 협업하여 구현하는 프로젝트`


<!-- 프로젝트 로고 이미지 -->
<div align="center">
  <br>
  <a href="">
    <img src="https://github.com/BE02-2st-project/frontend-supermall/assets/111291076/dd28b098-0bc3-483a-b409-fce5a42acaa9" width="300px"/>
  </a>
  <br>
</div>


<!-- 프로젝트 기술스택 뱃지 -->
<div align="center">
  <img src="https://img.shields.io/badge/javascript-F7DF1E.svg?style=flat&logo=javascript&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=white" />
  <img src="https://img.shields.io/badge/styled components-DB7093.svg?style=flat&logo=styled-components&logoColor=white" />
</div>
<div align="center">
  <img src="https://img.shields.io/badge/Java-da1d21.svg?style=flat&logo=Java&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring-6DB33F.svg?style=flat&logo=Spring&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-4479A1.svg?style=flat&logo=MySQL&logoColor=white" />
</div>


<!-- Demo/메인 이미지 -->
# Main Screen
`데모영상`  https://youtu.be/R2bsDQv-r0o   
`배포링크`  https://frontend-supermall.vercel.app (서버 내림)

<div align="center">
  <img src="https://github.com/BE02-2st-project/frontend-supermall/assets/111291076/921a9844-0b15-4c9c-ba1f-840056e9834a" width="100%"/>
</div>


<!-- 프로젝트 개요 -->
# Overview
> **1. 프로젝트 기획 이유**  
: MLB 쇼핑몰의 주요 기능을 클론코딩하면서 쇼핑몰 사이트의 개발 프로세스를 이해하고, 운영에 필요한 기술들을 습득하고 기술적 역량을 높이며, 프론트엔드와 백엔드의 협업을 수행하기 위함
>  
> **2. 프로젝트 기간** : 2024. 03. 11 ~ 2024. 03. 22 (2주)  
>  
> **3. 프로젝트 수행 인원** : 프론트엔드 3명, 백엔드 3명
>   
> **4. 개발환경**  
> * FrontEnd : JavaScript, React, styled-components
> * BackEnd : Java, Spring Boot, MySQL  
> * 버전 관리 및 협업 : Git & Github, Notion, Figma  
> * 배포 : Vercel
>
> **5. Branch 전략** : Git-Flow (main, develop, feature)
> 
> **6. 프로젝트 페이지 및 기능** : 로그인, 회원가입, SNS 로그인, 메인화면, 상품 리스트 페이지, 상품 상세 페이지, 장바구니 페이지, 주문 확인 페이지, 마이페이지


<!-- 프로젝트 세부 내용 -->
# Detail


<!-- 로그인 & 회원가입 -->
<div align="center">
<table>
  <tr>
    <td><img src="https://github.com/BE02-2st-project/frontend-supermall/assets/111291076/a418963b-42fc-4f9a-9933-b0a45e41f39e" alt="Image 1" height="300" /></td>
    <td><img src="https://github.com/BE02-2st-project/frontend-supermall/assets/111291076/c6884b2e-83be-45fa-acb6-4091aa009051" alt="Image 2" height="300" /></td>
  </tr>
</table>
</div>

**1. 로그인 & 회원가입**  
  * 네이버 로그인, 카카오 로그인 (OAuth) 구현  
  * 아이디 저장 기능  
  * 유효성 검사 : 모든 항목이 유효해야 Submit 버튼 활성화, 에러 메세지는 onBlur로, 에러 메세지 뜬 후 올바른 형식으로 입력 시 onChange로 에러 메세지 사라지도록 구현  
  * 입력 항목 형식이 모두 맞아도 이용약관 필수 항목이 체크되어야 Submit 버튼 활성화됨  


<!-- 메인페이지 -->
<div align="center">
<table>
  <tr>
    <td><img src="https://github.com/BE02-2st-project/frontend-supermall/assets/111291076/a2971876-099a-460e-961e-7f55ac4ed9a1" alt="Image 1" height="300" /></td>
    <td><img src="https://github.com/BE02-2st-project/frontend-supermall/assets/111291076/52eda04b-0085-4d44-9f2f-b780e92ceec4" alt="Image 2" height="300" /></td>
  </tr>
</table>
</div>

**2. Header & Footer**  
   * 최상단 검은 라인 밑의 흰 배경의 헤더 부분 고정 - 스크롤시 반투명으로 전환  
   * 상품 검색 기능  
   * 사람 아이콘 Hover시 드롭다운메뉴 표시 - 로그인 전에는 [로그인, 회원가입], 로그인 후에는 [마이페이지]로 전환됨  

**3. 메인 페이지**  
   * 메인 이미지 슬라이드(자동 넘김, 클릭시 넘김 모두 가능)  
   * SNS 이미지, 더보기 클릭시 SNS 이미지 추가  
   * 스크롤시 우측 하단에 최상단으로 이동시키는 버튼  


<!-- 상품 리스트 & 상세 페이지 -->
<div align="center">
<table>
  <tr>
    <td><img src="https://github.com/BE02-2st-project/frontend-supermall/assets/111291076/a2971876-099a-460e-961e-7f55ac4ed9a1" alt="Image 1" height="300" /></td>
    <td><img src="https://github.com/BE02-2st-project/frontend-supermall/assets/111291076/52eda04b-0085-4d44-9f2f-b780e92ceec4" alt="Image 2" height="300" /></td>
  </tr>
</table>
</div>

**4. 상품 리스트**  
   * 상품 리스트 - 필터, 페이지네이션  
   * 상품 컴포넌트 Hover시 다른 사진으로 전환  
   * slick 라이브러리로 상세 페이지의 상품 이미지 슬라이더 구현  
   * 바로구매 클릭시 로그인 되어있으면 주문확인 페이지로 이동되고, 로그인 전이면 로그인 Modal창 Open  
   * 장바구니 클릭시 장바구니에 상품이 담겨지고 [계속 쇼핑하기, 장바구니 보기] 확인창 Open  


<!-- 장바구니 & 주문확인 페이지 -->
<div align="center">
<table>
  <tr>
    <td><img src="https://github.com/BE02-2st-project/frontend-supermall/assets/111291076/fa4150a0-ed34-4be9-97ce-f51835bf9c56" alt="Image 1" height="300" /></td>
    <td><img src="https://github.com/BE02-2st-project/frontend-supermall/assets/111291076/e9c561c0-23f2-461e-9b69-193b233e906d" alt="Image 2" height="300" /></td>
  </tr>
</table>
</div>


**5. 장바구니 & 주문확인 페이지**  
   * 장바구니 페이지에서 주문하기 버튼 클릭시 주문확인 페이지로 이동됨 (또는 상단 주문/결제 버튼 클릭시에도 이동)  
   * 장바구니 페이지에서는 수량 조정 및 삭제 가능  
   * 주문 확인 페이지에서 주문 취소 가능  


<!-- 마이페이지 -->
<div align="center">
<table>
  <tr>
    <td><img src="https://github.com/BE02-2st-project/frontend-supermall/assets/111291076/10780eeb-6051-4fab-a989-486912480061" alt="Image 1" height="300" /></td>
    <td><img src="https://github.com/BE02-2st-project/frontend-supermall/assets/111291076/6da11a9e-0c3d-4e56-a6fb-a143cd09f4a7" alt="Image 2" height="300" /></td>
  </tr>
</table>
</div>


**6. 마이페이지 & 회원정보수정 페이지**  
   * 마이페이지에 소메뉴 리스트(장바구니, 주문페이지 등)  
   * 회원정보수정에서 react-daum-postcode 라이브러리로 주소 수정  


<!-- 프로젝트 회고 -->
# Retrospective

**1. 개선하고 싶은 점**  
  * 결제 기능
  * 판매 상품 등록 기능(백엔드에서는 구현이 되었지만 시간상 프론트에서 미완성)
    
**2. 회고**  
   * 전체 회의, 각 팀별 회의, CTO끼리의 회의를 주기적으로 진행하며 진행 상황 공유와 우선순위 공유 등의 활발한 협업 진행  
   * 사용자 입장에서 생각하여 MLB 사이트에서 유효성 검사와 마이페이지 소메뉴 등의 UI 개선 시도  
   * 기술 스택의 다양한 활용으로 기술적 역량 향상  
   * 다양한 문제를 접하면서 문제 해결 능력 키움
   * GitFlow 전략을 적용한 버전 관리
   * 초반 설계에 대한 아쉬움
