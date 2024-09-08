프레임워크 : nestjs
DB : MySQL (local db 3306 포트 셋팅)
ORM : Prisma
DB 스키마 생성 스크립트 : schema.prisma 파일

서버 실행 방법
1. 소스 코드를 다운 받는다
2. 터미널을 열고, npm install 실행
3. npx prisma migrate dev 실행
4. npm install @prisma/client 실행
5. npm run start 실행

작성 API
1. board.controller.ts
    - 게시글 목록 API
    - 게시글 작성 API
    - 게시글 수정 API
    - 게시글 삭제 API
2. comments.controller.ts
    - 댓글 목록 API
    - 댓글 작성 API

3. notification.service.ts
    - 게시물 또는 댓글 등록 시 알림 기능 구현