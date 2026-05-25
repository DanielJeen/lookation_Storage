'use strict';

// ============================================================
// STATE
// ============================================================
const state = {
  flowStep: 'step-upload',
  photoUrl: null,
  location: '',
  people: 2,
  detectedConcept: null,
  selectedConcept: null,
  selectedPlaces: [],
  currentCategory: '카페',
  fitmapLocation: '전체',
  fitmapVibe: '전체',
};

// ============================================================
// CONCEPTS
// ============================================================
const CONCEPTS = [
  {
    id: 'naejoong',
    label: '느좋',
    emoji: '✨',
    headline: '느낌 좋은 날!',
    desc: '트렌디한 핫플에서 인생샷 남기기',
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
    analysisText: '오늘 핏에서 트렌디한 에너지가 느껴져요! 세련된 핫플에서 인생샷 찍는 날로 딱이에요.',
    vibes: ['느좋'],
  },
  {
    id: 'healing',
    label: '힐링',
    emoji: '🌿',
    headline: '힐링이 필요해',
    desc: '여유롭고 평화로운 데이트',
    gradient: 'linear-gradient(135deg, #43b89c 0%, #a8e063 100%)',
    analysisText: '편안하고 자연스러운 룩이에요. 여유롭게 걷고 쉬는 힐링 데이트가 딱 어울려요!',
    vibes: ['힐링'],
  },
  {
    id: 'romantic',
    label: '로맨틱',
    emoji: '💕',
    headline: '로맨틱한 저녁',
    desc: '분위기 있는 둘만의 시간',
    gradient: 'linear-gradient(135deg, #f953c6 0%, #b91d73 100%)',
    analysisText: '우아하고 세련된 룩이에요! 분위기 있는 레스토랑에서 로맨틱한 저녁을 즐겨요.',
    vibes: ['로맨틱'],
  },
  {
    id: 'casual',
    label: '캐주얼',
    emoji: '👟',
    headline: '편한 게 최고!',
    desc: '슬리퍼 끌고 동네 탐방',
    gradient: 'linear-gradient(135deg, #43c6ac 0%, #48CAE4 100%)',
    analysisText: '편안하고 자유로운 룩이에요. 부담 없이 골목 구석구석 탐방하는 캐주얼 데이트로!',
    vibes: ['캐주얼'],
  },
  {
    id: 'party',
    label: '파티 무드',
    emoji: '🎉',
    headline: '신나는 밤!',
    desc: '화려한 에너지 넘치는 밤',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    analysisText: '화려하고 자신감 넘치는 룩! 오늘은 신나게 밤을 즐겨요!',
    vibes: ['파티'],
  },
  {
    id: 'bro',
    label: '브로데이트',
    emoji: '🎮',
    headline: '게임하러 고!',
    desc: '친구들이랑 신나게 놀기',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    analysisText: '편하고 활동적인 룩이에요. 친구들이랑 게임하고 맛있는 것 먹는 코스로 가요!',
    vibes: ['브로'],
  },
];

