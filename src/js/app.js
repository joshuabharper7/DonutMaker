/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  const buyDonutBtn = document.getElementsByClassName("donutButton")[0];

  const buyAutoClickBtn = document.getElementsByClassName("buyAutoButton")[0]

  const buyDonutMultiplierBtn = document.getElementsByClassName("buyclickMultiplier")[0]

  const resetGameBtn = document.getElementsByClassName("resetButton")[0]

  const currentDonuts = document.getElementById("donutsMade");

  const currentAutoClickers = document.getElementById("autoClicker");

  const currentDonutMultipliers = document.getElementById("clickMultiplier");

  const currentAutoClickersPrice = document.getElementById("priceForAuto");

  const currentDonutMultipliersPrice = document.getElementById("priceForMultiplier");

  let refreshDonutCountIntervalID = setInterval(updateDonutCount, 500);

  const myDonut = new DonutShop(); 

  buyDonutBtn.addEventListener("click", function(){
    myDonut.bakeDonut();
    myDonut.spoilDonut();
    currentDonuts.innerText ="Donuts: " + myDonut.getDonutCount();
  });

  buyAutoClickBtn.addEventListener("click", function(){
    myDonut.addAutoClicker();
    currentAutoClickers.innerText ="Donut Auto Clickers Owned: " + myDonut.getAutoClickerCount();
    currentAutoClickersPrice.innerText = "Price: " + myDonut.priceForAuto;
    myDonut.startClickerInterval();
  });

  buyDonutMultiplierBtn.addEventListener("click", function(){
    myDonut.addDonutMultiplier();
    currentDonutMultipliers.innerText ="Donuts Per Click: " + myDonut.donutsEarned;
    currentDonutMultipliersPrice.innerText = "Price: " + myDonut.priceForMultiply;
  });

  resetGameBtn.addEventListener("click", function(){
    myDonut.resetGame();
  });


  function updateDonutCount(){
    currentDonuts.innerText ="Donuts: " + myDonut.getDonutCount();
    currentAutoClickers.innerText ="Donut Auto Clickers Owned: " + myDonut.getAutoClickerCount();
    currentAutoClickersPrice.innerText = "Price: " + myDonut.priceForAuto;
    currentDonutMultipliers.innerText ="Donuts Per Click: " + myDonut.donutsEarned;
    currentDonutMultipliersPrice.innerText = "Price: " + myDonut.priceForMultiply;
    checkAutoClickerBtn();
    checkMultiplierClickerBtn();
  }

  function checkAutoClickerBtn(){
    if(myDonut.donutCount >= myDonut.priceForAuto){
      buyAutoClickBtn.disabled = false;
    }else{
      buyAutoClickBtn.disabled = true;
    }
  }

  function checkMultiplierClickerBtn(){
    if(myDonut.donutCount >= myDonut.priceForMultiply){
      buyDonutMultiplierBtn.disabled = false;
    }else{
      buyDonutMultiplierBtn.disabled = true;
    }
  }