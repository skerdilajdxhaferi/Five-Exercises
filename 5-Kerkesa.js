class Node{

   constructor(data, left=null, right=null){
       this.data = data;
       this.left = left;
       this.right = right;
   } 
}

class Tree{
    constructor(){
        this.root = null;
    }

    addNode(data){

        let node = this.root;
        if(node === null){
            this.root = new Node(data);
            return;
        }else {
            const searchTree = function(node){
                if(data<node.data){
                if(node.left ===null){
                    node.left = new Node(data);
                    return;
                } else if(node.left !== null){
                    return searchTree(node.left);
                }
            } else if(data > node.data){
                if(node.right === null){
                    node.right = new Node(data);
                    return;
                }else if(node.right !== null){
                return searchTree(node.right);
            }

        } else {
            return null;

        }
    };

    return searchTree(node);


}}


findNode(data){

    let current = this.root;
    while(current.data!== data){
        if(data < current.data){
            current = current.left;
        }else{
            current = current.right;
        }
        if(current === null){
            return null;
        }
    }

    return current;
}



findParent(node , data) {

    if (node == null || node.data === data) {
        return null;
    }
    if ((node.left != null && node.left.data === data) || (node.right != null && node.right.data === data)) {
        return node;
    }
    var l = this.findParent(node.left, data);
    if (l != null) {
        return l;
    }
    l = this.findParent(node.right, data);
    return l; 
};

}


var tree1 = new Tree();


tree1.addNode(8);
tree1.addNode(3);
tree1.addNode(2);
tree1.addNode(10);
tree1.addNode(7);
tree1.addNode(11);
tree1.addNode(6);
tree1.addNode(5);
tree1.addNode(11);
tree1.addNode(12);
tree1.addNode(18);
tree1.addNode(15);
tree1.addNode(20);

               //gjen nje node me vler X
// console.log(tree1.findNode(18))


console.log(" Nyja prind eshte: ")
console.log(tree1.findParent(tree1.findNode(8), 2))

console.log("Vlera e prindit te nyjes me vler 'X' te dhene  eshte: ")

            // funksioni ( Rootnode , Vlera e node qe duam ti gjejm prindin)
console.log(tree1.findParent(tree1.findNode(8), 2).data)