// ============================================================
// PLACES DATA
// ============================================================
const PLACES = [
  // 홍대
  { id: 1, loc: '홍대', name: '연남동 카페드로잉', category: '카페', vibes: ['느좋', '로맨틱'], rating: 4.7, reviewCount: 1243, price: '$$', desc: '유럽 감성 인테리어로 유명한 카페. 포토스팟으로 인생샷 찍기 최고!', tags: ['인스타맛집', '유럽감성'], img: 'https://picsum.photos/seed/caf1/400/260' },
  { id: 2, loc: '홍대', name: '경의선숲길 카페', category: '카페', vibes: ['힐링', '캐주얼'], rating: 4.5, reviewCount: 876, price: '$', desc: '숲길 옆 아늑한 테라스 카페들. 산책하다 들어가기 딱 좋아요.', tags: ['산책', '테라스'], img: 'https://picsum.photos/seed/caf2/400/260' },
  { id: 3, loc: '홍대', name: '홍대 테라로사', category: '카페', vibes: ['느좋', '캐주얼'], rating: 4.6, reviewCount: 2341, price: '$$', desc: '스페셜티 커피 전문점. 커피 마니아들의 성지로 불리는 곳!', tags: ['스페셜티', '브런치'], img: 'https://picsum.photos/seed/caf3/400/260' },
  { id: 4, loc: '홍대', name: '루프탑 카페 온', category: '카페', vibes: ['파티', '로맨틱', '느좋'], rating: 4.8, reviewCount: 1023, price: '$$$', desc: '홍대 뷰가 한눈에 보이는 루프탑 카페. 석양 맞추면 완벽해요!', tags: ['루프탑', '뷰', '야경'], img: 'https://picsum.photos/seed/caf4/400/260' },

  { id: 5, loc: '홍대', name: '연남동 포케볼', category: '맛집', vibes: ['힐링', '느좋', '캐주얼'], rating: 4.6, reviewCount: 987, price: '$$', desc: '신선한 재료로 만든 하와이 포케볼. 건강하고 예뻐요!', tags: ['건강식', '인스타맛집'], img: 'https://picsum.photos/seed/fd1/400/260' },
  { id: 6, loc: '홍대', name: '홍대 돈카츠 명가', category: '맛집', vibes: ['캐주얼', '브로'], rating: 4.5, reviewCount: 2109, price: '$$', desc: '바삭하고 두꺼운 돈카츠. 웨이팅 있지만 기다릴 가치 있어요!', tags: ['돈카츠', '현지맛집'], img: 'https://picsum.photos/seed/fd2/400/260' },
  { id: 7, loc: '홍대', name: '상수동 와인바', category: '맛집', vibes: ['로맨틱', '파티', '느좋'], rating: 4.7, reviewCount: 654, price: '$$$', desc: '분위기 있는 와인바. 데이트 마무리로 딱이에요!', tags: ['와인', '데이트', '분위기'], img: 'https://picsum.photos/seed/fd3/400/260' },
  { id: 8, loc: '홍대', name: '24시 닭발집', category: '맛집', vibes: ['파티', '브로'], rating: 4.3, reviewCount: 1876, price: '$', desc: '매콤한 닭발에 시원한 맥주. 밤 데이트의 클래식!', tags: ['야식', '닭발', '맥주'], img: 'https://picsum.photos/seed/fd4/400/260' },

  { id: 9, loc: '홍대', name: '홍대 버스킹 거리', category: '볼거리', vibes: ['느좋', '캐주얼', '브로'], rating: 4.8, reviewCount: 5421, price: '무료', desc: '매주 주말 다양한 버스커들의 공연. 퀄리티 높은 공연을 무료로!', tags: ['버스킹', '무료', '공연'], img: 'https://picsum.photos/seed/sv1/400/260' },
  { id: 10, loc: '홍대', name: '홍대 벽화골목', category: '볼거리', vibes: ['느좋', '로맨틱', '힐링'], rating: 4.4, reviewCount: 876, price: '무료', desc: '알록달록한 벽화가 있는 골목. 산책하며 구경하기 좋아요.', tags: ['벽화', '포토스팟', '무료'], img: 'https://picsum.photos/seed/sv2/400/260' },

  { id: 11, loc: '홍대', name: '두고두고 오락실', category: '놀거리', vibes: ['브로', '캐주얼', '파티'], rating: 4.6, reviewCount: 2341, price: '$$', desc: '레트로 게임기부터 최신 게임까지. 추억 속으로!', tags: ['게임', '레트로', '오락실'], img: 'https://picsum.photos/seed/pl1/400/260' },
  { id: 12, loc: '홍대', name: '방탈출 EXIT', category: '놀거리', vibes: ['브로', '파티', '로맨틱'], rating: 4.5, reviewCount: 1234, price: '$$$', desc: '짜릿한 방탈출 경험. 함께 머리 맞대고 탈출하면 더 재밌어요!', tags: ['방탈출', '스릴', '팀워크'], img: 'https://picsum.photos/seed/pl2/400/260' },
  { id: 13, loc: '홍대', name: '노래방 파라다이스', category: '놀거리', vibes: ['브로', '파티', '캐주얼'], rating: 4.4, reviewCount: 876, price: '$$', desc: '깔끔하고 최신곡 빵빵한 노래방. 마음껏 노래 부르기!', tags: ['노래방', '파티'], img: 'https://picsum.photos/seed/pl3/400/260' },

  { id: 14, loc: '홍대', name: '경의선숲길', category: '쉼터', vibes: ['힐링', '로맨틱', '캐주얼'], rating: 4.8, reviewCount: 9876, price: '무료', desc: '도심 속 아름다운 2.8km 숲길. 손잡고 걸으며 힐링하기 딱!', tags: ['산책', '힐링', '무료'], img: 'https://picsum.photos/seed/rs1/400/260' },
  { id: 15, loc: '홍대', name: '망원한강공원', category: '쉼터', vibes: ['힐링', '캐주얼', '로맨틱'], rating: 4.9, reviewCount: 23451, price: '무료', desc: '한강 뷰와 함께하는 피크닉. 치킨+맥주 한강피크닉 코스!', tags: ['한강', '야경', '피크닉'], img: 'https://picsum.photos/seed/rs2/400/260' },

  { id: 16, loc: '홍대', name: '하늘공원 억새밭', category: '경치', vibes: ['힐링', '로맨틱'], rating: 4.7, reviewCount: 5432, price: '무료', desc: '광활한 억새밭과 서울 전망. 계절마다 다른 풍경을 만나요.', tags: ['자연', '전망', '사진명소'], img: 'https://picsum.photos/seed/vw1/400/260' },
  { id: 17, loc: '홍대', name: '한강 야경 루프탑', category: '경치', vibes: ['로맨틱', '느좋', '파티'], rating: 4.8, reviewCount: 3241, price: '$$$', desc: '한강이 보이는 루프탑 바. 야경 보며 칵테일 한 잔!', tags: ['루프탑', '야경', '한강뷰'], img: 'https://picsum.photos/seed/vw2/400/260' },

  // 강남
  { id: 18, loc: '강남', name: '청담 카페 드피치', category: '카페', vibes: ['느좋', '로맨틱'], rating: 4.8, reviewCount: 2341, price: '$$$', desc: '청담동 럭셔리 카페. 우아한 분위기에서 브런치를 즐겨요.', tags: ['럭셔리', '브런치', '청담'], img: 'https://picsum.photos/seed/caf5/400/260' },
  { id: 19, loc: '강남', name: '압구정 로데오 카페골목', category: '카페', vibes: ['느좋', '캐주얼'], rating: 4.5, reviewCount: 1543, price: '$$', desc: '트렌디한 카페들이 즐비한 골목. 구경하며 들르기 좋아요.', tags: ['트렌디', '인스타'], img: 'https://picsum.photos/seed/caf6/400/260' },
  { id: 20, loc: '강남', name: '코엑스 스타벅스 리저브', category: '카페', vibes: ['캐주얼', '브로'], rating: 4.4, reviewCount: 3210, price: '$$', desc: '프리미엄 커피를 경험할 수 있는 리저브 매장.', tags: ['스타벅스', '프리미엄'], img: 'https://picsum.photos/seed/caf7/400/260' },

  { id: 21, loc: '강남', name: '도산공원 이탈리안', category: '맛집', vibes: ['로맨틱', '느좋'], rating: 4.7, reviewCount: 1876, price: '$$$', desc: '분위기 있는 이탈리안 레스토랑. 데이트 마무리로 완벽!', tags: ['파스타', '이탈리안', '데이트'], img: 'https://picsum.photos/seed/fd5/400/260' },
  { id: 22, loc: '강남', name: '강남 무한초밥', category: '맛집', vibes: ['브로', '캐주얼'], rating: 4.5, reviewCount: 4321, price: '$$', desc: '다양한 초밥을 무제한으로! 배불리 먹고 싶을 때.', tags: ['초밥', '뷔페', '가성비'], img: 'https://picsum.photos/seed/fd6/400/260' },
  { id: 23, loc: '강남', name: '압구정 한우 고기집', category: '맛집', vibes: ['로맨틱', '파티', '브로'], rating: 4.8, reviewCount: 3456, price: '$$$', desc: '최상급 한우를 즐길 수 있는 고기집. 특별한 날 강추!', tags: ['한우', '고기', '특별한날'], img: 'https://picsum.photos/seed/fd7/400/260' },

  { id: 24, loc: '강남', name: '코엑스 별마당도서관', category: '볼거리', vibes: ['힐링', '느좋', '로맨틱'], rating: 4.8, reviewCount: 12341, price: '무료', desc: '별처럼 거대한 도서관. 책 구경하며 사진 찍기 좋아요.', tags: ['도서관', '포토스팟', '코엑스'], img: 'https://picsum.photos/seed/sv3/400/260' },
  { id: 25, loc: '강남', name: '봉은사', category: '볼거리', vibes: ['힐링'], rating: 4.6, reviewCount: 5678, price: '무료', desc: '도심 속 고즈넉한 사찰. 조용히 산책하며 마음의 평화를.', tags: ['사찰', '힐링', '고요함'], img: 'https://picsum.photos/seed/sv4/400/260' },

  { id: 26, loc: '강남', name: '강남 VR 체험관', category: '놀거리', vibes: ['브로', '파티'], rating: 4.5, reviewCount: 1234, price: '$$$', desc: '최신 VR 게임 체험. 가상현실로 특별한 경험을!', tags: ['VR', '게임', '체험'], img: 'https://picsum.photos/seed/pl4/400/260' },
  { id: 27, loc: '강남', name: '탑볼링', category: '놀거리', vibes: ['브로', '캐주얼'], rating: 4.3, reviewCount: 876, price: '$$', desc: '쾌적한 볼링장. 내기 볼링으로 더 재미있게!', tags: ['볼링', '실내', '게임'], img: 'https://picsum.photos/seed/pl5/400/260' },

  { id: 28, loc: '강남', name: '선릉 근린공원', category: '쉼터', vibes: ['힐링', '캐주얼'], rating: 4.5, reviewCount: 5432, price: '무료', desc: '역세권에 있는 조용한 공원. 도심 속 잠깐의 여유.', tags: ['공원', '산책', '힐링'], img: 'https://picsum.photos/seed/rs3/400/260' },
  { id: 29, loc: '강남', name: '청담공원', category: '쉼터', vibes: ['힐링', '로맨틱'], rating: 4.6, reviewCount: 3210, price: '무료', desc: '조용하고 아름다운 청담동 공원. 데이트 산책 코스 추천!', tags: ['공원', '산책', '데이트'], img: 'https://picsum.photos/seed/rs4/400/260' },

  { id: 30, loc: '강남', name: '남산서울타워', category: '경치', vibes: ['로맨틱', '느좋'], rating: 4.9, reviewCount: 87654, price: '$$', desc: '서울 전경을 한눈에! 야경이 특히 아름다운 명소.', tags: ['야경', '전망대', '포토스팟'], img: 'https://picsum.photos/seed/vw3/400/260' },

  // 성수
  { id: 31, loc: '성수', name: '성수동 로스터리', category: '카페', vibes: ['느좋', '힐링'], rating: 4.7, reviewCount: 3456, price: '$$', desc: '힙한 창고 카페. 성수동 감성 물씬 풍기는 스페셜티 커피.', tags: ['스페셜티', '힙스터', '성수'], img: 'https://picsum.photos/seed/caf8/400/260' },
  { id: 32, loc: '성수', name: '성수 감성카페', category: '카페', vibes: ['로맨틱', '느좋'], rating: 4.6, reviewCount: 2123, price: '$$', desc: '인스타 감성 뿜뿜하는 성수동 분위기 카페.', tags: ['감성', '인스타', '포토스팟'], img: 'https://picsum.photos/seed/caf9/400/260' },
  { id: 33, loc: '성수', name: '팝업스토어 투어', category: '볼거리', vibes: ['느좋', '파티'], rating: 4.8, reviewCount: 8765, price: '무료/$', desc: '매달 바뀌는 트렌디한 팝업스토어. 최신 트렌드를 체험해요!', tags: ['팝업', '트렌디', '체험'], img: 'https://picsum.photos/seed/sv5/400/260' },
  { id: 34, loc: '성수', name: '서울숲', category: '쉼터', vibes: ['힐링', '캐주얼', '로맨틱'], rating: 4.9, reviewCount: 45678, price: '무료', desc: '드넓은 도심 공원. 사슴도 볼 수 있어요! 피크닉 추천 명소.', tags: ['공원', '피크닉', '사슴'], img: 'https://picsum.photos/seed/rs5/400/260' },
  { id: 35, loc: '성수', name: '성수 뚝섬 로컬맛집', category: '맛집', vibes: ['캐주얼', '브로', '힐링'], rating: 4.5, reviewCount: 2345, price: '$$', desc: '성수동 로컬 맛집 투어. 골목 탐방하며 찾는 재미!', tags: ['로컬', '골목', '탐방'], img: 'https://picsum.photos/seed/fd8/400/260' },
  { id: 36, loc: '성수', name: '뚝섬 한강 야경', category: '경치', vibes: ['로맨틱', '힐링'], rating: 4.8, reviewCount: 12345, price: '무료', desc: '뚝섬에서 보는 한강 야경. 저녁 데이트 코스로 최고!', tags: ['야경', '한강', '데이트'], img: 'https://picsum.photos/seed/vw4/400/260' },
  { id: 37, loc: '성수', name: '볼더링 클라이밍짐', category: '놀거리', vibes: ['브로', '캐주얼'], rating: 4.5, reviewCount: 1234, price: '$$', desc: '초보자도 할 수 있는 볼더링! 활동적인 데이트로 강추.', tags: ['클라이밍', '운동', '색다른'], img: 'https://picsum.photos/seed/pl7/400/260' },

  // 이태원
  { id: 38, loc: '이태원', name: '이태원 루프탑바', category: '카페', vibes: ['파티', '로맨틱', '느좋'], rating: 4.7, reviewCount: 3456, price: '$$$', desc: '이태원 전경이 보이는 루프탑 바. 선셋 타임에 방문 강추!', tags: ['루프탑', '야경', '이태원'], img: 'https://picsum.photos/seed/caf10/400/260' },
  { id: 39, loc: '이태원', name: '경리단길 탐방', category: '볼거리', vibes: ['느좋', '캐주얼', '힐링'], rating: 4.6, reviewCount: 7654, price: '무료', desc: '다양한 국적의 레스토랑과 이색 숍들이 늘어선 거리.', tags: ['이국적', '산책', '골목'], img: 'https://picsum.photos/seed/sv6/400/260' },
  { id: 40, loc: '이태원', name: '이태원 멕시칸', category: '맛집', vibes: ['파티', '브로', '느좋'], rating: 4.6, reviewCount: 4321, price: '$$', desc: '정통 멕시칸 요리와 마가리타. 이국적인 맛을 즐겨요!', tags: ['멕시칸', '이국적', '마가리타'], img: 'https://picsum.photos/seed/fd9/400/260' },
  { id: 41, loc: '이태원', name: '해방촌 공원', category: '쉼터', vibes: ['힐링', '로맨틱'], rating: 4.5, reviewCount: 2345, price: '무료', desc: '이태원과 남산 사이의 조용한 공원. 시원한 뷰가 일품.', tags: ['공원', '뷰', '조용함'], img: 'https://picsum.photos/seed/rs6/400/260' },
  { id: 42, loc: '이태원', name: '이태원 클럽거리', category: '놀거리', vibes: ['파티'], rating: 4.3, reviewCount: 12345, price: '$$$', desc: '서울 최고의 클럽 밀집 지역. 신나는 밤을 원한다면!', tags: ['클럽', '나이트라이프', '파티'], img: 'https://picsum.photos/seed/pl6/400/260' },
  { id: 43, loc: '이태원', name: '남산 야경 포인트', category: '경치', vibes: ['로맨틱', '느좋', '힐링'], rating: 4.9, reviewCount: 34567, price: '무료', desc: '남산에서 보는 서울 야경. 데이트 필수 코스!', tags: ['야경', '남산', '서울전망'], img: 'https://picsum.photos/seed/vw5/400/260' },
];

