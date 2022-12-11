
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
  if (butterfree.classList != "jump") {
    butterfree.classList.add("jump");

    setTimeout(function () {
      butterfree.classList.remove("jump");
    }, 300);
  }
}

function treeJump() {
  if (tree.classList != "tree-jump") {
    tree.classList.add("tree-jump")
  }
}


  let isAlive = setInterval(function () {
    // get current dino Y position
    let butterfreeTop = parseInt(window.getComputedStyle(butterfree).getPropertyValue("top"));
  
    // get current cactus X position
    let treeLeft = parseInt(
      window.getComputedStyle(tree).getPropertyValue("left")
    );
  
    // detect collision
    if (treeLeft < 50 && treeLeft > 0 && butterfreeTop >= 140) {
      // collision
      alert("Game Over!");
      tree.classList.remove("tree-jump");
    }
  }, 10);




document.addEventListener("keydown", function (event) {
  jump();
});

document.addEventListener("click", treeJump);



