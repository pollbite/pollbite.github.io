const butterfree = document.getElementById("butterfree");
const tree = document.getElementById("tree");

// jump function, clears the added jump animation class after 300 sec
function jump() {
  if (butterfree.classList != "jump") {
    butterfree.classList.add("jump");

    setTimeout(function () {
      butterfree.classList.remove("jump");
    }, 300);
  }
}

// adds animation for the moving trees to the tree classlist so that it won't animate on launch
function treeJump() {
  if (tree.classList != "tree-jump") {
    tree.classList.add("tree-jump");
  }
}

// game rules, collision detection
let isAlive = setInterval(function () {
  // get current butterfree Y position
  let butterfreeTop = parseInt(
    window.getComputedStyle(butterfree).getPropertyValue("top")
  );

  // get current tree X position
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

// event listeneres, click for start game, keydown for jumps
document.addEventListener("keydown", function (event) {
  jump();
});

document.addEventListener("click", treeJump);
