function count() {
  const inputDate = "2020년 06월 06일 17시";
  setInterval(() => {
    // const inputDate = document.querySelector("#datepicker").value;
    const splitedDate = inputDate.split(" ");
    const year = splitedDate[0].slice(0, 4);
    const month = splitedDate[1].slice(0, 2);
    const day = splitedDate[2].slice(0, 2);
    const hour = splitedDate[3].slice(0, 2);
    const dDate = new Date(year, month - 1, day, hour);
    // 자바스크립트에서 month는 0부터 시작하기 떄문에 -1을 해줘야 한다.
    const distance = dDate - new Date();

    const d = Math.floor(distance / (1000 * 60 * 60 * 24)); // 각 변수에 일, 시, 분, 초를 등록
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000); // id가 d-day인 HTML코드에 내용 삽입
    document.getElementById(
      "d-day"
    ).innerHTML = `${d}일 ${h}시간 ${m}분 ${s}초`;
    // 선택한 날짜를 출력한다.
    // document.getElementById('datepicker').hidden = true;
  }, 1000);
}

function init() {
  count();
}
init();
