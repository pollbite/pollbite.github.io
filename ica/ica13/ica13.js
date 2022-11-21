const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

var animeGirl1 = alice1.animate(aliceTumbling, aliceTiming).finished;

/*
  // callback version 

  animeGirl1.then( () => {
    let animeGirl2 = alice2.animate(aliceTumbling, aliceTiming).finished;
    animeGirl2.then( () =>{
        animeGirl3 = alice3.animate(aliceTumbling, aliceTiming);
    })
  })
  */
/*
  // promise version 

  animeGirl1.then ( () =>{
    return alice2.animate(aliceTumbling, aliceTiming).finished;
  }).then ( () =>{
    return alice3.animate(aliceTumbling, aliceTiming);
  })
*/

// async version

async function girlTwirl() {
  await animeGirl1;
  let animeGirl2 = alice2.animate(aliceTumbling, aliceTiming).finished;
  await animeGirl2;
  alice3.animate(aliceTumbling, aliceTiming).finished;
}

girlTwirl();
