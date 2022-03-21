// Node
class Node{
    constructor(data){
        this.data = data;
        this.leftchild = null;
        this.rightchild = null;
    }
}
var arr = [3,56,2,8,90,45,30];
var root = null;

function insert(data){
    let newnode = new Node(data);
    if(root==null){
        root = newnode;
    }else{
        let current = root;
        let parent = null;
        while(true){
            parent = current;
            // for left side
            if(data<parent.data){
                current = current.leftchild;
                // insert at left
                if(current == null){
                    parent.leftchild = newnode;
                    return;
                }
            }
            // for right side
            if(data>parent.data){
                current = current.rightchild;
                // insert at right
                if(current == null){
                    parent.rightchild = newnode;
                    return;
                }
            }
        }
    }
}


// create tree
function create(arr,n){
    for(let i =0 ;i<n;i++){
       insert(arr[i]);
    }
    console.log(root);
}

// search element
function search(item){
    let temp = root;
    if(item==temp.data){
        console.log(`${item} is at root node...`);
    }else{
        while(true){
            // check left
            if(item<temp.data){
                temp = temp.leftchild;
                if(temp==null){
                    console.log(`Sorry there's No ${item} is present...`);
                    return;
                }
            }
            if(item>temp.data){
                temp = temp.rightchild;
                if(temp==null){
                    console.log(`Sorry there's No ${item} is present...`);
                    return;
                }
            }
            if(item==temp.data){
                console.log(`${item} is present...`);
                return;
            }
        }
    }
}


create(arr,7);

search(39)


