const validPasswords = ['33'];  // 허용된 비밀번호 목록
const images = {
    1: 'photo1.jpg',  // 첫 번째 사진 경로
    2: 'photo2.jpg'   // 두 번째 사진 경로
};

let enteredPassword = '';
let currentPhoto = 1;

function updatePassword() {
    enteredPassword = document.getElementById('password').value;
}

function checkPassword() {
    updatePassword();
    if (validPasswords.includes(enteredPassword)) {
        document.getElementById('lockscreen').style.display = 'none'; // 비밀번호 입력창 숨김
        document.getElementById('info-screen').style.display = 'block'; // 안내 문구와 버튼 표시
        document.body.style.backgroundImage = "url('drawer_background.jpg')"; // 비밀번호 입력 후 배경이미지
        document.getElementById('password').value = ''; // 비밀번호 입력창 초기화
    } else {
        alert('맞는 열쇠가 아니다.');
    }
}

function showPhoto(photoNumber) {
    currentPhoto = photoNumber;
    const img = document.getElementById('photo');
    img.src = images[photoNumber];
    if (currentPhoto === 1) {
        document.getElementById('prev').style.display = 'none'; // 첫 번째 사진에서는 왼쪽 화살표 버튼 숨김
    } else {
        document.getElementById('prev').style.display = 'block'; // 두 번째 사진 이상에서는 왼쪽 화살표 버튼 표시
    }
    if (currentPhoto === 2) {
        document.getElementById('next').style.display = 'none'; // 두 번째 사진에서는 오른쪽 화살표 버튼 숨김
    } else {
        document.getElementById('next').style.display = 'block'; // 세 번째 사진 이상에서는 오른쪽 화살표 버튼 표시
    }
    document.getElementById('info-screen').style.display = 'none'; // 안내 문구와 버튼 숨김
    document.getElementById('photo-screen').style.display = 'block'; // 슬라이드쇼 화면 표시
}

function prevPhoto() {
    if (currentPhoto > 1) {
        showPhoto(currentPhoto - 1);
    }
}

function nextPhoto() {
    if (currentPhoto < Object.keys(images).length) {
        showPhoto(currentPhoto + 1);
    }
}
