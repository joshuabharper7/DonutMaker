
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
    currentAutoClickersPrice.innerText = "Price: " + myDonut.priceForAuto + " donuts";
    myDonut.startClickerInterval();
  });

  buyDonutMultiplierBtn.addEventListener("click", function(){
    myDonut.addDonutMultiplier();
    currentDonutMultipliers.innerText ="Donuts Per Click: " + myDonut.donutsEarned;
    currentDonutMultipliersPrice.innerText = "Price: " + myDonut.priceForMultiply + " donuts";
  });

  resetGameBtn.addEventListener("click", function(){
    myDonut.resetGame();
  });


  function updateDonutCount(){
    currentDonuts.innerText ="Donuts: " + myDonut.getDonutCount();
    currentAutoClickers.innerText ="Donut Auto Clickers Owned: " + myDonut.getAutoClickerCount();
    currentAutoClickersPrice.innerText = "Price: " + myDonut.priceForAuto + " donuts";
    currentDonutMultipliers.innerText ="Donuts Per Click: " + myDonut.donutsEarned;
    currentDonutMultipliersPrice.innerText = "Price: " + myDonut.priceForMultiply + " donuts";
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