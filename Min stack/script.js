class Minstack {
    constructor(){
        this.stack = [];
        this.minstack = [];
    }



    push(elem){
        if(!this.stack.length){
            this.minstack.push(elem)
        }

        else{
            let min = Math.min(elem,this.minstack[this.minstack.length -1]);
            this.minstack.push(elem);
        }

        this.stack.push(elem)
    }


    pop(){
       return this.stack.pop()
       return this.minstack.pop()
    }


    peek(){
        return this.stack[this.stack.length -1];
    }


    getMin(){
        return this.minstack[this.minstack.length -1];
    }


}