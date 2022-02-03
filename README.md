# [Portfolio](https://daehan0226.github.io/portfolio/)
<p align="center">
    <a href="https://daehan0226.github.io/portfolio/">
        <img src="https://github.com/daehan0226/portfolio/blob/main/client/public/images/project_portfolio_1.png" alt="portfolio" width="200"/>
    </a>
</p>

## Client
* ReactJS + Typescript + MUI + ContextAPI
* ESLint + Prettier

## Back
* AWS Lambda - 블로그 포스트 크롤링
* AWS ECR - 람다 함수 계층에 추가할 도커 이미지 저장
* GITHUB ACTIONS - 자동 배포
  * lambda/delopy 브랜치에 푸쉬하면  
    1. lambda 폴더 내의 도커파일로 도커 이미지 빌드
    2. 빌드된 이미지 AWS ECR로 푸쉬
    3. 업데이트된 ECR 이미지 URI로 Lambda 레이어 이미지 업데이트

   * 현재 위의 과정은 firebase_admin api 키가 도커 이미지 안에 없어서 람다함수가 정상적으로 작동하기 않음. labada/depoly.sh 스크립트로 aws cli 로그인/도커 이미지 빌드/ 이미지 태그 후 ECR로 푸쉬 / lambda 함수 업데이트(image uri 업데이트) 진행    
