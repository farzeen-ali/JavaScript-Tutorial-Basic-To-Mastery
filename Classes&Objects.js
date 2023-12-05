class Form{
    submit(){
        alert(this.name + ": Form Submitted!! and his id is: " + this.id);
    }
    cancel(){
        alert(this.name + ": Form is not submitted and his id is: " + this.id);
    }
    fillInfo(givenName, id){
        this.name = givenName;
        this.id = id;
    }

}

let farzeen = new Form();
farzeen.fillInfo("Farzeen", 123);
farzeen.submit();
let huzaifa = new Form();
// huzaifa.submit();
huzaifa.fillInfo("Huzaifa" ,456)
huzaifa.cancel();


//Pascal convention
// FarzeenAli ---> class

//camel case convention
// farzeenAli ---> variables , methods