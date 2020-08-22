class BranchController{
    constructor(){
        this.teste = 'abc';
    } 
    async getBranches({
        query:{
            id
        }
    }){
        console.log(id)
        return 'branches';
    }
}

module.exports = BranchController;