// ============================================================
// OUTFITS FOR FITMAP
// ============================================================
const OUTFITS = [
  { id: 1, loc: '홍대', vibe: '느좋', img: 'https://picsum.photos/seed/oo1/300/420', tags: ['미니스커트', '트렌치코트'], likes: 234 },
  { id: 2, loc: '홍대', vibe: '힐링', img: 'https://picsum.photos/seed/oo2/300/380', tags: ['린넨셔츠', '와이드팬츠'], likes: 187 },
  { id: 3, loc: '홍대', vibe: '캐주얼', img: 'https://picsum.photos/seed/oo3/300/400', tags: ['후드티', '조거팬츠'], likes: 145 },
  { id: 4, loc: '홍대', vibe: '로맨틱', img: 'https://picsum.photos/seed/oo4/300/450', tags: ['플로럴드레스', '힐'], likes: 312 },
  { id: 5, loc: '홍대', vibe: '파티', img: 'https://picsum.photos/seed/oo5/300/400', tags: ['새틴미니', '부츠'], likes: 278 },
  { id: 6, loc: '홍대', vibe: '캐주얼', img: 'https://picsum.photos/seed/oo6/300/360', tags: ['맨투맨', '청바지'], likes: 156 },
  { id: 7, loc: '강남', vibe: '느좋', img: 'https://picsum.photos/seed/oo7/300/420', tags: ['블레이저', '슬랙스'], likes: 321 },
  { id: 8, loc: '강남', vibe: '로맨틱', img: 'https://picsum.photos/seed/oo8/300/440', tags: ['라인드레스', '펌프스'], likes: 456 },
  { id: 9, loc: '강남', vibe: '캐주얼', img: 'https://picsum.photos/seed/oo9/300/380', tags: ['데님자켓', '스니커즈'], likes: 198 },
  { id: 10, loc: '강남', vibe: '힐링', img: 'https://picsum.photos/seed/oo10/300/410', tags: ['니트', '롱스커트'], likes: 267 },
  { id: 11, loc: '강남', vibe: '파티', img: 'https://picsum.photos/seed/oo11뭐/300/430', tags: ['크롭탑', '가죽팬츠'], likes: 398 },
  { id: 12, loc: '성수', vibe: '느좋', img: 'https://picsum.photos/seed/oo12/300/400', tags: ['빈티지자켓', '청바지'], likes: 389 },
  { id: 13, loc: '성수', vibe: '캐주얼', img: 'https://picsum.photos/seed/oo13/300/370', tags: ['오버핏티셔츠', '카고팬츠'], likes: 234 },
  { id: 14, loc: '성수', vibe: '힐링', img: 'https://picsum.photos/seed/oo14/300/420', tags: ['마린룩', '흰원피스'], likes: 301 },
  { id: 15, loc: '성수', vibe: '파티', img: 'https://picsum.photos/seed/oo15/300/450', tags: ['새틴원피스', '앵클부츠'], likes: 467 },
  { id: 16, loc: '이태원', vibe: '파티', img: 'https://picsum.photos/seed/oo16/300/420', tags: ['시퀸탑', '미니스커트'], likes: 512 },
  { id: 17, loc: '이태원', vibe: '느좋', img: 'https://picsum.photos/seed/oo17/300/400', tags: ['가죽자켓', '와이드팬츠'], likes: 423 },
  { id: 18, loc: '이태원', vibe: '로맨틱', img: 'https://picsum.photos/seed/oo18/300/440', tags: ['쉬폰블라우스', '슬랙스'], likes: 287 },
  { id: 19, loc: '이태원', vibe: '캐주얼', img: 'https://picsum.photos/seed/oo19/300/380', tags: ['반팔티', '데님반바지'], likes: 178 },
  { id: 20, loc: '홍대', vibe: '느좋', img: 'https://picsum.photos/seed/oo20/300/430', tags: ['코트', '머플러'], likes: 345 },
];

