class DonutShop{
    constructor(){
        this.resetGame();
    }

    resetGame(){
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.donutMultiplierCount = 0;
        this.donutsEarned = 1;
        this.clickerIntervalID = undefined;
        this.spoilIntervalID = undefined;
        this.priceForAuto = 100;
        this.priceForMultiply = 10;
    }

    increasePriceForAuto(){
        this.priceForAuto *= 1.1;
        this.priceForAuto = this.priceForAuto.toFixed(2);
    }

    increasePriceForMultiply(){
        this.priceForMultiply *= 1.1;
        this.priceForMultiply = this.priceForMultiply.toFixed(2);
    }

    bakeDonut(){
        this.donutCount += this.donutsEarned;
    }

    spoilDonut(){
        if(this.donutCount >= 100 && this.spoilIntervalID == undefined)
        {
            this.spoilIntervalID = self.setInterval(this.runSpoilDonut, 5000);
        }
        
    }

    addAutoClicker(){
        if(this.donutCount >= this.priceForAuto){
            this.donutCount -= this.priceForAuto;
            this.increasePriceForAuto();
            this.autoClickerCount += 1;
            if(this.clickerIntervalID == undefined){
            this.clickerIntervalID = self.setInterval(this.runAutoClicker, 1000);
        }
           
        }
    }

    runSpoilDonut = () => {
        this.donutCount -= this.donutCount * 0.20;
    }

    runAutoClicker = () => {
        this.donutCount += this.donutsEarned * this.autoClickerCount;
    }

    addDonutMultiplier(){
        if(this.donutCount >= this.priceForMultiply){
            this.donutCount -= this.priceForMultiply;
            this.increasePriceForMultiply();
            this.donutMultiplierCount += 1;
            this.donutsEarned = Math.round(Math.pow(1.2, this.donutMultiplierCount)*100)/100;
        }
    }

    getDonutCount(){
        return this.donutCount.toFixed(2);
    }

    getAutoClickerCount(){
        return this.autoClickerCount;
    }

    getDonutMultiplierCount(){
        return this.donutMultiplierCount;
    }
}




