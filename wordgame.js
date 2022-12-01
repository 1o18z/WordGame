const input = document.querySelector('#input');

function checker() {
  const words = document.querySelectorAll('.word');
  if (words.length === 0) {
    alert('✨Success!✨');
    if(confirm('retry?')) {
      window.location.reload();
    }
  }
}

function removeWord(){
  const word = document.querySelector(`[data-word="${input.value}"]`);
  if (word) {
    word.remove();
    checker();
  }
  input.value='';
}
input.addEventListener('change',removeWord);

// 여기부터 시간
let time = 15000;
let min = "";
let sec = "";

let x = setInterval(function(){
  min = parseInt(time/60);
  sec = time%60;
  document.getElementById("demo").innerHTML = min + "분" + sec + "초";
  time--;
  

  if(time < 5){
    document.getElementById("demo").style.boxShadow = '0 0 20px 10px red';
  }

  
  if(time < 0){
    clearInterval(x);
    alert('Timeout!⌛️');
  }
}, 1000);

// 버튼

function Btn(){
  alert("일시정지🕐");
  
}

function RetryBtn(){
  window.location.reload();
}