const LOCATIONS = ['홍대', '강남', '성수', '이태원'];

const PEOPLE_LABELS = {
  1: '혼자서 🚶', 2: '둘이서 💑', 3: '셋이서 👫👤', 4: '넷이서 👯',
};

// ============================================================
// NAVIGATION & STEP MANAGEMENT
// ============================================================
function showStep(stepId, fromNav = false) {
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById(stepId).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!fromNav) state.flowStep = stepId;

  // Nav active state
  document.getElementById('navCourse').classList.toggle('active', stepId !== 'step-fitmap');
  document.getElementById('navFitmap').classList.toggle('active', stepId === 'step-fitmap');

  // Progress bar
  const steps = ['step-upload', 'step-analysis', 'step-concept', 'step-recommendations', 'step-course'];
  const idx = steps.indexOf(stepId);
  const fill = idx >= 0 ? ((idx + 1) / steps.length) * 100 : 0;
  document.getElementById('progressFill').style.width = `${fill}%`;

  // Show/hide basket bar only on recommendations
  document.getElementById('basketBar').style.display =
    stepId === 'step-recommendations' ? 'flex' : 'none';

  // Step-specific init hooks
  if (stepId === 'step-course') renderCourseBuilder();
  if (stepId === 'step-fitmap') initFitmap();
}

