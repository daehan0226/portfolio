# [Portfolio](https://daehan0226.github.io/portfolio/)
<p align="center">
    <a href="https://daehan0226.github.io/portfolio/">
        <img src="https://github.com/daehan0226/portfolio/blob/main/client/public/images/project_portfolio_1.png" alt="portfolio" width="200"/>
    </a>
</p>

## Client
* ReactJS + Typescript + MUI + ContextAPI(언어 설정, 로그인 상태 저장)
* ESLint + Prettier
* Github Actions을 통한 Github page에 배포 

## Back
* AWS Lambda - Python 크롤링 블로그 글 데이터 수집(하루에 한번)
* AWS ECR - 람다 함수 계층으로 지정할 도커 이미지 저장
* Google Login - 구글 로그인 연동(모바일에서는 크롬에서 가능) 및 타임라인 수정(관리자 접근 규칙 설정)
* GITHUB ACTIONS - 자동 배포(테스트 완료)
  * lambda/delopy 브랜치에 푸쉬
    1. lambda 폴더 내의 도커파일로 도커 이미지 빌드
    2. 빌드된 이미지 AWS ECR로 푸쉬
    3. 업데이트된 ECR 이미지 URI로 Lambda 레이어 이미지 업데이트

   * 현재 위의 과정은 firebase_admin api 키가 도커 이미지 안에 없어서 람다함수가 정상적으로 작동하기 않음
    1. github actions secrets 에 추가해서 도커 컴포즈 변수 설정 -> 도커 파일 환경 변수로 설정 후 람다 함수 안에서 firebase에 접근할 수도 있음
    2. 현재 - labada/depoly.sh 스크립트로 aws cli 로그인, 도커 이미지 빌드, 이미지 태그 후 ECR로 푸쉬, lambda 함수 업데이트(image uri 업데이트) 진행