function goToFlow() {
  showStep(state.flowStep);
}

// ============================================================
// STEP 1: UPLOAD
// ============================================================
// File upload
const uploadZone = document.getElementById('uploadZone');
const photoInput = document.getElementById('photoInput');

uploadZone.addEventListener('click', () => photoInput.click());
uploadZone.addEventListener('dragover', e => { e.preventDefault(); uploadZone.classList.add('drag-over'); });
uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('drag-over'));
uploadZone.addEventListener('drop', e => {
  e.preventDefault();
  uploadZone.classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) handlePhotoFile(file);
});

photoInput.addEventListener('change', () => {
  if (photoInput.files[0]) handlePhotoFile(photoInput.files[0]);
});

function handlePhotoFile(file) {
  const reader = new FileReader();
  reader.onload = e => {
    state.photoUrl = e.target.result;
    document.getElementById('previewImg').src = state.photoUrl;
    document.getElementById('uploadPlaceholder').style.display = 'none';
    document.getElementById('previewWrap').style.display = 'block';
  };
  reader.readAsDataURL(file);
}

function removePhoto() {
  state.photoUrl = null;
  photoInput.value = '';
  document.getElementById('uploadPlaceholder').style.display = 'block';
  document.getElementById('previewWrap').style.display = 'none';
}

// Location autocomplete
const locationInput = document.getElementById('locationInput');
const suggestionsBox = document.getElementById('suggestionsBox');

locationInput.addEventListener('input', () => {
  const val = locationInput.value.trim();
  if (!val) { suggestionsBox.classList.remove('open'); return; }
  const matches = LOCATIONS.filter(l => l.includes(val));
  if (matches.length === 0) { suggestionsBox.classList.remove('open'); return; }
  suggestionsBox.innerHTML = matches.map(loc =>
    `<div class="suggestion-item" onclick="selectLocation('${loc}')">
      📍 ${loc} <span>서울</span>
    </div>`
  ).join('');
  suggestionsBox.classList.add('open');
});

document.addEventListener('click', e => {
  if (!suggestionsBox.contains(e.target) && e.target !== locationInput) {
    suggestionsBox.classList.remove('open');
  }
});

function selectLocation(loc) {
  locationInput.value = loc;
  state.location = loc;
  suggestionsBox.classList.remove('open');
}

// People counter
function changePeople(delta) {
  state.people = Math.max(1, Math.min(8, state.people + delta));
  document.getElementById('peopleNum').textContent = state.people;
  document.getElementById('peopleLabel').textContent =
    PEOPLE_LABELS[state.people] || `${state.people}명이서 🎉`;
}

// Start analysis
function startAnalysis() {
  const loc = locationInput.value.trim();
  if (!loc) { showToast('장소를 입력해주세요! 📍'); return; }
  if (!state.photoUrl) { showToast('OOTD 사진을 올려주세요! 📸'); return; }

  state.location = loc;
  if (!LOCATIONS.includes(loc)) LOCATIONS.push(loc);

  showStep('step-analysis');
  runAnalysisAnimation();
}

function runAnalysisAnimation() {
  const emojis = ['👗', '👔', '👟', '🧥', '👒', '💃', '✨', '🔍'];
  const titles = [
    'AI가 오늘의 핏을 분석 중이에요',
    '색감과 스타일을 파악하고 있어요',
    '무드와 분위기를 읽는 중이에요',
    '딱 맞는 데이트 컨셉을 찾고 있어요',
  ];
  let i = 0;

  const emojiEl = document.getElementById('analysisEmoji');
  const titleEl = document.getElementById('analysisTitle');

  const interval = setInterval(() => {
    emojiEl.textContent = emojis[i % emojis.length];
    titleEl.textContent = titles[Math.floor(i / 2) % titles.length];
    i++;
  }, 400);

  setTimeout(() => {
    clearInterval(interval);
    finishAnalysis();
  }, 2800);
}

function finishAnalysis() {
  // Detect concept from photo (mocked — in real app, call vision AI)
  const detected = CONCEPTS[Math.floor(Math.random() * CONCEPTS.length)];
  state.detectedConcept = detected;
  state.selectedConcept = detected;

  // Populate result screen
  document.getElementById('resultThumbnail').src = state.photoUrl;
  document.getElementById('detectedEmoji').textContent = detected.emoji;
  document.getElementById('detectedLabel').textContent = detected.label;
  document.getElementById('resultHeadline').textContent = `${detected.emoji} ${detected.label} 무드!`;
  document.getElementById('resultDesc').textContent = detected.analysisText;

  renderConceptCards();
  showStep('step-concept');
}

// ============================================================
// STEP 3: CONCEPT SELECTION
// ============================================================
function renderConceptCards() {
  const grid = document.getElementById('conceptGrid');
  grid.innerHTML = CONCEPTS.map(c => `
    <div class="concept-card ${c.id === state.selectedConcept?.id ? 'selected' : ''}"
         style="background: ${c.gradient};"
         onclick="selectConcept('${c.id}')">
      ${c.id === state.detectedConcept?.id ? '<div class="ai-rec-badge">🤖 AI 추천</div>' : ''}
      <span class="concept-emoji">${c.emoji}</span>
      <span class="concept-name">${c.label}</span>
      <span class="concept-desc">${c.desc}</span>
    </div>
  `).join('');
}

function selectConcept(conceptId) {
  state.selectedConcept = CONCEPTS.find(c => c.id === conceptId);
  renderConceptCards();

  setTimeout(() => {
    state.selectedPlaces = [];
    renderRecommendations();
    showStep('step-recommendations');
  }, 300);
}

// ============================================================
// STEP 4: RECOMMENDATIONS
// ============================================================
function renderRecommendations() {
  const concept = state.selectedConcept;
  document.getElementById('recEmoji').textContent = concept.emoji;
  document.getElementById('recLabel').textContent = concept.label;
  document.getElementById('recLocationLabel').textContent = state.location;

  // Category tabs
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.currentCategory = tab.dataset.cat;
      renderPlaces();
    };
  });

  state.currentCategory = '카페';
  document.querySelector('.cat-tab[data-cat="카페"]').classList.add('active');
  renderPlaces();
  updateBasket();
}

function renderPlaces() {
  const grid = document.getElementById('placesGrid');
  const allVibes = state.selectedConcept.vibes;

  // Match by location (fuzzy) and concept vibes, then fall back to all places in category
  let places = PLACES.filter(p =>
    p.category === state.currentCategory &&
    p.vibes.some(v => allVibes.includes(v))
  );

  // If not enough, pad with same category regardless of loc
  if (places.length < 2) {
    places = PLACES.filter(p => p.category === state.currentCategory);
  }

  if (places.length === 0) {
    grid.innerHTML = `<div class="empty-state">
      <div class="empty-icon">🤔</div>
      <p>${state.location}에서 이 카테고리는 준비 중이에요!</p>
    </div>`;
    return;
  }

  grid.innerHTML = places.map(p => {
    const inBasket = state.selectedPlaces.some(s => s.id === p.id);
    return `
    <div class="place-card ${inBasket ? 'in-basket' : ''}" id="pc-${p.id}">
      <div class="place-selected-badge">✓</div>
      <img class="place-img" src="${p.img}" alt="${p.name}" loading="lazy"
           onerror="this.style.background='linear-gradient(135deg,#e8d5f5,#ffd6e0)'; this.src=''">
      <div class="place-body">
        <div class="place-name">${p.name}</div>
        <div class="place-meta">
          <span class="place-rating">★ ${p.rating}</span>
          <span>리뷰 ${p.reviewCount.toLocaleString()}</span>
          <span>${p.price}</span>
        </div>
        <div class="place-desc">${p.desc}</div>
        <div class="place-tags">${p.tags.map(t => `<span class="place-tag">#${t}</span>`).join('')}</div>
        <button class="add-btn" onclick="togglePlace(${p.id})">
          ${inBasket ? '✓ 코스에 추가됨' : '+ 코스에 추가'}
        </button>
      </div>
    </div>`;
  }).join('');
}

function togglePlace(placeId) {
  const place = PLACES.find(p => p.id === placeId);
  const idx = state.selectedPlaces.findIndex(p => p.id === placeId);

  if (idx >= 0) {
    state.selectedPlaces.splice(idx, 1);
    showToast(`${place.name} 제거됨`);
  } else {
    if (state.selectedPlaces.length >= 6) {
      showToast('최대 6곳까지 선택할 수 있어요!');
      return;
    }
    state.selectedPlaces.push(place);
    showToast(`${place.name} 추가! 🎉`);
  }

  renderPlaces();
  updateBasket();
}

function updateBasket() {
  const count = state.selectedPlaces.length;
  document.getElementById('basketCount').textContent = count;
  document.getElementById('basketBtn').disabled = count === 0;

  const chips = document.getElementById('basketChips');
  chips.innerHTML = state.selectedPlaces.slice(0, 3).map(p =>
    `<span class="basket-chip">${p.name}</span>`
  ).join('');
  if (count > 3) chips.innerHTML += `<span class="basket-chip">+${count - 3}곳</span>`;
}

// ============================================================
// STEP 5: COURSE BUILDER
// ============================================================
function renderCourseBuilder() {
  const container = document.getElementById('routePlaces');
  container.innerHTML = state.selectedPlaces.map((p, i) => `
    <div class="route-place-item" draggable="true" data-id="${p.id}">
      <div class="route-num">${i + 1}</div>
      <div class="route-place-name">${p.name}</div>
      <div class="route-place-cat">${p.category}</div>
      <span class="drag-icon">⋮⋮</span>
    </div>
  `).join('');

  setupDragDrop();
  document.getElementById('finalSection').style.display = 'none';
}

function setupDragDrop() {
  const items = document.querySelectorAll('.route-place-item');
  let dragEl = null;

  items.forEach(item => {
    item.addEventListener('dragstart', () => { dragEl = item; item.style.opacity = '0.5'; });
    item.addEventListener('dragend', () => { item.style.opacity = '1'; dragEl = null; });
    item.addEventListener('dragover', e => {
      e.preventDefault();
      const parent = item.parentNode;
      const rect = item.getBoundingClientRect();
      const after = e.clientY > rect.top + rect.height / 2;
      if (after) parent.insertBefore(dragEl, item.nextSibling);
      else parent.insertBefore(dragEl, item);
    });
    item.addEventListener('drop', () => {
      // Reorder state
      const newOrder = [...document.querySelectorAll('.route-place-item')]
        .map(el => state.selectedPlaces.find(p => p.id === parseInt(el.dataset.id)));
      state.selectedPlaces = newOrder;
      // Re-number
      document.querySelectorAll('.route-num').forEach((el, i) => { el.textContent = i + 1; });
    });
  });
}

function optimizeCourse() {
  const start = document.getElementById('startInput').value.trim();
  const end = document.getElementById('endInput').value.trim();

  if (!start || !end) {
    showToast('만나는 장소와 헤어지는 장소를 입력해주세요! 📍');
    return;
  }
  if (state.selectedPlaces.length === 0) {
    showToast('먼저 장소를 선택해주세요!');
    return;
  }

  // Simulate AI optimization (random shuffle for mock)
  const shuffled = [...state.selectedPlaces].sort(() => Math.random() - 0.5);
  state.selectedPlaces = shuffled;

  renderFinalCourse(start, end);
}

function renderFinalCourse(start, end) {
  const timeline = document.getElementById('courseTimeline');
  const concept = state.selectedConcept;

  const startItem = makeTimelineItem('start', '출발', start, '여기서 만나요! 👋', true, false);
  const endItem = makeTimelineItem('end', '도착', end, `여기서 헤어져요! 근처 ${state.location}역을 이용해요 🏃`, false, true);

  const placeItems = state.selectedPlaces.map((p, i) =>
    makeTimelineItem('place', `${i + 1}번째`, p.name, p.desc, false, false)
  ).join('');

  timeline.innerHTML = startItem + placeItems + endItem;

  const totalTime = state.selectedPlaces.length * 60 + 30;
  const hrs = Math.floor(totalTime / 60);
  const mins = totalTime % 60;

  const section = document.getElementById('finalSection');
  section.style.display = 'block';
  section.querySelector('h3').textContent =
    `🎯 오늘의 ${concept.emoji} ${concept.label} 코스 · 예상 ${hrs}시간 ${mins > 0 ? mins + '분' : ''}`;

  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function makeTimelineItem(type, label, name, desc, isStart, isEnd) {
  const cls = isStart ? 'start-item' : isEnd ? 'end-item' : '';
  const icon = isStart ? '🟢' : isEnd ? '🔴' : '📍';
  return `
  <div class="timeline-item">
    <div class="timeline-left ${cls}">
      <div class="timeline-step-num">${icon}</div>
    </div>
    <div class="timeline-content">
      <div class="timeline-label">${label}</div>
      <h4>${name}</h4>
      <p>${desc}</p>
    </div>
  </div>`;
}

function shareCourse() {
  if (navigator.share) {
    navigator.share({ title: 'OOTDATE 데이트 코스', text: '오늘의 데이트 코스를 공유해요!' });
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => showToast('링크가 복사됐어요! 🔗'));
  }
}

function saveCourse() {
  showToast('코스가 저장됐어요! 💾 (서비스 준비 중)');
}

// ============================================================
// FITMAP
// ============================================================
function initFitmap() {
  const locTabs = document.getElementById('fitmapLocTabs');
  const allLocs = ['전체', ...LOCATIONS];
  locTabs.innerHTML = allLocs.map(loc =>
    `<button class="loc-tab ${loc === '전체' ? 'active' : ''}"
             data-loc="${loc}" onclick="setFitmapLocation('${loc}')">${loc}</button>`
  ).join('');

  document.querySelectorAll('.vibe-pill').forEach(pill => {
    pill.onclick = () => {
      document.querySelectorAll('.vibe-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.fitmapVibe = pill.dataset.vibe;
      renderFitmapGrid();
    };
  });

  renderFitmapGrid();
}

function setFitmapLocation(loc) {
  state.fitmapLocation = loc;
  document.querySelectorAll('.loc-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.loc === loc);
  });
  renderFitmapGrid();
}

function renderFitmapGrid() {
  const grid = document.getElementById('fitmapGrid');
  let outfits = OUTFITS;

  if (state.fitmapLocation !== '전체')
    outfits = outfits.filter(o => o.loc === state.fitmapLocation);
  if (state.fitmapVibe !== '전체')
    outfits = outfits.filter(o => o.vibe === state.fitmapVibe);

  if (outfits.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="column-span:all">
      <div class="empty-icon">🤷</div>
      <p>아직 이 조합의 핏이 없어요. 첫 번째로 올려주세요!</p>
    </div>`;
    return;
  }

  grid.innerHTML = outfits.map(o => `
    <div class="outfit-card">
      <img class="outfit-img" src="${o.img}" alt="outfit" loading="lazy"
           onerror="this.style.background='linear-gradient(135deg,#e8d5f5,#ffd6e0)'; this.src=''">
      <span class="outfit-loc-badge">📍 ${o.loc}</span>
      <div class="outfit-overlay">
        <span class="outfit-vibe-badge">${vibeEmoji(o.vibe)} ${o.vibe}</span>
        <div class="outfit-tags">${o.tags.map(t => '#' + t).join(' ')}</div>
        <div class="outfit-likes">❤️ ${o.likes}</div>
      </div>
    </div>
  `).join('');
}

function vibeEmoji(vibe) {
  const map = { '느좋': '✨', '힐링': '🌿', '로맨틱': '💕', '캐주얼': '👟', '파티': '🎉', '브로': '🎮' };
  return map[vibe] || '✨';
}

// ============================================================
// TOAST
// ============================================================
let toastTimeout;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2200);
}

// ============================================================
// INIT
// ============================================================
initFitmap();
